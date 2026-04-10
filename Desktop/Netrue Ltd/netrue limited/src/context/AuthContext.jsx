import { createContext, useContext, useEffect, useState } from "react";
import { clearAuthSession, loadAuthSession, saveAuthSession } from "../services/storage";

const AuthContext = createContext(null);

const ADMIN_CREDENTIALS = {
  email: "admin@netrue.dev",
  password: "NetrueAdmin2026!"
};

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => loadAuthSession());

  useEffect(() => {
    if (session?.isAuthenticated) {
      saveAuthSession(session);
    }
  }, [session]);

  function login(email, password) {
    const normalizedEmail = email.trim().toLowerCase();

    if (normalizedEmail === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const nextSession = {
        isAuthenticated: true,
        user: {
          name: "Netrue Admin",
          email: ADMIN_CREDENTIALS.email,
          role: "Administrator"
        }
      };

      setSession(nextSession);
      saveAuthSession(nextSession);
      return { success: true };
    }

    return { success: false, message: "Invalid admin credentials." };
  }

  function logout() {
    setSession({ isAuthenticated: false, user: null });
    clearAuthSession();
  }

  return (
    <AuthContext.Provider
      value={{
        ...session,
        login,
        logout,
        adminCredentials: ADMIN_CREDENTIALS
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
