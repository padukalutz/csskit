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
  x: 0,
  y: 12,
  blur: 28,
  spread: 0,
  opacity: 18,
  color: "#17171c",
  inset: false,
};

const examples = [
  {
    name: "Soft",
    value: "0 10px 30px rgba(0, 0, 0, 0.12)",
  },
  {
    name: "Elevated",
    value: "0 16px 40px rgba(0, 0, 0, 0.16)",
  },
  {
    name: "Sharp",
    value: "4px 4px 0 rgba(0, 0, 0, 0.16)",
  },
];

const faqs = [
  {
    question: "What is CSS box-shadow?",
    answer:
      "The CSS box-shadow property adds one or more shadows around an element. It can be used to create depth, elevation, borders, soft surfaces, and other visual effects without adding extra HTML elements.",
  },
  {
    question: "What do the box-shadow values mean?",
    answer:
      "A basic box-shadow uses horizontal offset, vertical offset, blur radius, spread radius, and color. Horizontal and vertical offsets control the shadow position, while blur controls softness and spread controls its size.",
  },
  {
    question: "Can I create an inset shadow?",
    answer:
      "Yes. Enable Inset shadow in the generator to place the shadow inside the element rather than outside it.",
  },
  {
    question: "Is this box-shadow generator free?",
    answer:
      "Yes. CSSKit's Box Shadow Generator is free to use and runs directly in your browser.",
  },
  {
    question: "Does CSSKit send my CSS to a server?",
    answer:
      "No. The generator works client-side in your browser. The values are calculated locally and the generated CSS can be copied directly from the page.",
  },
];

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (value: number) => void;
}

function Slider({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}: SliderProps) {
  return (
    <label className="tool-control">
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
        value={value}
        onChange={(event) =>
          onChange(Number(event.target.value))
        }
      />
    </label>
  );
}

