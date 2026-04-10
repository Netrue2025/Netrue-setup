import Button from "../components/Button";
import Meta from "../components/Meta";

function NotFoundPage() {
  return (
    <>
      <Meta description="The page you are looking for could not be found." title="Not Found" />
      <section className="page-section">
        <div className="shell-container">
          <div className="surface-card px-6 py-16 text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-6 font-display text-4xl font-semibold text-slate-950">Page not found</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
              The route you opened doesn't exist in the current site map. Head back to the homepage or explore the main sections.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/" variant="primary">
                Home
              </Button>
              <Button to="/solutions" variant="outline">
                View solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
