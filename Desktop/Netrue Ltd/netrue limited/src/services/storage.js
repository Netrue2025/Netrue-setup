import { seedAppData } from "./seedData";

const APP_STORAGE_KEY = "netrue-app-data-v1";
const AUTH_STORAGE_KEY = "netrue-admin-session-v1";

const collectionKeys = ["products", "projects", "software", "shopItems", "publications", "blogPosts", "teamMembers"];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeWithSeed(storedValue) {
  if (!storedValue || typeof storedValue !== "object") {
    return clone(seedAppData);
  }

  const merged = clone(seedAppData);
  collectionKeys.forEach((key) => {
    if (Array.isArray(storedValue[key])) {
      merged[key] = storedValue[key];
    }
  });

  return merged;
}

export function loadAppData() {
  if (typeof window === "undefined") {
    return clone(seedAppData);
  }

  try {
    const raw = window.localStorage.getItem(APP_STORAGE_KEY);
    if (!raw) {
      return clone(seedAppData);
    }

    return mergeWithSeed(JSON.parse(raw));
  } catch {
    return clone(seedAppData);
  }
}

export function saveAppData(data) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data));
  }
}

export function loadAuthSession() {
  if (typeof window === "undefined") {
    return { isAuthenticated: false, user: null };
  }

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) {
      return { isAuthenticated: false, user: null };
    }

    return JSON.parse(raw);
  } catch {
    return { isAuthenticated: false, user: null };
  }
}

export function saveAuthSession(session) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  }
}

export function clearAuthSession() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function createRecordId(prefix) {
  const suffix =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID().slice(0, 8)
      : `${Date.now()}`;

  return `${prefix}-${suffix}`;
}
