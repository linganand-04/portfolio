import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-5 text-center">
      <span className="font-mono text-sm text-accent">404</span>
      <h1 className="font-display text-3xl font-bold text-text sm:text-4xl">
        <span className="text-gradient">Page Not Found.</span>
      </h1>
      <p className="max-w-md text-text-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white"
      >
        <HomeIcon size={16} /> Back home
      </Link>
    </div>
  );
}
