import { createContext, useContext, useEffect, useState } from "react";
import { createRecordId, loadAppData, saveAppData } from "../services/storage";

const ContentContext = createContext(null);

function calculateRevenue(items) {
  return items.reduce((sum, item) => {
    if (item.pricingModel === "Paid") {
      return sum + Number(item.price || 0);
    }

    return sum;
  }, 0);
}

export function ContentProvider({ children }) {
  const [appData, setAppData] = useState(() => loadAppData());

  useEffect(() => {
    saveAppData(appData);
  }, [appData]);

  function createRecord(collection, payload) {
    setAppData((current) => ({
      ...current,
      [collection]: [
        {
          ...payload,
          id: createRecordId(collection),
          createdAt: new Date().toISOString()
        },
        ...current[collection]
      ]
    }));
  }

  function updateRecord(collection, id, payload) {
    setAppData((current) => ({
      ...current,
      [collection]: current[collection].map((item) => (item.id === id ? { ...item, ...payload } : item))
    }));
  }

  function deleteRecord(collection, id) {
    setAppData((current) => ({
      ...current,
      [collection]: current[collection].filter((item) => item.id !== id)
    }));
  }

  const dashboardStats = {
    totalProducts: appData.products.length,
    totalProjects: appData.projects.length,
    totalBlogPosts: appData.blogPosts.length,
    totalPublications: appData.publications.length,
    totalSoftware: appData.software.length,
    totalShopItems: appData.shopItems.length,
    totalTeamMembers: appData.teamMembers.length,
    revenueSummary: calculateRevenue([...appData.software, ...appData.shopItems])
  };

  return (
    <ContentContext.Provider
      value={{
        ...appData,
        dashboardStats,
        createRecord,
        updateRecord,
        deleteRecord
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContent must be used within ContentProvider");
  }

  return context;
}
