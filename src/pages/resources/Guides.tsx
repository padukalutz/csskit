import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../components/tools/ToolPageLayout";

const guides = [
  {
    number: "01",
    title: "CSS Box Shadow Guide",
    description:
      "Learn how CSS box-shadow works and how to create subtle, layered, and realistic shadows.",
    path: "/resources/guides/box-shadow",
  },
  {
    number: "02",
    title: "CSS Gradients Guide",
    description:
      "Understand linear and radial gradients and learn how to create modern gradient effects.",
    path: "/resources/guides/gradients",
  },
  {
    number: "03",
    title: "CSS Flexbox Guide",
    description:
      "A practical introduction to Flexbox alignment, direction, sizing, and common layouts.",
    path: "/resources/guides/flexbox",
  },
  {
    number: "04",
    title: "CSS Grid Guide",
    description:
      "Learn the fundamentals of CSS Grid and how to build flexible two-dimensional layouts.",
    path: "/resources/guides/grid",
  },
  {
    number: "05",
    title: "CSS Border Radius Guide",
    description:
      "Learn how border-radius works and how to create rounded cards, pills, circles, and custom shapes.",
    path: "/resources/guides/border-radius",
  },
  {
    number: "06",
    title: "CSS Transform Guide",
    description:
      "Explore translate, rotate, scale, and skew to create interactive CSS transformations.",
    path: "/resources/guides/transform",
  },
  {
    number: "07",
    title: "CSS Filter Guide",
    description:
      "Understand blur, brightness, contrast, grayscale, and other CSS filter functions.",
    path: "/resources/guides/filter",
  },
  {
    number: "08",
    title: "CSS Typography Guide",
    description:
      "Improve your typography with practical guidance on fonts, sizing, spacing, and readability.",
    path: "/resources/guides/typography",
  },
  {
    number: "09",
    title: "CSS Animation Guide",
    description:
      "Learn the basics of keyframes, animation timing, duration, delay, and iteration.",
    path: "/resources/guides/animation",
  },
];

export default function Guides() {
  useEffect(() => {
    const title = "CSS Guides — CSSKit";

    const description =
      "Practical CSS guides covering box shadows, gradients, Flexbox, Grid, transforms, filters, typography, border radius, and animations.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides`;

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

    const schemaId = "csskit-guides-schema";

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
        itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: `${window.location.origin}${guide.path}`,
        })),
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="resources-page">
      <section className="resources-hero">
        <span className="section-kicker">
          CSS GUIDES
        </span>

        <h1>
          Learn CSS.
          <br />
          One concept at a time.
        </h1>

        <p>
          Practical guides designed to help
          you understand CSS concepts and
          use them confidently in real
          projects.
        </p>
      </section>

      <section
        className="resources-grid guides-grid"
        aria-label="CSS guides"
      >
        {guides.map((guide) => (
          <Link
            key={guide.path}
            to={guide.path}
            className="resource-card"
          >
            <span className="resource-number">
              {guide.number}
            </span>

            <div className="resource-card-content">
              <h2>{guide.title}</h2>

              <p>
                {guide.description}
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