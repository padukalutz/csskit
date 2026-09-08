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

type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify";

type TextTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize";

type FontStyle =
  | "normal"
  | "italic";

type TextDecoration =
  | "none"
  | "underline"
  | "line-through";

const DEFAULT_FONT_SIZE = 32;
const DEFAULT_FONT_WEIGHT = 600;
const DEFAULT_LINE_HEIGHT = 1.4;
const DEFAULT_LETTER_SPACING = 0;
const DEFAULT_TEXT_ALIGN: TextAlign = "left";
const DEFAULT_TEXT_TRANSFORM: TextTransform =
  "none";
const DEFAULT_FONT_STYLE: FontStyle = "normal";
const DEFAULT_TEXT_DECORATION: TextDecoration =
  "none";

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

export default function Typography() {
  const [fontSize, setFontSize] =
    useState<number>(
      DEFAULT_FONT_SIZE,
    );

  const [fontWeight, setFontWeight] =
    useState<number>(
      DEFAULT_FONT_WEIGHT,
    );

  const [lineHeight, setLineHeight] =
    useState<number>(
      DEFAULT_LINE_HEIGHT,
    );

  const [letterSpacing, setLetterSpacing] =
    useState<number>(
      DEFAULT_LETTER_SPACING,
    );

  const [textAlign, setTextAlign] =
    useState<TextAlign>(
      DEFAULT_TEXT_ALIGN,
    );

  const [textTransform, setTextTransform] =
    useState<TextTransform>(
      DEFAULT_TEXT_TRANSFORM,
    );

  const [fontStyle, setFontStyle] =
    useState<FontStyle>(
      DEFAULT_FONT_STYLE,
    );

  const [textDecoration, setTextDecoration] =
    useState<TextDecoration>(
      DEFAULT_TEXT_DECORATION,
    );

  const typographyCSS = useMemo(() => {
    return [
      `font-size: ${fontSize}px;`,
      `font-weight: ${fontWeight};`,
      `line-height: ${lineHeight};`,
      `letter-spacing: ${letterSpacing}px;`,
      `text-align: ${textAlign};`,
      `text-transform: ${textTransform};`,
      `font-style: ${fontStyle};`,
      `text-decoration: ${textDecoration};`,
    ].join("\n");
  }, [
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    textTransform,
    fontStyle,
    textDecoration,
  ]);

  const reset = () => {
    setFontSize(DEFAULT_FONT_SIZE);
    setFontWeight(DEFAULT_FONT_WEIGHT);
    setLineHeight(DEFAULT_LINE_HEIGHT);
    setLetterSpacing(
      DEFAULT_LETTER_SPACING,
    );
    setTextAlign(DEFAULT_TEXT_ALIGN);
    setTextTransform(
      DEFAULT_TEXT_TRANSFORM,
    );
    setFontStyle(DEFAULT_FONT_STYLE);
    setTextDecoration(
      DEFAULT_TEXT_DECORATION,
    );
  };

  useEffect(() => {
    const title =
      "Typography Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS typography styles visually. Adjust font size, weight, line height, letter spacing, alignment, and text decoration, then copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/typography`;

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
        meta = document.createElement("meta");
        meta.setAttribute(
          attribute,
          key,
        );
        document.head.appendChild(meta);
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
      "css-typography-generator-faq";

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
              "What is CSS typography?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "CSS typography controls how text looks on a webpage, including its size, weight, spacing, alignment, style, and decoration.",
            },
          },
          {
            "@type": "Question",
            name:
              "What does font-weight control?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The font-weight property controls how thick or light the characters appear.",
            },
          },
          {
            "@type": "Question",
            name:
              "What is the difference between line-height and letter-spacing?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Line-height controls the vertical space between lines of text, while letter-spacing controls the horizontal space between characters.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I use the generated typography CSS directly?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Copy the generated CSS and apply it to any text element or CSS selector in your project.",
            },
          },
        ],
      });

    const softwareId =
      "css-typography-generator-software";

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
          "CSSKit Typography Generator",
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
        toolName="Typography Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 10"
        title="Typography Generator"
        description="Create clean CSS typography styles visually. Adjust size, weight, spacing, alignment, and decoration, then copy the generated CSS."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset typography"
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
              padding: "28px 20px",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 620,
                padding: "32px 24px",
                boxSizing: "border-box",
                border:
                  "1px solid #e1e1de",
                borderRadius: 12,
                background: "#ffffff",
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#25252b",
                  fontFamily:
                    '"Inter", system-ui, sans-serif',
                  fontSize: `${fontSize}px`,
                  fontWeight,
                  lineHeight,
                  letterSpacing:
                    `${letterSpacing}px`,
                  textAlign,
                  textTransform,
                  fontStyle,
                  textDecoration,
                  overflowWrap:
                    "break-word",
                  wordBreak: "break-word",
                }}
              >
                Design with type.
              </p>

              <p
                style={{
                  margin:
                    "18px 0 0",
                  color: "#77777e",
                  fontFamily:
                    '"DM Mono", monospace',
                  fontSize: 10,
                  lineHeight: 1.6,
                }}
              >
                CSS typography preview
              </p>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>TYPOGRAPHY</span>
          </div>

          <div className="tool-control-list">
            <RangeControl
              label="Font Size"
              value={fontSize}
              min={10}
              max={80}
              unit="px"
              onChange={setFontSize}
            />

            <RangeControl
              label="Font Weight"
              value={fontWeight}
              min={100}
              max={900}
              step={100}
              onChange={setFontWeight}
            />

            <RangeControl
              label="Line Height"
              value={lineHeight}
              min={0.8}
              max={2.5}
              step={0.1}
              onChange={setLineHeight}
            />

            <RangeControl
              label="Letter Spacing"
              value={letterSpacing}
              min={-5}
              max={10}
              step={0.1}
              unit="px"
              onChange={setLetterSpacing}
            />

            <SelectControl
              label="Text Align"
              value={textAlign}
              options={[
                "left",
                "center",
                "right",
                "justify",
              ]}
              onChange={(value) =>
                setTextAlign(
                  value as TextAlign,
                )
              }
            />

            <SelectControl
              label="Text Transform"
              value={textTransform}
              options={[
                "none",
                "uppercase",
                "lowercase",
                "capitalize",
              ]}
              onChange={(value) =>
                setTextTransform(
                  value as TextTransform,
                )
              }
            />

            <SelectControl
              label="Font Style"
              value={fontStyle}
              options={[
                "normal",
                "italic",
              ]}
              onChange={(value) =>
                setFontStyle(
                  value as FontStyle,
                )
              }
            />

            <SelectControl
              label="Text Decoration"
              value={textDecoration}
              options={[
                "none",
                "underline",
                "line-through",
              ]}
              onChange={(value) =>
                setTextDecoration(
                  value as TextDecoration,
                )
              }
            />
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={typographyCSS}
        property="font-size"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create typography styles visually.
          </h2>

          <p>
            Use the controls above to customize
            the appearance of your text. The live
            preview updates instantly as you
            change each typography property.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Adjust the font size</b>

                <span>
                  Choose the size that fits your
                  heading, paragraph, label, or
                  interface element.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Set the font weight</b>

                <span>
                  Make your text lighter or heavier
                  using the font-weight control.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Control spacing and alignment</b>

                <span>
                  Fine-tune line height, letter
                  spacing, and text alignment.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the generated CSS</b>

                <span>
                  Copy the generated properties and
                  use them directly in your project.
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
            Understanding CSS typography.
          </h2>

          <p>
            Typography is one of the most important
            parts of a user interface. CSS provides
            several properties for controlling how
            text is displayed and organized.
          </p>

          <p>
            Font size determines the scale of the
            text, while font weight controls how
            heavy the characters appear. Line height
            controls vertical spacing between lines,
            and letter spacing adjusts the space
            between individual characters.
          </p>

          <p>
            Combining these properties allows you
            to create readable paragraphs,
            expressive headings, navigation labels,
            buttons, and other interface elements.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            The basic typography CSS syntax.
          </h2>

          <p>
            Typography properties can be combined
            inside a CSS selector to create a
            consistent text style.
          </p>

          <div className="syntax-card">
            <code>
              .text {"{"}
              <br />
              &nbsp;&nbsp;font-size: 32px;
              <br />
              &nbsp;&nbsp;font-weight: 600;
              <br />
              &nbsp;&nbsp;line-height: 1.4;
              <br />
              &nbsp;&nbsp;letter-spacing: 0px;
              <br />
              &nbsp;&nbsp;text-align: left;
              <br />
              &nbsp;&nbsp;text-transform: none;
              <br />
              &nbsp;&nbsp;font-style: normal;
              <br />
              &nbsp;&nbsp;text-decoration: none;
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
            Common typography styles.
          </h2>

          <p>
            Different typography combinations can
            create different visual hierarchies
            throughout a website.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                HEADING
              </span>

              <div
                style={{
                  width: "100%",
                  minHeight: 110,
                  display: "flex",
                  alignItems: "center",
                  padding: 18,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    color: "#25252b",
                    fontFamily:
                      '"Inter", system-ui, sans-serif',
                    fontSize: 28,
                    fontWeight: 700,
                    lineHeight: 1.15,
                  }}
                >
                  Build better.
                </span>
              </div>

              <code>
                font-size: 28px;
                font-weight: 700;
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                BODY TEXT
              </span>

              <div
                style={{
                  width: "100%",
                  minHeight: 110,
                  display: "flex",
                  alignItems: "center",
                  padding: 18,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    color: "#55555d",
                    fontFamily:
                      '"Inter", system-ui, sans-serif',
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Clean typography makes content
                  easier to read and understand.
                </span>
              </div>

              <code>
                font-size: 14px;
                line-height: 1.6;
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                LABEL
              </span>

              <div
                style={{
                  width: "100%",
                  minHeight: 110,
                  display: "flex",
                  alignItems: "center",
                  padding: 18,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background: "#fafaf8",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    color: "#77777e",
                    fontFamily:
                      '"DM Mono", monospace',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing:
                      "1px",
                    textTransform:
                      "uppercase",
                  }}
                >
                  CSS TOOL
                </span>
              </div>

              <code>
                letter-spacing: 1px;
                text-transform: uppercase;
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Build better typography.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Use a clear hierarchy</b>

              <p>
                Different font sizes and weights
                help users understand which content
                is most important.
              </p>
            </div>

            <div>
              <b>Keep body text readable</b>

              <p>
                Avoid excessively small text and
                choose a comfortable line height
                for longer paragraphs.
              </p>
            </div>

            <div>
              <b>Use spacing carefully</b>

              <p>
                Small changes to letter spacing and
                line height can significantly affect
                how typography feels.
              </p>
            </div>

            <div>
              <b>Be consistent</b>

              <p>
                Reusing typography styles across
                similar interface elements creates
                a more cohesive design.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is CSS typography?",
              answer:
                "CSS typography controls how text looks on a webpage, including its size, weight, spacing, alignment, style, and decoration.",
            },
            {
              question:
                "What does font-weight control?",
              answer:
                "The font-weight property controls how thick or light the characters appear.",
            },
            {
              question:
                "What is the difference between line-height and letter-spacing?",
              answer:
                "Line-height controls the vertical space between lines of text, while letter-spacing controls the horizontal space between characters.",
            },
            {
              question:
                "Can I use the generated typography CSS directly?",
              answer:
                "Yes. Copy the generated CSS and apply it to any text element or CSS selector in your project.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "CSS Grid",
              href: "/tools/grid",
            },
            {
              name: "Flexbox",
              href: "/tools/flexbox",
            },
            {
              name: "CSS Transform",
              href: "/tools/transform",
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