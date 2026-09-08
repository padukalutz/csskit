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

type Alignment =
  | "stretch"
  | "start"
  | "center"
  | "end";

const DEFAULT_COLUMNS = 3;
const DEFAULT_ROWS = 3;
const DEFAULT_GAP = 16;
const DEFAULT_COLUMN_GAP = 16;
const DEFAULT_ROW_GAP = 16;
const DEFAULT_JUSTIFY_ITEMS: Alignment = "stretch";
const DEFAULT_ALIGN_ITEMS: Alignment = "stretch";

interface GridRangeControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  onChange: (value: number) => void;
}

function GridRangeControl({
  label,
  value,
  min,
  max,
  unit = "",
  onChange,
}: GridRangeControlProps) {
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

export default function Grid() {
  const [columns, setColumns] =
    useState<number>(DEFAULT_COLUMNS);

  const [rows, setRows] =
    useState<number>(DEFAULT_ROWS);

  const [gap, setGap] =
    useState<number>(DEFAULT_GAP);

  const [columnGap, setColumnGap] =
    useState<number>(DEFAULT_COLUMN_GAP);

  const [rowGap, setRowGap] =
    useState<number>(DEFAULT_ROW_GAP);

  const [justifyItems, setJustifyItems] =
    useState<Alignment>(
      DEFAULT_JUSTIFY_ITEMS,
    );

  const [alignItems, setAlignItems] =
    useState<Alignment>(
      DEFAULT_ALIGN_ITEMS,
    );

  const gridCSS = useMemo(() => {
    const lines = [
      "display: grid;",
      `grid-template-columns: repeat(${columns}, 1fr);`,
      `grid-template-rows: repeat(${rows}, 1fr);`,
    ];

    if (
      gap === columnGap &&
      gap === rowGap
    ) {
      lines.push(`gap: ${gap}px;`);
    } else {
      lines.push(
        `column-gap: ${columnGap}px;`,
      );

      lines.push(
        `row-gap: ${rowGap}px;`,
      );
    }

    lines.push(
      `justify-items: ${justifyItems};`,
    );

    lines.push(
      `align-items: ${alignItems};`,
    );

    return lines.join("\n");
  }, [
    columns,
    rows,
    gap,
    columnGap,
    rowGap,
    justifyItems,
    alignItems,
  ]);

  const reset = () => {
    setColumns(DEFAULT_COLUMNS);
    setRows(DEFAULT_ROWS);
    setGap(DEFAULT_GAP);
    setColumnGap(DEFAULT_COLUMN_GAP);
    setRowGap(DEFAULT_ROW_GAP);

    setJustifyItems(
      DEFAULT_JUSTIFY_ITEMS,
    );

    setAlignItems(
      DEFAULT_ALIGN_ITEMS,
    );
  };

  useEffect(() => {
    const title =
      "CSS Grid Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS Grid layouts visually. Adjust columns, rows, gaps, and alignment, preview the result, and copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/grid`;

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

      meta.setAttribute(
        "content",
        content,
      );
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

        document.head.appendChild(
          canonical,
        );
      }

      canonical.setAttribute(
        "href",
        url,
      );
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
      "css-grid-generator-faq";

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
        "@context":
          "https://schema.org",

        "@type": "FAQPage",

        mainEntity: [
          {
            "@type": "Question",

            name:
              "What is CSS Grid?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "CSS Grid is a two-dimensional CSS layout system that lets you arrange elements into rows and columns.",
            },
          },

          {
            "@type": "Question",

            name:
              "What does grid-template-columns do?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The grid-template-columns property defines the number and size of columns in a CSS Grid layout.",
            },
          },

          {
            "@type": "Question",

            name:
              "What is the difference between gap, row-gap, and column-gap?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The gap property controls both row and column spacing, while row-gap and column-gap control each direction independently.",
            },
          },

          {
            "@type": "Question",

            name:
              "Can I use the generated CSS directly?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes. You can copy the generated CSS and apply it to the container you want to turn into a CSS Grid.",
            },
          },
        ],
      });

    const softwareId =
      "css-grid-generator-software";

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
        "@context":
          "https://schema.org",

        "@type":
          "SoftwareApplication",

        name:
          "CSSKit CSS Grid Generator",

        applicationCategory:
          "DeveloperApplication",

        operatingSystem:
          "Web",

        description,

        url:
          canonicalUrl,

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

  const itemCount =
    columns * rows;

  const items = Array.from(
    { length: itemCount },
    (_, index) => index + 1,
  );

  return (
    <ToolPageLayout>
      <ToolBreadcrumb
        toolName="CSS Grid Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 09"
        title="CSS Grid Generator"
        description="Create precise CSS Grid layouts visually. Adjust columns, rows, spacing, and alignment, then copy the generated CSS."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset grid"
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
              marginTop: 18,
            }}
          >
            <div
              className="grid-preview-canvas"
              style={{
                width: "100%",
                maxWidth: 620,
                height: "100%",
                maxHeight: 460,
                padding: 18,
                display: "grid",
                gridTemplateColumns:
                  `repeat(${columns}, minmax(0, 1fr))`,
                gridTemplateRows:
                  `repeat(${rows}, minmax(0, 1fr))`,
                columnGap:
                  `${columnGap}px`,
                rowGap:
                  `${rowGap}px`,
                justifyItems,
                alignItems,
                boxSizing: "border-box",
                border:
                  "1px solid #e1e1de",
                borderRadius: 12,
                background: "#ffffff",
                overflow: "hidden",
              }}
            >
              {items.map((item) => (
                <div
                  key={item}
                  style={{
                    width: "100%",
                    height: "100%",
                    minWidth: 0,
                    minHeight: 0,
                    display: "grid",
                    placeItems: "center",
                    boxSizing: "border-box",
                    border:
                      "1px solid #e5e5e2",
                    borderRadius: 10,
                    color: "#77777e",
                    background: "#fafaf8",
                    fontFamily:
                      '"DM Mono", monospace',
                    fontSize: 10,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>CSS GRID</span>
          </div>

          <div className="tool-control-list">
            <GridRangeControl
              label="Columns"
              value={columns}
              min={1}
              max={6}
              onChange={setColumns}
            />

            <GridRangeControl
              label="Rows"
              value={rows}
              min={1}
              max={6}
              onChange={setRows}
            />

            <GridRangeControl
              label="Gap"
              value={gap}
              min={0}
              max={50}
              unit="px"
              onChange={(value) => {
                setGap(value);
                setColumnGap(value);
                setRowGap(value);
              }}
            />

            <GridRangeControl
              label="Column Gap"
              value={columnGap}
              min={0}
              max={50}
              unit="px"
              onChange={setColumnGap}
            />

            <GridRangeControl
              label="Row Gap"
              value={rowGap}
              min={0}
              max={50}
              unit="px"
              onChange={setRowGap}
            />

            <div className="tool-control">
              <div className="tool-control-head">
                <span>
                  Justify Items
                </span>

                <span>
                  {justifyItems}
                </span>
              </div>

              <select
                value={justifyItems}
                onChange={(event) =>
                  setJustifyItems(
                    event.target
                      .value as Alignment,
                  )
                }
              >
                <option value="stretch">
                  stretch
                </option>

                <option value="start">
                  start
                </option>

                <option value="center">
                  center
                </option>

                <option value="end">
                  end
                </option>
              </select>
            </div>

            <div className="tool-control">
              <div className="tool-control-head">
                <span>
                  Align Items
                </span>

                <span>
                  {alignItems}
                </span>
              </div>

              <select
                value={alignItems}
                onChange={(event) =>
                  setAlignItems(
                    event.target
                      .value as Alignment,
                  )
                }
              >
                <option value="stretch">
                  stretch
                </option>

                <option value="start">
                  start
                </option>

                <option value="center">
                  center
                </option>

                <option value="end">
                  end
                </option>
              </select>
            </div>
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={gridCSS}
        property="display"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Build a CSS Grid layout visually.
          </h2>

          <p>
            Configure your grid using the controls
            above. The preview updates instantly
            while CSSKit generates the CSS needed
            for your layout.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Choose your columns</b>

                <span>
                  Set how many columns your grid
                  should contain.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Choose your rows</b>

                <span>
                  Set the number of rows used by
                  the grid.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Adjust the spacing</b>

                <span>
                  Use Gap, Column Gap, and Row Gap
                  to control the space between items.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Set alignment</b>

                <span>
                  Control how grid items are aligned
                  horizontally and vertically.
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
            Understanding CSS Grid.
          </h2>

          <p>
            CSS Grid is a two-dimensional layout
            system that allows elements to be
            arranged across both rows and columns.
          </p>

          <p>
            Unlike Flexbox, which is primarily
            designed around one-dimensional layouts,
            Grid gives you direct control over both
            dimensions of a layout.
          </p>

          <p>
            This makes Grid especially useful for
            dashboards, card collections, image
            galleries, application layouts, and
            larger page structures.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            The basic CSS Grid syntax.
          </h2>

          <p>
            A Grid container starts with
            <code>display: grid</code>. You can then
            define its columns, rows, spacing, and
            alignment.
          </p>

          <div className="syntax-card">
            <code>
              .grid {"{"}
              <br />
              &nbsp;&nbsp;display: grid;
              <br />
              &nbsp;&nbsp;grid-template-columns:
              repeat(3, 1fr);
              <br />
              &nbsp;&nbsp;grid-template-rows:
              repeat(3, 1fr);
              <br />
              &nbsp;&nbsp;gap: 16px;
              <br />
              &nbsp;&nbsp;justify-items:
              stretch;
              <br />
              &nbsp;&nbsp;align-items:
              stretch;
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
            Common CSS Grid layouts.
          </h2>

          <p>
            CSS Grid can be used for simple card
            layouts as well as more structured
            interface designs.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                2 COLUMNS
              </span>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, minmax(0, 1fr))",
                  gap: 10,
                  width: "100%",
                  minHeight: 150,
                }}
              >
                {[
                  "Card 1",
                  "Card 2",
                  "Card 3",
                  "Card 4",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      minWidth: 0,
                      minHeight: 62,
                      display: "grid",
                      placeItems: "center",
                      padding: "12px",
                      boxSizing:
                        "border-box",
                      border:
                        "1px solid #e5e5e2",
                      borderRadius: 8,
                      background:
                        "#fafaf8",
                      color: "#77777e",
                      fontFamily:
                        '"DM Mono", monospace',
                      fontSize: 10,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <code>
                grid-template-columns: repeat(2, 1fr);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                3 COLUMNS
              </span>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(3, minmax(0, 1fr))",
                  gap: 10,
                  width: "100%",
                  minHeight: 150,
                }}
              >
                {[
                  "Card 1",
                  "Card 2",
                  "Card 3",
                  "Card 4",
                  "Card 5",
                  "Card 6",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      minWidth: 0,
                      minHeight: 62,
                      display: "grid",
                      placeItems: "center",
                      padding: "12px",
                      boxSizing:
                        "border-box",
                      border:
                        "1px solid #e5e5e2",
                      borderRadius: 8,
                      background:
                        "#fafaf8",
                      color: "#77777e",
                      fontFamily:
                        '"DM Mono", monospace',
                      fontSize: 10,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <code>
                grid-template-columns: repeat(3, 1fr);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                CARD GRID
              </span>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, minmax(0, 1fr))",
                  gap: 10,
                  width: "100%",
                  minHeight: 150,
                }}
              >
                {[
                  "Header",
                  "Sidebar",
                  "Content",
                  "Footer",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      minWidth: 0,
                      minHeight: 62,
                      display: "grid",
                      placeItems: "center",
                      padding: "12px",
                      boxSizing:
                        "border-box",
                      border:
                        "1px solid #e5e5e2",
                      borderRadius: 8,
                      background:
                        "#fafaf8",
                      color: "#77777e",
                      fontFamily:
                        '"DM Mono", monospace',
                      fontSize: 10,
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <code>
                display: grid; gap: 16px;
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Build better Grid layouts.
          </h2>

          <div className="tips-grid">
            <div>
              <b>
                Use fractional units
              </b>

              <p>
                The <code>fr</code> unit makes it
                easy to divide available space
                between grid columns.
              </p>
            </div>

            <div>
              <b>
                Keep spacing consistent
              </b>

              <p>
                Consistent gaps help create a
                cleaner and more predictable
                interface.
              </p>
            </div>

            <div>
              <b>
                Choose the right number of columns
              </b>

              <p>
                Avoid overcrowding the layout.
                Fewer columns can improve
                readability on smaller screens.
              </p>
            </div>

            <div>
              <b>
                Use Grid for two dimensions
              </b>

              <p>
                Grid is especially useful when you
                need control over both rows and
                columns at the same time.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is CSS Grid?",

              answer:
                "CSS Grid is a two-dimensional CSS layout system that lets you arrange elements into rows and columns.",
            },

            {
              question:
                "What does grid-template-columns do?",

              answer:
                "The grid-template-columns property defines the number and size of columns in a CSS Grid layout.",
            },

            {
              question:
                "What is the difference between gap, row-gap, and column-gap?",

              answer:
                "The gap property controls both row and column spacing, while row-gap and column-gap control each direction independently.",
            },

            {
              question:
                "Can I use the generated CSS directly?",

              answer:
                "Yes. You can copy the generated CSS and apply it to the container you want to turn into a CSS Grid.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Flexbox",
              href: "/tools/flexbox",
            },

            {
              name: "Border Radius",
              href: "/tools/border-radius",
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