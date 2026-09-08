import {
  Code2,
  Gauge,
  Heart,
  Lock,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Developer() {
  useEffect(() => {
    const title = "Developer — About CSSKit — CSSKit";

    const description =
      "Learn how CSSKit is built, the technology behind it, and the principles guiding its simple, fast, and privacy-friendly CSS tools.";

    const canonicalUrl = `${window.location.origin}/developer`;

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

    const schemaId = "csskit-developer-schema";

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
      "@type": "AboutPage",
      name: title,
      description,
      url: canonicalUrl,
      mainEntity: {
        "@type": "WebSite",
        name: "CSSKit",
        url: window.location.origin,
        description:
          "Fast, visual CSS tools for developers and designers.",
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <main className="tool-page developer-page">
      <div className="container">
        <section className="developer-hero">
          <span className="section-kicker">DEVELOPER</span>

          <h1>
            Built with purpose.
            <br />
            Made for the web.
          </h1>

          <p>
            CSSKit is an independent web project focused on building
            simple, practical, and fast CSS tools for developers and
            designers.
          </p>
        </section>

        <section className="developer-section">
          <div className="developer-section-heading">
            <span className="section-kicker">ABOUT CSSKIT</span>

            <h2>
              Tools should help you
              <br />
              get things done.
            </h2>
          </div>

          <div className="developer-copy">
            <p>
              CSSKit was created to make common CSS tasks easier without
              unnecessary complexity. Instead of searching through
              scattered examples or manually adjusting values, you can
              experiment with CSS and get usable results directly in the
              browser.
            </p>

            <p>
              The project is designed around a simple idea: useful tools
              should be fast, accessible, and easy to understand.
            </p>
          </div>
        </section>

        <section className="developer-section">
          <div className="developer-section-heading">
            <span className="section-kicker">TECH STACK</span>

            <h2>
              Built with modern
              <br />
              web technology.
            </h2>
          </div>

          <div className="developer-stack">
            <article className="developer-card">
              <span className="developer-card-number">01</span>
              <Code2 size={22} strokeWidth={1.8} />
              <h3>React</h3>
              <p>
                Component-based UI architecture for a fast and maintainable
                interface.
              </p>
            </article>

            <article className="developer-card">
              <span className="developer-card-number">02</span>
              <Code2 size={22} strokeWidth={1.8} />
              <h3>TypeScript</h3>
              <p>
                Strong typing that helps keep the codebase predictable and
                reliable.
              </p>
            </article>

            <article className="developer-card">
              <span className="developer-card-number">03</span>
              <Gauge size={22} strokeWidth={1.8} />
              <h3>Vite</h3>
              <p>
                A lightweight build setup designed for a fast development
                and production workflow.
              </p>
            </article>

            <article className="developer-card">
              <span className="developer-card-number">04</span>
              <Sparkles size={22} strokeWidth={1.8} />
              <h3>CSS</h3>
              <p>
                The foundation of CSSKit, with tools focused directly on
                practical CSS workflows.
              </p>
            </article>
          </div>
        </section>

        <section className="developer-section">
          <div className="developer-section-heading">
            <span className="section-kicker">PRINCIPLES</span>

            <h2>
              Simple decisions.
              <br />
              Better tools.
            </h2>
          </div>

          <div className="developer-principles">
            <article className="developer-principle">
              <Code2 size={22} strokeWidth={1.8} />

              <div>
                <h3>Simple</h3>

                <p>
                  Keep interfaces clear and avoid unnecessary complexity.
                </p>
              </div>
            </article>

            <article className="developer-principle">
              <Gauge size={22} strokeWidth={1.8} />

              <div>
                <h3>Fast</h3>

                <p>
                  Tools should respond quickly and stay lightweight.
                </p>
              </div>
            </article>

            <article className="developer-principle">
              <Heart size={22} strokeWidth={1.8} />

              <div>
                <h3>Useful</h3>

                <p>
                  Every feature should solve a real and practical problem.
                </p>
              </div>
            </article>

            <article className="developer-principle">
              <Lock size={22} strokeWidth={1.8} />

              <div>
                <h3>Privacy-friendly</h3>

                <p>
                  CSSKit aims to keep everyday CSS work simple without
                  unnecessary data collection.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="developer-cta">
          <div>
            <span className="section-kicker">GET IN TOUCH</span>

            <h2>Have feedback or an idea?</h2>

            <p>
              Found something that could be better? Have a suggestion for
              CSSKit? Send us a message.
            </p>
          </div>

          <Link to="/contact" className="developer-cta-button">
            <Mail size={17} />
            Contact CSSKit
          </Link>
        </section>
      </div>
    </main>
  );
}