import { useCallback, useEffect, useState } from "react";

export type Route =
  | "/"
  | "/services"
  | "/services/end-of-lease-cleaning"
  | "/services/carpet-cleaning"
  | "/services/oven-cleaning"
  | "/services/window-cleaning"
  | "/services/bathroom-cleaning"
  | "/services/kitchen-cleaning"
  | "/about"
  | "/contact";

function getRoute(): Route {
  const hash = window.location.hash.replace("#", "") || "/";
  return hash as Route;
}

export function useHashRouter() {
  const [currentRoute, setCurrentRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = useCallback((route: Route) => {
    window.location.hash = route;
  }, []);

  return { currentRoute, navigate };
}
