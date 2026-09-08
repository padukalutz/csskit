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

type Direction =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignItems =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch";

type FlexWrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

const DEFAULTS = {
  direction: "row" as Direction,
  justify: "center" as JustifyContent,
  align: "center" as AlignItems,
  wrap: "nowrap" as FlexWrap,
  gap: 12,
};

export default function Flexbox() {
  const [direction, setDirection] =
    useState<Direction>(DEFAULTS.direction);

  const [justify, setJustify] =
    useState<JustifyContent>(DEFAULTS.justify);

  const [align, setAlign] =
    useState<AlignItems>(DEFAULTS.align);

  const [wrap, setWrap] =
    useState<FlexWrap>(DEFAULTS.wrap);

  const [gap, setGap] =
    useState(DEFAULTS.gap);

  const flexCSS = useMemo(
    () =>
      [
        "display: flex;",
        `flex-direction: ${direction};`,
        `justify-content: ${justify};`,
        `align-items: ${align};`,
        `flex-wrap: ${wrap};`,
        `gap: ${gap}px;`,
      ].join("\n"),
    [
      direction,
      justify,
      align,
      wrap,
      gap,
    ],
  );

  useEffect(() => {
    const title =
      "Flexbox Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS Flexbox layouts visually. Adjust direction, alignment, wrapping, and gap, preview the result, and copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/flexbox`;

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
      let canonical =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]',
        );

      if (!canonical) {
        canonical =
          document.createElement("link");
        canonical.setAttribute(
          "rel",
          "canonical",
        );
        document.head.appendChild(canonical);
      }

      canonical.setAttribute("href", url);
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
      "flexbox-generator-faq";

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
            name: "What is CSS Flexbox?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "CSS Flexbox is a layout system designed to arrange elements efficiently along a row or column.",
            },
          },
          {
            "@type": "Question",
            name:
              "What does justify-content do?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The justify-content property controls how flex items are distributed along the main axis.",
            },
          },
          {
            "@type": "Question",
            name:
              "What does align-items do?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The align-items property controls how flex items are aligned along the cross axis.",
            },
          },
        ],
      });

    const softwareId =
      "flexbox-generator-software";

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
          "CSSKit Flexbox Generator",
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

  const reset = () => {
    setDirection(DEFAULTS.direction);
    setJustify(DEFAULTS.justify);
    setAlign(DEFAULTS.align);
    setWrap(DEFAULTS.wrap);
    setGap(DEFAULTS.gap);
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb
        toolName="Flexbox Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 08"
        title="Flexbox Generator"
        description="Build flexible CSS layouts with visual controls for direction, alignment, wrapping, and spacing."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset Flexbox settings"
          >
            <RotateCcw size={15} />
            Reset
          </button>
        }
      />

      <ToolWorkspace>
        {/* LIVE PREVIEW */}
        <div className="tool-preview">
          <span className="tool-label">
            LIVE PREVIEW
          </span>

          <div className="tool-preview-stage">
            <div
              className="flexbox-preview-container"
              style={{
                display: "flex",
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
                flexWrap: wrap,
                gap: `${gap}px`,
              }}
            >
              <div className="flexbox-preview-item">
                <span>01</span>
              </div>

              <div className="flexbox-preview-item">
                <span>02</span>
              </div>

              <div className="flexbox-preview-item">
                <span>03</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>FLEXBOX</span>
          </div>

          <div className="tool-control-list">
            <div className="tool-control flexbox-control">
              <div className="tool-control-head">
                <span>Direction</span>

                <span>
                  {direction}
                </span>
              </div>

              <select
                value={direction}
                onChange={(event) =>
                  setDirection(
                    event.target
                      .value as Direction,
                  )
                }
              >
                <option value="row">
                  row
                </option>

                <option value="row-reverse">
                  row-reverse
                </option>

                <option value="column">
                  column
                </option>

                <option value="column-reverse">
                  column-reverse
                </option>
              </select>
            </div>

            <div className="tool-control flexbox-control">
              <div className="tool-control-head">
                <span>
                  Justify Content
                </span>

                <span>
                  {justify}
                </span>
              </div>

              <select
                value={justify}
                onChange={(event) =>
                  setJustify(
                    event.target
                      .value as JustifyContent,
                  )
                }
              >
                <option value="flex-start">
                  flex-start
                </option>

                <option value="center">
                  center
                </option>

                <option value="flex-end">
                  flex-end
                </option>

                <option value="space-between">
                  space-between
                </option>

                <option value="space-around">
                  space-around
                </option>

                <option value="space-evenly">
                  space-evenly
                </option>
              </select>
            </div>

            <div className="tool-control flexbox-control">
              <div className="tool-control-head">
                <span>
                  Align Items
                </span>

                <span>
                  {align}
                </span>
              </div>

              <select
                value={align}
                onChange={(event) =>
                  setAlign(
                    event.target
                      .value as AlignItems,
                  )
                }
              >
                <option value="flex-start">
                  flex-start
                </option>

                <option value="center">
                  center
                </option>

                <option value="flex-end">
                  flex-end
                </option>

                <option value="stretch">
                  stretch
                </option>
              </select>
            </div>

            <div className="tool-control flexbox-control">
              <div className="tool-control-head">
                <span>
                  Flex Wrap
                </span>

                <span>
                  {wrap}
                </span>
              </div>

              <select
                value={wrap}
                onChange={(event) =>
                  setWrap(
                    event.target
                      .value as FlexWrap,
                  )
                }
              >
                <option value="nowrap">
                  nowrap
                </option>

                <option value="wrap">
                  wrap
                </option>

                <option value="wrap-reverse">
                  wrap-reverse
                </option>
              </select>
            </div>

            <div className="tool-control flexbox-control">
              <div className="tool-control-head">
                <span>Gap</span>

                <span>
                  {gap}px
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="50"
                value={gap}
                onChange={(event) =>
                  setGap(
                    Number(
                      event.target.value,
                    ),
                  )
                }
                aria-label="Flexbox gap"
              />
            </div>
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={flexCSS}
        property="display"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Build Flexbox layouts in seconds.
          </h2>

          <p>
            Choose the direction, alignment,
            wrapping, and spacing you need.
            The preview updates instantly while
            CSSKit generates the corresponding
            Flexbox CSS.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>
                  Choose a direction
                </b>

                <span>
                  Arrange items in a row or
                  column and reverse their
                  order when needed.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>
                  Set the alignment
                </b>

                <span>
                  Use justify-content and
                  align-items to position
                  flex items.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>
                  Control wrapping
                </b>

                <span>
                  Decide whether items stay
                  on one line or wrap onto
                  additional lines.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>
                  Copy the CSS
                </b>

                <span>
                  Copy the generated
                  declarations into your
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
            Understanding CSS Flexbox.
          </h2>

          <p>
            Flexbox is a one-dimensional CSS
            layout system designed to arrange
            elements along a row or column.
          </p>

          <p>
            The main Flexbox properties control
            direction, alignment, wrapping, and
            spacing between items.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            Create a Flexbox container.
          </h2>

          <p>
            Apply display: flex to a container
            and then configure its layout
            properties.
          </p>

          <div className="syntax-card">
            <code>
              .container {"{"}
              <br />
              &nbsp;&nbsp;display: flex;
              <br />
              &nbsp;&nbsp;justify-content: center;
              <br />
              &nbsp;&nbsp;align-items: center;
              <br />
              &nbsp;&nbsp;gap: 16px;
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
            Common Flexbox layouts.
          </h2>

          <p>
            Flexbox can handle common interface
            patterns with only a few CSS
            properties.
          </p>

          <div className="shadow-examples">
            {/* CENTER */}
            <div className="shadow-example-card">
              <span className="section-kicker">
                CENTER
              </span>

              <div
                className="flexbox-example-layout"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  margin: "18px auto",
                }}
              >
                <div className="flexbox-preview-item">
                  <span>01</span>
                </div>

                <div className="flexbox-preview-item">
                  <span>02</span>
                </div>
              </div>

              <code>
                justify-content: center;
              </code>
            </div>

            {/* BETWEEN */}
            <div className="shadow-example-card">
              <span className="section-kicker">
                BETWEEN
              </span>

              <div
                className="flexbox-example-layout"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                  margin: "18px auto",
                }}
              >
                <div className="flexbox-preview-item">
                  <span>01</span>
                </div>

                <div className="flexbox-preview-item">
                  <span>02</span>
                </div>
              </div>

              <code>
                justify-content: space-between;
              </code>
            </div>

            {/* COLUMN */}
            <div className="shadow-example-card">
              <span className="section-kicker">
                COLUMN
              </span>

              <div
                className="flexbox-example-layout"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "8px",
                  margin: "18px auto",
                }}
              >
                <div className="flexbox-preview-item">
                  <span>01</span>
                </div>

                <div className="flexbox-preview-item">
                  <span>02</span>
                </div>
              </div>

              <code>
                flex-direction: column;
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Keep Flexbox layouts predictable.
          </h2>

          <div className="tips-grid">
            <div>
              <b>
                Define the main direction
              </b>

              <p>
                Start by deciding whether your
                layout should flow horizontally
                or vertically.
              </p>
            </div>

            <div>
              <b>
                Use alignment intentionally
              </b>

              <p>
                Combine justify-content and
                align-items to control
                positioning clearly.
              </p>
            </div>

            <div>
              <b>
                Use gap for spacing
              </b>

              <p>
                The gap property provides
                consistent spacing between
                flex items.
              </p>
            </div>

            <div>
              <b>
                Use wrapping when needed
              </b>

              <p>
                Flex wrapping can help layouts
                adapt when available space
                becomes limited.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is CSS Flexbox?",
              answer:
                "CSS Flexbox is a layout system designed to arrange elements efficiently along a row or column.",
            },
            {
              question:
                "What does justify-content do?",
              answer:
                "The justify-content property controls how flex items are distributed along the main axis.",
            },
            {
              question:
                "What does align-items do?",
              answer:
                "The align-items property controls how flex items are aligned along the cross axis.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Grid Generator",
              href: "/tools/grid",
            },
            {
              name:
                "CSS Transform Generator",
              href: "/tools/transform",
            },
            {
              name:
                "Border Radius Generator",
              href: "/tools/border-radius",
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