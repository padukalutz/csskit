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

const DEFAULT_FILTERS = {
  blur: 0,
  brightness: 100,
  contrast: 100,
  grayscale: 0,
  hueRotate: 0,
  invert: 0,
  saturate: 100,
  sepia: 0,
};

type FilterKey = keyof typeof DEFAULT_FILTERS;

const filterLabels: Record<FilterKey, string> = {
  blur: "Blur",
  brightness: "Brightness",
  contrast: "Contrast",
  grayscale: "Grayscale",
  hueRotate: "Hue Rotate",
  invert: "Invert",
  saturate: "Saturate",
  sepia: "Sepia",
};

const filterUnits: Record<FilterKey, string> = {
  blur: "px",
  brightness: "%",
  contrast: "%",
  grayscale: "%",
  hueRotate: "deg",
  invert: "%",
  saturate: "%",
  sepia: "%",
};

const filterRanges: Record<
  FilterKey,
  { min: number; max: number; step: number }
> = {
  blur: {
    min: 0,
    max: 20,
    step: 1,
  },
  brightness: {
    min: 0,
    max: 200,
    step: 1,
  },
  contrast: {
    min: 0,
    max: 200,
    step: 1,
  },
  grayscale: {
    min: 0,
    max: 100,
    step: 1,
  },
  hueRotate: {
    min: 0,
    max: 360,
    step: 1,
  },
  invert: {
    min: 0,
    max: 100,
    step: 1,
  },
  saturate: {
    min: 0,
    max: 200,
    step: 1,
  },
  sepia: {
    min: 0,
    max: 100,
    step: 1,
  },
};

export default function CSSFilter() {
  const [filters, setFilters] =
    useState(DEFAULT_FILTERS);

  const filterCSS = useMemo(
    () =>
      [
        `blur(${filters.blur}px)`,
        `brightness(${filters.brightness}%)`,
        `contrast(${filters.contrast}%)`,
        `grayscale(${filters.grayscale}%)`,
        `hue-rotate(${filters.hueRotate}deg)`,
        `invert(${filters.invert}%)`,
        `saturate(${filters.saturate}%)`,
        `sepia(${filters.sepia}%)`,
      ].join(" "),
    [filters],
  );

  const css = `filter: ${filterCSS};`;

  useEffect(() => {
    const title =
      "CSS Filter Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS filter effects visually. Adjust blur, brightness, contrast, grayscale, saturation, and more, then copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/filter`;

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

    const faqId = "css-filter-generator-faq";

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
          name: "What is the CSS filter property?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The CSS filter property applies visual effects such as blur, brightness, contrast, grayscale, and saturation to an element.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can multiple CSS filters be combined?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Multiple filter functions can be combined in a single CSS filter declaration.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can I use the generated filter directly in CSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The generated filter declaration can be copied directly into your CSS stylesheet.",
          },
        },
      ],
    });

    const softwareId =
      "css-filter-generator-software";

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
          "CSSKit CSS Filter Generator",
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

  const updateFilter = (
    key: FilterKey,
    value: number,
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const reset = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb
        toolName="CSS Filter Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 06"
        title="CSS Filter Generator"
        description="Create image and visual effects with CSS filters and generate the final filter declaration instantly."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset CSS filters"
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
                filter: filterCSS,
              }}
            >
              CSSKit
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>CSS FILTER</span>
          </div>

          <div className="tool-control-list">
            {(
              Object.keys(
                filterLabels,
              ) as FilterKey[]
            ).map((key) => {
              const range =
                filterRanges[key];

              return (
                <div
                  className="tool-control"
                  key={key}
                >
                  <div className="tool-control-head">
                    <span>
                      {filterLabels[key]}
                    </span>

                    <span>
                      {filters[key]}
                      {filterUnits[key]}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={range.min}
                    max={range.max}
                    step={range.step}
                    value={filters[key]}
                    onChange={(event) =>
                      updateFilter(
                        key,
                        Number(
                          event.target.value,
                        ),
                      )
                    }
                    aria-label={`${filterLabels[key]} filter`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={css}
        property="filter"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create CSS filter effects in seconds.
          </h2>

          <p>
            Adjust the filter controls and watch
            the preview update instantly. When the
            effect looks right, copy the generated
            CSS declaration.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Adjust the filters</b>
                <span>
                  Use the sliders to control blur,
                  brightness, contrast, and other
                  visual effects.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Combine effects</b>
                <span>
                  Apply multiple filter functions
                  together to create custom effects.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Preview the result</b>
                <span>
                  See the combined filter effect
                  update in real time.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the CSS</b>
                <span>
                  Copy the generated filter
                  declaration into your stylesheet.
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
            Understanding CSS filters.
          </h2>

          <p>
            The CSS filter property applies visual
            effects to an element. It is commonly
            used with images, backgrounds, and
            interface elements.
          </p>

          <p>
            CSS provides filter functions for
            effects such as blur, brightness,
            contrast, grayscale, hue rotation,
            inversion, saturation, and sepia.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            Use multiple filter functions together.
          </h2>

          <p>
            Filter functions can be combined inside
            a single filter declaration.
          </p>

          <div className="syntax-card">
            <code>
              .element {"{"}
              <br />
              &nbsp;&nbsp;filter: blur(2px){" "}
              brightness(110%) contrast(120%);
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
            Common CSS filter effects.
          </h2>

          <p>
            Different filter combinations can
            create useful visual effects.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                GRAYSCALE
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  filter:
                    "grayscale(100%)",
                }}
              >
                CSSKit
              </div>

              <code>
                filter: grayscale(100%);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                BLUR
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  filter: "blur(3px)",
                }}
              >
                CSSKit
              </div>

              <code>
                filter: blur(3px);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                SEPIA
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  filter: "sepia(100%)",
                }}
              >
                CSSKit
              </div>

              <code>
                filter: sepia(100%);
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Use filters without overdoing them.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Use blur carefully</b>
              <p>
                Small blur values can create depth,
                while excessive blur can reduce
                visual clarity.
              </p>
            </div>

            <div>
              <b>Check contrast</b>
              <p>
                Strong contrast changes can make
                content harder to read.
              </p>
            </div>

            <div>
              <b>Use grayscale intentionally</b>
              <p>
                Grayscale works well for muted
                imagery and visual hierarchy.
              </p>
            </div>

            <div>
              <b>Combine filters gradually</b>
              <p>
                Small adjustments across multiple
                filters often produce more balanced
                results.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is the CSS filter property?",
              answer:
                "The CSS filter property applies visual effects such as blur, brightness, contrast, grayscale, and saturation to an element.",
            },
            {
              question:
                "Can multiple CSS filters be combined?",
              answer:
                "Yes. Multiple filter functions can be combined in a single CSS filter declaration.",
            },
            {
              question:
                "Can I use the generated filter directly in CSS?",
              answer:
                "Yes. The generated filter declaration can be copied directly into your CSS stylesheet.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Color Generator",
              href: "/tools/color",
            },
            {
              name: "Gradient Generator",
              href: "/tools/gradient",
            },
            {
              name: "Box Shadow Generator",
              href: "/tools/box-shadow",
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