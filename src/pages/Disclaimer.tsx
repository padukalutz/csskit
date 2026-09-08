import { useEffect } from "react";

import ToolBreadcrumb from "../components/tools/ToolBreadcrumb";
import ToolContent from "../components/tools/ToolContent";
import ToolPageLayout from "../components/tools/ToolPageLayout";

export default function Disclaimer() {
  useEffect(() => {
    const title = "Disclaimer — CSSKit";

    const description =
      "Read the CSSKit Disclaimer to understand the limitations of generated CSS, website content, third-party services, and information provided by CSSKit.";

    const canonicalUrl =
      `${window.location.origin}/disclaimer`;

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

    const setCanonical = (href: string) => {
      let canonical =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]',
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

    const schemaId = "csskit-disclaimer-schema";

    let schemaScript =
      document.getElementById(
        schemaId,
      ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      headline: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "CSSKit",
        url: window.location.origin,
      },
      about: {
        "@type": "Thing",
        name: "Website and generated CSS limitations",
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="legal-page">
      <ToolBreadcrumb toolName="Disclaimer" />

      <header className="tool-page-header">
        <div>
          <span className="section-kicker">
            LEGAL
          </span>

          <h1>Disclaimer</h1>

          <p>
            Important information about CSSKit, its
            tools, generated output, and third-party
            services.
          </p>
        </div>
      </header>

      <ToolContent>
        <section className="tool-content-section">
          <p>
            <strong>Last updated: September 8, 2026</strong>
          </p>

          <p>
            The information and tools provided by CSSKit
            ("CSSKit", "we", "us", or "our") are provided
            for general informational and utility
            purposes.
          </p>

          <p>
            By using CSSKit, you acknowledge and agree
            that you are responsible for how you use the
            website, its tools, generated code, and any
            information provided through the website.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">01</span>
          <h2>General Information</h2>

          <p>
            CSSKit provides CSS generators, utilities,
            examples, explanations, and other web
            development resources.
          </p>

          <p>
            While we aim to provide useful and accurate
            information, we do not guarantee that all
            content will always be complete, accurate,
            current, or suitable for every situation.
          </p>

          <p>
            You should independently verify information
            before relying on it for important technical,
            business, or production decisions.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">02</span>
          <h2>Generated CSS</h2>

          <p>
            CSSKit tools generate CSS based on the values
            and options selected by the user.
          </p>

          <p>
            Generated CSS is provided as a convenience
            and starting point for your own work.
          </p>

          <p>
            You are responsible for reviewing, testing,
            modifying, and validating generated code
            before using it in a website, application,
            or production environment.
          </p>

          <p>
            CSSKit does not guarantee that generated code
            will work correctly in every browser, device,
            framework, environment, or project.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">03</span>
          <h2>No Professional Advice</h2>

          <p>
            CSSKit is a general-purpose web development
            utility and information website.
          </p>

          <p>
            Content provided by CSSKit should not be
            considered professional legal, financial,
            business, security, or other specialized
            advice.
          </p>

          <p>
            When professional advice is required, you
            should consult a qualified professional
            appropriate to your situation.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">04</span>
          <h2>Third-Party Services</h2>

          <p>
            CSSKit may use third-party services for
            hosting, analytics, advertising, security,
            performance monitoring, or other website
            functionality.
          </p>

          <p>
            Third-party services operate independently
            from CSSKit and may have their own terms,
            privacy policies, and practices.
          </p>

          <p>
            CSSKit does not control and is not responsible
            for the operation, availability, content, or
            policies of third-party services.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">05</span>
          <h2>External Links</h2>

          <p>
            CSSKit may contain links to external websites,
            documentation, tools, or other resources.
          </p>

          <p>
            These links are provided for convenience and
            informational purposes.
          </p>

          <p>
            We do not guarantee the accuracy, security,
            availability, or reliability of information
            provided by external websites.
          </p>

          <p>
            Your use of external websites is subject to
            their own terms and policies.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">06</span>
          <h2>Advertising</h2>

          <p>
            CSSKit may display advertisements provided
            by third-party advertising services, including
            Google AdSense.
          </p>

          <p>
            Advertisements may be selected or delivered
            by third-party providers based on various
            factors and may use cookies or similar
            technologies where permitted.
          </p>

          <p>
            CSSKit does not control the content,
            availability, or targeting of advertisements
            delivered by third-party advertising
            providers.
          </p>

          <p>
            The appearance of an advertisement does not
            constitute an endorsement or recommendation
            by CSSKit.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">07</span>
          <h2>Availability and Errors</h2>

          <p>
            CSSKit is provided on an "as is" and "as
            available" basis.
          </p>

          <p>
            We do not guarantee that the website or its
            tools will always be available, uninterrupted,
            secure, or free from errors.
          </p>

          <p>
            Technical issues, maintenance, browser
            differences, network problems, or other
            circumstances may affect the availability or
            behavior of the website.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">08</span>
          <h2>Limitation of Liability</h2>

          <p>
            To the maximum extent permitted by applicable
            law, CSSKit and its operators are not
            responsible for losses, damages, or issues
            resulting from your use of the website, its
            tools, generated code, content, or external
            resources.
          </p>

          <p>
            This may include, where permitted by law,
            data loss, project issues, business
            interruption, compatibility problems, or
            other direct or indirect losses.
          </p>

          <p>
            You use CSSKit at your own discretion and
            risk.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">09</span>
          <h2>Changes to This Disclaimer</h2>

          <p>
            We may update this Disclaimer from time to
            time to reflect changes to CSSKit, its tools,
            services, or applicable requirements.
          </p>

          <p>
            When changes are made, the "Last updated"
            date at the top of this page will be updated.
          </p>

          <p>
            We encourage you to review this page
            periodically.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">10</span>
          <h2>Contact Us</h2>

          <p>
            If you have questions regarding this
            Disclaimer or the use of CSSKit, please
            contact us through the CSSKit Contact page.
          </p>

          <p>
            <strong>Website:</strong> CSSKit
          </p>

          <p>
            <strong>Contact:</strong> Available through
            our Contact page.
          </p>
        </section>

        <section className="tool-content-section">
          <p>
            This Disclaimer is provided for general
            informational purposes and should be reviewed
            and adapted to the actual operation of CSSKit,
            its services, advertising providers,
            analytics tools, and applicable legal
            requirements.
          </p>
        </section>
      </ToolContent>
    </ToolPageLayout>
  );
}