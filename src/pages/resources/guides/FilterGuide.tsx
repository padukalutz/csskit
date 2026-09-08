import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function FilterGuide() {
  useEffect(() => {
    const title = "CSS Filter Guide — CSSKit";

    const description =
      "Learn how CSS filter functions work, including blur, brightness, contrast, grayscale, saturation, hue rotation, sepia, invert, opacity, drop shadows, and practical examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/filter`;

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

    const schemaId = "csskit-filter-guide-schema";

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
        name: "CSS filter",
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

          <h1>CSS Filter Guide</h1>

          <p className="article-intro">
            Learn how CSS filter functions work and how to adjust
            brightness, contrast, blur, saturation, colors, and more
            directly with CSS.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is CSS Filter?</h2>

            <p>
              The <code>filter</code> property applies visual effects to
              an element. It is commonly used with images, backgrounds,
              icons, and other visual elements.
            </p>

            <p>
              Filters can modify properties such as brightness, contrast,
              saturation, color, opacity, and blur without changing the
              original image file.
            </p>
          </section>

          <section>
            <h2>Basic Filter Syntax</h2>

            <p>
              The <code>filter</code> property accepts one or more filter
              functions.
            </p>

            <pre>
              <code>{`.image {
  filter: grayscale(100%);
}`}</code>
            </pre>

            <p>
              Multiple filter functions can be combined in a single
              declaration.
            </p>

            <pre>
              <code>{`.image {
  filter: brightness(80%) contrast(120%);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Blur</h2>

            <p>
              The <code>blur()</code> function applies a Gaussian blur to
              the element.
            </p>

            <pre>
              <code>{`.image {
  filter: blur(5px);
}`}</code>
            </pre>

            <p>
              Larger values produce a stronger blur effect.
            </p>
          </section>

          <section>
            <h2>Brightness</h2>

            <p>
              The <code>brightness()</code> function controls how bright
              an element appears.
            </p>

            <pre>
              <code>{`.image {
  filter: brightness(70%);
}`}</code>
            </pre>

            <p>
              A value below <code>100%</code> makes the element darker,
              while a value above <code>100%</code> makes it brighter.
            </p>
          </section>

          <section>
            <h2>Contrast</h2>

            <p>
              Use <code>contrast()</code> to increase or decrease the
              difference between light and dark areas.
            </p>

            <pre>
              <code>{`.image {
  filter: contrast(130%);
}`}</code>
            </pre>

            <p>
              Values above <code>100%</code> increase contrast, while
              values below <code>100%</code> reduce it.
            </p>
          </section>

          <section>
            <h2>Grayscale</h2>

            <p>
              The <code>grayscale()</code> function removes color from an
              element.
            </p>

            <pre>
              <code>{`.image {
  filter: grayscale(100%);
}`}</code>
            </pre>

            <p>
              A value of <code>0%</code> keeps the original colors, while
              <code>100%</code> produces a fully grayscale result.
            </p>
          </section>

          <section>
            <h2>Saturate</h2>

            <p>
              The <code>saturate()</code> function controls color
              intensity.
            </p>

            <pre>
              <code>{`.image {
  filter: saturate(150%);
}`}</code>
            </pre>

            <p>
              Values above <code>100%</code> make colors more intense,
              while lower values reduce saturation.
            </p>
          </section>

          <section>
            <h2>Hue Rotate</h2>

            <p>
              The <code>hue-rotate()</code> function shifts the colors
              around the color wheel.
            </p>

            <pre>
              <code>{`.image {
  filter: hue-rotate(90deg);
}`}</code>
            </pre>

            <p>
              The value is an angle that determines how far the colors are
              rotated.
            </p>
          </section>

          <section>
            <h2>Sepia</h2>

            <p>
              The <code>sepia()</code> function applies a warm,
              brown-toned effect.
            </p>

            <pre>
              <code>{`.image {
  filter: sepia(100%);
}`}</code>
            </pre>

            <p>
              This is often used to create vintage or retro image effects.
            </p>
          </section>

          <section>
            <h2>Invert</h2>

            <p>
              The <code>invert()</code> function reverses the colors of an
              element.
            </p>

            <pre>
              <code>{`.image {
  filter: invert(100%);
}`}</code>
            </pre>

            <p>
              A value of <code>100%</code> produces a fully inverted
              result.
            </p>
          </section>

          <section>
            <h2>Opacity</h2>

            <p>
              The <code>opacity()</code> filter controls the transparency
              of an element.
            </p>

            <pre>
              <code>{`.image {
  filter: opacity(50%);
}`}</code>
            </pre>

            <p>
              However, for normal transparency effects, the CSS{" "}
              <code>opacity</code> property is often simpler.
            </p>
          </section>

          <section>
            <h2>Drop Shadow</h2>

            <p>
              The <code>drop-shadow()</code> function adds a shadow based
              on the visible shape of an element.
            </p>

            <pre>
              <code>{`.icon {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}`}</code>
            </pre>

            <p>
              Unlike <code>box-shadow</code>, drop shadow follows the
              visible alpha shape of the element.
            </p>
          </section>

          <section>
            <h2>Combining Filters</h2>

            <p>
              Multiple filter functions can be chained together.
            </p>

            <pre>
              <code>{`.image {
  filter:
    brightness(90%)
    contrast(120%)
    saturate(130%)
    blur(1px);
}`}</code>
            </pre>

            <p>
              Filters are applied from left to right, so the order can
              affect the final result.
            </p>
          </section>

          <section>
            <h2>Filter on Hover</h2>

            <p>
              Filters work well with CSS transitions to create interactive
              hover effects.
            </p>

            <pre>
              <code>{`.image {
  transition: filter 0.3s ease;
}

.image:hover {
  filter: brightness(80%) saturate(120%);
}`}</code>
            </pre>

            <p>
              This can create subtle effects when users interact with
              images or cards.
            </p>
          </section>

          <section>
            <h2>Using Filters on Icons</h2>

            <p>
              CSS filters can also be useful for changing the appearance
              of monochrome icons.
            </p>

            <pre>
              <code>{`.icon {
  filter: brightness(0) saturate(100%);
}`}</code>
            </pre>

            <p>
              More advanced combinations can be used to approximate
              different icon colors.
            </p>
          </section>

          <section>
            <h2>Practical Tips</h2>

            <ul>
              <li>
                Use <code>grayscale()</code> for quick monochrome effects.
              </li>
              <li>
                Use <code>blur()</code> for backgrounds and visual depth.
              </li>
              <li>
                Use <code>brightness()</code> and <code>contrast()</code>
                for image adjustments.
              </li>
              <li>
                Use <code>saturate()</code> to make colors more or less
                intense.
              </li>
              <li>
                Combine filters carefully because the order affects the
                final appearance.
              </li>
              <li>
                Use transitions when filters are changed interactively.
              </li>
            </ul>
          </section>

          <section>
            <h2>Create Your CSS Filter</h2>

            <p>
              Experiment with different filter functions and combine them
              to create your own visual effect using CSSKit's CSS Filter
              Generator.
            </p>

            <Link to="/tools/filter" className="article-tool-link">
              Open CSS Filter Generator →
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