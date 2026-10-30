import { docsRoutes } from "@docs/router/routes";
import { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { ScrollToTop } from "@/shared/ScrollToTop";
import { AppLoaderInContainer } from "@/components";

function RouteFallback() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <div className="fixed inset-0 z-[200] bg-page" aria-hidden />;
  }

  return <AppLoaderInContainer />;
}

export function App() {
  const element = useRoutes(docsRoutes);

  return (
    <Suspense fallback={<RouteFallback />}>
      <ScrollToTop />
      {element}
    </Suspense>
  );
}
