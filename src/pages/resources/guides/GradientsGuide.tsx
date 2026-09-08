import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function GradientsGuide() {
  useEffect(() => {
    const title = "CSS Gradients Guide — CSSKit";

    const description =
      "Learn how CSS gradients work, including linear gradients, radial gradients, color stops, angles, multiple gradients, and practical CSS examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/gradients`;

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

    const schemaId = "csskit-gradients-guide-schema";

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
        name: "CSS gradients",
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
          <Link
            to="/resources/guides"
            className="article-back"
          >
            ← CSS Guides
          </Link>

          <span className="section-kicker">
            CSS GUIDE
          </span>

          <h1>
            CSS Gradients Guide
          </h1>

          <p className="article-intro">
            Learn how CSS gradients work and
            how to create smooth color
            transitions for backgrounds,
            buttons, cards, text, and modern
            interface effects.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is a CSS gradient?</h2>

            <p>
              A CSS gradient creates a smooth
              transition between two or more
              colors. Unlike an image, a CSS
              gradient is generated directly by
              the browser.
            </p>

            <p>
              Gradients are commonly used for
              backgrounds, buttons, cards,
              decorative elements, and text
              effects.
            </p>
          </section>

          <section>
            <h2>
              Linear gradients
            </h2>

            <p>
              A linear gradient transitions
              between colors along a straight
              line.
            </p>

            <pre>
              <code>
{`background: linear-gradient(
  to right,
  #6366f1,
  #ec4899
);`}
              </code>
            </pre>

            <p>
              By default, the gradient moves
              from top to bottom. You can change
              its direction with keywords or an
              angle.
            </p>
          </section>

          <section>
            <h2>
              Gradient directions
            </h2>

            <p>
              Direction keywords such as{" "}
              <code>to right</code>,{" "}
              <code>to bottom</code>, and{" "}
              <code>to top left</code> control
              where the gradient travels.
            </p>

            <pre>
              <code>
{`background: linear-gradient(
  to bottom right,
  #3b82f6,
  #8b5cf6
);`}
              </code>
            </pre>

            <p>
              You can also use degrees for more
              precise control.
            </p>

            <pre>
              <code>
{`background: linear-gradient(
  135deg,
  #3b82f6,
  #8b5cf6
);`}
              </code>
            </pre>
          </section>

          <section>
            <h2>
              Color stops
            </h2>

            <p>
              A color stop determines where a
              color appears along the gradient.
              You can use percentages or other
              CSS length values.
            </p>

            <pre>
              <code>
{`background: linear-gradient(
  to right,
  #2563eb 0%,
  #7c3aed 50%,
  #db2777 100%
);`}
              </code>
            </pre>

            <p>
              Explicit color stops give you more
              control over how quickly each color
              transitions.
            </p>
          </section>

          <section>
            <h2>
              Radial gradients
            </h2>

            <p>
              A radial gradient spreads outward
              from a central point instead of
              following a straight line.
            </p>

            <pre>
              <code>
{`background: radial-gradient(
  circle,
  #6366f1,
  #ec4899
);`}
              </code>
            </pre>

            <p>
              Radial gradients are useful for
              glowing backgrounds, decorative
              effects, and soft visual accents.
            </p>
          </section>

          <section>
            <h2>
              Positioning a radial gradient
            </h2>

            <p>
              You can control the starting point
              of a radial gradient with position
              keywords.
            </p>

            <pre>
              <code>
{`background: radial-gradient(
  circle at top right,
  #60a5fa,
  #312e81
);`}
              </code>
            </pre>
          </section>

          <section>
            <h2>
              Multiple gradients
            </h2>

            <p>
              Multiple gradients can be layered
              by separating them with commas.
            </p>

            <pre>
              <code>
{`background:
  radial-gradient(
    circle at top left,
    rgba(99, 102, 241, 0.35),
    transparent 45%
  ),
  linear-gradient(
    135deg,
    #111827,
    #312e81
  );`}
              </code>
            </pre>

            <p>
              Layering gradients can create
              richer backgrounds without using
              image assets.
            </p>
          </section>

          <section>
            <h2>
              Gradient text
            </h2>

            <p>
              Gradients can also be applied to
              text using background clipping.
            </p>

            <pre>
              <code>
{`background: linear-gradient(
  90deg,
  #6366f1,
  #ec4899
);

-webkit-background-clip: text;
background-clip: text;
color: transparent;`}
              </code>
            </pre>
          </section>

          <section>
            <h2>
              Practical tips
            </h2>

            <ul>
              <li>
                Use a limited number of colors
                to keep gradients clean.
              </li>
              <li>
                Use subtle gradients for large
                interface backgrounds.
              </li>
              <li>
                Use stronger gradients for
                buttons and visual accents.
              </li>
              <li>
                Color stops give you precise
                control over transitions.
              </li>
              <li>
                Combine radial and linear
                gradients for layered effects.
              </li>
            </ul>
          </section>

          <section>
            <h2>
              Generate your own gradient
            </h2>

            <p>
              Experiment with colors, direction,
              angles, and stops using the CSSKit
              Gradient Generator.
            </p>

            <Link
              to="/tools/gradient"
              className="article-tool-link"
            >
              Open Gradient Generator →
            </Link>
          </section>
        </div>

        <footer className="resource-article-footer">
          <Link
            to="/resources/guides"
            className="article-back"
          >
            ← Back to CSS Guides
          </Link>
        </footer>
      </article>
    </ToolPageLayout>
  );
}