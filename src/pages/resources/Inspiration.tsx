import { useEffect } from "react";
import { Link } from "react-router-dom";

const inspirations = [
  {
    number: "01",
    title: "Minimal Interfaces",
    description:
      "Explore clean layouts, generous spacing, simple typography, and focused visual hierarchy.",
    path: "/resources/inspiration/minimal-interfaces",
  },
  {
    number: "02",
    title: "Modern Cards",
    description:
      "Ideas for building cards with borders, shadows, gradients, and subtle interactions.",
    path: "/resources/inspiration/modern-cards",
  },
  {
    number: "03",
    title: "Hero Sections",
    description:
      "Inspiration for creating strong landing-page hero sections with clear visual hierarchy.",
    path: "/resources/inspiration/hero-sections",
  },
  {
    number: "04",
    title: "Navigation",
    description:
      "Patterns for clean, responsive navigation bars that work well across different screen sizes.",
    path: "/resources/inspiration/navigation",
  },
  {
    number: "05",
    title: "Buttons",
    description:
      "Different visual approaches for primary, secondary, outlined, and minimal buttons.",
    path: "/resources/inspiration/buttons",
  },
  {
    number: "06",
    title: "Forms",
    description:
      "Simple form layouts with clear labels, useful spacing, and accessible interaction states.",
    path: "/resources/inspiration/forms",
  },
  {
    number: "07",
    title: "CSS Effects",
    description:
      "Visual ideas using gradients, shadows, blur, transforms, filters, and animations.",
    path: "/resources/inspiration/css-effects",
  },
  {
    number: "08",
    title: "Responsive Layouts",
    description:
      "Layout patterns that adapt naturally between desktop, tablet, and mobile screens.",
    path: "/resources/inspiration/responsive-layouts",
  },
];

export default function Inspiration() {
  useEffect(() => {
    const title = "CSS & UI Inspiration — Modern Interface Ideas — CSSKit";

    const description =
      "Explore practical CSS and UI inspiration for modern websites, including layouts, cards, hero sections, navigation, buttons, forms, effects, and responsive interfaces.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration`;

    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let meta = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    const setCanonical = (href: string) => {
      let canonical = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }

      canonical.href = href;
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "CSSKit");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    setCanonical(canonicalUrl);

    const schemaId = "csskit-inspiration-schema";

    let schemaScript = document.getElementById(
      schemaId
    ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "CSSKit",
        url: window.location.origin,
      },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: inspirations.length,
        itemListElement: inspirations.map((inspiration, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: inspiration.title,
          description: inspiration.description,
          url: `${window.location.origin}${inspiration.path}`,
        })),
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <main className="tool-page resources-page">
      <div className="container">
        <section className="resources-hero">
          <span className="section-kicker">INSPIRATION</span>

          <h1>
            Better interfaces.
            <br />
            Start with good ideas.
          </h1>

          <p>
            Practical UI inspiration for modern websites and interfaces.
            Explore patterns you can adapt to your own projects.
          </p>
        </section>

        <section
          className="resources-grid"
          aria-label="CSS inspiration"
        >
          {inspirations.map((inspiration) => (
            <Link
              to={inspiration.path}
              className="resource-card"
              key={inspiration.number}
            >
              <span className="resource-number">
                {inspiration.number}
              </span>

              <div className="resource-card-content">
                <h2>{inspiration.title}</h2>

                <p>{inspiration.description}</p>

                <span
                  className="resource-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}