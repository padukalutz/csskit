import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function HeroSections() {
  useEffect(() => {
    const title = "CSS Hero Section Inspiration — Landing Page Ideas — CSSKit";

    const description =
      "Explore CSS hero section ideas for modern landing pages using strong hierarchy, responsive layouts, gradients, typography, and clear calls to action.";

    const canonicalUrl =
      `${window.location.origin}/resources/inspiration/hero-sections`;

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

    const schemaId = "csskit-hero-sections-schema";

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
        name: "CSS hero sections",
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

          <h1>Hero Sections</h1>

          <p className="article-intro">
            Inspiration for creating strong landing-page hero sections with
            clear visual hierarchy.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>Build the hierarchy first</h2>

            <p>
              A hero section should quickly communicate what the page is about.
              A typical structure includes a small label, a strong headline,
              supporting text, and one or more actions.
            </p>
          </section>

          <section>
            <h2>Use responsive typography</h2>

            <pre>
              <code>{`.hero h1 {
  font-size: clamp(2.75rem, 8vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
}`}</code>
            </pre>

            <p>
              The clamp function lets the heading scale between a minimum and
              maximum size while responding to the viewport.
            </p>
          </section>

          <section>
            <h2>Create visual focus</h2>

            <p>
              Gradients, subtle backgrounds, large typography, and controlled
              whitespace can help establish a strong focal point.
            </p>

            <pre>
              <code>{`.hero {
  padding: 7rem 1.5rem;
  background:
    radial-gradient(
      circle at top right,
      rgb(99 102 241 / 0.18),
      transparent 45%
    );
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Keep the call to action obvious</h2>

            <p>
              A hero should not force visitors to search for the next step. Use
              spacing and contrast to make the primary action easy to identify.
            </p>
          </section>

          <section>
            <h2>Hero section checklist</h2>

            <ul>
              <li>Use one clear primary message.</li>
              <li>Keep supporting text concise.</li>
              <li>Use responsive typography.</li>
              <li>Provide a clear primary action.</li>
              <li>Check the layout on small screens.</li>
            </ul>
          </section>

          <section>
            <h2>Balance content and whitespace</h2>

            <p>
              Give the headline, supporting text, and actions enough breathing
              room. Generous whitespace can make a hero feel clearer without
              requiring additional decorative elements.
            </p>

            <p>
              Avoid filling every available space. The visual hierarchy should
              guide attention toward the main message and primary action.
            </p>
          </section>

          <section>
            <h2>Design for smaller screens</h2>

            <p>
              Hero sections should remain easy to understand when viewed on
              phones. Reduce unnecessary decoration and make sure text and
              actions remain comfortable to read and use.
            </p>
          </section>

          <section>
            <h2>Explore Gradient Tools</h2>

            <p>
              Experiment with gradients and background effects to create a
              distinctive visual focus for your hero section.
            </p>

            <Link to="/tools/gradient" className="article-tool-link">
              Explore Gradient Tool →
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