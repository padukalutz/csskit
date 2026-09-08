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

const DEFAULTS = {
  x: 2,
  y: 2,
  blur: 4,
  opacity: 35,
  color: "#17171c",
};

const faqItems = [
  {
    question: "What is CSS text-shadow?",
    answer:
      "The text-shadow property adds one or more shadows around text. You can control the horizontal offset, vertical offset, blur radius, and color.",
  },
  {
    question: "How do I create a text shadow in CSS?",
    answer:
      "Use text-shadow followed by horizontal offset, vertical offset, blur radius, and color. For example: text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);",
  },
  {
    question: "Can I create multiple text shadows?",
    answer:
      "Yes. CSS supports multiple text shadows by separating each shadow with a comma. This can be used for layered depth, glow effects, and decorative typography.",
  },
  {
    question: "Does text-shadow affect layout?",
    answer:
      "No. A text shadow is a visual effect and does not change the layout dimensions of the element.",
  },
];

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix?: string;
  onChange: (value: number) => void;
}

function Slider({
  label,
  value,
  min,
  max,
  suffix = "px",
  onChange,
}: SliderProps) {
  return (
    <label className="tool-control">
      <div className="tool-control-head">
        <span>{label}</span>

        <span>
          {value}
          {suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) =>
          onChange(Number(event.target.value))
        }
      />
    </label>
  );
}

