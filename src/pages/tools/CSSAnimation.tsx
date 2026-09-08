import { useEffect, useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";

import ToolBreadcrumb from "../../components/tools/ToolBreadcrumb";
import ToolCTA from "../../components/tools/ToolCTA";
import ToolContent from "../../components/tools/ToolContent";
import ToolFAQ from "../../components/tools/ToolFAQ";
import ToolHeader from "../../components/tools/ToolHeader";
import ToolOutput from "../../components/tools/ToolOutput";
import ToolPageLayout from "../../components/tools/ToolPageLayout";
import ToolWorkspace from "../../components/tools/ToolWorkspace";
import RelatedTools from "../../components/tools/RelatedTools";

interface RangeControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
}

function RangeControl({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
}: RangeControlProps) {
  return (
    <div className="tool-control">
      <div className="tool-control-head">
        <span>{label}</span>
        <span>
          {value}
          {unit}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) =>
          onChange(Number(event.target.value))
        }
      />
    </div>
  );
}

interface SelectControlProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function SelectControl({
  label,
  value,
  options,
  onChange,
}: SelectControlProps) {
  return (
    <div className="tool-control">
      <div className="tool-control-head">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

type AnimationName =
  | "fadeIn"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "bounce"
  | "pulse"
  | "rotate";

type TimingFunction =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear";

type FillMode =
  | "none"
  | "forwards"
  | "backwards"
  | "both";

const DEFAULT_ANIMATION: AnimationName =
  "fadeIn";

const DEFAULT_DURATION = 1;
const DEFAULT_DELAY = 0;
const DEFAULT_ITERATION = 1;

const DEFAULT_TIMING: TimingFunction =
  "ease";

const DEFAULT_FILL: FillMode = "both";

const ANIMATION_OPTIONS: AnimationName[] = [
  "fadeIn",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scale",
  "bounce",
  "pulse",
  "rotate",
];

const TIMING_OPTIONS: TimingFunction[] = [
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
  "linear",
];

const FILL_OPTIONS: FillMode[] = [
  "none",
  "forwards",
  "backwards",
  "both",
];

const getKeyframes = (
  animation: AnimationName,
) => {
  switch (animation) {
    case "slideUp":
      return `@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;

    case "slideDown":
      return `@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;

    case "slideLeft":
      return `@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}`;

    case "slideRight":
      return `@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}`;

    case "scale":
      return `@keyframes scale {
  from {
    opacity: 0;
    transform: scale(0.7);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}`;

    case "bounce":
      return `@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}`;

    case "pulse":
      return `@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.08);
    opacity: 0.75;
  }
}`;

    case "rotate":
      return `@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}`;

    case "fadeIn":
    default:
      return `@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}`;
  }
};

const previewKeyframes = `
@keyframes csskitFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes csskitSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes csskitSlideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes csskitSlideLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes csskitSlideRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes csskitScale {
  from {
    opacity: 0;
    transform: scale(0.7);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes csskitBounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes csskitPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.08);
    opacity: 0.75;
  }
}

@keyframes csskitRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
`;

export default function CSSAnimation() {
  const [animation, setAnimation] =
    useState<AnimationName>(
      DEFAULT_ANIMATION,
    );

  const [duration, setDuration] =
    useState(DEFAULT_DURATION);

  const [delay, setDelay] =
    useState(DEFAULT_DELAY);

  const [iteration, setIteration] =
    useState(DEFAULT_ITERATION);

  const [timing, setTiming] =
    useState<TimingFunction>(
      DEFAULT_TIMING,
    );

  const [fillMode, setFillMode] =
    useState<FillMode>(DEFAULT_FILL);

  const [previewKey, setPreviewKey] =
    useState(0);

  const generatedCSS = useMemo(() => {
    const keyframes =
      getKeyframes(animation);

    return `${keyframes}

.animated-element {
  animation-name: ${animation};
  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-timing-function: ${timing};
  animation-iteration-count: ${iteration};
  animation-fill-mode: ${fillMode};
}`;
  }, [
    animation,
    duration,
    delay,
    iteration,
    timing,
    fillMode,
  ]);

  const previewAnimation = useMemo(
    () => ({
      animationName: `csskit${animation
        .charAt(0)
        .toUpperCase()}${animation.slice(1)}`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      animationTimingFunction: timing,
      animationIterationCount: iteration,
      animationFillMode: fillMode,
    }),
    [
      animation,
      duration,
      delay,
      timing,
      iteration,
      fillMode,
    ],
  );

  const replayAnimation = () => {
    setPreviewKey(
      (current) => current + 1,
    );
  };

  const reset = () => {
    setAnimation(DEFAULT_ANIMATION);
    setDuration(DEFAULT_DURATION);
    setDelay(DEFAULT_DELAY);
    setIteration(DEFAULT_ITERATION);
    setTiming(DEFAULT_TIMING);
    setFillMode(DEFAULT_FILL);

    setPreviewKey(
      (current) => current + 1,
    );
  };

  useEffect(() => {
    const styleId =
      "csskit-animation-preview";

    let styleElement =
      document.getElementById(
        styleId,
      ) as HTMLStyleElement | null;

    if (!styleElement) {
      styleElement =
        document.createElement("style");

      styleElement.id = styleId;

      document.head.appendChild(
        styleElement,
      );
    }

    styleElement.textContent =
      previewKeyframes;

    return () => {
      document
        .getElementById(styleId)
        ?.remove();
    };
  }, []);

  useEffect(() => {
    const title =
      "CSS Animation Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS animations visually. Choose an animation preset, adjust duration, delay, timing, iterations, and fill mode, then copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/animation`;

    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string,
    ) => {
      let meta =
        document.querySelector<HTMLMetaElement>(
          `meta[${attribute}="${key}"]`,
        );

      if (!meta) {
        meta =
          document.createElement("meta");

        meta.setAttribute(
          attribute,
          key,
        );

        document.head.appendChild(
          meta,
        );
      }

      meta.setAttribute(
        "content",
        content,
      );
    };

    const setCanonical = (
      href: string,
    ) => {
      let canonical =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]',
        );

      if (!canonical) {
        canonical =
          document.createElement("link");

        canonical.rel = "canonical";

        document.head.appendChild(
          canonical,
        );
      }

      canonical.href = href;
    };

    setMeta(
      "name",
      "description",
      description,
    );

    setMeta(
      "name",
      "robots",
      "index, follow",
    );

    setMeta(
      "property",
      "og:type",
      "website",
    );

    setMeta(
      "property",
      "og:site_name",
      "CSSKit",
    );

    setMeta(
      "property",
      "og:title",
      title,
    );

    setMeta(
      "property",
      "og:description",
      description,
    );

    setMeta(
      "property",
      "og:url",
      canonicalUrl,
    );

    setMeta(
      "name",
      "twitter:card",
      "summary_large_image",
    );

    setMeta(
      "name",
      "twitter:title",
      title,
    );

    setMeta(
      "name",
      "twitter:description",
      description,
    );

    setCanonical(canonicalUrl);

    const faqId =
      "css-animation-generator-faq";

    let faqScript =
      document.getElementById(
        faqId,
      ) as HTMLScriptElement | null;

    if (!faqScript) {
      faqScript =
        document.createElement("script");

      faqScript.id = faqId;

      faqScript.type =
        "application/ld+json";

      document.head.appendChild(
        faqScript,
      );
    }

    faqScript.textContent =
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name:
              "What is a CSS animation?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "A CSS animation changes an element's styles over time using keyframes and animation properties.",
            },
          },
          {
            "@type": "Question",
            name:
              "How do CSS keyframes work?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The @keyframes rule defines the styles an element should have at different points during an animation.",
            },
          },
          {
            "@type": "Question",
            name:
              "What does animation-duration do?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The animation-duration property controls how long one complete animation cycle takes.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I use the generated CSS directly?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Copy the generated CSS and place the keyframes and animation declarations in your stylesheet.",
            },
          },
        ],
      });

    const softwareId =
      "css-animation-generator-software";

    let softwareScript =
      document.getElementById(
        softwareId,
      ) as HTMLScriptElement | null;

    if (!softwareScript) {
      softwareScript =
        document.createElement("script");

      softwareScript.id =
        softwareId;

      softwareScript.type =
        "application/ld+json";

      document.head.appendChild(
        softwareScript,
      );
    }

    softwareScript.textContent =
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name:
          "CSSKit CSS Animation Generator",
        applicationCategory:
          "DeveloperApplication",
        operatingSystem: "Web",
        description,
        url: canonicalUrl,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      });

    return () => {
      document
        .getElementById(faqId)
        ?.remove();

      document
        .getElementById(softwareId)
        ?.remove();
    };
  }, []);

  return (
    <ToolPageLayout>
      <ToolBreadcrumb
        toolName="CSS Animation Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 14"
        title="CSS Animation Generator"
        description="Create smooth CSS animations visually. Choose an animation preset, tune timing and duration, preview it live, and copy the generated CSS."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
          >
            <RotateCcw size={15} />
            Reset
          </button>
        }
      />

      <ToolWorkspace>
        <div className="tool-preview">
          <span className="tool-label">
            LIVE PREVIEW
          </span>

          <div
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 28,
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <div
              key={`${previewKey}-${animation}-${duration}-${delay}-${timing}-${iteration}-${fillMode}`}
              style={{
                width: 180,
                height: 110,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border:
                  "1px solid #e2e2df",
                borderRadius: 16,
                background: "#ffffff",
                color: "#676770",
                fontFamily:
                  '"DM Mono", monospace',
                fontSize: 11,
                fontWeight: 500,
                textAlign: "center",
                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                ...previewAnimation,
              }}
            >
              CSS Animation
            </div>
          </div>

          <button
            className="secondary-button"
            type="button"
            onClick={replayAnimation}
            style={{
              alignSelf: "center",
              marginTop: 4,
            }}
          >
            Replay animation
          </button>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>ANIMATION</span>
          </div>

          <div className="tool-control-list">
            <SelectControl
              label="Animation"
              value={animation}
              options={ANIMATION_OPTIONS}
              onChange={(value) => {
                setAnimation(
                  value as AnimationName,
                );

                setPreviewKey(
                  (current) =>
                    current + 1,
                );
              }}
            />

            <RangeControl
              label="Duration"
              value={duration}
              min={0.1}
              max={5}
              step={0.1}
              unit="s"
              onChange={(value) => {
                setDuration(value);

                setPreviewKey(
                  (current) =>
                    current + 1,
                );
              }}
            />

            <RangeControl
              label="Delay"
              value={delay}
              min={0}
              max={3}
              step={0.1}
              unit="s"
              onChange={(value) => {
                setDelay(value);

                setPreviewKey(
                  (current) =>
                    current + 1,
                );
              }}
            />

            <RangeControl
              label="Iterations"
              value={iteration}
              min={1}
              max={10}
              onChange={(value) => {
                setIteration(value);

                setPreviewKey(
                  (current) =>
                    current + 1,
                );
              }}
            />

            <SelectControl
              label="Timing"
              value={timing}
              options={TIMING_OPTIONS}
              onChange={(value) => {
                setTiming(
                  value as TimingFunction,
                );

                setPreviewKey(
                  (current) =>
                    current + 1,
                );
              }}
            />

            <SelectControl
              label="Fill Mode"
              value={fillMode}
              options={FILL_OPTIONS}
              onChange={(value) => {
                setFillMode(
                  value as FillMode,
                );

                setPreviewKey(
                  (current) =>
                    current + 1,
                );
              }}
            />
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={generatedCSS}
        property="@keyframes"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create CSS animations visually.
          </h2>

          <p>
            Choose an animation preset and adjust
            its timing properties. The preview
            updates as you change the controls.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Choose an animation</b>

                <span>
                  Select a preset such as fade,
                  slide, scale, bounce, pulse, or
                  rotate.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Adjust duration and delay</b>

                <span>
                  Control how quickly the animation
                  runs and when it starts.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Set the timing behavior</b>

                <span>
                  Choose an easing function to control
                  the animation's speed curve.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the generated CSS</b>

                <span>
                  Copy the complete keyframes and
                  animation declaration into your
                  stylesheet.
                </span>
              </div>
            </li>
          </ol>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            CSS FUNDAMENTALS
          </span>

          <h2>
            Understanding CSS animations.
          </h2>

          <p>
            CSS animations allow elements to change
            their styles over time without requiring
            JavaScript.
          </p>

          <p>
            The <code>@keyframes</code> rule defines
            the animation stages, while properties
            such as{" "}
            <code>animation-duration</code>,
            <code>animation-delay</code>, and{" "}
            <code>animation-timing-function</code>{" "}
            control how the animation behaves.
          </p>

          <p>
            CSS animations are useful for entrances,
            loading states, hover effects, attention
            cues, and subtle interface transitions.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            Basic CSS animation syntax.
          </h2>

          <p>
            A CSS animation normally consists of a
            keyframes rule and animation properties
            applied to an element.
          </p>

          <div className="syntax-card">
            <code>
              @keyframes fadeIn {"{"}
              <br />
              &nbsp;&nbsp;from {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;to {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;opacity: 1;
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <br />
              .element {"{"}
              <br />
              &nbsp;&nbsp;animation:
              fadeIn 1s ease both;
              <br />
              {"}"}
            </code>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            EXAMPLES
          </span>

          <h2>
            Common CSS animation patterns.
          </h2>

          <p>
            These examples use real CSS animations
            and run continuously so you can see how
            each animation behaves.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                FADE
              </span>

              <div
                style={{
                  minHeight: 130,
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 60,
                    display: "grid",
                    placeItems: "center",
                    border:
                      "1px solid #e4e4e1",
                    borderRadius: 12,
                    background: "#fff",
                    fontSize: 10,
                    animation:
                      "csskitFadeIn 1.5s ease-in-out infinite alternate",
                  }}
                >
                  Fade
                </div>
              </div>

              <code>
                opacity: 0 → 1
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                SLIDE
              </span>

              <div
                style={{
                  minHeight: 130,
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 60,
                    display: "grid",
                    placeItems: "center",
                    border:
                      "1px solid #e4e4e1",
                    borderRadius: 12,
                    background: "#fff",
                    fontSize: 10,
                    animation:
                      "csskitSlideUp 1.2s ease-in-out infinite alternate",
                  }}
                >
                  Slide Up
                </div>
              </div>

              <code>
                translateY(30px) → 0
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                SCALE
              </span>

              <div
                style={{
                  minHeight: 130,
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 60,
                    display: "grid",
                    placeItems: "center",
                    border:
                      "1px solid #e4e4e1",
                    borderRadius: 12,
                    background: "#fff",
                    fontSize: 10,
                    animation:
                      "csskitScale 1.2s ease-in-out infinite alternate",
                  }}
                >
                  Scale
                </div>
              </div>

              <code>
                scale(0.7) → scale(1)
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Make animations feel intentional.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Keep UI motion subtle</b>

              <p>
                Short and restrained animations
                usually feel more natural for
                interface elements.
              </p>
            </div>

            <div>
              <b>Use easing</b>

              <p>
                Easing functions help animations feel
                smoother than constant linear motion.
              </p>
            </div>

            <div>
              <b>Avoid excessive animation</b>

              <p>
                Not every element needs to move.
                Reserve animation for meaningful
                interactions and feedback.
              </p>
            </div>

            <div>
              <b>Respect user preferences</b>

              <p>
                Consider reducing non-essential motion
                for users who prefer reduced motion.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is a CSS animation?",
              answer:
                "A CSS animation changes an element's styles over time using keyframes and animation properties.",
            },
            {
              question:
                "How do CSS keyframes work?",
              answer:
                "The @keyframes rule defines the styles an element should have at different points during an animation.",
            },
            {
              question:
                "What does animation-duration do?",
              answer:
                "The animation-duration property controls how long one complete animation cycle takes.",
            },
            {
              question:
                "Can I use the generated CSS directly?",
              answer:
                "Yes. Copy the generated CSS and place the keyframes and animation declarations in your stylesheet.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "CSS Transform",
              href: "/tools/transform",
            },
            {
              name: "CSS Filter",
              href: "/tools/filter",
            },
            {
              name: "Button Generator",
              href: "/tools/button",
            },
          ]}
        />
      </ToolContent>

      <ToolCTA
        title="CSSKit is now complete."
        description="All 14 CSS generators are ready. Explore the complete CSSKit toolkit."
        href="/tools"
        label="Explore all tools"
      />
    </ToolPageLayout>
  );
}