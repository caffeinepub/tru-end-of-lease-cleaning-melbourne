import { useEffect } from "react";

interface MetaTagsOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export function useMetaTags({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
}: MetaTagsOptions) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create meta tags
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const parts = selector.match(/\[(\w+)="([^"]+)"\]/);
        if (parts) {
          el.setAttribute(parts[1], parts[2]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(
        `link[rel="${rel}"]`,
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", ogTitle ?? title);
    setMeta(
      'meta[property="og:description"]',
      "content",
      ogDescription ?? description,
    );
    setMeta('meta[name="robots"]', "content", "index, follow");
    setMeta('meta[property="og:type"]', "content", "website");

    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
      setMeta('meta[name="twitter:image"]', "content", ogImage);
    } else {
      setMeta('meta[name="twitter:card"]', "content", "summary");
    }

    setMeta('meta[name="twitter:title"]', "content", ogTitle ?? title);
    setMeta(
      'meta[name="twitter:description"]',
      "content",
      ogDescription ?? description,
    );

    if (canonical) {
      setLink("canonical", canonical);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, canonical]);
}
