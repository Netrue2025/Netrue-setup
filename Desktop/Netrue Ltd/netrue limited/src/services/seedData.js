export const seedAppData = {
  products: [
    {
      id: "product-1",
      title: "Smart Hatch Incubator",
      category: "Agritech",
      description:
        "An IoT-enabled poultry incubation system with automated climate control, alerts, and hatch analytics.",
      specs: ["Remote temperature monitoring", "Humidity automation", "SMS and dashboard alerts"],
      status: "Available",
      image: "",
      createdAt: "2026-01-10T09:00:00.000Z"
    },
    {
      id: "product-2",
      title: "Connected Medication Dispenser",
      category: "IoT",
      description:
        "A programmable dispensing unit built for healthcare and assisted-living workflows with compliance tracking.",
      specs: ["Timed dosage delivery", "Adherence reporting", "Mobile notifications"],
      status: "Pilot",
      image: "",
      createdAt: "2026-01-18T09:00:00.000Z"
    },
    {
      id: "product-3",
      title: "Vision Crop Monitor",
      category: "AI",
      description:
        "Edge AI camera workflows that identify crop stress patterns, pests, and irrigation anomalies in near real time.",
      specs: ["Computer vision insights", "Yield risk alerts", "Cloud-ready telemetry"],
      status: "Prototype",
      image: "",
      createdAt: "2026-02-03T09:00:00.000Z"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "AgriPulse Farm Operations Suite",
      category: "Agritech",
      description:
        "A multi-tenant dashboard for farm managers to track inventory, harvest schedules, and field workers across locations.",
      techStack: ["React", "Node.js", "MongoDB", "IoT telemetry"],
      stage: "Production",
      outcome: "Reduced manual farm reporting cycles by 60% for pilot customers.",
      image: "",
      createdAt: "2026-01-12T09:00:00.000Z"
    },
    {
      id: "project-2",
      title: "Predictive Service Desk",
      category: "AI",
      description:
        "An internal AI assistant that classifies incoming support tickets and recommends actions based on operational history.",
      techStack: ["Python", "LLM orchestration", "React"],
      stage: "Rollout",
      outcome: "Improved first-response time and surfaced reusable incident knowledge.",
      image: "",
      createdAt: "2026-02-14T09:00:00.000Z"
    }
  ],
  software: [
    {
      id: "software-1",
      title: "Netrue Insight Console",
      pricingModel: "Paid",
      price: 299,
      description:
        "A SaaS analytics workspace for AI experiments, sensor diagnostics, and operational KPI reporting.",
      features: ["Role-based dashboards", "Custom chart builder", "CSV export"],
      downloadLink: "",
      purchaseLink: "https://example.com/netrue-insight-console",
      image: "",
      createdAt: "2026-02-05T09:00:00.000Z"
    },
    {
      id: "software-2",
      title: "FieldOps Starter Templates",
      pricingModel: "Free",
      price: 0,
      description:
        "Reusable workflow templates for agritech and IoT product teams launching dashboards and service portals.",
      features: ["Admin templates", "Device provisioning checklist", "Landing page sections"],
      downloadLink: "https://example.com/fieldops-starter",
      purchaseLink: "",
      image: "",
      createdAt: "2026-02-22T09:00:00.000Z"
    }
  ],
  shopItems: [
    {
      id: "shop-1",
      title: "AI Readiness Workshop",
      type: "Course",
      pricingModel: "Paid",
      price: 149,
      description:
        "A practical digital workshop for leadership teams evaluating AI products, governance, and delivery readiness.",
      tags: ["AI strategy", "Leadership", "Workshop"],
      fileAsset: "",
      fileAssetName: "",
      purchaseLink: "https://example.com/ai-readiness-workshop",
      image: "",
      createdAt: "2026-01-28T09:00:00.000Z"
    },
    {
      id: "shop-2",
      title: "IoT Deployment Checklist",
      type: "Tool",
      pricingModel: "Free",
      price: 0,
      description:
        "A launch-ready checklist covering provisioning, testing, security reviews, and field maintenance planning.",
      tags: ["IoT", "Operations", "Freebie"],
      fileAsset: "",
      fileAssetName: "",
      purchaseLink: "",
      image: "",
      createdAt: "2026-03-02T09:00:00.000Z"
    }
  ],
  publications: [
    {
      id: "publication-1",
      title: "Applied AI for Emerging Agricultural Systems",
      description:
        "A research note on computer vision, data collection, and automation opportunities across small-scale farm networks.",
      authors: ["Netrue Research Lab", "Partner Agronomists"],
      publishedOn: "2026-02-01",
      documentUrl: "",
      documentName: "",
      image: "",
      createdAt: "2026-02-01T09:00:00.000Z"
    },
    {
      id: "publication-2",
      title: "Designing Reliable IoT Monitoring for Healthcare Logistics",
      description:
        "A case study on device telemetry, offline resilience, and dashboard design for critical monitoring workflows.",
      authors: ["Systems Architecture Team"],
      publishedOn: "2026-03-07",
      documentUrl: "",
      documentName: "",
      image: "",
      createdAt: "2026-03-07T09:00:00.000Z"
    }
  ],
  blogPosts: [
    {
      id: "blog-1",
      title: "What Scalable AI Teams Need Before Their First Production Model",
      excerpt:
        "Foundational guidance on data quality, governance, feedback loops, and the architecture choices that keep AI useful in the real world.",
      author: "Netrue Editorial",
      publishedAt: "2026-03-12",
      readTime: "5 min read",
      content:
        "Production AI depends on clear business outcomes, observability, feedback collection, and operating models that connect product, engineering, and domain teams.",
      coverImage: "",
      createdAt: "2026-03-12T09:00:00.000Z"
    }
  ],
  teamMembers: [
    {
      id: "team-1",
      name: "Jeremiah Alaba Juba",
      position: "Founder & Lead Systems Architect",
      note:
        "Leads product strategy, systems architecture, and delivery across AI, IoT, and software platforms.",
      image: "",
      socialPlatform: "LinkedIn",
      socialHandle: "jeremiah-alaba-juba",
      socialUrl: "https://www.linkedin.com/in/jeremiah-alaba-juba/",
      createdAt: "2026-03-20T09:00:00.000Z"
    },
    {
      id: "team-2",
      name: "Amara Okafor",
      position: "Head of AI Products",
      note:
        "Shapes intelligent product workflows, data strategy, and operational AI adoption for client teams.",
      image: "",
      socialPlatform: "LinkedIn",
      socialHandle: "amara-okafor-ai",
      socialUrl: "https://www.linkedin.com/",
      createdAt: "2026-03-21T09:00:00.000Z"
    },
    {
      id: "team-3",
      name: "David Mensah",
      position: "IoT & Agritech Engineering Lead",
      note:
        "Designs resilient connected systems for field operations, device telemetry, and smart agricultural workflows.",
      image: "",
      socialPlatform: "LinkedIn",
      socialHandle: "david-mensah-iot",
      socialUrl: "https://www.linkedin.com/",
      createdAt: "2026-03-22T09:00:00.000Z"
    }
  ]
};
