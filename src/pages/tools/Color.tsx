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

type ColorFormat = "HEX" | "RGB" | "HSL";

const DEFAULT_COLOR = "#7664F5";

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");

  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;

  const number = Number.parseInt(normalized, 16);

  if (Number.isNaN(number)) {
    return {
      r: 118,
      g: 100,
      b: 245,
    };
  }

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function rgbToHsl(r: number, g: number, b: number) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;

    s =
      l > 0.5
        ? delta / (2 - max - min)
        : delta / (max + min);

    switch (max) {
      case red:
        h =
          (green - blue) / delta +
          (green < blue ? 6 : 0);
        break;

      case green:
        h =
          (blue - red) / delta +
          2;
        break;

      case blue:
        h =
          (red - green) / delta +
          4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function getContrastText(hex: string) {
  const { r, g, b } = hexToRgb(hex);

  const luminance =
    (0.299 * r +
      0.587 * g +
      0.114 * b) /
    255;

  return luminance > 0.62 ? "#17171c" : "#ffffff";
}

export default function Color() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [format, setFormat] =
    useState<ColorFormat>("HEX");

  const rgb = useMemo(
    () => hexToRgb(color),
    [color],
  );

  const hsl = useMemo(
    () => rgbToHsl(rgb.r, rgb.g, rgb.b),
    [rgb],
  );

  const output = useMemo(() => {
    switch (format) {
      case "RGB":
        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

      case "HSL":
        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

      default:
        return color.toUpperCase();
    }
  }, [color, format, rgb, hsl]);

  const contrastText = useMemo(
    () => getContrastText(color),
    [color],
  );

  useEffect(() => {
    const title =
      "Color Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and explore CSS colors visually. Convert colors between HEX, RGB, and HSL formats and copy ready-to-use CSS values.";

    const canonicalUrl =
      `${window.location.origin}/tools/color`;

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

    const setCanonical = (url: string) => {
      let link =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]',
        );

      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }

      link.setAttribute("href", url);
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

    const faqId = "color-generator-faq";

    let faqScript =
      document.getElementById(faqId) as
        | HTMLScriptElement
        | null;

    if (!faqScript) {
      faqScript =
        document.createElement("script");

      faqScript.id = faqId;
      faqScript.type =
        "application/ld+json";

      document.head.appendChild(faqScript);
    }

    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a CSS color?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A CSS color defines the color used by an element. CSS supports formats such as HEX, RGB, and HSL.",
          },
        },
        {
          "@type": "Question",
          name:
            "What is the difference between HEX, RGB, and HSL?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "HEX represents colors with hexadecimal values, RGB uses red, green, and blue channels, while HSL uses hue, saturation, and lightness.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can I use the generated color directly in CSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The generated value can be used directly with CSS properties such as color, background-color, and border-color.",
          },
        },
      ],
    });

    const softwareId =
      "color-generator-software";

    let softwareScript =
      document.getElementById(softwareId) as
        | HTMLScriptElement
        | null;

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
        name: "CSSKit Color Generator",
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
      document.getElementById(faqId)?.remove();
      document
        .getElementById(softwareId)
        ?.remove();
    };
  }, []);

  const reset = () => {
    setColor(DEFAULT_COLOR);
    setFormat("HEX");
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb
        toolName="Color Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 04"
        title="Color Generator"
        description="Create, explore, and convert CSS colors between HEX, RGB, and HSL formats."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset color"
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
            className="tool-preview-stage"
            style={{
              backgroundColor: color,
            }}
          >
            <div
              className="color-preview-content"
              style={{
                color: contrastText,
              }}
            >
              <span>COLOR</span>

              <strong>
                {color.toUpperCase()}
              </strong>

              <small>
                {output}
              </small>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>COLOR</span>
          </div>

          <div className="tool-control-list">
            <div className="tool-color">
              <div>
                <span className="tool-field-label">
                  Color
                </span>

                <span className="tool-field-description">
                  Choose a base CSS color.
                </span>
              </div>

              <label
                className="tool-color-picker"
                aria-label="Choose color"
                style={{
                  backgroundColor: color,
                }}
              >
                <input
                  type="color"
                  value={color}
                  onChange={(event) =>
                    setColor(
                      event.target.value.toUpperCase(),
                    )
                  }
                />
              </label>

              <span className="tool-color-value">
                {color.toUpperCase()}
              </span>
            </div>

            <div className="tool-control">
              <div className="tool-control-head">
                <span>Format</span>

                <span>{format}</span>
              </div>

              <div className="tool-format-options">
                {(
                  ["HEX", "RGB", "HSL"] as ColorFormat[]
                ).map((item) => (
                  <button
                    key={item}
                    className={
                      format === item
                        ? "active"
                        : ""
                    }
                    type="button"
                    onClick={() =>
                      setFormat(item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="tool-color-values">
              <div>
                <span className="tool-field-label">
                  RGB
                </span>

                <span className="tool-field-description">
                  Red, green, and blue channels.
                </span>
              </div>

              <code>
                {rgb.r}, {rgb.g}, {rgb.b}
              </code>
            </div>

            <div className="tool-color-values">
              <div>
                <span className="tool-field-label">
                  HSL
                </span>

                <span className="tool-field-description">
                  Hue, saturation, and lightness.
                </span>
              </div>

              <code>
                {hsl.h}°, {hsl.s}%, {hsl.l}%
              </code>
            </div>
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={`color: ${output};`}
        property="color"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Generate a CSS color in seconds.
          </h2>

          <p>
            Pick a color, choose the format you
            need, and copy the generated CSS
            value directly into your stylesheet.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Choose a color</b>
                <span>
                  Use the color picker to select
                  your desired color.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Select a format</b>
                <span>
                  Switch between HEX, RGB, and HSL
                  depending on your CSS workflow.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Review the value</b>
                <span>
                  Check the generated value and
                  its live preview.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the CSS</b>
                <span>
                  Copy the generated declaration
                  and use it in your project.
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
            Understanding CSS color formats.
          </h2>

          <p>
            CSS supports multiple ways to represent
            colors. HEX, RGB, and HSL are three of
            the most common formats used in modern
            stylesheets.
          </p>

          <p>
            HEX uses hexadecimal values, RGB
            represents red, green, and blue
            channels, while HSL describes hue,
            saturation, and lightness.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            Use the generated color in CSS.
          </h2>

          <p>
            A generated color can be assigned to
            properties such as text, backgrounds,
            borders, and other visual elements.
          </p>

          <div className="syntax-card">
            <code>
              .element {"{"}
              <br />
              &nbsp;&nbsp;color:{" "}
              {output};
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
            Common CSS color usage.
          </h2>

          <p>
            The selected color can be used across
            different CSS properties.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                TEXT
              </span>

              <div
                className="color-example-preview"
                style={{
                  color: color,
                }}
              >
                CSSKit
              </div>

              <code>
                color: {output};
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                BACKGROUND
              </span>

              <div
                className="color-example-preview"
                style={{
                  backgroundColor: color,
                  color: contrastText,
                }}
              >
                CSSKit
              </div>

              <code>
                background-color: {output};
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                BORDER
              </span>

              <div
                className="color-example-preview"
                style={{
                  borderColor: color,
                }}
              >
                CSSKit
              </div>

              <code>
                border-color: {output};
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Keep your color system consistent.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Use a limited palette</b>
              <p>
                A focused set of colors makes an
                interface easier to understand.
              </p>
            </div>

            <div>
              <b>Check contrast</b>
              <p>
                Make sure text remains readable
                against its background.
              </p>
            </div>

            <div>
              <b>Reuse color values</b>
              <p>
                Consistent colors help create a
                stronger visual identity.
              </p>
            </div>

            <div>
              <b>Choose the right format</b>
              <p>
                HEX is compact, RGB is channel-based,
                and HSL is useful for adjusting color
                properties.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is a CSS color?",
              answer:
                "A CSS color defines the color used by an element. CSS supports formats such as HEX, RGB, and HSL.",
            },
            {
              question:
                "What is the difference between HEX, RGB, and HSL?",
              answer:
                "HEX represents colors with hexadecimal values, RGB uses red, green, and blue channels, while HSL uses hue, saturation, and lightness.",
            },
            {
              question:
                "Can I use the generated color directly in CSS?",
              answer:
                "Yes. The generated value can be used directly with CSS properties such as color, background-color, and border-color.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Gradient Generator",
              href: "/tools/gradient",
            },
            {
              name: "Typography Generator",
              href: "/tools/typography",
            },
            {
              name: "Button Generator",
              href: "/tools/button",
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