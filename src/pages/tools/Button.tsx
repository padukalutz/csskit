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

type ButtonSize = "small" | "medium" | "large";
type ButtonWeight = 400 | 500 | 600 | 700;
type ButtonRadius = number;
type ButtonStyle = "solid" | "outline" | "ghost";
type ButtonWidth = "auto" | "full";

const DEFAULT_SIZE: ButtonSize = "medium";
const DEFAULT_FONT_SIZE = 14;
const DEFAULT_FONT_WEIGHT: ButtonWeight = 600;
const DEFAULT_RADIUS = 8;
const DEFAULT_PADDING_X = 20;
const DEFAULT_PADDING_Y = 11;
const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BG = "#7664F5";
const DEFAULT_TEXT = "#FFFFFF";
const DEFAULT_BORDER = "#7664F5";
const DEFAULT_STYLE: ButtonStyle = "solid";
const DEFAULT_WIDTH: ButtonWidth = "auto";

interface RangeControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  onChange: (value: number) => void;
}

function RangeControl({
  label,
  value,
  min,
  max,
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
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Button() {
  const [size, setSize] =
    useState<ButtonSize>(DEFAULT_SIZE);

  const [fontSize, setFontSize] =
    useState<number>(DEFAULT_FONT_SIZE);

  const [fontWeight, setFontWeight] =
    useState<ButtonWeight>(
      DEFAULT_FONT_WEIGHT,
    );

  const [radius, setRadius] =
    useState<ButtonRadius>(
      DEFAULT_RADIUS,
    );

  const [paddingX, setPaddingX] =
    useState<number>(DEFAULT_PADDING_X);

  const [paddingY, setPaddingY] =
    useState<number>(DEFAULT_PADDING_Y);

  const [borderWidth, setBorderWidth] =
    useState<number>(
      DEFAULT_BORDER_WIDTH,
    );

  const [backgroundColor, setBackgroundColor] =
    useState<string>(DEFAULT_BG);

  const [textColor, setTextColor] =
    useState<string>(DEFAULT_TEXT);

  const [borderColor, setBorderColor] =
    useState<string>(DEFAULT_BORDER);

  const [buttonStyle, setButtonStyle] =
    useState<ButtonStyle>(
      DEFAULT_STYLE,
    );

  const [width, setWidth] =
    useState<ButtonWidth>(
      DEFAULT_WIDTH,
    );

  const resolvedPaddingX =
    size === "small"
      ? 14
      : size === "large"
        ? 28
        : paddingX;

  const resolvedPaddingY =
    size === "small"
      ? 8
      : size === "large"
        ? 14
        : paddingY;

  const resolvedFontSize =
    size === "small"
      ? 12
      : size === "large"
        ? 16
        : fontSize;

  const buttonCSS = useMemo(() => {
    const lines = [
      "display: inline-flex;",
      "align-items: center;",
      "justify-content: center;",
      `padding: ${resolvedPaddingY}px ${resolvedPaddingX}px;`,
      `font-size: ${resolvedFontSize}px;`,
      `font-weight: ${fontWeight};`,
      `border-radius: ${radius}px;`,
      `border: ${borderWidth}px solid ${borderColor};`,
      `color: ${textColor};`,
      `background: ${backgroundColor};`,
      `width: ${width === "full" ? "100%" : "auto"};`,
      "cursor: pointer;",
    ];

    if (buttonStyle === "outline") {
      lines[
        lines.indexOf(
          `color: ${textColor};`,
        )
      ] = `color: ${backgroundColor};`;

      lines[
        lines.indexOf(
          `background: ${backgroundColor};`,
        )
      ] = "background: transparent;";
    }

    if (buttonStyle === "ghost") {
      lines[
        lines.indexOf(
          `border: ${borderWidth}px solid ${borderColor};`,
        )
      ] = "border: 1px solid transparent;";

      lines[
        lines.indexOf(
          `background: ${backgroundColor};`,
        )
      ] = "background: transparent;";

      lines[
        lines.indexOf(
          `color: ${textColor};`,
        )
      ] = `color: ${backgroundColor};`;
    }

    return lines.join("\n");
  }, [
    resolvedPaddingY,
    resolvedPaddingX,
    resolvedFontSize,
    fontWeight,
    radius,
    borderWidth,
    borderColor,
    textColor,
    backgroundColor,
    width,
    buttonStyle,
  ]);

  const previewStyle = useMemo(
    () => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `${resolvedPaddingY}px ${resolvedPaddingX}px`,
      fontSize: `${resolvedFontSize}px`,
      fontWeight,
      borderRadius: `${radius}px`,
      border:
        buttonStyle === "ghost"
          ? "1px solid transparent"
          : `${borderWidth}px solid ${borderColor}`,
      color:
        buttonStyle === "outline" ||
        buttonStyle === "ghost"
          ? backgroundColor
          : textColor,
      background:
        buttonStyle === "outline" ||
        buttonStyle === "ghost"
          ? "transparent"
          : backgroundColor,
      width:
        width === "full"
          ? "100%"
          : "auto",
      maxWidth:
        width === "full"
          ? "100%"
          : "max-content",
      boxSizing: "border-box" as const,
      fontFamily:
        '"Inter", system-ui, sans-serif',
      cursor: "default",
    }),
    [
      resolvedPaddingY,
      resolvedPaddingX,
      resolvedFontSize,
      fontWeight,
      radius,
      borderWidth,
      borderColor,
      backgroundColor,
      textColor,
      buttonStyle,
      width,
    ],
  );

  const reset = () => {
    setSize(DEFAULT_SIZE);
    setFontSize(DEFAULT_FONT_SIZE);
    setFontWeight(DEFAULT_FONT_WEIGHT);
    setRadius(DEFAULT_RADIUS);
    setPaddingX(DEFAULT_PADDING_X);
    setPaddingY(DEFAULT_PADDING_Y);
    setBorderWidth(
      DEFAULT_BORDER_WIDTH,
    );
    setBackgroundColor(DEFAULT_BG);
    setTextColor(DEFAULT_TEXT);
    setBorderColor(DEFAULT_BORDER);
    setButtonStyle(DEFAULT_STYLE);
    setWidth(DEFAULT_WIDTH);
  };

  useEffect(() => {
    const title =
      "Button Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS buttons visually. Adjust size, spacing, colors, borders, radius, and button style, then copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/button`;

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

    const setCanonical = (href: string) => {
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
      "css-button-generator-faq";

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
              "What is a CSS button?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "A CSS button is an interactive interface element styled with CSS properties such as padding, colors, borders, typography, and border radius.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I create an outline button with CSS?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. An outline button can use a transparent background with a visible border and contrasting text color.",
            },
          },
          {
            "@type": "Question",
            name:
              "How do I make a button full width?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Set the button width to 100% and make sure its parent container provides the desired available width.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I use the generated button CSS directly?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Copy the generated CSS and apply it to your button selector or button element.",
            },
          },
        ],
      });

    const softwareId =
      "css-button-generator-software";

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
          "CSSKit Button Generator",
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
        toolName="Button Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 11"
        title="Button Generator"
        description="Create polished CSS buttons visually. Customize size, spacing, colors, borders, radius, and style, then copy the generated CSS."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset button"
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
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 520,
                minHeight: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
                boxSizing: "border-box",
                border:
                  "1px solid #e1e1de",
                borderRadius: 12,
                background: "#ffffff",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                style={previewStyle}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>BUTTON</span>
          </div>

          <div className="tool-control-list">
            <SelectControl
              label="Size"
              value={size}
              options={[
                "small",
                "medium",
                "large",
              ]}
              onChange={(value) =>
                setSize(
                  value as ButtonSize,
                )
              }
            />

            <RangeControl
              label="Font Size"
              value={fontSize}
              min={10}
              max={24}
              unit="px"
              onChange={setFontSize}
            />

            <SelectControl
              label="Font Weight"
              value={String(fontWeight)}
              options={[
                "400",
                "500",
                "600",
                "700",
              ]}
              onChange={(value) =>
                setFontWeight(
                  Number(
                    value,
                  ) as ButtonWeight,
                )
              }
            />

            <RangeControl
              label="Radius"
              value={radius}
              min={0}
              max={100}
              unit="px"
              onChange={setRadius}
            />

            <RangeControl
              label="Padding X"
              value={paddingX}
              min={4}
              max={40}
              unit="px"
              onChange={setPaddingX}
            />

            <RangeControl
              label="Padding Y"
              value={paddingY}
              min={4}
              max={24}
              unit="px"
              onChange={setPaddingY}
            />

            <RangeControl
              label="Border Width"
              value={borderWidth}
              min={0}
              max={4}
              unit="px"
              onChange={setBorderWidth}
            />

            <div className="tool-control">
              <div className="tool-control-head">
                <span>
                  Background
                </span>

                <span>
                  {backgroundColor}
                </span>
              </div>

              <input
                type="color"
                value={backgroundColor}
                onChange={(event) =>
                  setBackgroundColor(
                    event.target.value,
                  )
                }
                style={{
                  width: "100%",
                  height: 38,
                  padding: 3,
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="tool-control">
              <div className="tool-control-head">
                <span>
                  Text Color
                </span>

                <span>
                  {textColor}
                </span>
              </div>

              <input
                type="color"
                value={textColor}
                onChange={(event) =>
                  setTextColor(
                    event.target.value,
                  )
                }
                style={{
                  width: "100%",
                  height: 38,
                  padding: 3,
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="tool-control">
              <div className="tool-control-head">
                <span>
                  Border Color
                </span>

                <span>
                  {borderColor}
                </span>
              </div>

              <input
                type="color"
                value={borderColor}
                onChange={(event) =>
                  setBorderColor(
                    event.target.value,
                  )
                }
                style={{
                  width: "100%",
                  height: 38,
                  padding: 3,
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                  cursor: "pointer",
                }}
              />
            </div>

            <SelectControl
              label="Style"
              value={buttonStyle}
              options={[
                "solid",
                "outline",
                "ghost",
              ]}
              onChange={(value) =>
                setButtonStyle(
                  value as ButtonStyle,
                )
              }
            />

            <SelectControl
              label="Width"
              value={width}
              options={[
                "auto",
                "full",
              ]}
              onChange={(value) =>
                setWidth(
                  value as ButtonWidth,
                )
              }
            />
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={buttonCSS}
        property="display"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create a custom CSS button.
          </h2>

          <p>
            Use the controls above to create a
            button style that matches your
            interface. The preview updates
            instantly as you change each property.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Choose a button size</b>

                <span>
                  Select small, medium, or large
                  to quickly establish the button's
                  proportions.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Customize spacing and radius</b>

                <span>
                  Adjust horizontal padding,
                  vertical padding, and border
                  radius.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Choose colors and style</b>

                <span>
                  Customize the background, text,
                  border, and button style.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the generated CSS</b>

                <span>
                  Copy the generated properties and
                  use them in your project.
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
            Understanding CSS buttons.
          </h2>

          <p>
            Buttons are important interactive
            elements in modern interfaces. CSS
            controls their dimensions, typography,
            colors, borders, spacing, and overall
            appearance.
          </p>

          <p>
            Properties such as
            <code>padding</code>,
            <code>border-radius</code>,
            <code>background</code>, and
            <code>font-weight</code> can be combined
            to create buttons with different visual
            styles.
          </p>

          <p>
            Solid buttons work well for primary
            actions, while outline and ghost
            buttons can be useful for secondary
            actions.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            The basic button CSS syntax.
          </h2>

          <p>
            A button can be styled with a simple CSS
            selector and a collection of visual
            properties.
          </p>

          <div className="syntax-card">
            <code>
              .button {"{"}
              <br />
              &nbsp;&nbsp;display: inline-flex;
              <br />
              &nbsp;&nbsp;align-items: center;
              <br />
              &nbsp;&nbsp;justify-content: center;
              <br />
              &nbsp;&nbsp;padding: 11px 20px;
              <br />
              &nbsp;&nbsp;font-size: 14px;
              <br />
              &nbsp;&nbsp;font-weight: 600;
              <br />
              &nbsp;&nbsp;border-radius: 8px;
              <br />
              &nbsp;&nbsp;border: 1px solid
              #7664F5;
              <br />
              &nbsp;&nbsp;color: #FFFFFF;
              <br />
              &nbsp;&nbsp;background: #7664F5;
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
            Common button styles.
          </h2>

          <p>
            Different button styles can establish
            hierarchy between primary, secondary,
            and subtle actions.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                SOLID
              </span>

              <div
                style={{
                  minHeight: 110,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 18,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                }}
              >
                <button
                  type="button"
                  style={{
                    border:
                      "1px solid #7664F5",
                    borderRadius: 8,
                    padding:
                      "10px 18px",
                    background:
                      "#7664F5",
                    color: "#FFFFFF",
                    fontFamily:
                      '"Inter", system-ui, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Primary Action
                </button>
              </div>

              <code>
                background: #7664F5;
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                OUTLINE
              </span>

              <div
                style={{
                  minHeight: 110,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 18,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                }}
              >
                <button
                  type="button"
                  style={{
                    border:
                      "1px solid #7664F5",
                    borderRadius: 8,
                    padding:
                      "10px 18px",
                    background:
                      "transparent",
                    color: "#7664F5",
                    fontFamily:
                      '"Inter", system-ui, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Learn More
                </button>
              </div>

              <code>
                background: transparent;
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                GHOST
              </span>

              <div
                style={{
                  minHeight: 110,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 18,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                }}
              >
                <button
                  type="button"
                  style={{
                    border:
                      "1px solid transparent",
                    borderRadius: 8,
                    padding:
                      "10px 18px",
                    background:
                      "transparent",
                    color: "#7664F5",
                    fontFamily:
                      '"Inter", system-ui, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Cancel
                </button>
              </div>

              <code>
                border: 1px solid transparent;
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Build better buttons.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Make the action clear</b>

              <p>
                Use short and descriptive labels so
                users immediately understand what
                the button does.
              </p>
            </div>

            <div>
              <b>Maintain enough padding</b>

              <p>
                Comfortable padding makes buttons
                easier to read and interact with.
              </p>
            </div>

            <div>
              <b>Use visual hierarchy</b>

              <p>
                Reserve stronger styles for primary
                actions and subtler styles for
                secondary actions.
              </p>
            </div>

            <div>
              <b>Keep styles consistent</b>

              <p>
                Reuse the same radius, typography,
                spacing, and color system throughout
                your interface.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is a CSS button?",
              answer:
                "A CSS button is an interactive interface element styled with CSS properties such as padding, colors, borders, typography, and border radius.",
            },
            {
              question:
                "Can I create an outline button with CSS?",
              answer:
                "Yes. An outline button can use a transparent background with a visible border and contrasting text color.",
            },
            {
              question:
                "How do I make a button full width?",
              answer:
                "Set the button width to 100% and make sure its parent container provides the desired available width.",
            },
            {
              question:
                "Can I use the generated button CSS directly?",
              answer:
                "Yes. Copy the generated CSS and apply it to your button selector or button element.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Typography",
              href: "/tools/typography",
            },
            {
              name: "Border Radius",
              href: "/tools/border-radius",
            },
            {
              name: "Glassmorphism",
              href: "/tools/glassmorphism",
            },
          ]}
        />
      </ToolContent>

      <ToolCTA
        title="Explore more CSS tools."
        description="Use CSSKit's other generators to build and refine your styles faster."
        href="/tools"
        label="View all tools"
      />
    </ToolPageLayout>
  );
}