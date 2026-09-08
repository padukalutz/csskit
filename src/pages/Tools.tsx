import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import { tools } from "../data/tools";
import ToolPreview from "../components/playground/ToolPreview";

export default function Tools() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const title = "CSS Tools — Free CSS Generators | CSSKit";
    const description =
      "Free CSS tools and generators for shadows, gradients, colors, typography, layouts, animations, and more.";
    const canonicalUrl = `${window.location.origin}/tools`;

    document.title = title;

    const setMeta = (
      selector: string,
      attribute: string,
      value: string,
    ) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);

      if (!meta) {
        meta = document.createElement("meta");
        document.head.appendChild(meta);
      }

      meta.setAttribute(attribute, value);
    };

    const setLink = (
      selector: string,
      rel: string,
      href: string,
    ) => {
      let link = document.querySelector<HTMLLinkElement>(selector);

      if (!link) {
        link = document.createElement("link");
        document.head.appendChild(link);
      }

      link.setAttribute("rel", rel);
      link.setAttribute("href", href);
    };

    setMeta(
      'meta[name="description"]',
      "content",
      description,
    );

    setMeta(
      'meta[property="og:type"]',
      "content",
      "website",
    );

    setMeta(
      'meta[property="og:title"]',
      "content",
      title,
    );

    setMeta(
      'meta[property="og:description"]',
      "content",
      description,
    );

    setMeta(
      'meta[property="og:url"]',
      "content",
      canonicalUrl,
    );

    setMeta(
      'meta[name="twitter:card"]',
      "content",
      "summary",
    );

    setMeta(
      'meta[name="twitter:title"]',
      "content",
      title,
    );

    setMeta(
      'meta[name="twitter:description"]',
      "content",
      description,
    );

    setLink(
      'link[rel="canonical"]',
      "canonical",
      canonicalUrl,
    );
  }, []);

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return tools;
    }

    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <main className="tools-page">
      <section className="tools-hero">
        <div className="container">
          <span className="section-kicker">THE CSSKIT TOOLKIT</span>

          <h1>
            CSS tools for
            <br />
            everyday frontend work.
          </h1>

          <p>
            Generate, preview, and copy useful CSS without writing
            everything from scratch. Every tool runs directly in your
            browser.
          </p>

          <div className="tools-search">
            <Search size={17} />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search CSS tools..."
              aria-label="Search CSS tools"
            />

            <span>{filteredTools.length} tools</span>
          </div>
        </div>
      </section>

      <section className="tools-directory">
        <div className="container">
          <div className="tools-directory-heading">
            <div>
              <span className="section-kicker">ALL TOOLS</span>
              <h2>Build the detail.</h2>
            </div>

            <p>
              Focused utilities for the small CSS decisions that make
              interfaces feel polished.
            </p>
          </div>

          {filteredTools.length > 0 ? (
            <div className="tools-grid">
              {filteredTools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className={`tool-card accent-${tool.accent}`}
                  >
                    <div className="tool-card-head">
                      <div className="tool-icon">
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="tool-card-number">
                        {tool.number}
                      </span>
                    </div>

                    <ToolPreview type={tool.preview} />

                    <div className="tool-card-content">
                      <h3>{tool.name}</h3>
                      <p>{tool.description}</p>
                    </div>

                    <span className="tool-arrow">→</span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="tools-empty">
              <strong>No tools found.</strong>
              <span>Try another search term.</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}