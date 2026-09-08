import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function MinimalInterfaces() {
  useEffect(() => {
    const title = "Minimal Interface Design Inspiration — CSSKit";

    const description =
      "Explore minimal interface design ideas using clean layouts, generous spacing, simple typography, focused hierarchy, and practical CSS techniques.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/minimal-interfaces`;

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

    const schemaId = "csskit-minimal-interfaces-schema";

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
        name: "Minimal interface design",
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

          <h1>Minimal Interfaces</h1>

          <p className="article-intro">
            Explore clean layouts, generous spacing, simple typography, and
            focused visual hierarchy for modern web interfaces.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What makes an interface feel minimal?</h2>

            <p>
              Minimal interface design is not about removing everything from a
              page. It is about removing unnecessary visual noise so users can
              quickly understand what matters.
            </p>

            <p>
              Good spacing, consistent alignment, restrained colors, and clear
              typography usually create a stronger result than adding more
              decoration.
            </p>
          </section>

          <section>
            <h2>Use spacing to create hierarchy</h2>

            <p>
              Space can separate groups of information and guide the eye without
              adding borders or extra visual elements.
            </p>

            <pre>
              <code>{`.card {
  padding: 2rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-description {
  max-width: 42rem;
  line-height: 1.7;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Keep typography simple</h2>

            <p>
              A small number of font sizes and weights is usually enough. Use
              larger text for important headings and comfortable line-height
              for supporting content.
            </p>

            <pre>
              <code>{`h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

p {
  line-height: 1.7;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Practical principles</h2>

            <ul>
              <li>Use consistent spacing between related elements.</li>
              <li>Limit unnecessary borders and decorative effects.</li>
              <li>Use typography to establish visual hierarchy.</li>
              <li>Keep content widths readable.</li>
              <li>Give important elements enough breathing room.</li>
            </ul>
          </section>

          <section>
            <h2>Good minimal design is intentional</h2>

            <p>
              Minimal interfaces work best when every visible element has a
              purpose. Start with the content hierarchy, then use CSS to make
              that hierarchy obvious.
            </p>
          </section>

          <section>
            <h2>Use visual consistency</h2>

            <p>
              Repeating spacing, sizing, alignment, and component patterns
              helps a minimal interface feel deliberate rather than empty.
            </p>

            <p>
              Define a small set of reusable values and apply them consistently
              throughout the interface.
            </p>
          </section>

          <section>
            <h2>Keep content readable</h2>

            <p>
              Minimal layouts should still provide comfortable reading widths,
              sufficient line-height, and clear contrast between content and
              its background.
            </p>
          </section>

          <section>
            <h2>Explore Typography Tools</h2>

            <p>
              Experiment with font sizing, line-height, spacing, and other
              typography properties to create a clear visual hierarchy.
            </p>

            <Link to="/tools/typography" className="article-tool-link">
              Explore Typography Tool →
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