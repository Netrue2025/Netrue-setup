import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import AdminLayout from "../admin/components/AdminLayout";
import ProtectedRoute from "../admin/components/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const SolutionsPage = lazy(() => import("../pages/SolutionsPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const PublicationsPage = lazy(() => import("../pages/PublicationsPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("../pages/PrivacyPolicyPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const AdminLoginPage = lazy(() => import("../admin/pages/AdminLoginPage"));
const AdminDashboardPage = lazy(() => import("../admin/pages/AdminDashboardPage"));
const AdminProductsPage = lazy(() => import("../admin/pages/AdminProductsPage"));
const AdminProjectsPage = lazy(() => import("../admin/pages/AdminProjectsPage"));
const AdminSoftwarePage = lazy(() => import("../admin/pages/AdminSoftwarePage"));
const AdminShopPage = lazy(() => import("../admin/pages/AdminShopPage"));
const AdminPublicationsPage = lazy(() => import("../admin/pages/AdminPublicationsPage"));
const AdminBlogPage = lazy(() => import("../admin/pages/AdminBlogPage"));
const AdminTeamPage = lazy(() => import("../admin/pages/AdminTeamPage"));

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="shell-container py-12">
          <LoadingState label="Loading page..." />
        </div>
      }
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<SolutionsPage />} path="/solutions" />
          <Route element={<ProductsPage />} path="/products" />
          <Route element={<ShopPage />} path="/shop" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<PublicationsPage />} path="/publications" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<PrivacyPolicyPage />} path="/privacy-policy" />
        </Route>

        <Route element={<AdminLoginPage />} path="/admin/login" />
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
          path="/admin"
        >
          <Route element={<Navigate replace to="/admin/dashboard" />} index />
          <Route element={<AdminDashboardPage />} path="dashboard" />
          <Route element={<AdminProductsPage />} path="products" />
          <Route element={<AdminProjectsPage />} path="projects" />
          <Route element={<AdminSoftwarePage />} path="software" />
          <Route element={<AdminShopPage />} path="shop" />
          <Route element={<AdminPublicationsPage />} path="publications" />
          <Route element={<AdminBlogPage />} path="blog" />
          <Route element={<AdminTeamPage />} path="team" />
        </Route>

        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
