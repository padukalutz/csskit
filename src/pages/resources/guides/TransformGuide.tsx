import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function TransformGuide() {
  useEffect(() => {
    const title = "CSS Transform Guide — CSSKit";

    const description =
      "Learn how CSS transforms work, including translate, rotate, scale, skew, transform-origin, 3D transforms, hover effects, and practical examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/transform`;

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

    const schemaId = "csskit-transform-guide-schema";

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
        name: "CSS transform",
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

          <h1>CSS Transform Guide</h1>

          <p className="article-intro">
            Learn how CSS transforms work and how to move, rotate, scale,
            skew, and position elements without changing the normal
            document flow.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is CSS Transform?</h2>

            <p>
              The <code>transform</code> property allows you to visually
              modify an element using operations such as translation,
              rotation, scaling, and skewing.
            </p>

            <p>
              Transforms are commonly used for hover effects, animations,
              interactive components, cards, buttons, and UI elements.
            </p>
          </section>

          <section>
            <h2>Basic Transform Syntax</h2>

            <p>
              A transform function can be applied directly to an element.
            </p>

            <pre>
              <code>{`.box {
  transform: translateX(20px);
}`}</code>
            </pre>

            <p>
              Multiple transform functions can also be combined.
            </p>

            <pre>
              <code>{`.box {
  transform: translateX(20px) rotate(10deg);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Translate</h2>

            <p>
              The <code>translate()</code> functions move an element from
              its original position.
            </p>

            <pre>
              <code>{`.box {
  transform: translate(20px, 10px);
}`}</code>
            </pre>

            <p>
              The first value controls horizontal movement and the second
              controls vertical movement.
            </p>

            <p>
              You can also move along a single axis.
            </p>

            <pre>
              <code>{`.box {
  transform: translateX(20px);
}`}</code>
            </pre>

            <pre>
              <code>{`.box {
  transform: translateY(10px);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Rotate</h2>

            <p>
              The <code>rotate()</code> function rotates an element around
              its transform origin.
            </p>

            <pre>
              <code>{`.box {
  transform: rotate(15deg);
}`}</code>
            </pre>

            <p>
              Negative values rotate the element in the opposite direction.
            </p>
          </section>

          <section>
            <h2>Scale</h2>

            <p>
              The <code>scale()</code> function changes the size of an
              element visually.
            </p>

            <pre>
              <code>{`.box {
  transform: scale(1.2);
}`}</code>
            </pre>

            <p>
              A value of <code>1</code> keeps the original size. Values
              greater than <code>1</code> enlarge the element, while values
              between <code>0</code> and <code>1</code> make it smaller.
            </p>

            <p>
              You can scale horizontally and vertically independently.
            </p>

            <pre>
              <code>{`.box {
  transform: scale(1.2, 0.8);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Skew</h2>

            <p>
              The <code>skew()</code> function tilts an element along its
              axes.
            </p>

            <pre>
              <code>{`.box {
  transform: skew(10deg, 5deg);
}`}</code>
            </pre>

            <p>
              You can also skew along one axis.
            </p>

            <pre>
              <code>{`.box {
  transform: skewX(10deg);
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Transform Origin</h2>

            <p>
              By default, transforms are applied around the center of an
              element. The <code>transform-origin</code> property changes
              that point.
            </p>

            <pre>
              <code>{`.box {
  transform-origin: top left;
  transform: rotate(15deg);
}`}</code>
            </pre>

            <p>
              This is useful when you want an element to rotate or scale
              from a specific corner or edge.
            </p>
          </section>

          <section>
            <h2>Combining Transforms</h2>

            <p>
              Multiple transform functions can be combined in a single
              declaration.
            </p>

            <pre>
              <code>{`.card {
  transform:
    translateY(-8px)
    rotate(2deg)
    scale(1.02);
}`}</code>
            </pre>

            <p>
              The order of transform functions matters because each
              transformation affects the coordinate system used by the
              following transformation.
            </p>
          </section>

          <section>
            <h2>Transform on Hover</h2>

            <p>
              Transform is frequently combined with{" "}
              <code>transition</code> to create smooth interactions.
            </p>

            <pre>
              <code>{`.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
}`}</code>
            </pre>

            <p>
              This creates a simple lift effect when the user hovers over
              the card.
            </p>
          </section>

          <section>
            <h2>Scaling Buttons</h2>

            <p>
              A small scale transformation can provide useful feedback on
              interactive elements.
            </p>

            <pre>
              <code>{`.button {
  transition: transform 0.2s ease;
}

.button:hover {
  transform: scale(1.04);
}`}</code>
            </pre>

            <p>
              Keep the scale subtle so the interface remains comfortable
              to use.
            </p>
          </section>

          <section>
            <h2>Moving Elements</h2>

            <p>
              Transforms can visually move elements without affecting the
              position of surrounding elements in the normal document
              layout.
            </p>

            <pre>
              <code>{`.badge {
  transform: translateY(-4px);
}`}</code>
            </pre>

            <p>
              This makes transforms useful for decorative positioning and
              animations.
            </p>
          </section>

          <section>
            <h2>3D Transforms</h2>

            <p>
              CSS also supports three-dimensional transformations such as
              <code>translateZ()</code>, <code>rotateX()</code>, and{" "}
              <code>rotateY()</code>.
            </p>

            <pre>
              <code>{`.card {
  transform: rotateY(12deg);
}`}</code>
            </pre>

            <p>
              3D effects can be combined with properties such as{" "}
              <code>perspective</code> to create depth.
            </p>
          </section>

          <section>
            <h2>Transform vs Position</h2>

            <p>
              Transform is useful when you need to visually move an
              element without changing the surrounding layout.
            </p>

            <p>
              Properties such as <code>top</code>, <code>left</code>,{" "}
              <code>right</code>, and <code>bottom</code> are instead
              associated with positioned elements.
            </p>

            <p>
              For animations and interactive movement, transforms are often
              a better choice.
            </p>
          </section>

          <section>
            <h2>Practical Tips</h2>

            <ul>
              <li>
                Use <code>translate()</code> to move elements visually.
              </li>
              <li>
                Use <code>rotate()</code> for rotation effects.
              </li>
              <li>
                Use <code>scale()</code> for subtle hover and interaction
                effects.
              </li>
              <li>
                Use <code>skew()</code> for angled or stylized designs.
              </li>
              <li>
                Use <code>transform-origin</code> when the default center
                point is not suitable.
              </li>
              <li>
                Combine transforms with <code>transition</code> for smooth
                interactions.
              </li>
              <li>
                Keep interactive transformations subtle and purposeful.
              </li>
            </ul>
          </section>

          <section>
            <h2>Create Your CSS Transform</h2>

            <p>
              Experiment with translation, rotation, scaling, and skewing
              using CSSKit's CSS Transform Generator.
            </p>

            <Link to="/tools/transform" className="article-tool-link">
              Open CSS Transform Generator →
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