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

const DEFAULT_TRANSFORM = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  scaleX: 1,
  scaleY: 1,
  skewX: 0,
  skewY: 0,
};

type TransformKey = keyof typeof DEFAULT_TRANSFORM;

const transformLabels: Record<TransformKey, string> = {
  translateX: "Translate X",
  translateY: "Translate Y",
  rotate: "Rotate",
  scaleX: "Scale X",
  scaleY: "Scale Y",
  skewX: "Skew X",
  skewY: "Skew Y",
};

const transformUnits: Record<TransformKey, string> = {
  translateX: "px",
  translateY: "px",
  rotate: "deg",
  scaleX: "",
  scaleY: "",
  skewX: "deg",
  skewY: "deg",
};

const transformRanges: Record<
  TransformKey,
  {
    min: number;
    max: number;
    step: number;
  }
> = {
  translateX: {
    min: -100,
    max: 100,
    step: 1,
  },
  translateY: {
    min: -100,
    max: 100,
    step: 1,
  },
  rotate: {
    min: -180,
    max: 180,
    step: 1,
  },
  scaleX: {
    min: 0.5,
    max: 2,
    step: 0.05,
  },
  scaleY: {
    min: 0.5,
    max: 2,
    step: 0.05,
  },
  skewX: {
    min: -45,
    max: 45,
    step: 1,
  },
  skewY: {
    min: -45,
    max: 45,
    step: 1,
  },
};

