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

const DEFAULT_BLUR = 16;
const DEFAULT_TRANSPARENCY = 20;
const DEFAULT_BORDER_OPACITY = 35;
const DEFAULT_RADIUS = 16;
const DEFAULT_SATURATION = 120;
const DEFAULT_BACKGROUND = "#7664F5";
const DEFAULT_CARD_COLOR = "#FFFFFF";
const DEFAULT_BORDER_COLOR = "#FFFFFF";
const DEFAULT_SHADOW = 20;

export default function Glassmorphism() {
  const [blur, setBlur] =
    useState(DEFAULT_BLUR);

  const [transparency, setTransparency] =
    useState(DEFAULT_TRANSPARENCY);

  const [borderOpacity, setBorderOpacity] =
    useState(DEFAULT_BORDER_OPACITY);

  const [radius, setRadius] =
    useState(DEFAULT_RADIUS);

  const [saturation, setSaturation] =
    useState(DEFAULT_SATURATION);

  const [background, setBackground] =
    useState(DEFAULT_BACKGROUND);

  const [cardColor, setCardColor] =
    useState(DEFAULT_CARD_COLOR);

  const [borderColor, setBorderColor] =
    useState(DEFAULT_BORDER_COLOR);

  const [shadow, setShadow] =
    useState(DEFAULT_SHADOW);

  const cardAlpha = Math.round(
    transparency * 2.55,
  )
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

  const borderAlpha = Math.round(
    borderOpacity * 2.55,
  )
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

  const glassBackground =
    `${cardColor}${cardAlpha}`;

  const glassBorder =
    `1px solid ${borderColor}${borderAlpha}`;

  const glassCSS = useMemo(() => {
    return [
      `background: ${glassBackground};`,
      `backdrop-filter: blur(${blur}px) saturate(${saturation}%);`,
      `-webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);`,
      `border: 1px solid ${borderColor}${borderAlpha};`,
      `border-radius: ${radius}px;`,
      `box-shadow: 0 12px 30px rgba(0, 0, 0, ${(
        shadow / 100
      ).toFixed(2)});`,
    ].join("\n");
  }, [
    glassBackground,
    blur,
    saturation,
    borderColor,
    borderAlpha,
    radius,
    shadow,
  ]);

  const previewStyle = useMemo(
    () => ({
      background: glassBackground,
      backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
      WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
      border: glassBorder,
      borderRadius: `${radius}px`,
      boxShadow: `0 12px 30px rgba(0, 0, 0, ${(
        shadow / 100
      ).toFixed(2)})`,
    }),
    [
      glassBackground,
      blur,
      saturation,
      glassBorder,
      radius,
      shadow,
    ],
  );

  const reset = () => {
    setBlur(DEFAULT_BLUR);
    setTransparency(DEFAULT_TRANSPARENCY);
    setBorderOpacity(DEFAULT_BORDER_OPACITY);
    setRadius(DEFAULT_RADIUS);
    setSaturation(DEFAULT_SATURATION);
    setBackground(DEFAULT_BACKGROUND);
    setCardColor(DEFAULT_CARD_COLOR);
    setBorderColor(DEFAULT_BORDER_COLOR);
    setShadow(DEFAULT_SHADOW);
  };

  useEffect(() => {
    const title =
      "Glassmorphism Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS glassmorphism effects visually. Adjust blur, transparency, borders, shadows, and colors, then copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/glassmorphism`;

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
      "css-glassmorphism-generator-faq";

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
              "What is glassmorphism?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Glassmorphism is a UI design style that creates a frosted glass appearance using transparency, backdrop blur, borders, and subtle shadows.",
            },
          },
          {
            "@type": "Question",
            name:
              "How does glassmorphism work in CSS?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Glassmorphism can be created with CSS using a semi-transparent background, backdrop-filter blur, a subtle border, border radius, and shadow.",
            },
          },
          {
            "@type": "Question",
            name:
              "What does backdrop-filter blur do?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The backdrop-filter property applies visual effects to the area behind an element. The blur function creates the frosted glass effect commonly used in glassmorphism.",
            },
          },
          {
            "@type": "Question",
            name:
              "Can I use the generated glassmorphism CSS directly?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Copy the generated CSS and apply it to your desired element or component.",
            },
          },
        ],
      });

    const softwareId =
      "css-glassmorphism-generator-software";

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
          "CSSKit Glassmorphism Generator",
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
        toolName="Glassmorphism Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 12"
        title="Glassmorphism Generator"
        description="Create modern frosted-glass effects visually. Adjust blur, transparency, border, radius, saturation, and shadow, then copy the generated CSS."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset glassmorphism"
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
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              background:
                `linear-gradient(135deg, ${background}, #f0b7ff 48%, #7be7d8)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 150,
                height: 150,
                top: "18%",
                left: "15%",
                borderRadius: "50%",
                background: "#ffffff",
                opacity: 0.35,
                filter: "blur(4px)",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                right: "10%",
                bottom: "12%",
                borderRadius: "50%",
                background: "#3b82f6",
                opacity: 0.35,
                filter: "blur(8px)",
              }}
            />

            <div
              style={{
                width: "100%",
                maxWidth: 520,
                minHeight: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 28,
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "min(100%, 330px)",
                  padding: 28,
                  boxSizing: "border-box",
                  color: "#ffffff",
                  textAlign: "center",
                  ...previewStyle,
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: 8,
                    fontFamily:
                      '"DM Mono", monospace',
                    fontSize: 9,
                    letterSpacing: "0.12em",
                    textTransform:
                      "uppercase",
                    opacity: 0.75,
                  }}
                >
                  GLASS CARD
                </span>

                <strong
                  style={{
                    display: "block",
                    marginBottom: 8,
                    fontFamily:
                      '"Inter", system-ui, sans-serif',
                    fontSize: 22,
                    fontWeight: 600,
                  }}
                >
                  Frosted Glass
                </strong>

                <p
                  style={{
                    margin: 0,
                    fontFamily:
                      '"Inter", system-ui, sans-serif',
                    fontSize: 12,
                    lineHeight: 1.6,
                    opacity: 0.82,
                  }}
                >
                  A clean glassmorphism
                  surface built with CSS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>GLASSMORPHISM</span>
          </div>

          <div className="tool-control-list">
            <RangeControl
              label="Blur"
              value={blur}
              min={0}
              max={40}
              unit="px"
              onChange={setBlur}
            />

            <RangeControl
              label="Transparency"
              value={transparency}
              min={5}
              max={60}
              unit="%"
              onChange={setTransparency}
            />

            <RangeControl
              label="Border Opacity"
              value={borderOpacity}
              min={0}
              max={100}
              unit="%"
              onChange={setBorderOpacity}
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
              label="Saturation"
              value={saturation}
              min={50}
              max={200}
              unit="%"
              onChange={setSaturation}
            />

            <RangeControl
              label="Shadow"
              value={shadow}
              min={0}
              max={50}
              unit="%"
              onChange={setShadow}
            />

            <div className="tool-control">
              <div className="tool-control-head">
                <span>
                  Background
                </span>

                <span>
                  {background}
                </span>
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
                <span>
                  Card Color
                </span>

                <span>
                  {cardColor}
                </span>
              </div>

              <input
                type="color"
                value={cardColor}
                onChange={(event) =>
                  setCardColor(
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
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={glassCSS}
        property="background"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create a glassmorphism effect.
          </h2>

          <p>
            Use the controls above to build a
            frosted-glass surface. The preview
            updates instantly while you adjust
            each CSS property.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Adjust the blur</b>

                <span>
                  Increase backdrop blur to create
                  a stronger frosted-glass effect.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Control transparency</b>

                <span>
                  Change the card transparency to
                  reveal more or less of the
                  background behind it.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Customize the surface</b>

                <span>
                  Adjust radius, saturation, border,
                  colors, and shadow to match your
                  interface.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the generated CSS</b>

                <span>
                  Copy the generated properties and
                  use them in your own project.
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
            Understanding glassmorphism.
          </h2>

          <p>
            Glassmorphism is a visual style that
            combines translucent surfaces with
            background blur, subtle borders, and
            soft shadows.
          </p>

          <p>
            The main CSS property behind the effect
            is <code>backdrop-filter</code>. A blur
            value affects the content and colors
            visible behind the glass surface.
          </p>

          <p>
            A semi-transparent background is
            important because a completely opaque
            background prevents the backdrop effect
            from being visually noticeable.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            The basic glassmorphism CSS syntax.
          </h2>

          <p>
            A typical glassmorphism surface combines
            transparency, backdrop blur, borders,
            radius, and shadow.
          </p>

          <div className="syntax-card">
            <code>
              .glass {"{"}
              <br />
              &nbsp;&nbsp;background:
              rgba(255, 255, 255, 0.20);
              <br />
              &nbsp;&nbsp;backdrop-filter:
              blur(16px);
              <br />
              &nbsp;&nbsp;-webkit-backdrop-filter:
              blur(16px);
              <br />
              &nbsp;&nbsp;border:
              1px solid rgba(255,255,255,0.35);
              <br />
              &nbsp;&nbsp;border-radius: 16px;
              <br />
              &nbsp;&nbsp;box-shadow:
              0 12px 30px rgba(0,0,0,0.20);
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
            Common glassmorphism styles.
          </h2>

          <p>
            Glass effects can be subtle or strong
            depending on transparency, blur, and
            contrast.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                SOFT GLASS
              </span>

              <div
                style={{
                  minHeight: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, #7664F5, #c7bfff)",
                }}
              >
                <div
                  style={{
                    padding:
                      "18px 24px",
                    border:
                      "1px solid rgba(255,255,255,0.35)",
                    borderRadius: 12,
                    background:
                      "rgba(255,255,255,0.2)",
                    backdropFilter:
                      "blur(14px)",
                    WebkitBackdropFilter:
                      "blur(14px)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Soft Glass
                </div>
              </div>

              <code>
                backdrop-filter: blur(14px);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                FROSTED
              </span>

              <div
                style={{
                  minHeight: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                }}
              >
                <div
                  style={{
                    padding:
                      "18px 24px",
                    border:
                      "1px solid rgba(255,255,255,0.45)",
                    borderRadius: 14,
                    background:
                      "rgba(255,255,255,0.16)",
                    backdropFilter:
                      "blur(22px)",
                    WebkitBackdropFilter:
                      "blur(22px)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Frosted Glass
                </div>
              </div>

              <code>
                backdrop-filter: blur(22px);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                STRONG
              </span>

              <div
                style={{
                  minHeight: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  boxSizing: "border-box",
                  border:
                    "1px solid #e5e5e2",
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, #111827, #374151)",
                }}
              >
                <div
                  style={{
                    padding:
                      "18px 24px",
                    border:
                      "1px solid rgba(255,255,255,0.5)",
                    borderRadius: 16,
                    background:
                      "rgba(255,255,255,0.28)",
                    backdropFilter:
                      "blur(28px)",
                    WebkitBackdropFilter:
                      "blur(28px)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  Strong Glass
                </div>
              </div>

              <code>
                background: rgba(255,255,255,.28);
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Build better glass effects.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Keep transparency balanced</b>

              <p>
                Too much transparency can reduce
                readability, while too little can
                make the glass effect disappear.
              </p>
            </div>

            <div>
              <b>Use enough contrast</b>

              <p>
                Glass surfaces work best when the
                background provides enough color and
                variation behind them.
              </p>
            </div>

            <div>
              <b>Keep borders subtle</b>

              <p>
                A light translucent border helps
                separate the glass surface without
                making it look heavy.
              </p>
            </div>

            <div>
              <b>Do not overuse blur</b>

              <p>
                Strong blur values can make the
                interface feel muddy. Use blur to
                support hierarchy rather than hide
                the background.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is glassmorphism?",
              answer:
                "Glassmorphism is a UI design style that creates a frosted glass appearance using transparency, backdrop blur, borders, and subtle shadows.",
            },
            {
              question:
                "How does glassmorphism work in CSS?",
              answer:
                "Glassmorphism can be created with CSS using a semi-transparent background, backdrop-filter blur, a subtle border, border radius, and shadow.",
            },
            {
              question:
                "What does backdrop-filter blur do?",
              answer:
                "The backdrop-filter property applies visual effects to the area behind an element. The blur function creates the frosted glass effect commonly used in glassmorphism.",
            },
            {
              question:
                "Can I use the generated glassmorphism CSS directly?",
              answer:
                "Yes. Copy the generated CSS and apply it to your desired element or component.",
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
              name: "Neumorphism",
              href: "/tools/neumorphism",
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