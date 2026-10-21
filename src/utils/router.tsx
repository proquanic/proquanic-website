
import React, { createContext, useContext, useEffect, useState } from "react";

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: "/",
  navigate: () => {},
});

const BASE_PATH = "/proquanic-website";

const getBasePath = () => {
  return window.location.hostname === "proquanic.github.io"
    ? BASE_PATH
    : "";
};

const getRoute = () => {
  if (typeof window === "undefined") return "/";

  const hash = window.location.hash;
  if (hash.startsWith("#/")) return hash.slice(1);

  let path = window.location.pathname;
  const base = getBasePath();

  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || "/";
  }

  if (!path.startsWith("/")) path = `/${path}`;

  return path;
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState<string>(getRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getRoute());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    if (currentPath === path) return;

    const base = getBasePath();
    const destination = `${base}${path.startsWith("/") ? path : `/${path}`}`;

    try {
      window.history.pushState(null, "", destination);
      setCurrentPath(path.startsWith("/") ? path : `/${path}`);
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch {
      window.location.hash = path;
      setCurrentPath(path.startsWith("/") ? path : `/${path}`);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  onClick,
  ...props
}) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (
      e.defaultPrevented ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("//") ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey ||
      (e.currentTarget.target && e.currentTarget.target !== "_self")
    ) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
