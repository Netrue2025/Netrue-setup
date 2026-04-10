import { LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Meta from "../../components/Meta";
import { useAuth } from "../../context/AuthContext";

function AdminLoginPage() {
  const { adminCredentials, isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(adminCredentials.email);
  const [password, setPassword] = useState(adminCredentials.password);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate replace to="/admin/dashboard" />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(location.state?.from || "/admin/dashboard", { replace: true });
  }

  return (
    <>
      <Meta description="Secure admin login for the Netrue Limited content management dashboard." title="Admin Login" />

      <div className="grid min-h-screen place-items-center bg-slate-950 px-4 py-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[1fr_520px]">
          <div className="hidden bg-brand-green p-10 text-white lg:block">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Netrue CMS</p>
            <h1 className="mt-6 font-display text-5xl font-semibold">Secure content operations for the whole website.</h1>
            <p className="mt-6 text-base leading-8 text-white/80">
              Log in to manage products, projects, software listings, shop items, publications, and editorial content from one place.
            </p>
          </div>

          <div className="p-8 sm:p-10">
            <div className="inline-flex rounded-2xl bg-brand-green/10 p-3 text-brand-green">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold text-slate-950">Admin login</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Mock authentication is enabled for now, with route protection already wired for future backend integration.
            </p>

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-green"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  value={email}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Password
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-green"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  value={password}
                />
              </label>

              {error ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-600">{error}</p> : null}

              <Button className="w-full" type="submit" variant="primary">
                <ShieldCheck className="h-4 w-4" />
                Sign in to dashboard
              </Button>
            </form>

            <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-4 text-sm text-slate-600">
              Demo credentials: <span className="font-semibold">{adminCredentials.email}</span> /{" "}
              <span className="font-semibold">{adminCredentials.password}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLoginPage;
