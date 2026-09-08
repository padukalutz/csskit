import { useEffect, useMemo, useState } from "react";

interface CSSReference {
  property: string;
  description: string;
  syntax: string;
  values: string;
  example: string;
  category: string;
}

const references: CSSReference[] = [
  {
    property: "display",
    description:
      "Defines how an element is displayed in the layout.",
    syntax: "display: value;",
    values: "block | inline | flex | grid | none",
    example: `.container {
  display: flex;
}`,
    category: "Layout",
  },
  {
    property: "position",
    description:
      "Defines how an element is positioned within the document.",
    syntax: "position: value;",
    values: "static | relative | absolute | fixed | sticky",
    example: `.badge {
  position: absolute;
  top: 0;
  right: 0;
}`,
    category: "Layout",
  },
  {
    property: "width",
    description:
      "Sets the width of an element.",
    syntax: "width: value;",
    values:
      "auto | px | % | rem | vw | min-content | max-content",
    example: `.box {
  width: 300px;
}`,
    category: "Sizing",
  },
  {
    property: "height",
    description:
      "Sets the height of an element.",
    syntax: "height: value;",
    values:
      "auto | px | rem | vh | min-content | max-content",
    example: `.box {
  height: 200px;
}`,
    category: "Sizing",
  },
  {
    property: "margin",
    description:
      "Sets the space outside an element's border.",
    syntax: "margin: value;",
    values: "auto | px | rem | %",
    example: `.card {
  margin: 20px auto;
}`,
    category: "Spacing",
  },
  {
    property: "padding",
    description:
      "Sets the space between an element's content and its border.",
    syntax: "padding: value;",
    values: "px | rem | %",
    example: `.card {
  padding: 24px;
}`,
    category: "Spacing",
  },
  {
    property: "box-sizing",
    description:
      "Defines how an element's width and height are calculated.",
    syntax: "box-sizing: value;",
    values: "content-box | border-box",
    example: `* {
  box-sizing: border-box;
}`,
    category: "Sizing",
  },
  {
    property: "color",
    description:
      "Sets the color of an element's text.",
    syntax: "color: value;",
    values:
      "named | HEX | rgb() | hsl() | var()",
    example: `.title {
  color: #111827;
}`,
    category: "Colors",
  },
  {
    property: "background",
    description:
      "A shorthand property for setting an element's background.",
    syntax: "background: value;",
    values:
      "color | image | gradient | position | size",
    example: `.hero {
  background: linear-gradient(
    135deg,
    #7c3aed,
    #06b6d4
  );
}`,
    category: "Colors",
  },
  {
    property: "border",
    description:
      "A shorthand property for setting an element's border.",
    syntax: "border: width style color;",
    values:
      "px | solid | dashed | dotted | color",
    example: `.card {
  border: 1px solid #e5e7eb;
}`,
    category: "Borders",
  },
  {
    property: "border-radius",
    description:
      "Rounds the corners of an element.",
    syntax: "border-radius: value;",
    values: "px | rem | % | 50%",
    example: `.card {
  border-radius: 16px;
}`,
    category: "Borders",
  },
  {
    property: "box-shadow",
    description:
      "Adds a shadow effect around an element.",
    syntax:
      "box-shadow: x y blur spread color;",
    values:
      "offset-x | offset-y | blur | spread | color",
    example: `.card {
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.12);
}`,
    category: "Effects",
  },
  {
    property: "opacity",
    description:
      "Sets the transparency level of an element.",
    syntax: "opacity: value;",
    values: "0 to 1",
    example: `.muted {
  opacity: 0.6;
}`,
    category: "Effects",
  },
  {
    property: "overflow",
    description:
      "Controls how content that exceeds an element's box is handled.",
    syntax: "overflow: value;",
    values: "visible | hidden | scroll | auto",
    example: `.card {
  overflow: hidden;
}`,
    category: "Layout",
  },
  {
    property: "z-index",
    description:
      "Controls the stacking order of positioned elements.",
    syntax: "z-index: value;",
    values: "auto | integer",
    example: `.modal {
  position: fixed;
  z-index: 1000;
}`,
    category: "Layout",
  },
  {
    property: "font-family",
    description:
      "Defines the font family used to display text.",
    syntax: "font-family: value;",
    values: "font name | generic family",
    example: `body {
  font-family:
    Inter,
    system-ui,
    sans-serif;
}`,
    category: "Typography",
  },
  {
    property: "font-size",
    description:
      "Sets the size of text.",
    syntax: "font-size: value;",
    values: "px | rem | em | % | clamp()",
    example: `.title {
  font-size: 2rem;
}`,
    category: "Typography",
  },
  {
    property: "font-weight",
    description:
      "Sets the thickness or weight of text.",
    syntax: "font-weight: value;",
    values: "100–900 | normal | bold",
    example: `.title {
  font-weight: 700;
}`,
    category: "Typography",
  },
  {
    property: "line-height",
    description:
      "Sets the height of a line of text.",
    syntax: "line-height: value;",
    values: "normal | number | length",
    example: `.text {
  line-height: 1.6;
}`,
    category: "Typography",
  },
  {
    property: "text-align",
    description:
      "Sets the horizontal alignment of text.",
    syntax: "text-align: value;",
    values:
      "left | center | right | justify",
    example: `.title {
  text-align: center;
}`,
    category: "Typography",
  },
  {
    property: "flex-direction",
    description:
      "Defines the direction of flex items along the main axis.",
    syntax: "flex-direction: value;",
    values:
      "row | row-reverse | column | column-reverse",
    example: `.nav {
  display: flex;
  flex-direction: row;
}`,
    category: "Flexbox",
  },
  {
    property: "justify-content",
    description:
      "Controls how flex items are distributed along the main axis.",
    syntax: "justify-content: value;",
    values:
      "start | center | end | space-between | space-around",
    example: `.nav {
  display: flex;
  justify-content: space-between;
}`,
    category: "Flexbox",
  },
  {
    property: "align-items",
    description:
      "Controls the alignment of flex items along the cross axis.",
    syntax: "align-items: value;",
    values:
      "start | center | end | stretch | baseline",
    example: `.container {
  display: flex;
  align-items: center;
}`,
    category: "Flexbox",
  },
  {
    property: "gap",
    description:
      "Sets the space between items in Flexbox or Grid layouts.",
    syntax: "gap: value;",
    values: "px | rem | % | length",
    example: `.grid {
  display: grid;
  gap: 24px;
}`,
    category: "Layout",
  },
  {
    property: "grid-template-columns",
    description:
      "Defines the columns of a CSS Grid container.",
    syntax: "grid-template-columns: value;",
    values:
      "length | fr | repeat() | minmax()",
    example: `.grid {
  display: grid;
  grid-template-columns:
    repeat(3, 1fr);
}`,
    category: "Grid",
  },
  {
    property: "transform",
    description:
      "Changes the position, size, rotation, or skew of an element.",
    syntax: "transform: function();",
    values:
      "translate() | scale() | rotate() | skew()",
    example: `.card:hover {
  transform: translateY(-4px);
}`,
    category: "Transform",
  },
  {
    property: "filter",
    description:
      "Applies visual effects such as blur, brightness, and contrast.",
    syntax: "filter: function();",
    values:
      "blur() | brightness() | contrast() | grayscale()",
    example: `.image {
  filter: grayscale(100%);
}`,
    category: "Effects",
  },
  {
    property: "transition",
    description:
      "Creates smooth transitions between changes to CSS properties.",
    syntax:
      "transition: property duration timing-function;",
    values:
      "property | duration | ease | linear",
    example: `.button {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}`,
    category: "Animation",
  },
  {
    property: "animation",
    description:
      "Applies an animation defined using @keyframes.",
    syntax:
      "animation: name duration timing-function;",
    values:
      "name | duration | delay | iteration-count",
    example: `.loader {
  animation:
    spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
    category: "Animation",
  },
];

const categories = [
  "All",
  ...Array.from(
    new Set(references.map((reference) => reference.category))
  ),
];

export default function References() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const title = "CSS Reference — Properties, Syntax & Examples — CSSKit";

    const description =
      "Browse a practical CSS reference with commonly used properties, syntax, values, categories, and ready-to-use examples for modern web development.";

    const canonicalUrl =
      `${window.location.origin}/resources/references`;

    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let meta = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    const setCanonical = (href: string) => {
      let canonical = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }

      canonical.href = href;
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "CSSKit");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    setCanonical(canonicalUrl);

    const schemaId = "csskit-references-schema";

    let schemaScript = document.getElementById(
      schemaId
    ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "CSSKit",
        url: window.location.origin,
      },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: references.length,
        itemListElement: references.map((reference, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: reference.property,
          description: reference.description,
        })),
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  const filteredReferences = useMemo(() => {
    const query = search.trim().toLowerCase();

    return references.filter((reference) => {
      const matchesCategory =
        category === "All" ||
        reference.category === category;

      const matchesSearch =
        !query ||
        reference.property
          .toLowerCase()
          .includes(query) ||
        reference.description
          .toLowerCase()
          .includes(query) ||
        reference.category
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="tool-page resources-page">
      <div className="container">
        <section className="resources-hero">
          <span className="section-kicker">
            CSS REFERENCE
          </span>

          <h1>
            CSS properties.
            <br />
            Quick reference.
          </h1>

          <p>
            A practical reference for commonly used CSS
            properties, syntax, values, and examples.
          </p>
        </section>

        <section
          className="reference-toolbar"
          aria-label="Reference filters"
        >
          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search CSS property..."
            aria-label="Search CSS property"
          />

          <div
            className="reference-categories"
            role="group"
            aria-label="CSS categories"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  category === item ? "active" : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section
          className="reference-list"
          aria-label="CSS property references"
        >
          {filteredReferences.map((reference) => (
            <article
              className="reference-card"
              key={reference.property}
            >
              <div className="reference-card-header">
                <div>
                  <span className="reference-category">
                    {reference.category}
                  </span>

                  <h2>{reference.property}</h2>
                </div>
              </div>

              <p className="reference-description">
                {reference.description}
              </p>

              <div className="reference-detail">
                <div>
                  <span>SYNTAX</span>
                  <code>{reference.syntax}</code>
                </div>

                <div>
                  <span>COMMON VALUES</span>
                  <code>{reference.values}</code>
                </div>
              </div>

              <div className="reference-example">
                <span>EXAMPLE</span>

                <pre>
                  <code>{reference.example}</code>
                </pre>
              </div>
            </article>
          ))}

          {filteredReferences.length === 0 && (
            <div className="reference-empty">
              <h2>No properties found.</h2>
              <p>
                Try another property name or category.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}