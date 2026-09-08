import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function Buttons() {
  useEffect(() => {
    const title = "CSS Button Design Inspiration — UI Button Ideas — CSSKit";

    const description =
      "Explore CSS button design ideas for primary, secondary, outlined, and minimal buttons with useful hover, focus, and active states.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/buttons`;

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

    const schemaId = "csskit-buttons-schema";

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
        name: "CSS button design",
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
          <Link to="/resources/inspiration" className="article-back">
            ← Back to Inspiration
          </Link>

          <span className="section-kicker">INSPIRATION</span>

          <h1>Buttons</h1>

          <p className="article-intro">
            Different visual approaches for primary, secondary, outlined, and
            minimal buttons.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>Primary buttons</h2>

            <p>
              Primary buttons should stand out from surrounding content and
              communicate the most important action.
            </p>

            <pre>
              <code>{`.button-primary {
  padding: 0.75rem 1.25rem;
  border: 0;
  border-radius: 0.75rem;
  background: #111827;
  color: white;
  cursor: pointer;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Outlined buttons</h2>

            <p>
              Outlined buttons are useful for secondary actions that should
              remain visible without competing with the primary action.
            </p>

            <pre>
              <code>{`.button-outline {
  padding: 0.75rem 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  background: transparent;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Interaction states</h2>

            <p>
              Buttons should provide clear hover, focus, and active states so
              users can understand when an element is interactive.
            </p>

            <pre>
              <code>{`.button:hover {
  transform: translateY(-1px);
}

.button:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}

.button:active {
  transform: translateY(0);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Button design principles</h2>

            <ul>
              <li>Use clear action-oriented labels.</li>
              <li>Make the primary action visually distinct.</li>
              <li>Provide a visible focus state.</li>
              <li>Keep touch targets comfortable.</li>
              <li>Use animation sparingly.</li>
            </ul>
          </section>

          <section>
            <h2>Choosing a button style</h2>

            <p>
              Use filled buttons for primary actions, outlined buttons for
              secondary actions, and simpler styles when the interface
              already has strong visual hierarchy.
            </p>

            <p>
              The most important goal is to make the action clear without
              adding unnecessary visual complexity.
            </p>
          </section>

          <section>
            <h2>Accessibility</h2>

            <p>
              Button designs should remain usable with keyboard navigation and
              should provide a clearly visible focus indicator.
            </p>

            <p>
              Avoid relying only on color to communicate the state of a
              button. Contrast, focus styles, labels, and interaction feedback
              should work together.
            </p>
          </section>

          <section>
            <h2>Responsive buttons</h2>

            <p>
              Buttons should remain comfortable to use on smaller screens.
              Avoid making touch targets too small or placing interactive
              buttons too close together.
            </p>

            <pre>
              <code>{`.button {
  min-height: 44px;
  padding: 0.75rem 1.25rem;
}

@media (max-width: 600px) {
  .button {
    width: 100%;
  }
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Explore More Button Ideas</h2>

            <p>
              Experiment with borders, radius, colors, shadows, typography,
              hover states, and spacing to create a button that fits your
              interface.
            </p>

            <Link to="/tools/button" className="article-tool-link">
              Explore Button Tool →
            </Link>
          </section>
        </div>

        <footer className="resource-article-footer">
          <Link to="/resources/inspiration" className="article-back">
            ← Back to Inspiration
          </Link>
        </footer>
      </article>
    </ToolPageLayout>
  );
}