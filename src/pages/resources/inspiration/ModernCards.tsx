import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function ModernCards() {
  useEffect(() => {
    const title = "Modern CSS Card Design Inspiration — CSSKit";

    const description =
      "Explore modern CSS card design ideas using borders, shadows, gradients, spacing, hover effects, and subtle interactions.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/modern-cards`;

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

    const schemaId = "csskit-modern-cards-schema";

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
        name: "CSS card design",
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

          <h1>Modern Cards</h1>

          <p className="article-intro">
            Ideas for building cards with borders, shadows, gradients, and
            subtle interactions.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>Start with a strong card structure</h2>

            <p>
              A good card has a clear relationship between its content,
              spacing, and visual boundary. Keep the structure simple before
              adding effects.
            </p>

            <pre>
              <code>{`.card {
  padding: 1.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  background: white;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Add depth with shadows</h2>

            <p>
              Soft shadows can separate a card from its background without
              making the component feel heavy.
            </p>

            <pre>
              <code>{`.card {
  box-shadow:
    0 10px 30px rgb(0 0 0 / 0.08);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Use gradients carefully</h2>

            <p>
              Gradients can add visual personality to cards, especially for
              featured content. Keep contrast high enough for readable text.
            </p>

            <pre>
              <code>{`.featured-card {
  background:
    linear-gradient(135deg, #111827, #374151);
  color: white;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Subtle interactions</h2>

            <p>
              Hover effects should communicate interaction rather than
              distract from the content.
            </p>

            <pre>
              <code>{`.card {
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.card:hover {
  transform: translateY(-4px);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Card design checklist</h2>

            <ul>
              <li>Keep internal spacing consistent.</li>
              <li>Use a clear visual boundary.</li>
              <li>Make interactive cards visually identifiable.</li>
              <li>Use shadows and gradients with restraint.</li>
              <li>Check contrast and readability.</li>
            </ul>
          </section>

          <section>
            <h2>Keep card content focused</h2>

            <p>
              Cards work best when they present a focused piece of information
              or a clear action. Avoid placing too many unrelated elements
              inside a single card.
            </p>

            <p>
              Use headings, supporting text, and actions in a consistent order
              so users can quickly scan multiple cards.
            </p>
          </section>

          <section>
            <h2>Design for responsive layouts</h2>

            <p>
              Card grids should adapt naturally to smaller screens. Allow
              cards to stack when there is not enough horizontal space rather
              than forcing narrow columns.
            </p>
          </section>

          <section>
            <h2>Explore Box Shadow Tools</h2>

            <p>
              Experiment with shadow size, blur, spread, and opacity to create
              depth that fits your card design.
            </p>

            <Link to="/tools/box-shadow" className="article-tool-link">
              Explore Box Shadow Tool →
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