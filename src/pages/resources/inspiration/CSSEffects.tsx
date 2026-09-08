import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function CSSEffects() {
  useEffect(() => {
    const title =
      "CSS Effects Inspiration — Shadows, Gradients & Filters — CSSKit";

    const description =
      "Explore CSS visual effects using gradients, shadows, blur, transforms, filters, and animations to enhance modern interfaces.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/css-effects`;

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

    const schemaId = "csskit-css-effects-schema";

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
        name: "CSS visual effects",
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

          <h1>CSS Effects</h1>

          <p className="article-intro">
            Visual ideas using gradients, shadows, blur, transforms, filters,
            and animations.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>Combine effects with restraint</h2>

            <p>
              CSS effects can make an interface feel polished, but using too
              many effects at once can reduce clarity. Start with one visual
              idea and build from there.
            </p>
          </section>

          <section>
            <h2>Soft shadows</h2>

            <pre>
              <code>{`.surface {
  box-shadow:
    0 20px 50px rgb(0 0 0 / 0.1);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Gradients</h2>

            <pre>
              <code>{`.gradient {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #a855f7
    );
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Filters</h2>

            <pre>
              <code>{`.image:hover {
  filter: brightness(0.9) saturate(1.1);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Transforms</h2>

            <pre>
              <code>{`.element {
  transition: transform 180ms ease;
}

.element:hover {
  transform: translateY(-4px) scale(1.01);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Effects should support the interface</h2>

            <p>
              Use effects to establish hierarchy, communicate interaction, or
              create visual identity. Avoid adding effects simply because CSS
              makes them possible.
            </p>
          </section>

          <section>
            <h2>Performance considerations</h2>

            <p>
              Keep visual effects lightweight, especially when they are
              applied to many elements. Large blurs, complex shadows, and
              repeated animations can increase rendering work.
            </p>

            <p>
              Prefer simple effects and use them where they provide a clear
              visual purpose.
            </p>
          </section>

          <section>
            <h2>Explore CSS Effects Tools</h2>

            <p>
              Experiment with shadows, gradients, filters, and transforms to
              find an effect that fits your interface.
            </p>

            <Link to="/tools/filter" className="article-tool-link">
              Explore CSS Filter Tool →
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