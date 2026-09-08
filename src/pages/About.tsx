import { useEffect } from "react";

import ToolBreadcrumb from "../components/tools/ToolBreadcrumb";
import ToolContent from "../components/tools/ToolContent";
import ToolPageLayout from "../components/tools/ToolPageLayout";

export default function About() {
  useEffect(() => {
    const title =
      "About CSSKit — Simple CSS Tools for Developers";

    const description =
      "Learn more about CSSKit, a collection of simple browser-based CSS tools designed to help developers create and experiment with CSS faster.";

    const canonicalUrl =
      `${window.location.origin}/about`;

    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let meta =
        document.querySelector<HTMLMetaElement>(
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
      let canonical =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]'
        );

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }

      canonical.setAttribute("href", href);
    };

    setMeta(
      "name",
      "description",
      description
    );

    setMeta(
      "name",
      "robots",
      "index, follow"
    );

    setMeta(
      "property",
      "og:type",
      "website"
    );

    setMeta(
      "property",
      "og:site_name",
      "CSSKit"
    );

    setMeta(
      "property",
      "og:title",
      title
    );

    setMeta(
      "property",
      "og:description",
      description
    );

    setMeta(
      "property",
      "og:url",
      canonicalUrl
    );

    setMeta(
      "name",
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "name",
      "twitter:title",
      title
    );

    setMeta(
      "name",
      "twitter:description",
      description
    );

    setCanonical(canonicalUrl);

    const schemaId =
      "csskit-about-page-schema";

    let schemaScript =
      document.getElementById(
        schemaId
      ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript =
        document.createElement("script");

      schemaScript.id = schemaId;
      schemaScript.type =
        "application/ld+json";

      document.head.appendChild(
        schemaScript
      );
    }

    schemaScript.textContent =
      JSON.stringify({
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
            "A collection of simple browser-based CSS tools for developers and designers.",
        },
      });

    return () => {
      document.getElementById(
        schemaId
      )?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="legal-page">
      <ToolBreadcrumb toolName="About CSSKit" />

      <header className="tool-page-header">
        <div>
          <span className="section-kicker">
            ABOUT CSSKIT
          </span>

          <h1>
            Simple CSS tools for developers.
          </h1>

          <p>
            CSSKit is a collection of focused,
            browser-based tools designed to make
            working with CSS faster, easier,
            and more visual.
          </p>
        </div>
      </header>

      <ToolContent>
        <section className="tool-content-section">
          <span className="section-kicker">
            01
          </span>

          <h2>What is CSSKit?</h2>

          <p>
            CSSKit is a free collection of CSS
            utilities built for developers,
            designers, students, and anyone who
            works with modern web interfaces.
          </p>

          <p>
            The goal is simple: provide useful
            tools that help you create CSS without
            unnecessary complexity.
          </p>

          <p>
            Instead of spending time manually
            adjusting CSS values and repeatedly
            checking the result, CSSKit lets you
            experiment with visual controls and
            see the generated CSS instantly.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            02
          </span>

          <h2>Built for the Browser</h2>

          <p>
            CSSKit's core tools are designed to run
            directly in your web browser.
          </p>

          <p>
            This client-side approach keeps the
            tools lightweight and allows many
            operations to happen without requiring
            an account or server-side processing.
          </p>

          <p>
            For most CSS generators, the values
            you enter are processed directly by the
            browser to generate the CSS output.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            03
          </span>

          <h2>Our Tools</h2>

          <p>
            CSSKit provides a growing collection of
            focused CSS tools covering common
            styling and layout tasks.
          </p>

          <ul>
            <li>Box Shadow Generator</li>
            <li>Text Shadow Generator</li>
            <li>Gradient Generator</li>
            <li>Color Generator</li>
            <li>Border Radius Generator</li>
            <li>CSS Filter Generator</li>
            <li>CSS Transform Generator</li>
            <li>Flexbox Generator</li>
            <li>CSS Grid Generator</li>
            <li>Typography Generator</li>
            <li>Button Generator</li>
            <li>Glassmorphism Generator</li>
            <li>Neumorphism Generator</li>
            <li>CSS Animation Generator</li>
          </ul>

          <p>
            Each tool is designed around a
            specific CSS use case so you can focus
            on creating rather than navigating
            unnecessary options.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            04
          </span>

          <h2>Our Philosophy</h2>

          <p>
            We believe developer tools should be
            useful without being complicated.
          </p>

          <p>
            CSSKit follows a few simple principles:
          </p>

          <ul>
            <li>
              Keep tools focused on a clear purpose
            </li>

            <li>
              Make controls easy to understand
            </li>

            <li>
              Show results visually whenever
              possible
            </li>

            <li>
              Generate usable CSS output
            </li>

            <li>
              Keep the experience fast and
              lightweight
            </li>

            <li>
              Avoid unnecessary features and
              complexity
            </li>
          </ul>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            05
          </span>

          <h2>Who Is CSSKit For?</h2>

          <p>
            CSSKit is useful for a wide range of
            people working with the web.
          </p>

          <ul>
            <li>
              Front-end developers
            </li>

            <li>
              Web designers
            </li>

            <li>
              UI and UX designers
            </li>

            <li>
              Students learning CSS
            </li>

            <li>
              Developers experimenting with new
              ideas
            </li>

            <li>
              Anyone who wants to build interfaces
              faster
            </li>
          </ul>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            06
          </span>

          <h2>Free to Use</h2>

          <p>
            CSSKit is designed to provide its core
            CSS tools free of charge.
          </p>

          <p>
            Where applicable, CSSKit may be
            supported by advertising or other forms
            of website monetization.
          </p>

          <p>
            Advertising does not change the purpose
            of the tools or the goal of keeping the
            experience useful and accessible.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            07
          </span>

          <h2>Continuous Improvement</h2>

          <p>
            CSSKit is an ongoing project.
          </p>

          <p>
            We may improve existing tools, fix bugs,
            refine the interface, improve
            accessibility, and update documentation
            as the project develops.
          </p>

          <p>
            Our priority is to keep CSSKit useful,
            practical, and easy to use.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">
            08
          </span>

          <h2>Contact CSSKit</h2>

          <p>
            Have a question, found a problem, or
            want to get in touch?
          </p>

          <p>
            Visit our Contact page to send us a
            message.
          </p>
        </section>

        <section className="tool-content-section">
          <p>
            CSSKit is built with the goal of making
            everyday CSS work a little simpler.
          </p>
        </section>
      </ToolContent>
    </ToolPageLayout>
  );
}