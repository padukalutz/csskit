import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function BorderRadiusGuide() {
  useEffect(() => {
    const title = "CSS Border Radius Guide — CSSKit";

    const description =
      "Learn how CSS border-radius works, including corner values, circles, pills, elliptical corners, custom shapes, images, and practical CSS examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/border-radius`;

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

    setMeta("property", "og:type", "article");
    setMeta("property", "og:site_name", "CSSKit");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    setCanonical(canonicalUrl);

    const schemaId = "csskit-border-radius-guide-schema";

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
      "@type": "Article",
      headline: title,
      description,
      url: canonicalUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "CSSKit",
        url: window.location.origin,
      },
      about: {
        "@type": "Thing",
        name: "CSS border-radius",
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="resource-article-page">
      <article className="resource-article">
        <header className="resource-article-header">
          <Link to="/resources/guides" className="article-back">
            ← Back to CSS Guides
          </Link>

          <span className="section-kicker">CSS GUIDE</span>

          <h1>CSS Border Radius Guide</h1>

          <p className="article-intro">
            Learn how CSS border-radius works and how to create rounded
            corners, circles, pills, and custom shapes with CSS.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is Border Radius?</h2>

            <p>
              The <code>border-radius</code> property controls how rounded
              the corners of an element are.
            </p>

            <p>
              It can be used on cards, buttons, images, inputs, containers,
              avatars, and many other interface elements.
            </p>
          </section>

          <section>
            <h2>Basic Border Radius</h2>

            <p>
              The simplest way to create rounded corners is to provide a
              single value.
            </p>

            <pre>
              <code>{`.card {
  border-radius: 16px;
}`}</code>
            </pre>

            <p>
              The value is applied to all four corners.
            </p>
          </section>

          <section>
            <h2>Different Radius for Each Corner</h2>

            <p>
              You can provide four values to control each corner
              individually.
            </p>

            <pre>
              <code>{`.card {
  border-radius: 8px 16px 24px 32px;
}`}</code>
            </pre>

            <p>
              The values follow this order:
            </p>

            <div className="article-list">
              <div>
                <strong>1st value</strong>
                <p>Top-left corner.</p>
              </div>

              <div>
                <strong>2nd value</strong>
                <p>Top-right corner.</p>
              </div>

              <div>
                <strong>3rd value</strong>
                <p>Bottom-right corner.</p>
              </div>

              <div>
                <strong>4th value</strong>
                <p>Bottom-left corner.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Two-Value Syntax</h2>

            <p>
              Two values can be used to control opposite corners.
            </p>

            <pre>
              <code>{`.card {
  border-radius: 16px 32px;
}`}</code>
            </pre>

            <p>
              The first value applies to the top-left and bottom-right
              corners. The second applies to the top-right and bottom-left
              corners.
            </p>
          </section>

          <section>
            <h2>Creating a Circle</h2>

            <p>
              Setting the radius to <code>50%</code> can create a circle
              when the element has equal width and height.
            </p>

            <pre>
              <code>{`.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Creating Pill Shapes</h2>

            <p>
              Large radius values are commonly used to create pill-shaped
              buttons and badges.
            </p>

            <pre>
              <code>{`.button {
  border-radius: 999px;
}`}</code>
            </pre>

            <p>
              The exact value does not need to match the element height.
              A sufficiently large value will produce fully rounded ends.
            </p>
          </section>

          <section>
            <h2>Elliptical Corners</h2>

            <p>
              CSS also supports different horizontal and vertical radii
              using the slash syntax.
            </p>

            <pre>
              <code>{`.shape {
  border-radius: 40px / 20px;
}`}</code>
            </pre>

            <p>
              The first value controls the horizontal radius and the value
              after the slash controls the vertical radius.
            </p>
          </section>

          <section>
            <h2>Custom Corner Shapes</h2>

            <p>
              Each corner can have separate horizontal and vertical
              radii.
            </p>

            <pre>
              <code>{`.shape {
  border-radius:
    40px 20px 60px 10px /
    20px 30px 40px 15px;
}`}</code>
            </pre>

            <p>
              This makes it possible to create more organic and unusual
              shapes.
            </p>
          </section>

          <section>
            <h2>Border Radius with Images</h2>

            <p>
              Border radius is frequently used to round images.
            </p>

            <pre>
              <code>{`.image {
  width: 100%;
  border-radius: 16px;
}`}</code>
            </pre>

            <p>
              If an image is inside a container,{" "}
              <code>overflow: hidden</code> can be useful when the
              container needs to clip its contents to the rounded shape.
            </p>

            <pre>
              <code>{`.card {
  border-radius: 20px;
  overflow: hidden;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Border Radius with Buttons</h2>

            <p>
              Buttons often use moderate radius values for a modern,
              friendly appearance.
            </p>

            <pre>
              <code>{`.button {
  padding: 12px 20px;
  border-radius: 10px;
}`}</code>
            </pre>

            <p>
              Smaller values generally create sharper interfaces, while
              larger values create softer and more rounded interfaces.
            </p>
          </section>

          <section>
            <h2>Logical Corner Properties</h2>

            <p>
              CSS also provides logical properties such as{" "}
              <code>border-start-start-radius</code> and{" "}
              <code>border-end-end-radius</code>.
            </p>

            <p>
              These properties can be useful when building interfaces that
              need to support different writing directions.
            </p>

            <pre>
              <code>{`.box {
  border-start-start-radius: 16px;
  border-end-end-radius: 16px;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Common Radius Patterns</h2>

            <p>
              A few radius values are commonly useful across interface
              designs.
            </p>

            <pre>
              <code>{`.small {
  border-radius: 6px;
}

.medium {
  border-radius: 12px;
}

.large {
  border-radius: 20px;
}

.pill {
  border-radius: 999px;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Practical Tips</h2>

            <ul>
              <li>
                Use consistent radius values across related components.
              </li>
              <li>
                Use <code>50%</code> for circles when width and height are
                equal.
              </li>
              <li>
                Use a large value such as <code>999px</code> for pill
                shapes.
              </li>
              <li>
                Use <code>overflow: hidden</code> when child content needs
                to follow the rounded container.
              </li>
              <li>
                Use multiple values when individual corners need different
                shapes.
              </li>
              <li>
                Avoid excessive rounding when a sharper visual style is
                more appropriate.
              </li>
            </ul>
          </section>

          <section>
            <h2>Create Your Border Radius</h2>

            <p>
              Experiment with individual corner values and create custom
              rounded shapes with CSSKit's Border Radius Generator.
            </p>

            <Link
              to="/tools/border-radius"
              className="article-tool-link"
            >
              Open Border Radius Generator →
            </Link>
          </section>
        </div>

        <footer className="resource-article-footer">
          <Link to="/resources/guides" className="article-back">
            ← Back to CSS Guides
          </Link>
        </footer>
      </article>
    </ToolPageLayout>
  );
}