import { useEffect, useMemo, useState } from "react";

interface CSSSnippet {
  number: string;
  title: string;
  description: string;
  code: string;
  category: string;
}

const snippets: CSSSnippet[] = [
  {
    number: "01",
    title: "Center Anything",
    description:
      "Center an element horizontally and vertically with Flexbox.",
    category: "Layout",
    code: `.center {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
  },
  {
    number: "02",
    title: "Responsive Grid",
    description:
      "Create a responsive grid that automatically adapts to available space.",
    category: "Layout",
    code: `.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}`,
  },
  {
    number: "03",
    title: "Truncate Text",
    description:
      "Keep text on one line and show an ellipsis when it overflows.",
    category: "Typography",
    code: `.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}`,
  },
  {
    number: "04",
    title: "Smooth Scrolling",
    description:
      "Enable smooth scrolling when navigating between page sections.",
    category: "Layout",
    code: `html {
  scroll-behavior: smooth;
}`,
  },
  {
    number: "05",
    title: "Glass Effect",
    description:
      "Create a simple glassmorphism effect with transparency and blur.",
    category: "Effects",
    code: `.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}`,
  },
  {
    number: "06",
    title: "Gradient Text",
    description:
      "Apply a colorful gradient directly to text.",
    category: "Effects",
    code: `.gradient-text {
  background: linear-gradient(
    90deg,
    #7c3aed,
    #06b6d4
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`,
  },
  {
    number: "07",
    title: "Aspect Ratio",
    description:
      "Keep media elements at a consistent width-to-height ratio.",
    category: "Layout",
    code: `.media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}`,
  },
  {
    number: "08",
    title: "Focus Ring",
    description:
      "Create a visible keyboard focus state for interactive elements.",
    category: "Accessibility",
    code: `.button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}`,
  },
  {
    number: "09",
    title: "Sticky Header",
    description:
      "Keep a navigation header visible while scrolling.",
    category: "Layout",
    code: `.header {
  position: sticky;
  top: 0;
  z-index: 100;
}`,
  },
  {
    number: "10",
    title: "Perfect Circle",
    description:
      "Turn a square element into a perfect circle.",
    category: "Effects",
    code: `.circle {
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
}`,
  },
  {
    number: "11",
    title: "Responsive Text",
    description:
      "Create fluid typography that scales between minimum and maximum sizes.",
    category: "Typography",
    code: `.title {
  font-size: clamp(2rem, 5vw, 4rem);
}`,
  },
  {
    number: "12",
    title: "Hide Scrollbar",
    description:
      "Hide the scrollbar while keeping the element scrollable.",
    category: "Layout",
    code: `.scrollable {
  overflow: auto;
  scrollbar-width: none;
}

.scrollable::-webkit-scrollbar {
  display: none;
}`,
  },
];

const categories = [
  "All",
  ...Array.from(
    new Set(snippets.map((snippet) => snippet.category))
  ),
];

export default function Snippets() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const title = "CSS Snippets — Ready-to-Copy CSS Code — CSSKit";

    const description =
      "Browse useful CSS snippets for common UI patterns, including Flexbox, Grid, typography, effects, accessibility, responsive layouts, and more.";

    const canonicalUrl =
      `${window.location.origin}/resources/snippets`;

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

    const schemaId = "csskit-snippets-schema";

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
        numberOfItems: snippets.length,
        itemListElement: snippets.map((snippet, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: snippet.title,
          description: snippet.description,
        })),
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  const filteredSnippets = useMemo(() => {
    const query = search.trim().toLowerCase();

    return snippets.filter((snippet) => {
      const matchesCategory =
        category === "All" ||
        snippet.category === category;

      const matchesSearch =
        !query ||
        snippet.title.toLowerCase().includes(query) ||
        snippet.description.toLowerCase().includes(query) ||
        snippet.category.toLowerCase().includes(query) ||
        snippet.code.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const handleCopy = async (
    code: string,
    title: string
  ) => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(title);

      window.setTimeout(() => {
        setCopied(null);
      }, 1800);
    } catch {
      setCopied(null);
    }
  };

  return (
    <main className="tool-page resources-page">
      <div className="container">
        <section className="resources-hero">
          <span className="section-kicker">
            CSS SNIPPETS
          </span>

          <h1>
            Useful CSS.
            <br />
            Ready to copy.
          </h1>

          <p>
            Small, practical CSS snippets for common UI
            patterns. Copy them, customize them, and use
            them in your projects.
          </p>
        </section>

        <section
          className="snippet-toolbar"
          aria-label="Snippet filters"
        >
          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search snippets..."
            aria-label="Search CSS snippets"
          />

          <div
            className="snippet-categories"
            role="group"
            aria-label="Snippet categories"
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
          className="snippet-list"
          aria-label="CSS snippets"
        >
          {filteredSnippets.map((snippet) => (
            <article
              className="snippet-card"
              key={snippet.number}
            >
              <div className="snippet-card-header">
                <div>
                  <span className="snippet-number">
                    {snippet.number}
                  </span>

                  <span className="snippet-category">
                    {snippet.category}
                  </span>

                  <h2>{snippet.title}</h2>

                  <p>{snippet.description}</p>
                </div>
              </div>

              <div className="snippet-code">
                <button
                  type="button"
                  className="snippet-copy"
                  onClick={() =>
                    handleCopy(
                      snippet.code,
                      snippet.title
                    )
                  }
                >
                  {copied === snippet.title
                    ? "Copied!"
                    : "Copy"}
                </button>

                <pre>
                  <code>{snippet.code}</code>
                </pre>
              </div>
            </article>
          ))}

          {filteredSnippets.length === 0 && (
            <div className="reference-empty">
              <h2>No snippets found.</h2>
              <p>
                Try another search term or category.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}