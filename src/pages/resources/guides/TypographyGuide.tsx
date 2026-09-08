import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function TypographyGuide() {
  useEffect(() => {
    const title = "CSS Typography Guide — CSSKit";

    const description =
      "Learn CSS typography, including font family, font size, weight, line height, letter spacing, text alignment, decoration, overflow, responsive typography, and practical examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/typography`;

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

    const schemaId = "csskit-typography-guide-schema";

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
        name: "CSS typography",
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
          <Link to="/resources/guides" className="article-back">
            ← Back to CSS Guides
          </Link>

          <span className="section-kicker">CSS GUIDE</span>

          <h1>CSS Typography Guide</h1>

          <p className="article-intro">
            Learn how to control fonts, text size, spacing, alignment,
            weight, line height, and other typography properties with CSS.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is CSS Typography?</h2>

            <p>
              Typography is the way text is styled and arranged on a web
              page. Good typography improves readability, hierarchy, and
              the overall visual quality of an interface.
            </p>

            <p>
              CSS provides many properties for controlling the appearance
              and spacing of text.
            </p>
          </section>

          <section>
            <h2>Font Family</h2>

            <p>
              The <code>font-family</code> property defines which font is
              used to display text.
            </p>

            <pre>
              <code>{`body {
  font-family: Arial, sans-serif;
}`}</code>
            </pre>

            <p>
              It is common to provide fallback fonts in case the preferred
              font is unavailable.
            </p>
          </section>

          <section>
            <h2>Font Size</h2>

            <p>
              Use <code>font-size</code> to control the size of text.
            </p>

            <pre>
              <code>{`h1 {
  font-size: 48px;
}`}</code>
            </pre>

            <p>
              Relative units such as <code>rem</code> are often useful for
              scalable typography.
            </p>

            <pre>
              <code>{`h1 {
  font-size: 3rem;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Font Weight</h2>

            <p>
              The <code>font-weight</code> property controls how thick the
              text appears.
            </p>

            <pre>
              <code>{`.title {
  font-weight: 700;
}`}</code>
            </pre>

            <p>
              Common numeric values include <code>400</code> for normal
              text and <code>700</code> for bold text, depending on the
              available font.
            </p>
          </section>

          <section>
            <h2>Font Style</h2>

            <p>
              Use <code>font-style</code> to control whether text is normal,
              italic, or oblique.
            </p>

            <pre>
              <code>{`.quote {
  font-style: italic;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Line Height</h2>

            <p>
              The <code>line-height</code> property controls the vertical
              space between lines of text.
            </p>

            <pre>
              <code>{`.article {
  line-height: 1.6;
}`}</code>
            </pre>

            <p>
              A comfortable line height can significantly improve
              readability, especially for paragraphs.
            </p>
          </section>

          <section>
            <h2>Letter Spacing</h2>

            <p>
              Use <code>letter-spacing</code> to control the horizontal
              space between characters.
            </p>

            <pre>
              <code>{`.heading {
  letter-spacing: -0.02em;
}`}</code>
            </pre>

            <p>
              Small negative values can make large headings feel tighter,
              while positive values can improve readability for labels and
              uppercase text.
            </p>
          </section>

          <section>
            <h2>Word Spacing</h2>

            <p>
              The <code>word-spacing</code> property controls the space
              between words.
            </p>

            <pre>
              <code>{`.text {
  word-spacing: 4px;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Text Alignment</h2>

            <p>
              Use <code>text-align</code> to control the horizontal
              alignment of text.
            </p>

            <pre>
              <code>{`.heading {
  text-align: center;
}`}</code>
            </pre>

            <p>Common values include:</p>

            <ul>
              <li><code>left</code> — aligns text to the left.</li>
              <li><code>center</code> — centers the text.</li>
              <li><code>right</code> — aligns text to the right.</li>
              <li>
                <code>justify</code> — distributes text across the line.
              </li>
            </ul>
          </section>

          <section>
            <h2>Text Decoration</h2>

            <p>
              The <code>text-decoration</code> property controls
              decorations such as underlines and line-through effects.
            </p>

            <pre>
              <code>{`a {
  text-decoration: none;
}`}</code>
            </pre>

            <p>
              You can also customize decoration color, thickness, and
              style.
            </p>

            <pre>
              <code>{`a {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
  text-decoration-thickness: 2px;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Text Transform</h2>

            <p>
              The <code>text-transform</code> property changes the casing
              of text visually.
            </p>

            <pre>
              <code>{`.label {
  text-transform: uppercase;
}`}</code>
            </pre>

            <p>
              Other useful values include <code>lowercase</code> and{" "}
              <code>capitalize</code>.
            </p>
          </section>

          <section>
            <h2>Text Overflow</h2>

            <p>
              Long text can be controlled with properties such as{" "}
              <code>overflow</code>, <code>white-space</code>, and{" "}
              <code>text-overflow</code>.
            </p>

            <pre>
              <code>{`.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`}</code>
            </pre>

            <p>
              This pattern is useful when a title needs to stay on one line
              while preventing it from overflowing its container.
            </p>
          </section>

          <section>
            <h2>Text Shadow</h2>

            <p>
              The <code>text-shadow</code> property adds a shadow behind
              text.
            </p>

            <pre>
              <code>{`.title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}`}</code>
            </pre>

            <p>
              Multiple shadows can also be combined for more advanced
              effects.
            </p>
          </section>

          <section>
            <h2>Responsive Typography</h2>

            <p>
              Typography should adapt to different screen sizes. The{" "}
              <code>clamp()</code> function is useful for creating fluid
              font sizes.
            </p>

            <pre>
              <code>{`h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}`}</code>
            </pre>

            <p>
              This allows the font size to scale with the viewport while
              keeping minimum and maximum limits.
            </p>
          </section>

          <section>
            <h2>Using Rem Units</h2>

            <p>
              The <code>rem</code> unit is relative to the root font size.
              It can make typography easier to scale consistently.
            </p>

            <pre>
              <code>{`body {
  font-size: 1rem;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1rem;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Typography Hierarchy</h2>

            <p>
              A good typography system should create a clear hierarchy
              between headings, supporting text, body text, and labels.
            </p>

            <pre>
              <code>{`h1 {
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 700;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}`}</code>
            </pre>

            <p>
              Consistent sizing, spacing, and line height makes content
              easier to scan and understand.
            </p>
          </section>

          <section>
            <h2>Practical Tips</h2>

            <ul>
              <li>
                Choose fonts that are easy to read at the intended size.
              </li>
              <li>
                Use <code>line-height</code> to improve paragraph
                readability.
              </li>
              <li>
                Use consistent font weights to establish hierarchy.
              </li>
              <li>
                Avoid excessive use of different font families.
              </li>
              <li>
                Use <code>rem</code> and <code>clamp()</code> for scalable
                typography.
              </li>
              <li>
                Keep line lengths comfortable, especially for long-form
                content.
              </li>
              <li>
                Use letter spacing carefully because small changes can
                strongly affect the appearance of headings.
              </li>
            </ul>
          </section>

          <section>
            <h2>Build Your Typography</h2>

            <p>
              Experiment with font size, weight, spacing, alignment, and
              other text properties using CSSKit's Typography Generator.
            </p>

            <Link to="/tools/typography" className="article-tool-link">
              Open Typography Generator →
            </Link>
          </section>
        </div>

        <footer className="resource-article-footer">
          <Link to="/resources/guides" className="article-back">
            ← Back to CSS Guides
          </Link>
        </footer>
      </article>
    </ToolPageLayout>
  );
}