export default function BoxShadow() {
  const [x, setX] = useState(DEFAULTS.x);
  const [y, setY] = useState(DEFAULTS.y);
  const [blur, setBlur] = useState(DEFAULTS.blur);
  const [spread, setSpread] = useState(DEFAULTS.spread);
  const [opacity, setOpacity] = useState(DEFAULTS.opacity);
  const [color, setColor] = useState(DEFAULTS.color);
  const [inset, setInset] = useState(DEFAULTS.inset);

  useEffect(() => {
    const title =
      "Box Shadow Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS box shadows visually. Adjust offset, blur, spread, opacity, color, and inset shadows, then copy the generated CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/box-shadow`;

    document.title = title;

    const setMeta = (
      selector: string,
      attribute: string,
      value: string,
    ) => {
      let element =
        document.querySelector<HTMLMetaElement>(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);
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
      'meta[name="description"]',
      "name",
      description,
    );

    setMeta(
      'meta[name="robots"]',
      "name",
      "index, follow",
    );

    setMeta(
      'meta[property="og:type"]',
      "property",
      "website",
    );

    setMeta(
      'meta[property="og:site_name"]',
      "property",
      "CSSKit",
    );

    setMeta(
      'meta[property="og:title"]',
      "property",
      title,
    );

    setMeta(
      'meta[property="og:description"]',
      "property",
      description,
    );

    setMeta(
      'meta[property="og:url"]',
      "property",
      canonicalUrl,
    );

    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "summary",
    );

    setMeta(
      'meta[name="twitter:title"]',
      "name",
      title,
    );

    setMeta(
      'meta[name="twitter:description"]',
      "name",
      description,
    );

    setCanonical(canonicalUrl);

    document
      .getElementById("box-shadow-faq-schema")
      ?.remove();

    const faqSchema =
      document.createElement("script");

    faqSchema.id = "box-shadow-faq-schema";
    faqSchema.type = "application/ld+json";

    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });

    document.head.appendChild(faqSchema);

    document
      .getElementById("box-shadow-tool-schema")
      ?.remove();

    const toolSchema =
      document.createElement("script");

    toolSchema.id = "box-shadow-tool-schema";
    toolSchema.type = "application/ld+json";

    toolSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "CSSKit Box Shadow Generator",
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
    `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${shadowColor}`;

  const cssOutput = `box-shadow: ${shadowValue};`;

  const reset = () => {
    setX(DEFAULTS.x);
    setY(DEFAULTS.y);
    setBlur(DEFAULTS.blur);
    setSpread(DEFAULTS.spread);
    setOpacity(DEFAULTS.opacity);
    setColor(DEFAULTS.color);
    setInset(DEFAULTS.inset);
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb toolName="Box Shadow" />

      <ToolHeader
        eyebrow="CSS TOOL / 01"
        title="Box Shadow Generator"
        description="Create smooth, customizable CSS box shadows with live visual feedback. Adjust the shadow position, blur, spread, color, opacity, and inset mode, then copy the generated CSS."
        action={
          <button
            className="tool-reset-button"
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

          <div className="tool-preview-stage">
            <div
              className="tool-preview-object"
              style={{
                boxShadow: shadowValue,
              }}
            >
              <span>CSSKit</span>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>BOX SHADOW</span>
          </div>

          <div className="tool-control-list">
            <Slider
              label="Horizontal"
              value={x}
              min={-50}
              max={50}
              unit="px"
              onChange={setX}
            />

            <Slider
              label="Vertical"
              value={y}
              min={-50}
              max={50}
              unit="px"
              onChange={setY}
            />

            <Slider
              label="Blur"
              value={blur}
              min={0}
              max={100}
              unit="px"
              onChange={setBlur}
            />

            <Slider
              label="Spread"
              value={spread}
              min={-30}
              max={50}
              unit="px"
              onChange={setSpread}
            />

            <Slider
              label="Opacity"
              value={opacity}
              min={0}
              max={100}
              unit="%"
              onChange={setOpacity}
            />
          </div>

          <div className="tool-color">
            <div>
              <span className="tool-field-label">
                Shadow color
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

          <button
            className={`tool-toggle ${inset ? "active" : ""}`}
            type="button"
            onClick={() =>
              setInset((value) => !value)
            }
            aria-pressed={inset}
          >
            <span className="tool-toggle-indicator">
              <span />
            </span>

            <span>
              <strong>Inset shadow</strong>

              <small>
                {inset
                  ? "Shadow appears inside the element."
                  : "Shadow appears outside the element."}
              </small>
            </span>
          </button>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={cssOutput}
        property="box-shadow"
      />

      <ToolContent>
        <section className="tool-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Generate a CSS box shadow in seconds.
          </h2>

          <p>
            Use the controls above to experiment with the
            shadow until it looks right. You can move the
            shadow horizontally and vertically, increase or
            reduce its softness, change its size, and adjust
            its opacity.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Adjust the position.</b>
                <span>
                  Use Horizontal and Vertical to move the
                  shadow around the element.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Control the softness.</b>
                <span>
                  Increase Blur for a softer shadow or keep
                  it low for a sharper result.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Change the spread.</b>
                <span>
                  Spread changes how far the shadow expands
                  or contracts around the element.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Choose a color and opacity.</b>
                <span>
                  Pick a color and use opacity to control
                  how subtle or strong the shadow appears.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the CSS.</b>
                <span>
                  When the result looks right, click Copy CSS
                  and paste the declaration into your stylesheet.
                </span>
              </div>
            </li>
          </ol>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            CSS FUNDAMENTALS
          </span>

          <h2>What is CSS box-shadow?</h2>

          <p>
            The <code>box-shadow</code> property adds a
            shadow around an HTML element. It is commonly
            used to create depth, elevation, separation,
            focus states, and subtle visual hierarchy in
            user interfaces.
          </p>

          <p>
            Unlike a background or border, a box shadow can
            create the impression that an element is floating
            above the page. By combining offset, blur, spread,
            and color, you can create anything from a barely
            visible surface shadow to a strong decorative effect.
          </p>

          <div className="tool-syntax">
            <span>Basic syntax</span>
            <code>
              box-shadow: offset-x offset-y blur spread color;
            </code>
          </div>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            EXAMPLES
          </span>

          <h2>Common box-shadow examples.</h2>

          <p>
            These examples show a few common approaches you
            can use when designing cards, panels, buttons,
            and other interface elements.
          </p>

          <div className="tool-example-grid">
            {examples.map((example) => (
              <div
                className="tool-example"
                key={example.name}
              >
                <div
                  className="tool-example-preview"
                  style={{
                    boxShadow: example.value,
                  }}
                />

                <strong>{example.name}</strong>
                <code>{example.value}</code>
              </div>
            ))}
          </div>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>Tips for better box shadows.</h2>

          <div className="tool-tips">
            <div>
              <strong>Keep subtle shadows subtle.</strong>
              <p>
                Large, dark shadows can make modern
                interfaces feel heavy. Start with low
                opacity and increase it only when needed.
              </p>
            </div>

            <div>
              <strong>Use blur to create depth.</strong>
              <p>
                Higher blur values generally create softer
                and more diffuse shadows, which can work
                well for cards and elevated surfaces.
              </p>
            </div>

            <div>
              <strong>Consider the light direction.</strong>
              <p>
                Keep your shadow offsets consistent across
                an interface so elements appear to share
                the same light source.
              </p>
            </div>

            <div>
              <strong>Use multiple shadows carefully.</strong>
              <p>
                CSS supports multiple shadows, but combining
                too many strong shadows can make an interface
                visually noisy.
              </p>
            </div>
          </div>
        </section>

        <section className="tool-section tool-faq">
          <span className="section-kicker">FAQ</span>
          <h2>Box shadow questions.</h2>
          <ToolFAQ items={faqs} />
        </section>
      </ToolContent>

      <RelatedTools
        tools={[
          {
            name: "Text Shadow",
            href: "/tools/text-shadow",
          },
          {
            name: "Gradients",
            href: "/tools/gradient",
          },
          {
            name: "Colors",
            href: "/tools/color",
          },
          {
            name: "Typography",
            href: "/tools/typography",
          },
        ]}
      />

      <ToolCTA
        title="Build better CSS, faster."
        description="Use focused CSS utilities to spend less time guessing values and more time building."
        href="/tools"
        label="Explore all tools"
      />
    </ToolPageLayout>
  );
}