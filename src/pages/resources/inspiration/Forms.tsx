import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function Forms() {
  useEffect(() => {
    const title = "CSS Form Design Inspiration — Accessible UI Forms — CSSKit";

    const description =
      "Explore clean CSS form design ideas with clear labels, useful spacing, accessible focus states, inputs, and responsive layouts.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/forms`;

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

    const schemaId = "csskit-forms-schema";

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
        name: "CSS form design",
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

          <h1>Forms</h1>

          <p className="article-intro">
            Simple form layouts with clear labels, useful spacing, and
            accessible interaction states.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>Start with clear structure</h2>

            <p>
              A good form makes relationships between labels, inputs, and
              actions immediately understandable.
            </p>

            <pre>
              <code>{`.form {
  display: grid;
  gap: 1.25rem;
}

.field {
  display: grid;
  gap: 0.5rem;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Style inputs consistently</h2>

            <p>
              Consistent input styling makes forms easier to scan and creates
              a predictable experience across different controls.
            </p>

            <pre>
              <code>{`input,
textarea,
select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font: inherit;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Never hide the focus state</h2>

            <p>
              Keyboard users need a visible indication of which form control is
              currently active.
            </p>

            <pre>
              <code>{`input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 2px;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Responsive form layouts</h2>

            <p>
              Single-column forms are often easiest to use on mobile. Wider
              screens can introduce columns where the relationship between
              fields remains clear.
            </p>

            <pre>
              <code>{`@media (min-width: 700px) {
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Form design checklist</h2>

            <ul>
              <li>Use visible and descriptive labels.</li>
              <li>Keep field spacing consistent.</li>
              <li>Provide clear focus states.</li>
              <li>Use readable input sizes.</li>
              <li>Make the layout comfortable on mobile.</li>
            </ul>
          </section>

          <section>
            <h2>Form validation</h2>

            <p>
              Validation feedback should clearly explain what needs to be
              corrected. Avoid relying only on color to communicate errors.
            </p>

            <p>
              Place useful error messages close to the relevant field and
              preserve the user's entered information whenever possible.
            </p>
          </section>

          <section>
            <h2>Accessible form controls</h2>

            <p>
              Form controls should have meaningful labels, sufficient
              contrast, visible focus indicators, and comfortable interaction
              areas.
            </p>

            <p>
              Keep the interface understandable for both mouse and keyboard
              users.
            </p>
          </section>

          <section>
            <h2>Explore CSS Tools</h2>

            <p>
              Experiment with spacing, borders, radius, typography, and other
              CSS properties to create forms that fit your interface.
            </p>

            <Link to="/tools/border-radius" className="article-tool-link">
              Explore Border Radius Tool →
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