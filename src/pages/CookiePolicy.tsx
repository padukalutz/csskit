import { useEffect } from "react";

import ToolBreadcrumb from "../components/tools/ToolBreadcrumb";
import ToolContent from "../components/tools/ToolContent";
import ToolPageLayout from "../components/tools/ToolPageLayout";

export default function CookiePolicy() {
  useEffect(() => {
    const title = "Cookie Policy — CSSKit";

    const description =
      "Learn how CSSKit may use cookies, local storage, analytics, advertising technologies, and similar browser technologies.";

    const canonicalUrl =
      `${window.location.origin}/cookie-policy`;

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

    const schemaId = "csskit-cookie-policy-schema";

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
        name: "Cookies and browser technologies",
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="legal-page">
      <ToolBreadcrumb toolName="Cookie Policy" />

      <header className="tool-page-header">
        <div>
          <span className="section-kicker">
            LEGAL
          </span>

          <h1>Cookie Policy</h1>

          <p>
            Learn how CSSKit may use cookies, local
            storage, and similar browser technologies.
          </p>
        </div>
      </header>

      <ToolContent>
        <section className="tool-content-section">
          <p>
            <strong>Last updated: September 8, 2026</strong>
          </p>

          <p>
            This Cookie Policy explains how CSSKit
            ("CSSKit", "we", "us", or "our") may use
            cookies, local storage, and similar
            technologies when you visit and use the CSSKit
            website.
          </p>

          <p>
            These technologies may help CSSKit operate
            correctly, remember preferences, understand
            website usage, and support advertising or
            analytics where applicable.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">01</span>
          <h2>What Are Cookies?</h2>

          <p>
            Cookies are small text files that websites
            may store on your device through your web
            browser.
          </p>

          <p>
            Cookies can allow a website to remember
            information between visits or recognize
            certain browser activity.
          </p>

          <p>
            Cookies may be temporary and expire when you
            close your browser, or they may remain on your
            device for a longer period depending on their
            purpose and settings.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">02</span>
          <h2>How CSSKit May Use Cookies</h2>

          <p>
            CSSKit may use cookies or similar browser
            technologies for purposes such as:
          </p>

          <ul>
            <li>Supporting essential website functionality</li>
            <li>Remembering certain preferences</li>
            <li>Understanding general website usage</li>
            <li>Measuring website performance</li>
            <li>Supporting advertising services</li>
            <li>Detecting abuse or security issues</li>
          </ul>

          <p>
            The exact cookies and technologies used by
            CSSKit may change as the website develops and
            as third-party services are added or removed.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">03</span>
          <h2>Local Storage</h2>

          <p>
            CSSKit may use browser local storage to keep
            certain preferences or temporary application
            data directly on your device.
          </p>

          <p>
            Unlike server-side databases, local storage
            data is stored by your browser on your device.
          </p>

          <p>
            You can remove local storage data through
            your browser settings or by clearing the
            website's stored data.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">04</span>
          <h2>Analytics Cookies</h2>

          <p>
            CSSKit may use analytics services to
            understand how visitors interact with the
            website.
          </p>

          <p>
            Analytics technologies may collect information
            such as pages visited, browser type, device
            information, approximate location, referral
            information, and general interaction data.
          </p>

          <p>
            This information may be used to understand
            website traffic, improve tools, identify
            technical issues, and improve the overall user
            experience.
          </p>

          <p>
            If analytics services are used, the relevant
            provider may process information according to
            its own privacy policy.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">05</span>
          <h2>Advertising Cookies</h2>

          <p>
            CSSKit may display advertisements through
            third-party advertising services, including
            Google AdSense.
          </p>

          <p>
            Advertising providers may use cookies or
            similar technologies to deliver, measure, or
            personalize advertisements where permitted.
          </p>

          <p>
            These technologies may allow advertising
            providers to recognize a browser or device
            across different websites and services.
          </p>

          <p>
            CSSKit does not control cookies placed or
            processed directly by third-party advertising
            providers.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">06</span>
          <h2>Third-Party Cookies</h2>

          <p>
            Some cookies or similar technologies may be
            placed by third-party services rather than
            directly by CSSKit.
          </p>

          <p>
            These third parties may include providers
            responsible for analytics, advertising,
            security, hosting, or other website services.
          </p>

          <p>
            Third-party cookies are subject to the
            respective provider's privacy policies and
            terms.
          </p>

          <p>
            CSSKit does not control the operation or
            retention practices of third-party cookies.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">07</span>
          <h2>Managing Cookies</h2>

          <p>
            Most modern web browsers allow you to view,
            block, delete, or otherwise manage cookies
            through their settings.
          </p>

          <p>
            You may also be able to configure your browser
            to notify you when cookies are being stored.
          </p>

          <p>
            Disabling certain cookies may affect the
            availability or functionality of some
            website features or third-party services.
          </p>

          <p>
            Browser settings and cookie-management
            options vary depending on the browser and
            device you use.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">08</span>
          <h2>Do Not Track Signals</h2>

          <p>
            Some browsers provide a "Do Not Track"
            setting or similar privacy signal.
          </p>

          <p>
            Because browser implementations and industry
            standards may vary, CSSKit may not respond to
            every type of Do Not Track signal in the same
            way.
          </p>

          <p>
            Where required by applicable law, CSSKit will
            handle applicable privacy choices and signals
            according to the requirements that apply to
            the website.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">09</span>
          <h2>Changes to This Cookie Policy</h2>

          <p>
            We may update this Cookie Policy from time to
            time to reflect changes to CSSKit, the
            technologies used on the website, third-party
            services, or applicable requirements.
          </p>

          <p>
            When changes are made, the "Last updated"
            date at the top of this page will be updated.
          </p>

          <p>
            We encourage you to review this page
            periodically for the latest information.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">10</span>
          <h2>Contact Us</h2>

          <p>
            If you have questions about this Cookie Policy
            or how CSSKit may use cookies and similar
            technologies, please contact us through the
            CSSKit Contact page.
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
            This Cookie Policy is provided for general
            informational purposes and should be reviewed
            and adapted to the actual cookies,
            technologies, advertising providers, analytics
            services, and other third-party services
            active on CSSKit.
          </p>
        </section>
      </ToolContent>
    </ToolPageLayout>
  );
}