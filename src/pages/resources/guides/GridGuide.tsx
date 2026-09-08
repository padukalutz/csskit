import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function GridGuide() {
  useEffect(() => {
    const title = "CSS Grid Guide — CSSKit";

    const description =
      "Learn how CSS Grid works, including columns, rows, gap, spanning, alignment, responsive layouts, grid areas, and practical CSS examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/grid`;

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

    const schemaId = "csskit-grid-guide-schema";

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
        name: "CSS Grid",
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

          <h1>CSS Grid Guide</h1>

          <p className="article-intro">
            Learn how CSS Grid works and how to build flexible,
            responsive two-dimensional layouts with rows and columns.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is CSS Grid?</h2>

            <p>
              CSS Grid is a layout system designed for creating
              two-dimensional layouts. It allows you to control both rows
              and columns, making it useful for complex page structures,
              card grids, dashboards, and responsive interfaces.
            </p>

            <p>
              Unlike Flexbox, which is primarily designed for one
              dimension, Grid gives you direct control over two dimensions
              at the same time.
            </p>
          </section>

          <section>
            <h2>Creating a Grid Container</h2>

            <p>
              To start using CSS Grid, set the parent element to{" "}
              <code>display: grid</code>.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
}`}</code>
            </pre>

            <p>
              The direct children of the container automatically become
              grid items.
            </p>
          </section>

          <section>
            <h2>Creating Columns</h2>

            <p>
              The <code>grid-template-columns</code> property defines the
              columns inside the grid.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`}</code>
            </pre>

            <p>
              This creates three columns with equal widths.
            </p>

            <p>
              You can also use different proportions.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
}`}</code>
            </pre>

            <p>
              The first column receives twice as much available space as
              the second column.
            </p>
          </section>

          <section>
            <h2>Using Repeat</h2>

            <p>
              The <code>repeat()</code> function makes repeated grid
              definitions shorter and easier to read.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`}</code>
            </pre>

            <p>
              This creates three equal columns.
            </p>
          </section>

          <section>
            <h2>Rows</h2>

            <p>
              Use <code>grid-template-rows</code> to define the size of
              grid rows.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  grid-template-rows: 100px 200px;
}`}</code>
            </pre>

            <p>
              You can also use flexible units such as <code>fr</code>.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  grid-template-rows: 1fr 2fr;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Gap</h2>

            <p>
              The <code>gap</code> property controls the spacing between
              grid rows and columns.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  gap: 24px;
}`}</code>
            </pre>

            <p>
              You can also define row and column gaps separately.
            </p>

            <pre>
              <code>{`.container {
  row-gap: 16px;
  column-gap: 24px;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Grid Item Spanning</h2>

            <p>
              Grid items can span multiple columns using{" "}
              <code>grid-column</code>.
            </p>

            <pre>
              <code>{`.featured {
  grid-column: span 2;
}`}</code>
            </pre>

            <p>
              You can also specify exact grid lines.
            </p>

            <pre>
              <code>{`.featured {
  grid-column: 1 / 3;
}`}</code>
            </pre>

            <p>
              This makes the item occupy columns between grid lines 1 and
              3.
            </p>
          </section>

          <section>
            <h2>Grid Row Spanning</h2>

            <p>
              The same concept can be applied vertically with{" "}
              <code>grid-row</code>.
            </p>

            <pre>
              <code>{`.featured {
  grid-row: span 2;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Aligning Grid Items</h2>

            <p>
              CSS Grid provides several properties for controlling
              alignment.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  align-items: center;
  justify-items: center;
}`}</code>
            </pre>

            <p>
              <code>align-items</code> controls alignment along the block
              axis, while <code>justify-items</code> controls alignment
              along the inline axis.
            </p>
          </section>

          <section>
            <h2>Aligning the Entire Grid</h2>

            <p>
              When the grid itself has extra available space,{" "}
              <code>align-content</code> and{" "}
              <code>justify-content</code> can control its position.
            </p>

            <pre>
              <code>{`.container {
  display: grid;
  justify-content: center;
  align-content: center;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Responsive Grid</h2>

            <p>
              One of the most useful Grid patterns is creating responsive
              columns with <code>minmax()</code> and{" "}
              <code>auto-fit</code>.
            </p>

            <pre>
              <code>{`.cards {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(240px, 1fr)
  );
  gap: 24px;
}`}</code>
            </pre>

            <p>
              The browser automatically adjusts the number of columns
              depending on the available width.
            </p>
          </section>

          <section>
            <h2>Named Grid Areas</h2>

            <p>
              Grid areas allow you to describe a page layout using named
              regions.
            </p>

            <pre>
              <code>{`.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "sidebar main";
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}`}</code>
            </pre>

            <p>
              This approach can make larger layouts easier to understand
              and maintain.
            </p>
          </section>

          <section>
            <h2>Grid vs Flexbox</h2>

            <p>
              Flexbox is generally better when arranging content in one
              direction, such as a row of navigation items or a vertical
              stack of controls.
            </p>

            <p>
              Grid is better when you need to control rows and columns
              together, such as a dashboard or card-based page layout.
            </p>

            <p>
              They can also be used together. For example, Grid can control
              the overall page structure while Flexbox handles the content
              inside individual components.
            </p>
          </section>

          <section>
            <h2>Practical Tips</h2>

            <ul>
              <li>
                Use <code>fr</code> units when you want flexible columns.
              </li>
              <li>
                Use <code>gap</code> for consistent spacing between grid
                items.
              </li>
              <li>
                Use <code>minmax()</code> for flexible responsive tracks.
              </li>
              <li>
                Use <code>repeat()</code> to simplify repeated columns or
                rows.
              </li>
              <li>
                Use <code>grid-template-areas</code> for readable complex
                layouts.
              </li>
              <li>
                Combine Grid and Flexbox when each system fits a different
                part of the interface.
              </li>
            </ul>
          </section>

          <section>
            <h2>Build Your Grid Layout</h2>

            <p>
              Experiment with CSS Grid properties visually and generate
              the CSS you need with CSSKit's Grid Generator.
            </p>

            <Link to="/tools/grid" className="article-tool-link">
              Open Grid Generator →
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