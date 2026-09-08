import { useEffect } from "react";
import { Link } from "react-router-dom";
import ToolPageLayout from "../../../components/tools/ToolPageLayout";

export default function AnimationGuide() {
  useEffect(() => {
    const title = "CSS Animation Guide — CSSKit";

    const description =
      "Learn CSS animations with keyframes, duration, timing functions, delays, iteration counts, transforms, staggered effects, reduced motion, and practical examples.";

    const canonicalUrl =
      `${window.location.origin}/resources/guides/animation`;

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

    const schemaId = "csskit-animation-guide-schema";

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
        name: "CSS animations",
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

          <h1>CSS Animation Guide</h1>

          <p className="article-intro">
            Learn how CSS animations work and how to create smooth,
            reusable motion effects using keyframes and animation
            properties.
          </p>
        </header>

        <div className="resource-article-content">
          <section>
            <h2>What is CSS Animation?</h2>

            <p>
              CSS animations allow you to change an element from one style
              state to another over time. They can create movement, fades,
              rotations, scaling effects, and many other visual effects
              without JavaScript.
            </p>

            <p>
              CSS animations are commonly used for loading indicators,
              notifications, buttons, page elements, and decorative
              effects.
            </p>
          </section>

          <section>
            <h2>Creating a Keyframe Animation</h2>

            <p>
              CSS animations are usually defined with the{" "}
              <code>@keyframes</code> rule.
            </p>

            <pre>
              <code>{`@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}`}</code>
            </pre>

            <p>
              The animation can then be applied to an element.
            </p>

            <pre>
              <code>{`.box {
  animation: fadeIn 1s ease;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Animation Duration</h2>

            <p>
              The <code>animation-duration</code> property controls how
              long an animation takes to complete.
            </p>

            <pre>
              <code>{`.box {
  animation-duration: 1s;
}`}</code>
            </pre>

            <p>
              You can use seconds such as <code>1s</code> or milliseconds
              such as <code>300ms</code>.
            </p>
          </section>

          <section>
            <h2>Animation Timing Function</h2>

            <p>
              The <code>animation-timing-function</code> property controls
              the speed curve of an animation.
            </p>

            <pre>
              <code>{`.box {
  animation-timing-function: ease;
}`}</code>
            </pre>

            <p>Common values include:</p>

            <ul>
              <li><code>linear</code> — constant speed.</li>
              <li><code>ease</code> — starts and ends more gradually.</li>
              <li><code>ease-in</code> — starts slowly.</li>
              <li><code>ease-out</code> — ends slowly.</li>
              <li><code>ease-in-out</code> — starts and ends slowly.</li>
            </ul>
          </section>

          <section>
            <h2>Animation Delay</h2>

            <p>
              Use <code>animation-delay</code> to wait before starting an
              animation.
            </p>

            <pre>
              <code>{`.box {
  animation-delay: 500ms;
}`}</code>
            </pre>

            <p>
              Delays are useful for staggered animations and effects that
              should begin after another event.
            </p>
          </section>

          <section>
            <h2>Animation Iteration Count</h2>

            <p>
              The <code>animation-iteration-count</code> property controls
              how many times an animation runs.
            </p>

            <pre>
              <code>{`.loader {
  animation-iteration-count: infinite;
}`}</code>
            </pre>

            <p>
              Use <code>infinite</code> when an animation should continue
              repeating.
            </p>
          </section>

          <section>
            <h2>Animation Direction</h2>

            <p>
              The <code>animation-direction</code> property controls the
              direction in which keyframes are played.
            </p>

            <pre>
              <code>{`.box {
  animation-direction: alternate;
}`}</code>
            </pre>

            <p>
              <code>alternate</code> makes each iteration play in the
              opposite direction.
            </p>
          </section>

          <section>
            <h2>Animation Fill Mode</h2>

            <p>
              The <code>animation-fill-mode</code> property determines
              which styles apply before and after an animation.
            </p>

            <pre>
              <code>{`.box {
  animation-fill-mode: forwards;
}`}</code>
            </pre>

            <p>
              With <code>forwards</code>, the element keeps the styles from
              the final keyframe after the animation finishes.
            </p>
          </section>

          <section>
            <h2>Animation Play State</h2>

            <p>
              You can pause and resume an animation using{" "}
              <code>animation-play-state</code>.
            </p>

            <pre>
              <code>{`.box:hover {
  animation-play-state: paused;
}`}</code>
            </pre>

            <p>
              This can be useful for interactive animations.
            </p>
          </section>

          <section>
            <h2>Moving an Element</h2>

            <p>
              CSS transforms work especially well with animations.
            </p>

            <pre>
              <code>{`@keyframes slideIn {
  from {
    transform: translateX(-40px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.box {
  animation: slideIn 600ms ease-out;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Scaling an Element</h2>

            <p>
              You can animate <code>scale()</code> to create subtle
              entrance and interaction effects.
            </p>

            <pre>
              <code>{`@keyframes popIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.card {
  animation: popIn 400ms ease-out;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Rotating Elements</h2>

            <p>
              Rotation is useful for loaders, icons, and decorative
              elements.
            </p>

            <pre>
              <code>{`@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin 1s linear infinite;
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Multiple Keyframes</h2>

            <p>
              Keyframes can contain multiple percentage points for more
              complex animations.
            </p>

            <pre>
              <code>{`@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}`}</code>
            </pre>

            <p>
              This allows you to define several stages instead of only a
              starting and ending state.
            </p>
          </section>

          <section>
            <h2>Using the Animation Shorthand</h2>

            <p>
              Multiple animation properties can be combined using the{" "}
              <code>animation</code> shorthand.
            </p>

            <pre>
              <code>{`.box {
  animation:
    fadeIn 500ms ease-out
    200ms
    1
    normal
    forwards;
}`}</code>
            </pre>

            <p>
              For simple animations, the shorthand keeps the CSS compact
              and readable.
            </p>
          </section>

          <section>
            <h2>Staggered Animations</h2>

            <p>
              Different elements can use different delays to create a
              staggered effect.
            </p>

            <pre>
              <code>{`.item:nth-child(1) {
  animation-delay: 0ms;
}

.item:nth-child(2) {
  animation-delay: 100ms;
}

.item:nth-child(3) {
  animation-delay: 200ms;
}`}</code>
            </pre>

            <p>
              This technique is useful for lists, cards, and navigation
              elements.
            </p>
          </section>

          <section>
            <h2>Respecting Reduced Motion</h2>

            <p>
              Some users prefer reduced motion because animations can be
              uncomfortable or distracting.
            </p>

            <p>
              The <code>prefers-reduced-motion</code> media query can be
              used to reduce or disable non-essential animations.
            </p>

            <pre>
              <code>{`@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    scroll-behavior: auto;
  }
}`}</code>
            </pre>
          </section>

          <section>
            <h2>Practical Tips</h2>

            <ul>
              <li>
                Keep animations short when they are used for interface
                feedback.
              </li>
              <li>
                Prefer <code>transform</code> and <code>opacity</code> for
                smooth animations.
              </li>
              <li>
                Use <code>ease-out</code> for many entrance animations.
              </li>
              <li>
                Use <code>linear</code> for continuously rotating loaders.
              </li>
              <li>
                Avoid animating too many elements simultaneously.
              </li>
              <li>
                Use staggered delays carefully so animations do not feel
                slow.
              </li>
              <li>
                Respect <code>prefers-reduced-motion</code> for better
                accessibility.
              </li>
            </ul>
          </section>

          <section>
            <h2>Create Your CSS Animation</h2>

            <p>
              Experiment with keyframes, timing, duration, delays, and
              transforms using CSSKit's CSS Animation Generator.
            </p>

            <Link to="/tools/animation" className="article-tool-link">
              Open CSS Animation Generator →
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