import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../components/tools/ToolPageLayout";

const resources = [
  {
    number: "01",
    title: "CSS Guides",
    description:
      "Practical CSS guides that explain modern techniques in a clear and useful way.",
    path: "/resources/guides",
  },
  {
    number: "02",
    title: "CSS References",
    description:
      "Quick references for CSS properties, values, units, selectors, and common patterns.",
    path: "/resources/references",
  },
  {
    number: "03",
    title: "CSS Snippets",
    description:
      "Ready-to-use CSS snippets for common UI patterns and everyday frontend work.",
    path: "/resources/snippets",
  },
  {
    number: "04",
    title: "Inspiration",
    description:
      "Explore CSS effects, interface ideas, and visual techniques for your next project.",
    path: "/resources/inspiration",
  },
];

export default function Resources() {
  useEffect(() => {
    const title =
      "CSS Resources for Developers — CSSKit";

    const description =
      "Explore practical CSS guides, references, snippets, and inspiration for modern web development and frontend design.";

    const canonicalUrl =
      `${window.location.origin}/resources`;

    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let meta =
        document.querySelector<HTMLMetaElement>(
          `meta[${attribute}="${key}"]`
        );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(
          attribute,
          key
        );
        document.head.appendChild(meta);
      }

      meta.setAttribute(
        "content",
        content
      );
    };

    const setCanonical = (
      href: string
    ) => {
      let canonical =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]'
        );

      if (!canonical) {
        canonical =
          document.createElement("link");

        canonical.rel = "canonical";

        document.head.appendChild(
          canonical
        );
      }

      canonical.href = href;
    };

    setMeta(
      "name",
      "description",
      description
    );

    setMeta(
      "name",
      "robots",
      "index, follow"
    );

    setMeta(
      "property",
      "og:type",
      "website"
    );

    setMeta(
      "property",
      "og:site_name",
      "CSSKit"
    );

    setMeta(
      "property",
      "og:title",
      title
    );

    setMeta(
      "property",
      "og:description",
      description
    );

    setMeta(
      "property",
      "og:url",
      canonicalUrl
    );

    setMeta(
      "name",
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "name",
      "twitter:title",
      title
    );

    setMeta(
      "name",
      "twitter:description",
      description
    );

    setCanonical(canonicalUrl);

    const schemaId =
      "csskit-resources-schema";

    let schemaScript =
      document.getElementById(
        schemaId
      ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript =
        document.createElement("script");

      schemaScript.id = schemaId;

      schemaScript.type =
        "application/ld+json";

      document.head.appendChild(
        schemaScript
      );
    }

    schemaScript.textContent =
      JSON.stringify({
        "@context":
          "https://schema.org",
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
          itemListElement:
            resources.map(
              (resource, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: resource.title,
                url:
                  `${window.location.origin}${resource.path}`,
              })
            ),
        },
      });

    return () => {
      document
        .getElementById(schemaId)
        ?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="resources-page">
      <section className="resources-hero">
        <span className="section-kicker">
          RESOURCES
        </span>

        <h1>
          Learn CSS.
          <br />
          Build better interfaces.
        </h1>

        <p>
          Practical guides, references,
          snippets, and inspiration to help
          you write better CSS and build
          modern web interfaces.
        </p>
      </section>

      <section
        className="resources-grid"
        aria-label="CSS resources"
      >
        {resources.map((resource) => (
          <Link
            key={resource.path}
            to={resource.path}
            className="resource-card"
          >
            <span className="resource-number">
              {resource.number}
            </span>

            <div className="resource-card-content">
              <h2>{resource.title}</h2>

              <p>
                {resource.description}
              </p>
            </div>

            <span
              className="resource-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </section>
    </ToolPageLayout>
  );
}