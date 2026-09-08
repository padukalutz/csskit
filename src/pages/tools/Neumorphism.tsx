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
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const DEFAULT_DISTANCE = 12;
const DEFAULT_BLUR = 24;
const DEFAULT_SPREAD = 0;
const DEFAULT_RADIUS = 18;
const DEFAULT_INTENSITY = 18;

const DEFAULT_BACKGROUND = "#E8E8E5";
const DEFAULT_LIGHT = "#FFFFFF";
const DEFAULT_DARK = "#BFC0BC";

type NeumorphismStyle =
  | "raised"
  | "pressed"
  | "flat";

const DEFAULT_STYLE: NeumorphismStyle =
  "raised";

export default function Neumorphism() {
  const [distance, setDistance] =
    useState(DEFAULT_DISTANCE);

  const [blur, setBlur] =
    useState(DEFAULT_BLUR);

  const [spread, setSpread] =
    useState(DEFAULT_SPREAD);

  const [radius, setRadius] =
    useState(DEFAULT_RADIUS);

  const [intensity, setIntensity] =
    useState(DEFAULT_INTENSITY);

  const [background, setBackground] =
    useState(DEFAULT_BACKGROUND);

  const [lightColor, setLightColor] =
    useState(DEFAULT_LIGHT);

  const [darkColor, setDarkColor] =
    useState(DEFAULT_DARK);

  const [style, setStyle] =
    useState<NeumorphismStyle>(
      DEFAULT_STYLE,
    );

  const raisedShadow = `
    ${-distance}px ${-distance}px ${blur}px ${spread}px ${lightColor},
    ${distance}px ${distance}px ${blur}px ${spread}px ${darkColor}
  `.replace(/\s+/g, " ").trim();

  const pressedShadow = `
    inset ${-distance}px ${-distance}px ${blur}px ${spread}px ${lightColor},
    inset ${distance}px ${distance}px ${blur}px ${spread}px ${darkColor}
  `.replace(/\s+/g, " ").trim();

  const neumorphismCSS = useMemo(() => {
    const lines = [
      `background: ${background};`,
      `border-radius: ${radius}px;`,
      `box-shadow: ${raisedShadow};`,
    ];

    if (style === "pressed") {
      lines[2] =
        `box-shadow: ${pressedShadow};`;
    }

    if (style === "flat") {
      lines[2] = "box-shadow: none;";
    }

    return lines.join("\n");
  }, [
    background,
    radius,
    raisedShadow,
    pressedShadow,
    style,
  ]);

  const previewStyle = useMemo(
    () => ({
      width: 210,
      height: 140,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: `${radius}px`,
      background,
      boxShadow:
        style === "raised"
          ? raisedShadow
          : style === "pressed"
            ? pressedShadow
            : "none",
      color: "#777873",
      fontFamily:
        '"Inter", system-ui, sans-serif',
      fontSize: 14,
      fontWeight: 600,
      textAlign: "center" as const,
      boxSizing: "border-box" as const,
    }),
    [
      radius,
      background,
      raisedShadow,
      pressedShadow,
      style,
    ],
  );

  const reset = () => {
    setDistance(DEFAULT_DISTANCE);
    setBlur(DEFAULT_BLUR);
    setSpread(DEFAULT_SPREAD);
    setRadius(DEFAULT_RADIUS);
    setIntensity(DEFAULT_INTENSITY);
    setBackground(DEFAULT_BACKGROUND);
    setLightColor(DEFAULT_LIGHT);
    setDarkColor(DEFAULT_DARK);
    setStyle(DEFAULT_STYLE);
  };

  useEffect(() => {
    const title =
      "Neumorphism Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS neumorphism effects visually. Adjust shadow distance, blur, spread, radius, colors, and style, then copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/neumorphism`;

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
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
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
        document.head.appendChild(canonical);
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
      "css-neumorphism-generator-faq";

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
              "What is neumorphism?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Neumorphism is a UI design style that uses soft shadows and highlights to make interface elements appear raised from or pressed into their background.",
            },
          },
          {
            "@type": "Question",
            name:
              "How does neumorphism work in CSS?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Neumorphism can be created with CSS using a matching background color and opposing light and dark box shadows.",
            },
          },
          {
            "@type": "Question",
            name:
              "What is the difference between raised and pressed neumorphism?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Raised neumorphism uses regular shadows to make an element appear elevated, while pressed neumorphism uses inset shadows to make the element appear pushed into the surface.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I use the generated neumorphism CSS directly?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Copy the generated CSS and apply it to the element you want to style.",
            },
          },
        ],
      });

    const softwareId =
      "css-neumorphism-generator-software";

    let softwareScript =
      document.getElementById(
        softwareId,
      ) as HTMLScriptElement | null;

    if (!softwareScript) {
      softwareScript =
        document.createElement("script");

      softwareScript.id = softwareId;
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
          "CSSKit Neumorphism Generator",
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
        toolName="Neumorphism Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 13"
        title="Neumorphism Generator"
        description="Create soft neumorphic UI effects visually. Adjust shadows, blur, radius, colors, and style, then copy the generated CSS."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset neumorphism"
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
              background,
              overflow: "hidden",
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
                padding: 30,
                boxSizing: "border-box",
              }}
            >
              <div style={previewStyle}>
                <div>
                  <span
                    style={{
                      display: "block",
                      marginBottom: 8,
                      fontFamily:
                        '"DM Mono", monospace',
                      fontSize: 9,
                      letterSpacing:
                        "0.12em",
                      textTransform:
                        "uppercase",
                      opacity: 0.65,
                    }}
                  >
                    NEUMORPHISM
                  </span>

                  <strong
                    style={{
                      display: "block",
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    {style === "raised"
                      ? "Raised"
                      : style === "pressed"
                        ? "Pressed"
                        : "Flat"}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>NEUMORPHISM</span>
          </div>

          <div className="tool-control-list">
            <RangeControl
              label="Distance"
              value={distance}
              min={2}
              max={30}
              unit="px"
              onChange={setDistance}
            />

            <RangeControl
              label="Blur"
              value={blur}
              min={4}
              max={60}
              unit="px"
              onChange={setBlur}
            />

            <RangeControl
              label="Spread"
              value={spread}
              min={-10}
              max={10}
              unit="px"
              onChange={setSpread}
            />

            <RangeControl
              label="Radius"
              value={radius}
              min={0}
              max={50}
              unit="px"
              onChange={setRadius}
            />

            <RangeControl
              label="Intensity"
              value={intensity}
              min={0}
              max={50}
              unit="%"
              onChange={setIntensity}
            />

            <SelectControl
              label="Style"
              value={style}
              options={[
                "raised",
                "pressed",
                "flat",
              ]}
              onChange={(value) =>
                setStyle(
                  value as NeumorphismStyle,
                )
              }
            />

            <div className="tool-control">
              <div className="tool-control-head">
                <span>Background</span>
                <span>{background}</span>
              </div>

              <input
                type="color"
                value={background}
                onChange={(event) =>
                  setBackground(
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
                <span>Light Shadow</span>
                <span>{lightColor}</span>
              </div>

              <input
                type="color"
                value={lightColor}
                onChange={(event) =>
                  setLightColor(
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
                <span>Dark Shadow</span>
                <span>{darkColor}</span>
              </div>

              <input
                type="color"
                value={darkColor}
                onChange={(event) =>
                  setDarkColor(
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
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={neumorphismCSS}
        property="background"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create a neumorphic surface.
          </h2>

          <p>
            Use the controls above to build a soft
            neumorphic effect. The preview updates
            instantly as you change the shadow and
            surface properties.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Adjust shadow distance</b>

                <span>
                  Change the distance between the
                  element and its opposing shadows.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Control blur and spread</b>

                <span>
                  Use blur and spread to control how
                  soft or defined the shadows appear.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Choose the surface style</b>

                <span>
                  Switch between raised, pressed,
                  and flat styles.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the generated CSS</b>

                <span>
                  Copy the generated CSS and use it
                  directly in your project.
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
            Understanding neumorphism.
          </h2>

          <p>
            Neumorphism creates the appearance of
            soft physical surfaces by combining a
            background color with light and dark
            shadows.
          </p>

          <p>
            The main CSS property used for this
            effect is <code>box-shadow</code>.
            Two opposing shadows create the
            characteristic raised appearance.
          </p>

          <p>
            Inset shadows can be used to create a
            pressed or recessed appearance instead
            of an elevated surface.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            The basic neumorphism CSS syntax.
          </h2>

          <p>
            A typical raised neumorphic element
            combines a solid background with two
            opposing box shadows.
          </p>

          <div className="syntax-card">
            <code>
              .neumorphic {"{"}
              <br />
              &nbsp;&nbsp;background: #E8E8E5;
              <br />
              &nbsp;&nbsp;border-radius: 18px;
              <br />
              &nbsp;&nbsp;box-shadow:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-12px -12px
              24px #FFFFFF,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;12px 12px
              24px #BFC0BC;
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
            Common neumorphism styles.
          </h2>

          <p>
            Raised, pressed, and flat surfaces can
            create different levels of hierarchy in
            a neumorphic interface.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                RAISED
              </span>

              <div
                style={{
                  minHeight: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  boxSizing: "border-box",
                  borderRadius: 8,
                  background:
                    "#E8E8E5",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 70,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 14,
                    background:
                      "#E8E8E5",
                    boxShadow:
                      "-8px -8px 16px #FFFFFF, 8px 8px 16px #BFC0BC",
                    color: "#777873",
                    fontSize: 10,
                    fontWeight: 600,
                  }}
                >
                  Raised
                </div>
              </div>

              <code>
                box-shadow: -8px -8px 16px...
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                PRESSED
              </span>

              <div
                style={{
                  minHeight: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  boxSizing: "border-box",
                  borderRadius: 8,
                  background:
                    "#E8E8E5",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 70,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 14,
                    background:
                      "#E8E8E5",
                    boxShadow:
                      "inset -8px -8px 16px #FFFFFF, inset 8px 8px 16px #BFC0BC",
                    color: "#777873",
                    fontSize: 10,
                    fontWeight: 600,
                  }}
                >
                  Pressed
                </div>
              </div>

              <code>
                box-shadow: inset -8px...
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                FLAT
              </span>

              <div
                style={{
                  minHeight: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  boxSizing: "border-box",
                  borderRadius: 8,
                  background:
                    "#E8E8E5",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 70,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 14,
                    background:
                      "#E8E8E5",
                    color: "#777873",
                    fontSize: 10,
                    fontWeight: 600,
                  }}
                >
                  Flat
                </div>
              </div>

              <code>
                box-shadow: none;
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Build better neumorphic interfaces.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Use a consistent surface</b>

              <p>
                Keep the background and component
                surfaces closely related to maintain
                the soft physical appearance.
              </p>
            </div>

            <div>
              <b>Keep shadows subtle</b>

              <p>
                Excessively strong shadows can make
                neumorphic interfaces feel heavy.
              </p>
            </div>

            <div>
              <b>Use contrast carefully</b>

              <p>
                Make sure important text and controls
                remain readable against soft surfaces.
              </p>
            </div>

            <div>
              <b>Use pressed states sparingly</b>

              <p>
                Inset shadows work well for active or
                pressed controls but should not be
                overused.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is neumorphism?",
              answer:
                "Neumorphism is a UI design style that uses soft shadows and highlights to make interface elements appear raised from or pressed into their background.",
            },
            {
              question:
                "How does neumorphism work in CSS?",
              answer:
                "Neumorphism can be created with CSS using a matching background color and opposing light and dark box shadows.",
            },
            {
              question:
                "What is the difference between raised and pressed neumorphism?",
              answer:
                "Raised neumorphism uses regular shadows to make an element appear elevated, while pressed neumorphism uses inset shadows to make the element appear pushed into the surface.",
            },
            {
              question:
                "Can I use the generated neumorphism CSS directly?",
              answer:
                "Yes. Copy the generated CSS and apply it to the element you want to style.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Box Shadow",
              href: "/tools/box-shadow",
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