export default function Transform() {
  const [transform, setTransform] =
    useState(DEFAULT_TRANSFORM);

  const transformCSS = useMemo(
    () =>
      [
        `translate(${transform.translateX}px, ${transform.translateY}px)`,
        `rotate(${transform.rotate}deg)`,
        `scale(${transform.scaleX}, ${transform.scaleY})`,
        `skew(${transform.skewX}deg, ${transform.skewY}deg)`,
      ].join(" "),
    [transform],
  );

  const css = `transform: ${transformCSS};`;

  useEffect(() => {
    const title =
      "CSS Transform Generator — Free CSS Tool | CSSKit";

    const description =
      "Create and customize CSS transforms visually. Adjust translate, rotate, scale, and skew values, preview the result, and copy ready-to-use CSS.";

    const canonicalUrl =
      `${window.location.origin}/tools/transform`;

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
      "css-transform-generator-faq";

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
          name: "What is CSS transform?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The CSS transform property lets you translate, rotate, scale, or skew an element without changing the normal document flow.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can multiple transform functions be combined?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Multiple transform functions can be combined in a single CSS transform declaration.",
          },
        },
        {
          "@type": "Question",
          name:
            "Can I use the generated transform directly in CSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The generated transform declaration can be copied directly into your CSS stylesheet.",
          },
        },
      ],
    });

    const softwareId =
      "css-transform-generator-software";

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
          "CSSKit CSS Transform Generator",
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

  const updateTransform = (
    key: TransformKey,
    value: number,
  ) => {
    setTransform((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const reset = () => {
    setTransform(DEFAULT_TRANSFORM);
  };

  return (
    <ToolPageLayout>
      <ToolBreadcrumb
        toolName="CSS Transform Generator"
      />

      <ToolHeader
        eyebrow="CSS TOOL / 07"
        title="CSS Transform Generator"
        description="Create custom CSS transforms with translate, rotate, scale, and skew controls."
        action={
          <button
            className="secondary-button"
            type="button"
            onClick={reset}
            aria-label="Reset CSS transform"
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
                transform: transformCSS,
              }}
            >
              CSSKit
            </div>
          </div>
        </div>

        <div className="tool-controls">
          <div className="tool-label">
            <span>CONTROLS</span>
            <span>TRANSFORM</span>
          </div>

          <div className="tool-control-list">
            {(
              Object.keys(
                transformLabels,
              ) as TransformKey[]
            ).map((key) => {
              const range =
                transformRanges[key];

              return (
                <div
                  className="tool-control"
                  key={key}
                >
                  <div className="tool-control-head">
                    <span>
                      {transformLabels[key]}
                    </span>

                    <span>
                      {transform[key]}
                      {transformUnits[key]}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={range.min}
                    max={range.max}
                    step={range.step}
                    value={transform[key]}
                    onChange={(event) =>
                      updateTransform(
                        key,
                        Number(
                          event.target.value,
                        ),
                      )
                    }
                    aria-label={`${transformLabels[key]} transform`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </ToolWorkspace>

      <ToolOutput
        css={css}
        property="transform"
      />

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            HOW TO USE
          </span>

          <h2>
            Create CSS transforms in seconds.
          </h2>

          <p>
            Adjust the transform controls and
            preview the result instantly. When the
            transformation looks right, copy the
            generated CSS declaration.
          </p>

          <ol className="tool-steps">
            <li>
              <div>
                <b>Move the element</b>
                <span>
                  Use Translate X and Y to move the
                  element horizontally or vertically.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Rotate and scale</b>
                <span>
                  Change the rotation and size of
                  the preview.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Adjust skew</b>
                <span>
                  Apply horizontal or vertical skew
                  to create angled shapes.
                </span>
              </div>
            </li>

            <li>
              <div>
                <b>Copy the CSS</b>
                <span>
                  Copy the generated transform
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
            Understanding CSS transforms.
          </h2>

          <p>
            The CSS transform property changes the
            visual position, size, orientation, or
            shape of an element.
          </p>

          <p>
            Common transform functions include
            translate, rotate, scale, and skew.
            Multiple functions can be combined in
            one declaration.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            SYNTAX
          </span>

          <h2>
            Combine transform functions.
          </h2>

          <p>
            Transform functions can be placed
            together inside a single transform
            declaration.
          </p>

          <div className="syntax-card">
            <code>
              .element {"{"}
              <br />
              &nbsp;&nbsp;transform: translate(20px,
              10px) rotate(5deg) scale(1.1);
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
            Common CSS transform effects.
          </h2>

          <p>
            Different transform functions can be
            used individually or combined.
          </p>

          <div className="shadow-examples">
            <div className="shadow-example-card">
              <span className="section-kicker">
                ROTATE
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  transform: "rotate(-8deg)",
                }}
              >
                CSSKit
              </div>

              <code>
                transform: rotate(-8deg);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                SCALE
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  transform: "scale(1.15)",
                }}
              >
                CSSKit
              </div>

              <code>
                transform: scale(1.15);
              </code>
            </div>

            <div className="shadow-example-card">
              <span className="section-kicker">
                SKEW
              </span>

              <div
                className="tool-preview-object"
                style={{
                  margin: "18px auto",
                  transform:
                    "skew(-8deg, 4deg)",
                }}
              >
                CSSKit
              </div>

              <code>
                transform: skew(-8deg, 4deg);
              </code>
            </div>
          </div>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            DESIGN TIPS
          </span>

          <h2>
            Use transforms with purpose.
          </h2>

          <div className="tips-grid">
            <div>
              <b>Keep movement subtle</b>
              <p>
                Small translations and rotations
                often create cleaner interfaces.
              </p>
            </div>

            <div>
              <b>Use scale for emphasis</b>
              <p>
                Slight scaling can help highlight
                interactive elements.
              </p>
            </div>

            <div>
              <b>Combine functions carefully</b>
              <p>
                Multiple transforms can produce
                strong effects, so keep the result
                visually balanced.
              </p>
            </div>

            <div>
              <b>Preview before using</b>
              <p>
                Check the transformed element at
                different screen sizes before
                shipping it.
              </p>
            </div>
          </div>
        </section>

        <ToolFAQ
          items={[
            {
              question:
                "What is CSS transform?",
              answer:
                "The CSS transform property lets you translate, rotate, scale, or skew an element without changing the normal document flow.",
            },
            {
              question:
                "Can multiple transform functions be combined?",
              answer:
                "Yes. Multiple transform functions can be combined in a single CSS transform declaration.",
            },
            {
              question:
                "Can I use the generated transform directly in CSS?",
              answer:
                "Yes. The generated transform declaration can be copied directly into your CSS stylesheet.",
            },
          ]}
        />

        <RelatedTools
          tools={[
            {
              name: "Border Radius Generator",
              href: "/tools/border-radius",
            },
            {
              name: "CSS Filter Generator",
              href: "/tools/filter",
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