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

const DEFAULT_RADIUS = {
  topLeft: 24,
  topRight: 24,
  bottomRight: 24,
  bottomLeft: 24,
};

type RadiusKey = keyof typeof DEFAULT_RADIUS;

const radiusLabels: Record<RadiusKey, string> = {
  topLeft: "Top Left",
  topRight: "Top Right",
  bottomRight: "Bottom Right",
  bottomLeft: "Bottom Left",
};

export default function BorderRadius() {
  const [radius, setRadius] = useState(
    DEFAULT_RADIUS,
  );
  const [linked, setLinked] = useState(true);

  const borderRadius = useMemo(
    () =>
      `${radius.topLeft}px ${radius.topRight}px ${radius.bottomRight}px ${radius.bottomLeft}px`,
    [radius],
  );

  const css = `border-radius: ${borderRadius};`;

  useEffect(() => {
    const title =
      "Border Radius Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS border-radius values visually. Adjust each corner, preview the shape, and copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/border-radius`;

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

    const faqId =
      "border-radius-generator-faq";

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
          name: "What is CSS border-radius?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The CSS border-radius property controls how rounded the corners of an element are.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can each corner have a different radius?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. CSS allows the top-left, top-right, bottom-right, and bottom-left corners to have different radius values.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can I use the generated value directly in CSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The generated border-radius declaration can be copied directly into your CSS.",
          },
        },
      ],
    });

    const softwareId =
      "border-radius-generator-software";

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
          "CSSKit Border Radius Generator",
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

  const updateRadius = (
    key: RadiusKey,
    value: number,
  ) => {
    if (linked) {
      setRadius({
        topLeft: value,
        topRight: value,
        bottomRight: value,
        bottomLeft: value,
      });

      return;
    }

    setRadius((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const reset = () => {
    setRadius(DEFAULT_RADIUS);
    setLinked(true);
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb
        toolName="Border Radius Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 05"
        title="Border Radius Generator"
        description="Create smooth or custom rounded corners and generate the CSS border-radius value instantly."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset border radius"
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
                borderRadius,
              }}
            >
              <span>CSSKit</span>
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>BORDER RADIUS</span>
          </div>

          <div className="tool-control-list">
            {(
              Object.keys(
                radiusLabels,
              ) as RadiusKey[]
            ).map((key) => (
              <div
                className="tool-control"
                key={key}
              >
                <div className="tool-control-head">
                  <span>
                    {radiusLabels[key]}
                  </span>

                  <span>
                    {radius[key]}px
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={radius[key]}
                  onChange={(event) =>
                    updateRadius(
                      key,
                      Number(event.target.value),
                    )
                  }
                  aria-label={`${radiusLabels[key]} radius`}
                />
              </div>
            ))}

            <button
              className={`tool-toggle ${
                linked ? "active" : ""
              }`}
              type="button"
              onClick={() =>
                setLinked(
                  (current) => !current,
                )
              }
              aria-pressed={linked}
            >
              <span className="tool-toggle-indicator">
                <span />
              </span>

              <span>
                <strong>
                  Link corners
                </strong>

                <small>
                  {linked
                    ? "All corners use the same value."
                    : "Each corner can be adjusted independently."}
                </small>
              </span>
            </button>
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={css}
        property="border-radius"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create rounded corners in seconds.
          </h2>

          <p>
            Adjust the corner values using the
            sliders and copy the generated
            border-radius declaration directly
            into your stylesheet.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Adjust the corners</b>
                <span>
                  Set the radius for each corner
                  using the sliders.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Link the corners</b>
                <span>
                  Keep all corners synchronized or
                  edit them independently.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Preview the shape</b>
                <span>
                  See the rounded corners update
                  instantly in the live preview.
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
            Understanding border-radius.
          </h2>

          <p>
            The CSS border-radius property controls
            the roundness of an element's corners.
            It is commonly used for cards, buttons,
            images, inputs, and other interface
            components.
          </p>

          <p>
            Each corner can use its own value,
            allowing you to create anything from
            subtle rounding to completely rounded
            shapes.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            Use border-radius in CSS.
          </h2>

          <p>
            The generated value can be assigned
            directly to the border-radius property.
          </p>

          <div className="syntax-card">
            <code>
              .element {"{"}
              <br />
              &nbsp;&nbsp;border-radius:{" "}
              {borderRadius};
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
            Common border-radius patterns.
          </h2>

          <p>
            Different radius values can create
            distinct shapes and interface styles.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                SOFT
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  borderRadius: "16px",
                }}
              >
                Soft Card
              </div>

              <code>
                border-radius: 16px;
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                PILL
              </span>

              <div
                className="tool-preview-object"
                style={{
                  width: "150px",
                  height: "70px",
                  margin: "18px auto",
                  borderRadius: "999px",
                }}
              >
                Pill
              </div>

              <code>
                border-radius: 999px;
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                CUSTOM
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  borderRadius:
                    "4px 28px 12px 40px",
                }}
              >
                Custom
              </div>

              <code>
                border-radius: 4px 28px 12px 40px;
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Use rounded corners with intention.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Keep values consistent</b>
              <p>
                Reusing radius values creates a more
                cohesive interface.
              </p>
            </div>

            <div>
              <b>Use larger values carefully</b>
              <p>
                Large radii can create a softer,
                friendlier visual style.
              </p>
            </div>

            <div>
              <b>Match the component</b>
              <p>
                Buttons, cards, inputs, and images
                may need different levels of rounding.
              </p>
            </div>

            <div>
              <b>Use pill shapes intentionally</b>
              <p>
                Very large radius values are useful
                for pills and fully rounded controls.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is CSS border-radius?",
              answer:
                "The CSS border-radius property controls how rounded the corners of an element are.",
            },
            {
              question:
                "Can each corner have a different radius?",
              answer:
                "Yes. CSS allows the top-left, top-right, bottom-right, and bottom-left corners to have different radius values.",
            },
            {
              question:
                "Can I use the generated value directly in CSS?",
              answer:
                "Yes. The generated border-radius declaration can be copied directly into your CSS.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Box Shadow Generator",
              href: "/tools/box-shadow",
            },
            {
              name: "Gradient Generator",
              href: "/tools/gradient",
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