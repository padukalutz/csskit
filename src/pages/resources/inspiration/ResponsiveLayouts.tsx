import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function ResponsiveLayouts() {
  useEffect(() => {
    const title = "Responsive CSS Layout Inspiration — CSSKit";

    const description =
      "Explore responsive CSS layout ideas that adapt naturally between desktop, tablet, and mobile screens using Flexbox, Grid, fluid sizing, and media queries.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/responsive-layouts`;

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

    const schemaId = "csskit-responsive-layouts-schema";

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
        name: "Responsive CSS layouts",
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

          <h1>Responsive Layouts</h1>

          <p className="article-intro">
            Layout patterns that adapt naturally between desktop, tablet, and
            mobile screens.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>Think fluid before thinking about breakpoints</h2>

            <p>
              Responsive layouts do not always need many media queries. Flexible
              grids, percentages, max-widths, and modern CSS functions can allow
              layouts to adapt naturally.
            </p>
          </section>

          <section>
            <h2>Use Grid for responsive cards</h2>

            <pre>
              <code>{`.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.5rem;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Use fluid sizing</h2>

            <pre>
              <code>{`.section {
  padding-inline:
    clamp(1rem, 5vw, 4rem);
}

.title {
  font-size:
    clamp(2rem, 5vw, 4rem);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Use media queries when the layout actually needs them</h2>

            <pre>
              <code>{`@media (max-width: 700px) {
  .navigation {
    flex-direction: column;
  }

  .two-column {
    grid-template-columns: 1fr;
  }
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Responsive design checklist</h2>

            <ul>
              <li>Test layouts at different viewport widths.</li>
              <li>Use flexible columns where possible.</li>
              <li>Avoid fixed widths for major content areas.</li>
              <li>Keep typography readable on small screens.</li>
              <li>Make interactive elements comfortable to use.</li>
            </ul>
          </section>

          <section>
            <h2>Design around content</h2>

            <p>
              Breakpoints should respond to the needs of the content rather
              than a specific list of device sizes. Let components determine
              when they need more or less space.
            </p>

            <p>
              Flexible layouts are often easier to maintain because they can
              adapt to viewport sizes that were not specifically anticipated.
            </p>
          </section>

          <section>
            <h2>Keep content widths readable</h2>

            <p>
              Responsive layouts should not simply stretch content across the
              entire viewport. Use max-widths and appropriate spacing to keep
              long text comfortable to read.
            </p>

            <pre>
              <code>{`.content {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Test real viewport changes</h2>

            <p>
              Check layouts at narrow, medium, and wide viewport sizes. Pay
              attention to text wrapping, navigation, cards, buttons, and
              spacing as the available space changes.
            </p>
          </section>

          <section>
            <h2>Explore Grid Tools</h2>

            <p>
              Experiment with columns, gaps, alignment, and responsive grid
              behavior to build layouts that adapt naturally.
            </p>

            <Link to="/tools/grid" className="article-tool-link">
              Explore Grid Tool →
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