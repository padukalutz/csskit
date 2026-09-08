import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function Navigation() {
  useEffect(() => {
    const title = "Responsive CSS Navigation Inspiration — CSSKit";

    const description =
      "Explore clean CSS navigation patterns for responsive websites, including flexible layouts, mobile navigation, spacing, and interaction states.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/navigation`;

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

    const schemaId = "csskit-navigation-schema";

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
        name: "Responsive CSS navigation",
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

          <h1>Navigation</h1>

          <p className="article-intro">
            Patterns for clean, responsive navigation bars that work well
            across different screen sizes.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>Keep navigation predictable</h2>

            <p>
              Navigation should make it obvious where users are and where they
              can go. Consistent spacing and alignment help create that
              predictability.
            </p>
          </section>

          <section>
            <h2>Use Flexbox for the basic layout</h2>

            <pre>
              <code>{`.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}`}</code>
            </pre>

            <p>
              Flexbox is usually enough for a straightforward navigation bar
              with a logo, links, and an action.
            </p>
          </section>

          <section>
            <h2>Make spacing responsive</h2>

            <pre>
              <code>{`.nav {
  padding-inline: clamp(1rem, 4vw, 3rem);
}

.nav-links {
  gap: clamp(0.75rem, 2vw, 2rem);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Design for mobile</h2>

            <p>
              Navigation links may need to collapse into a menu on smaller
              screens. The important part is keeping the primary navigation
              easy to access without overcrowding the header.
            </p>
          </section>

          <section>
            <h2>Navigation checklist</h2>

            <ul>
              <li>Keep link labels short and descriptive.</li>
              <li>Use consistent spacing.</li>
              <li>Make interactive states visible.</li>
              <li>Provide a usable mobile layout.</li>
              <li>Maintain sufficient color contrast.</li>
            </ul>
          </section>

          <section>
            <h2>Show clear interaction states</h2>

            <p>
              Users should be able to distinguish normal, hover, focus, and
              active navigation states. Clear feedback makes navigation easier
              to understand and use.
            </p>

            <pre>
              <code>{`.nav-link {
  text-decoration: none;
  transition: color 160ms ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: #4f46e5;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Keep navigation accessible</h2>

            <p>
              Use meaningful link labels, visible keyboard focus states, and
              sufficient contrast. Avoid making navigation dependent on hover
              alone.
            </p>
          </section>

          <section>
            <h2>Explore Flexbox Tools</h2>

            <p>
              Experiment with alignment, spacing, direction, and wrapping to
              build responsive navigation layouts.
            </p>

            <Link to="/tools/flexbox" className="article-tool-link">
              Explore Flexbox Tool →
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