export default function TextShadow() {
  const [x, setX] = useState(DEFAULTS.x);
  const [y, setY] = useState(DEFAULTS.y);
  const [blur, setBlur] = useState(DEFAULTS.blur);
  const [opacity, setOpacity] = useState(DEFAULTS.opacity);
  const [color, setColor] = useState(DEFAULTS.color);

  useEffect(() => {
    const title =
      "Text Shadow Generator — Free CSS Tool | CSSKit";

    const description =
      "Create CSS text shadows visually with CSSKit's free Text Shadow Generator. Adjust offset, blur, color, and opacity, then copy the CSS instantly.";

    const canonicalUrl =
      `${window.location.origin}/tools/text-shadow`;

    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string,
    ) => {
      let element =
        document.querySelector<HTMLMetaElement>(
          `meta[${attribute}="${key}"]`,
        );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setCanonical = (href: string) => {
      let canonical =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]',
        );

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }

      canonical.setAttribute("href", href);
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
      "summary",
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

    const faqSchemaId =
      "text-shadow-faq-schema";

    document
      .getElementById(faqSchemaId)
      ?.remove();

    const faqSchema =
      document.createElement("script");

    faqSchema.id = faqSchemaId;
    faqSchema.type = "application/ld+json";

    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });

    document.head.appendChild(faqSchema);

    const toolSchemaId =
      "text-shadow-tool-schema";

    document
      .getElementById(toolSchemaId)
      ?.remove();

    const toolSchema =
      document.createElement("script");

    toolSchema.id = toolSchemaId;
    toolSchema.type = "application/ld+json";

    toolSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "CSSKit Text Shadow Generator",
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

    document.head.appendChild(toolSchema);

    return () => {
      faqSchema.remove();
      toolSchema.remove();
    };
  }, []);

  const shadowColor = useMemo(() => {
    const hex = color.replace("#", "");

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${(opacity / 100).toFixed(2)})`;
  }, [color, opacity]);

  const shadowValue =
    `${x}px ${y}px ${blur}px ${shadowColor}`;

  const cssOutput = `text-shadow: ${shadowValue};`;

  const reset = () => {
    setX(DEFAULTS.x);
    setY(DEFAULTS.y);
    setBlur(DEFAULTS.blur);
    setOpacity(DEFAULTS.opacity);
    setColor(DEFAULTS.color);
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb toolName="Text Shadow" />

      <ToolHeader
        eyebrow="CSS TOOL / 02"
        title="Text Shadow Generator"
        description="Create clean CSS text shadows visually. Adjust offset, blur, color, and opacity, then copy the result instantly."
        action={
          <button
            className="tool-reset-button"
            type="button"
            onClick={reset}
          >
            <RotateCcw size={14} />
            Reset
          </button>
        }
      />

      <ToolWorkspace>
        <div className="tool-preview tool-preview-text">
          <span className="tool-label">
            LIVE PREVIEW
          </span>

          <div className="tool-preview-stage">
            <div
              className="tool-preview-content"
              style={{
                textShadow: shadowValue,
              }}
            >
              CSS
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>REAL TIME</span>
          </div>

          <div className="tool-control-list">
            <Slider
              label="Horizontal Offset"
              value={x}
              min={-30}
              max={30}
              onChange={setX}
            />

            <Slider
              label="Vertical Offset"
              value={y}
              min={-30}
              max={30}
              onChange={setY}
            />

            <Slider
              label="Blur Radius"
              value={blur}
              min={0}
              max={40}
              onChange={setBlur}
            />

            <Slider
              label="Opacity"
              value={opacity}
              min={0}
              max={100}
              suffix="%"
              onChange={setOpacity}
            />
          </div>

          <div className="tool-color">
            <div>
              <span className="tool-field-label">
                Shadow Color
              </span>

              <span className="tool-field-description">
                Choose the shadow color.
              </span>
            </div>

            <label
              className="tool-color-picker"
              style={{ background: color }}
            >
              <input
                type="color"
                value={color}
                onChange={(event) =>
                  setColor(event.target.value)
                }
                aria-label="Shadow color"
              />
            </label>

            <span className="tool-color-value">
              {color.toUpperCase()}
            </span>
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={cssOutput}
        property="text-shadow"
      />

      <ToolContent>
        <section className="tool-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create a text shadow in seconds.
          </h2>

          <p>
            Use the controls above to adjust the shadow
            position, blur, color, and opacity. The preview
            updates instantly as you change each value.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Adjust the horizontal offset.</b>
                <span>
                  Move the shadow horizontally to control
                  its position around the text.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Set the vertical offset and blur.</b>
                <span>
                  Control the shadow direction and softness
                  to create the desired depth.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Choose a color and opacity.</b>
                <span>
                  Pick a shadow color and adjust its opacity
                  for a subtle or stronger effect.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the generated CSS.</b>
                <span>
                  Copy the finished text-shadow declaration
                  and paste it directly into your stylesheet.
                </span>
              </div>
            </li>
          </ol>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            CSS FUNDAMENTALS
          </span>

          <h2>What does text-shadow do?</h2>

          <p>
            The CSS <code>text-shadow</code> property adds
            visual shadows around text without changing the
            document layout. It is commonly used to improve
            contrast, add depth, create glow effects, or give
            typography a more distinctive appearance.
          </p>

          <p>
            Unlike box-shadow, which applies to an element's
            box, text-shadow follows the rendered shape of the
            characters themselves.
          </p>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>Understanding the CSS syntax.</h2>

          <div className="tool-syntax">
            <span>Basic syntax</span>

            <code>
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
            </code>
          </div>

          <p>
            The first value controls the horizontal offset,
            the second controls the vertical offset, the third
            controls blur, and the final value controls the
            shadow color.
          </p>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            EXAMPLES
          </span>

          <h2>Text shadow styles to try.</h2>

          <p>
            Experiment with different shadow styles to create
            subtle depth, stronger contrast, glowing text, or
            expressive offset effects.
          </p>

          <div className="tool-example-grid">
            <article className="tool-example text-example">
              <div className="text-example-object soft">
                Soft
              </div>

              <div>
                <strong>Soft Shadow</strong>
                <span>
                  Subtle depth for headings and interface text.
                </span>
              </div>
            </article>

            <article className="tool-example text-example">
              <div className="text-example-object dark">
                Dark
              </div>

              <div>
                <strong>Dark Shadow</strong>
                <span>
                  Stronger contrast for bold typography.
                </span>
              </div>
            </article>

            <article className="tool-example text-example">
              <div className="text-example-object glow">
                Glow
              </div>

              <div>
                <strong>Glow Effect</strong>
                <span>
                  Bright layered shadows create a glowing effect.
                </span>
              </div>
            </article>

            <article className="tool-example text-example">
              <div className="text-example-object offset">
                Offset
              </div>

              <div>
                <strong>Offset Shadow</strong>
                <span>
                  Larger offsets create a more expressive style.
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>Keep text shadows intentional.</h2>

          <div className="tool-tips">
            <div>
              <strong>Use subtle values</strong>
              <p>
                Small offsets and moderate blur usually work
                better for interface typography.
              </p>
            </div>

            <div>
              <strong>Watch contrast</strong>
              <p>
                Make sure the shadow supports readability
                instead of competing with the text.
              </p>
            </div>

            <div>
              <strong>Try multiple shadows</strong>
              <p>
                Layer shadows when you need glow, depth, or
                more decorative effects.
              </p>
            </div>

            <div>
              <strong>Match your visual style</strong>
              <p>
                Keep shadow color, opacity, and direction
                consistent across your interface.
              </p>
            </div>
          </div>
        </section>

        <section className="tool-section tool-faq">
          <span className="section-kicker">FAQ</span>
          <h2>Text shadow questions.</h2>
          <ToolFAQ items={faqItems} />
        </section>
      </ToolContent>

      <RelatedTools
        tools={[
          {
            name: "Box Shadow",
            href: "/tools/box-shadow",
          },
          {
            name: "Gradients",
            href: "/tools/gradient",
          },
          {
            name: "Typography",
            href: "/tools/typography",
          },
        ]}
      />

      <ToolCTA
        title="Build better CSS, faster."
        description="CSSKit gives you focused CSS utilities without unnecessary complexity."
        href="/tools"
        label="Explore all tools"
      />
    </ToolPageLayout>
  );
}