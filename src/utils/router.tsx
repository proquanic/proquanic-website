
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

const normalizeRoutePath = (rawPath: string): string => {
  const withoutHash = (rawPath || "/").split("#")[0];
  const withoutQuery = withoutHash.split("?")[0];
  let clean = withoutQuery.trim() || "/";
  if (!clean.startsWith("/")) clean = `/${clean}`;
  if (clean.length > 1) {
    clean = clean.replace(/\/+$/, "") || "/";
  }
  return clean;
};

const getRoute = () => {
  if (typeof window === "undefined") return "/";

  const hash = window.location.hash;
  if (hash.startsWith("#/")) {
    return normalizeRoutePath(hash.slice(1));
  }

  let path = window.location.pathname;
  const base = getBasePath();

  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || "/";
  }

  return normalizeRoutePath(path);
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
    const rawTarget = path.startsWith("/") ? path : `/${path}`;
    const normalizedTarget = normalizeRoutePath(rawTarget);
    const hashPart = rawTarget.includes("#") ? rawTarget.slice(rawTarget.indexOf("#")) : "";
    const base = getBasePath();
    const destination = `${base}${rawTarget}`;
    const currentBrowserTarget = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (currentBrowserTarget === destination && currentPath === normalizedTarget && !hashPart) {
      return;
    }

    try {
      window.history.pushState(null, "", destination);
      setCurrentPath(normalizedTarget);
      if (hashPart && hashPart.length > 1) {
        window.setTimeout(() => {
          const el = document.getElementById(hashPart.slice(1));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "instant" });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    } catch {
      window.location.hash = rawTarget;
      setCurrentPath(normalizedTarget);
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
