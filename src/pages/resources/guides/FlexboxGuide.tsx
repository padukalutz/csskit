import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function FlexboxGuide() {
  useEffect(() => {
    const title = "CSS Flexbox Guide — CSSKit";

    const description =
      "Learn how CSS Flexbox works, including flex containers, direction, alignment, gap, wrapping, sizing, ordering, and practical layout examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/flexbox`;

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

    const schemaId = "csskit-flexbox-guide-schema";

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
        name: "CSS Flexbox",
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
            ← Back to CSS Guides
          </Link>

          <span className="section-kicker">
            CSS GUIDE
          </span>

          <h1>CSS Flexbox Guide</h1>

          <p className="article-intro">
            Learn how CSS Flexbox works and how to use it to create
            flexible, responsive layouts with less CSS.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is CSS Flexbox?</h2>

            <p>
              Flexbox is a CSS layout system designed for arranging
              elements in a row or column. It makes it easier to control
              alignment, spacing, sizing, and the distribution of elements
              inside a container.
            </p>

            <p>
              Flexbox is especially useful for navigation bars, buttons,
              cards, toolbars, forms, and other one-dimensional layouts.
            </p>
          </section>

          <section>
            <h2>Creating a Flex Container</h2>

            <p>
              To use Flexbox, set the parent element to{" "}
              <code>display: flex</code>.
            </p>

            <pre>
              <code>{`.container {
  display: flex;
}`}</code>
            </pre>

            <p>
              The direct children of the container automatically become
              flex items.
            </p>
          </section>

          <section>
            <h2>Flex Direction</h2>

            <p>
              The <code>flex-direction</code> property controls the main
              direction of the flex items.
            </p>

            <pre>
              <code>{`.container {
  display: flex;
  flex-direction: row;
}`}</code>
            </pre>

            <p>The main values are:</p>

            <div className="article-list">
              <div>
                <strong>row</strong>
                <p>Items are arranged horizontally from left to right.</p>
              </div>

              <div>
                <strong>row-reverse</strong>
                <p>Items are arranged horizontally in reverse order.</p>
              </div>

              <div>
                <strong>column</strong>
                <p>Items are arranged vertically from top to bottom.</p>
              </div>

              <div>
                <strong>column-reverse</strong>
                <p>Items are arranged vertically in reverse order.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Justify Content</h2>

            <p>
              <code>justify-content</code> controls how items are
              distributed along the main axis.
            </p>

            <pre>
              <code>{`.container {
  display: flex;
  justify-content: space-between;
}`}</code>
            </pre>

            <p>Common values include:</p>

            <ul>
              <li><code>flex-start</code> — items start at the beginning.</li>
              <li><code>flex-end</code> — items move to the end.</li>
              <li><code>center</code> — items are centered.</li>
              <li><code>space-between</code> — equal space between items.</li>
              <li><code>space-around</code> — space around each item.</li>
              <li><code>space-evenly</code> — equal space everywhere.</li>
            </ul>
          </section>

          <section>
            <h2>Align Items</h2>

            <p>
              <code>align-items</code> controls the alignment of items
              along the cross axis.
            </p>

            <pre>
              <code>{`.container {
  display: flex;
  align-items: center;
}`}</code>
            </pre>

            <p>
              A common combination is using{" "}
              <code>justify-content: center</code> and{" "}
              <code>align-items: center</code> to center an element
              horizontally and vertically.
            </p>
          </section>

          <section>
            <h2>Gap</h2>

            <p>
              The <code>gap</code> property adds consistent spacing between
              flex items without needing margins on individual elements.
            </p>

            <pre>
              <code>{`.container {
  display: flex;
  gap: 16px;
}`}</code>
            </pre>

            <p>
              You can also define row and column gaps separately.
            </p>

            <pre>
              <code>{`.container {
  display: flex;
  row-gap: 12px;
  column-gap: 24px;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Wrapping Items</h2>

            <p>
              By default, flex items try to stay on a single line. Use{" "}
              <code>flex-wrap</code> when items should move onto additional
              lines when there is not enough space.
            </p>

            <pre>
              <code>{`.container {
  display: flex;
  flex-wrap: wrap;
}`}</code>
            </pre>

            <p>
              This is particularly useful for responsive card layouts and
              groups of buttons.
            </p>
          </section>

          <section>
            <h2>Flex Grow, Shrink, and Basis</h2>

            <p>
              Flex items can control how they grow or shrink using{" "}
              <code>flex-grow</code>, <code>flex-shrink</code>, and{" "}
              <code>flex-basis</code>.
            </p>

            <pre>
              <code>{`.item {
  flex-grow: 1;
}`}</code>
            </pre>

            <p>
              The shorthand <code>flex</code> can combine these properties.
            </p>

            <pre>
              <code>{`.item {
  flex: 1;
}`}</code>
            </pre>

            <p>
              Using <code>flex: 1</code> is a common way to make several
              items share the available space evenly.
            </p>
          </section>

          <section>
            <h2>Aligning Individual Items</h2>

            <p>
              While <code>align-items</code> affects all flex items,{" "}
              <code>align-self</code> allows one specific item to have a
              different alignment.
            </p>

            <pre>
              <code>{`.special-item {
  align-self: flex-end;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Changing Item Order</h2>

            <p>
              The <code>order</code> property changes the visual order of
              flex items without changing the HTML structure.
            </p>

            <pre>
              <code>{`.item-last {
  order: 3;
}`}</code>
            </pre>

            <p>
              The default order is <code>0</code>. Items with lower order
              values appear first.
            </p>
          </section>

          <section>
            <h2>Common Flexbox Layout</h2>

            <p>
              A simple navigation layout can be created with just a few
              Flexbox properties.
            </p>

            <pre>
              <code>{`.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}`}</code>
            </pre>

            <p>
              This pattern is useful for headers, navigation bars, tool
              controls, and other horizontal layouts.
            </p>
          </section>

          <section>
            <h2>Flexbox vs Grid</h2>

            <p>
              Flexbox is primarily designed for one-dimensional layouts:
              either a row or a column.
            </p>

            <p>
              CSS Grid is better suited for two-dimensional layouts where
              both rows and columns need to be controlled.
            </p>

            <p>
              For simple horizontal or vertical alignment, Flexbox is
              usually the easier choice.
            </p>
          </section>

          <section>
            <h2>Practical Tips</h2>

            <ul>
              <li>
                Use <code>gap</code> instead of adding margins between
                flex items when possible.
              </li>
              <li>
                Use <code>flex-wrap: wrap</code> for layouts that need to
                adapt to smaller screens.
              </li>
              <li>
                Use <code>justify-content</code> for main-axis alignment.
              </li>
              <li>
                Use <code>align-items</code> for cross-axis alignment.
              </li>
              <li>
                Use <code>flex: 1</code> when items should share available
                space.
              </li>
              <li>
                Prefer Grid when you need precise control over both rows
                and columns.
              </li>
            </ul>
          </section>

          <section>
            <h2>Build Your Flexbox Layout</h2>

            <p>
              Experiment with Flexbox properties visually and generate
              the CSS you need with CSSKit's Flexbox Generator.
            </p>

            <Link to="/tools/flexbox" className="article-tool-link">
              Open Flexbox Generator →
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