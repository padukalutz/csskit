import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function BoxShadowGuide() {
  useEffect(() => {
    const title = "CSS Box Shadow Guide — CSSKit";

    const description =
      "Learn how CSS box-shadow works, including offsets, blur, spread, color, multiple shadows, inset shadows, and practical CSS examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/box-shadow`;

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

    const schemaId = "csskit-box-shadow-guide-schema";

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
        name: "CSS box-shadow",
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
            CSS Box Shadow Guide
          </h1>

          <p className="article-intro">
            Learn how the CSS{" "}
            <code>box-shadow</code> property
            works and how to create clean,
            subtle, and realistic shadows for
            modern interfaces.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is box-shadow?</h2>

            <p>
              The <code>box-shadow</code>{" "}
              property adds one or more
              shadows around an element's
              box. It is commonly used to
              create depth, separation, and
              visual hierarchy in user
              interfaces.
            </p>

            <p>
              A basic shadow can be written
              like this:
            </p>

            <pre>
              <code>
{`box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);`}
              </code>
            </pre>
          </section>

          <section>
            <h2>
              Understanding the values
            </h2>

            <p>
              A typical box shadow contains
              four main length values followed
              by a color.
            </p>

            <pre>
              <code>
{`box-shadow: offset-x offset-y blur spread color;`}
              </code>
            </pre>

            <div className="article-list">
              <div>
                <strong>Offset X</strong>
                <p>
                  Moves the shadow horizontally.
                  Positive values move it to the
                  right, while negative values
                  move it to the left.
                </p>
              </div>

              <div>
                <strong>Offset Y</strong>
                <p>
                  Moves the shadow vertically.
                  Positive values move it down,
                  while negative values move it
                  up.
                </p>
              </div>

              <div>
                <strong>Blur</strong>
                <p>
                  Controls how soft the shadow
                  appears. A larger value creates
                  a softer shadow.
                </p>
              </div>

              <div>
                <strong>Spread</strong>
                <p>
                  Controls how much the shadow
                  expands or contracts before
                  blur is applied.
                </p>
              </div>

              <div>
                <strong>Color</strong>
                <p>
                  Controls the color and opacity
                  of the shadow.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>
              A simple shadow
            </h2>

            <p>
              For cards and other elevated
              surfaces, a subtle shadow is
              usually better than a heavy one.
            </p>

            <pre>
              <code>
{`box-shadow:
  0 4px 12px rgba(0, 0, 0, 0.08);`}
              </code>
            </pre>

            <p>
              Keeping the opacity low helps the
              shadow feel softer and more natural.
            </p>
          </section>

          <section>
            <h2>
              Creating a stronger shadow
            </h2>

            <p>
              You can increase the offset,
              blur, and opacity when an element
              needs more visual separation.
            </p>

            <pre>
              <code>
{`box-shadow:
  0 12px 30px rgba(0, 0, 0, 0.16);`}
              </code>
            </pre>

            <p>
              Strong shadows work well for
              floating panels, dialogs, and
              elements that need to appear
              noticeably elevated.
            </p>
          </section>

          <section>
            <h2>
              Using spread
            </h2>

            <p>
              The spread value changes the size
              of the shadow before the blur is
              applied.
            </p>

            <pre>
              <code>
{`box-shadow:
  0 8px 20px 4px rgba(0, 0, 0, 0.10);`}
              </code>
            </pre>

            <p>
              A positive spread makes the shadow
              larger, while a negative spread
              pulls it closer to the element.
            </p>
          </section>

          <section>
            <h2>
              Multiple shadows
            </h2>

            <p>
              CSS also allows multiple shadows
              on the same element. Each shadow is
              separated by a comma.
            </p>

            <pre>
              <code>
{`box-shadow:
  0 2px 4px rgba(0, 0, 0, 0.08),
  0 12px 30px rgba(0, 0, 0, 0.10);`}
              </code>
            </pre>

            <p>
              Layering shadows can create a more
              realistic sense of depth than using
              one very strong shadow.
            </p>
          </section>

          <section>
            <h2>
              Inset shadows
            </h2>

            <p>
              Adding the <code>inset</code>{" "}
              keyword places the shadow inside
              the element instead of outside it.
            </p>

            <pre>
              <code>
{`box-shadow:
  inset 0 2px 8px rgba(0, 0, 0, 0.12);`}
              </code>
            </pre>

            <p>
              Inset shadows can be useful for
              inputs, pressed buttons, recessed
              panels, and other interface
              elements.
            </p>
          </section>

          <section>
            <h2>
              Practical tips
            </h2>

            <ul>
              <li>
                Use low-opacity shadows for
                subtle UI elements.
              </li>
              <li>
                Avoid using extremely dark
                shadows everywhere.
              </li>
              <li>
                Increase blur when you want a
                softer visual effect.
              </li>
              <li>
                Use multiple shadows when one
                shadow does not provide enough
                depth.
              </li>
              <li>
                Keep shadow direction consistent
                across your interface.
              </li>
            </ul>
          </section>

          <section>
            <h2>
              Generate your own shadow
            </h2>

            <p>
              Instead of writing shadow values
              manually, use the CSSKit Box Shadow
              Generator to experiment with
              offsets, blur, spread, opacity, and
              color interactively.
            </p>

            <Link
              to="/tools/box-shadow"
              className="article-tool-link"
            >
              Open Box Shadow Generator →
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