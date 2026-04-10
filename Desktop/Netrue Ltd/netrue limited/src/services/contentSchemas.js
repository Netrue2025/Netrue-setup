export const collectionSchemas = {
  products: {
    title: "IoT Product Management",
    description: "Manage connected devices, agritech hardware, AI-enabled equipment, and their technical specifications.",
    addLabel: "Add product",
    emptyTitle: "No products yet",
    emptyDescription: "Add your first device or solution and it will appear across the public experience.",
    columns: [
      { key: "title", label: "Product" },
      { key: "category", label: "Category" },
      { key: "status", label: "Status" },
      { key: "specs", label: "Specs", render: (item) => `${item.specs?.length || 0} bullet points` }
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true, placeholder: "Smart Hatch Incubator" },
      { name: "category", label: "Category", type: "select", required: true, options: ["Agritech", "IoT", "AI", "Software"] },
      { name: "status", label: "Status", type: "select", required: true, options: ["Prototype", "Pilot", "Available", "Pre-order"] },
      { name: "description", label: "Description", type: "textarea", required: true, rows: 4 },
      { name: "specs", label: "Specifications", type: "list", rows: 4, placeholder: "One spec per line" },
      { name: "image", label: "Product image", type: "file", accept: "image/*" }
    ]
  },
  projects: {
    title: "Project Management",
    description: "Capture delivery work, solution pilots, and internal innovation programs across your portfolio.",
    addLabel: "Add project",
    emptyTitle: "No projects yet",
    emptyDescription: "Projects added here can be featured on landing pages and sales conversations.",
    columns: [
      { key: "title", label: "Project" },
      { key: "category", label: "Category" },
      { key: "stage", label: "Stage" },
      { key: "techStack", label: "Tech stack", render: (item) => `${item.techStack?.length || 0} technologies` }
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "category", label: "Category", type: "select", required: true, options: ["AI", "IoT", "Agritech", "Software"] },
      { name: "stage", label: "Stage", type: "select", required: true, options: ["Discovery", "Pilot", "Rollout", "Production"] },
      { name: "description", label: "Description", type: "textarea", required: true, rows: 4 },
      { name: "outcome", label: "Outcome", type: "textarea", rows: 3 },
      { name: "techStack", label: "Tech stack", type: "list", rows: 4, placeholder: "One technology per line" },
      { name: "image", label: "Project image", type: "file", accept: "image/*" }
    ]
  },
  software: {
    title: "Software Listings",
    description: "Manage SaaS offerings, downloadable tools, and solution bundles with pricing and action links.",
    addLabel: "Add software",
    emptyTitle: "No software listings yet",
    emptyDescription: "Create software offers that can be promoted in the shop and on the home page.",
    columns: [
      { key: "title", label: "Software" },
      { key: "pricingModel", label: "Pricing" },
      { key: "price", label: "Price", render: (item) => (item.pricingModel === "Paid" ? `$${Number(item.price || 0).toFixed(0)}` : "Free") },
      { key: "features", label: "Features", render: (item) => `${item.features?.length || 0} listed` }
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "pricingModel", label: "Pricing", type: "select", required: true, options: ["Free", "Paid"] },
      { name: "price", label: "Price", type: "number", min: 0, showWhen: { field: "pricingModel", equals: "Paid" } },
      { name: "description", label: "Description", type: "textarea", required: true, rows: 4 },
      { name: "features", label: "Features", type: "list", rows: 4 },
      { name: "downloadLink", label: "Download link", type: "url" },
      { name: "purchaseLink", label: "Purchase link", type: "url" },
      { name: "image", label: "Cover image", type: "file", accept: "image/*" }
    ]
  },
  shopItems: {
    title: "Shop Management",
    description: "Publish digital products, templates, workshops, and downloadable assets with free or paid pricing.",
    addLabel: "Add shop item",
    emptyTitle: "No shop items yet",
    emptyDescription: "Add your first digital product to activate the shop catalog.",
    columns: [
      { key: "title", label: "Item" },
      { key: "type", label: "Type" },
      { key: "pricingModel", label: "Pricing" },
      { key: "tags", label: "Tags", render: (item) => `${item.tags?.length || 0} tags` }
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "type", label: "Type", type: "select", required: true, options: ["Course", "Tool", "Template", "Guide"] },
      { name: "pricingModel", label: "Pricing", type: "select", required: true, options: ["Free", "Paid"] },
      { name: "price", label: "Price", type: "number", min: 0, showWhen: { field: "pricingModel", equals: "Paid" } },
      { name: "description", label: "Description", type: "textarea", required: true, rows: 4 },
      { name: "tags", label: "Tags", type: "list", rows: 3, placeholder: "One tag per line" },
      { name: "fileAsset", label: "Digital file", type: "file", accept: ".pdf,.zip,.doc,.docx,.ppt,.pptx,.xlsx,.csv,image/*", fileNameField: "fileAssetName" },
      { name: "purchaseLink", label: "Purchase link", type: "url" },
      { name: "image", label: "Cover image", type: "file", accept: "image/*" }
    ]
  },
  publications: {
    title: "Publications Manager",
    description: "Upload research papers, case studies, and white papers with metadata and downloadable assets.",
    addLabel: "Add publication",
    emptyTitle: "No publications yet",
    emptyDescription: "Research and case-study content added here will appear instantly on the publications page.",
    columns: [
      { key: "title", label: "Publication" },
      { key: "authors", label: "Authors", render: (item) => `${item.authors?.length || 0} authors` },
      { key: "publishedOn", label: "Published" },
      { key: "documentUrl", label: "PDF", render: (item) => (item.documentUrl ? "Attached" : "Pending") }
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true, rows: 4 },
      { name: "authors", label: "Authors", type: "list", rows: 3, placeholder: "One author per line" },
      { name: "publishedOn", label: "Published date", type: "date" },
      { name: "documentUrl", label: "PDF upload", type: "file", accept: "application/pdf", fileNameField: "documentName" },
      { name: "image", label: "Cover image", type: "file", accept: "image/*" }
    ]
  },
  blogPosts: {
    title: "Blog Management",
    description: "Publish in-house editorial content and optionally sync public inspiration from WordPress.",
    addLabel: "Add article",
    emptyTitle: "No internal blog posts yet",
    emptyDescription: "Internal articles will appear alongside the WordPress feed on the public blog.",
    columns: [
      { key: "title", label: "Article" },
      { key: "author", label: "Author" },
      { key: "publishedAt", label: "Published" },
      { key: "readTime", label: "Read time" }
    ],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "author", label: "Author", type: "text", required: true },
      { name: "publishedAt", label: "Published date", type: "date" },
      { name: "readTime", label: "Read time", type: "text", placeholder: "5 min read" },
      { name: "excerpt", label: "Excerpt", type: "textarea", required: true, rows: 3 },
      { name: "content", label: "Body copy", type: "textarea", rows: 6 },
      { name: "coverImage", label: "Cover image", type: "file", accept: "image/*" }
    ]
  },
  teamMembers: {
    title: "Team Members",
    description: "Manage the people featured on the About page, including profile details, notes, photos, and social links.",
    addLabel: "Add team member",
    emptyTitle: "No team members yet",
    emptyDescription: "Add your first profile and the Meet Our Team section will update automatically.",
    columns: [
      { key: "name", label: "Name" },
      { key: "position", label: "Position" },
      { key: "socialPlatform", label: "Platform" },
      { key: "socialHandle", label: "Handle" }
    ],
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, placeholder: "Jeremiah Alaba Juba" },
      { name: "position", label: "Position", type: "text", required: true, placeholder: "Founder & Lead Systems Architect" },
      { name: "note", label: "Short note", type: "textarea", required: true, rows: 4, placeholder: "A short intro about this team member." },
      { name: "image", label: "Profile image", type: "file", accept: "image/*" },
      { name: "socialPlatform", label: "Social platform", type: "select", required: true, options: ["LinkedIn", "X", "Instagram", "Facebook", "Website"] },
      { name: "socialHandle", label: "Social handle", type: "text", required: true, placeholder: "jeremiah-alaba-juba" },
      { name: "socialUrl", label: "Social profile URL", type: "url", required: true, placeholder: "https://www.linkedin.com/in/your-handle/" }
    ]
  }
};
