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
  type: "linear" as "linear" | "radial",
  angle: 135,
  color1: "#7664F5",
  color2: "#32B9D2",
  color3: "#69B987",
};

const faqItems = [
  {
    question: "What is a CSS gradient?",
    answer:
      "A CSS gradient creates a smooth transition between two or more colors. Gradients can be used as backgrounds for buttons, cards, sections, illustrations, and other interface elements.",
  },
  {
    question: "What is the difference between linear and radial gradients?",
    answer:
      "A linear gradient transitions between colors along a straight line, while a radial gradient spreads colors outward from a central point.",
  },
  {
    question: "Can CSS gradients use more than two colors?",
    answer:
      "Yes. CSS gradients support multiple color stops. This generator uses three colors to make it easy to create richer gradient combinations.",
  },
  {
    question: "Does this gradient generator use JavaScript on a server?",
    answer:
      "No. CSSKit generates the gradient directly in your browser. Your values stay client-side and the resulting CSS can be copied directly into your stylesheet.",
  },
  {
    question: "Is the CSS Gradient Generator free?",
    answer:
      "Yes. CSSKit's Gradient Generator is free to use directly in your browser.",
  },
];

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  onChange: (value: number) => void;
}

function Slider({
  label,
  value,
  min,
  max,
  unit = "°",
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

interface ColorControlProps {
  label: string;
  description: string;
  color: string;
  onChange: (value: string) => void;
}

function ColorControl({
  label,
  description,
  color,
  onChange,
}: ColorControlProps) {
  return (
    <div className="tool-color">
      <div>
        <span className="tool-field-label">
          {label}
        </span>

        <span className="tool-field-description">
          {description}
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
            onChange(event.target.value.toUpperCase())
          }
          aria-label={label}
        />
      </label>

      <span className="tool-color-value">
        {color.toUpperCase()}
      </span>
    </div>
  );
}

export default function Gradient() {
  const [type, setType] = useState<
    "linear" | "radial"
  >(DEFAULTS.type);

  const [angle, setAngle] = useState(DEFAULTS.angle);

  const [color1, setColor1] = useState(
    DEFAULTS.color1,
  );

  const [color2, setColor2] = useState(
    DEFAULTS.color2,
  );

  const [color3, setColor3] = useState(
    DEFAULTS.color3,
  );

  useEffect(() => {
    const title =
      "Gradient Generator — Free CSS Tool | CSSKit";

    const description =
      "Create beautiful CSS gradients visually with CSSKit's free Gradient Generator. Adjust colors, gradient type, and angle, then copy the generated CSS instantly.";

    const canonicalUrl =
      `${window.location.origin}/tools/gradient`;

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
      "gradient-faq-schema";

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
      "gradient-tool-schema";

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
      name: "CSSKit Gradient Generator",
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

  const gradientValue = useMemo(() => {
    if (type === "radial") {
      return `radial-gradient(circle, ${color1}, ${color2}, ${color3})`;
    }

    return `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
  }, [type, angle, color1, color2, color3]);

  const cssOutput = `background: ${gradientValue};`;

  const reset = () => {
    setType(DEFAULTS.type);
    setAngle(DEFAULTS.angle);
    setColor1(DEFAULTS.color1);
    setColor2(DEFAULTS.color2);
    setColor3(DEFAULTS.color3);
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb toolName="Gradients" />

      <ToolHeader
        eyebrow="CSS TOOL / 03"
        title="Gradient Generator"
        description="Create beautiful CSS gradients visually. Choose a gradient type, adjust the angle, customize multiple colors, and copy the generated CSS instantly."
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
        <div className="tool-preview">
          <span className="tool-label">
            LIVE PREVIEW
          </span>

          <div className="tool-preview-stage">
            <div
              className="tool-preview-object"
              style={{
                width: "220px",
                height: "160px",
                background: gradientValue,
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.88)",
                  textShadow:
                    "0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                CSSKit
              </span>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>REAL TIME</span>
          </div>

          <div className="tool-control-list">
            <label className="tool-control">
              <div className="tool-control-head">
                <span>Gradient Type</span>

                <span>
                  {type === "linear"
                    ? "LINEAR"
                    : "RADIAL"}
                </span>
              </div>

              <select
                value={type}
                onChange={(event) =>
                  setType(
                    event.target.value as
                      | "linear"
                      | "radial",
                  )
                }
                style={{
                  width: "100%",
                  height: "34px",
                  padding: "0 9px",
                  border: "1px solid #e1e1de",
                  borderRadius: "8px",
                  color: "#505057",
                  background: "#fafaf8",
                  fontSize: "10px",
                  fontWeight: 700,
                  outline: "none",
                }}
                aria-label="Gradient type"
              >
                <option value="linear">
                  Linear
                </option>

                <option value="radial">
                  Radial
                </option>
              </select>
            </label>

            {type === "linear" && (
              <Slider
                label="Angle"
                value={angle}
                min={0}
                max={360}
                onChange={setAngle}
              />
            )}
          </div>

          <ColorControl
            label="Start Color"
            description="Choose the first gradient color."
            color={color1}
            onChange={setColor1}
          />

          <ColorControl
            label="Middle Color"
            description="Choose the middle gradient color."
            color={color2}
            onChange={setColor2}
          />

          <ColorControl
            label="End Color"
            description="Choose the final gradient color."
            color={color3}
            onChange={setColor3}
          />
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={cssOutput}
        property="background"
      />

      <ToolContent>
        <section className="tool-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create a CSS gradient in seconds.
          </h2>

          <p>
            Choose a gradient type, adjust the direction,
            and experiment with different colors. The
            preview updates instantly as you change each
            value.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Choose the gradient type.</b>
                <span>
                  Select Linear for a directional gradient
                  or Radial for a gradient that spreads from
                  a central point.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Adjust the angle.</b>
                <span>
                  For linear gradients, change the angle to
                  control the direction of the color transition.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Choose your colors.</b>
                <span>
                  Pick three colors to create a smooth
                  transition from the start color to the end color.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Check the live preview.</b>
                <span>
                  Experiment with different combinations until
                  the gradient fits your design.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the CSS.</b>
                <span>
                  Copy the generated background declaration and
                  paste it directly into your stylesheet.
                </span>
              </div>
            </li>
          </ol>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            CSS FUNDAMENTALS
          </span>

          <h2>What is a CSS gradient?</h2>

          <p>
            A CSS gradient creates a smooth visual transition
            between multiple colors without requiring an image.
            Gradients are commonly used for backgrounds, buttons,
            cards, hero sections, and decorative interface elements.
          </p>

          <p>
            CSS provides two common gradient types: linear
            gradients and radial gradients. Linear gradients
            transition colors along a straight line, while radial
            gradients spread outward from a central point.
          </p>

          <div className="tool-syntax">
            <span>Basic syntax</span>

            <code>
              background: linear-gradient(135deg, #7664F5, #32B9D2);
            </code>
          </div>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            Understanding CSS gradient syntax.
          </h2>

          <p>
            A linear gradient can include a direction or angle
            followed by two or more color stops. Radial gradients
            use a shape or position followed by their color stops.
          </p>

          <div className="tool-syntax">
            <span>Linear gradient</span>

            <code>
              background: linear-gradient(135deg, #7664F5, #32B9D2, #69B987);
            </code>
          </div>

          <div className="tool-syntax">
            <span>Radial gradient</span>

            <code>
              background: radial-gradient(circle, #7664F5, #32B9D2, #69B987);
            </code>
          </div>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            EXAMPLES
          </span>

          <h2>
            Gradient styles to try.
          </h2>

          <p>
            Try different color combinations and directions
            to create soft backgrounds, colorful surfaces,
            and stronger visual accents.
          </p>

          <div className="tool-example-grid">
            <article className="tool-example">
              <div
                className="tool-example-preview"
                style={{
                  background:
                    "linear-gradient(135deg, #7664F5, #32B9D2)",
                }}
              />

              <strong>Linear</strong>

              <code>
                linear-gradient(135deg, #7664F5, #32B9D2)
              </code>
            </article>

            <article className="tool-example">
              <div
                className="tool-example-preview"
                style={{
                  background:
                    "linear-gradient(90deg, #F39A56, #7664F5)",
                }}
              />

              <strong>Warm to Cool</strong>

              <code>
                linear-gradient(90deg, #F39A56, #7664F5)
              </code>
            </article>

            <article className="tool-example">
              <div
                className="tool-example-preview"
                style={{
                  background:
                    "radial-gradient(circle, #32B9D2, #7664F5)",
                }}
              />

              <strong>Radial</strong>

              <code>
                radial-gradient(circle, #32B9D2, #7664F5)
              </code>
            </article>

            <article className="tool-example">
              <div
                className="tool-example-preview"
                style={{
                  background:
                    "linear-gradient(120deg, #7664F5, #32B9D2, #69B987)",
                }}
              />

              <strong>Three Colors</strong>

              <code>
                linear-gradient(120deg, #7664F5, #32B9D2, #69B987)
              </code>
            </article>
          </div>
        </section>

        <section className="tool-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Tips for better gradients.
          </h2>

          <div className="tool-tips">
            <div>
              <strong>Keep the transition intentional.</strong>

              <p>
                Choose colors that work together and use the
                angle to reinforce the visual direction of your design.
              </p>
            </div>

            <div>
              <strong>Use enough contrast.</strong>

              <p>
                Similar colors can create a subtle gradient,
                while stronger contrast produces a more expressive result.
              </p>
            </div>

            <div>
              <strong>Do not overuse colors.</strong>

              <p>
                Two or three well-chosen colors are often enough
                to create a clean and balanced gradient.
              </p>
            </div>

            <div>
              <strong>Consider readability.</strong>

              <p>
                When placing text over a gradient, make sure the
                background provides enough contrast for comfortable reading.
              </p>
            </div>
          </div>
        </section>

        <section className="tool-section tool-faq">
          <span className="section-kicker">
            FAQ
          </span>

          <h2>Gradient questions.</h2>

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
            name: "Text Shadow",
            href: "/tools/text-shadow",
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
        description="CSSKit gives you focused CSS utilities without unnecessary complexity."
        href="/tools"
        label="Explore all tools"
      />
    </ToolPageLayout>
  );
}