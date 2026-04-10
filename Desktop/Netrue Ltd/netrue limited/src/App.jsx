import { AuthProvider } from "./context/AuthContext";
import { ContentProvider } from "./context/ContentContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <AppRoutes />
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;
