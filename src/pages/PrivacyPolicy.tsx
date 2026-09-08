import { useEffect } from "react";

import ToolBreadcrumb from "../components/tools/ToolBreadcrumb";
import ToolContent from "../components/tools/ToolContent";
import ToolPageLayout from "../components/tools/ToolPageLayout";

export default function PrivacyPolicy() {
  useEffect(() => {
    const title = "Privacy Policy — CSSKit";

    const description =
      "Read the CSSKit Privacy Policy to learn how information, cookies, local storage, analytics, advertising, and third-party services may be handled.";

    const canonicalUrl =
      `${window.location.origin}/privacy-policy`;

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

    const schemaId = "csskit-privacy-policy-schema";

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
        name: "Privacy and data protection",
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="legal-page">
      <ToolBreadcrumb toolName="Privacy Policy" />

      <header className="tool-page-header">
        <div>
          <span className="section-kicker">
            LEGAL
          </span>

          <h1>Privacy Policy</h1>

          <p>
            Learn how CSSKit may handle information,
            cookies, local storage, analytics, and
            third-party services.
          </p>
        </div>
      </header>

      <ToolContent>
        <section className="tool-content-section">
          <p>
            <strong>Last updated: September 8, 2026</strong>
          </p>

          <p>
            CSSKit ("CSSKit", "we", "us", or "our")
            respects your privacy. This Privacy Policy
            explains how information may be collected,
            used, and handled when you use the CSSKit
            website and its tools.
          </p>

          <p>
            By using CSSKit, you agree to the practices
            described in this Privacy Policy.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">01</span>
          <h2>Information We Collect</h2>

          <p>
            CSSKit is primarily a client-side website.
            Most CSS generators and utilities operate
            directly in your browser.
          </p>

          <p>
            We do not require you to create an account
            or provide personal information simply to
            use the CSSKit tools.
          </p>

          <p>
            Depending on how the website is configured
            and which services are active, certain
            technical or usage information may be
            collected automatically by CSSKit or by
            third-party services used on the website.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">02</span>
          <h2>Information You Provide</h2>

          <p>
            CSSKit does not currently require
            registration or user accounts.
          </p>

          <p>
            When you use the CSS generators, values and
            settings you enter are generally processed
            within your browser to generate the
            requested CSS output.
          </p>

          <p>
            If you contact us, we may receive information
            that you voluntarily provide, such as your
            name, email address, and the contents of your
            message.
          </p>

          <p>
            We use this information only for purposes
            related to responding to your inquiry and
            providing support.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">03</span>
          <h2>Automatically Collected Information</h2>

          <p>
            When you access a website, certain technical
            information may potentially be collected
            automatically by the website infrastructure
            or third-party services.
          </p>

          <p>This may include:</p>

          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Approximate geographic information</li>
            <li>Referring pages</li>
            <li>Pages visited</li>
            <li>Date and time of access</li>
            <li>General usage information</li>
          </ul>

          <p>
            This information may be used for security,
            analytics, performance monitoring,
            troubleshooting, and improving the website.
          </p>

          <p>
            CSSKit does not intentionally use this
            information to identify individual users
            personally.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">04</span>
          <h2>Cookies and Local Storage</h2>

          <p>
            CSSKit may use browser technologies such as
            cookies and local storage.
          </p>

          <p>
            Local storage may be used to store
            preferences or temporary application data
            directly on your device. Data stored in
            local storage is controlled by your browser
            and remains on your device unless it is
            removed by you or by the website's
            application logic.
          </p>

          <p>
            Third-party services, including advertising
            and analytics providers, may also use
            cookies or similar technologies according to
            their own privacy policies.
          </p>

          <p>
            You can manage or delete cookies and local
            storage through your browser settings.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">05</span>
          <h2>How We Use Information</h2>

          <p>
            Information available to CSSKit or its
            service providers may be used to:
          </p>

          <ul>
            <li>Operate and maintain the website</li>
            <li>
              Provide CSS generation tools and other
              utilities
            </li>
            <li>Improve website functionality</li>
            <li>Understand general website usage</li>
            <li>Monitor website performance</li>
            <li>
              Detect and prevent abuse or security
              issues
            </li>
            <li>Respond to user inquiries</li>
            <li>Improve content and user experience</li>
            <li>
              Display relevant advertising where
              applicable
            </li>
          </ul>

          <p>
            We do not sell your personal information.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">06</span>
          <h2>Third-Party Services</h2>

          <p>
            CSSKit may use third-party services to
            provide functionality such as hosting,
            analytics, advertising, security, or other
            website infrastructure.
          </p>

          <p>
            These services may process certain technical
            information according to their own privacy
            policies and terms.
          </p>

          <p>
            Third-party services used by CSSKit may
            change over time as the website develops.
          </p>

          <p>
            Where appropriate, we will provide links to
            the relevant third-party privacy policies.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">07</span>
          <h2>Google AdSense and Advertising</h2>

          <p>
            CSSKit may display advertisements provided
            by third-party advertising services,
            including Google AdSense.
          </p>

          <p>
            If advertising is enabled, Google and its
            advertising partners may use cookies or
            similar technologies to provide, measure,
            and personalize advertisements.
          </p>

          <p>
            Advertising providers may use information
            about your visits to this and other websites
            to provide relevant advertising, subject to
            their own policies and applicable laws.
          </p>

          <p>
            CSSKit does not control the information
            collected or processed directly by
            third-party advertising providers.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">08</span>
          <h2>Analytics</h2>

          <p>
            CSSKit may use analytics services to
            understand how visitors use the website.
          </p>

          <p>
            Analytics information may include pages
            visited, approximate visit duration, device
            information, browser information, and
            general interaction data.
          </p>

          <p>
            Analytics data helps us understand which
            tools and content are useful and identify
            areas where the website can be improved.
          </p>

          <p>
            If analytics services are used, their
            collection and processing of information are
            also subject to the respective provider's
            privacy policy.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">09</span>
          <h2>Data Retention</h2>

          <p>
            CSSKit does not maintain user accounts or a
            personal user database as part of its core
            client-side tools.
          </p>

          <p>
            Information submitted voluntarily through
            contact methods may be retained only as
            reasonably necessary to respond to inquiries,
            provide support, maintain records, or comply
            with applicable legal obligations.
          </p>

          <p>
            Third-party service providers may retain
            information according to their own retention
            policies.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">10</span>
          <h2>Third-Party Links</h2>

          <p>
            CSSKit may contain links to external
            websites, services, documentation, or other
            resources.
          </p>

          <p>
            We are not responsible for the privacy
            practices, security, content, or policies of
            third-party websites.
          </p>

          <p>
            We recommend reviewing the privacy policy of
            any external website you visit.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">11</span>
          <h2>Children's Privacy</h2>

          <p>
            CSSKit is not specifically directed at
            children.
          </p>

          <p>
            We do not knowingly request or collect
            personal information from children through
            the CSSKit website.
          </p>

          <p>
            If you believe that a child has provided
            personal information to us, please contact
            us so that appropriate action can be taken.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">12</span>
          <h2>Your Privacy Rights</h2>

          <p>
            Depending on your location and applicable
            privacy laws, you may have certain rights
            regarding your personal information.
          </p>

          <p>
            These rights may include the ability to:
          </p>

          <ul>
            <li>
              Request access to personal information
            </li>
            <li>
              Request correction of inaccurate
              information
            </li>
            <li>
              Request deletion of certain information
            </li>
            <li>
              Object to or restrict certain processing
            </li>
            <li>
              Withdraw consent where processing is
              based on consent
            </li>
            <li>
              Request information about how your data
              is processed
            </li>
          </ul>

          <p>
            To make a privacy-related request, please
            contact us using the contact information
            provided on the CSSKit Contact page.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">13</span>
          <h2>Security</h2>

          <p>
            We take reasonable measures to protect
            information handled through CSSKit.
          </p>

          <p>
            However, no website, internet transmission,
            or electronic storage system can be
            guaranteed to be completely secure.
          </p>

          <p>
            You should avoid submitting sensitive
            personal information through public or
            unsecured communication channels.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">14</span>
          <h2>Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time
            to time to reflect changes to CSSKit,
            third-party services, applicable laws, or
            our privacy practices.
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
          <span className="section-kicker">15</span>
          <h2>Contact Us</h2>

          <p>
            If you have questions, concerns, or requests
            regarding this Privacy Policy or the privacy
            practices of CSSKit, please contact us
            through the CSSKit Contact page.
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
            This Privacy Policy is provided for general
            informational purposes and should be reviewed
            and adapted to the actual services,
            advertising providers, analytics tools,
            hosting infrastructure, and legal
            requirements applicable to CSSKit.
          </p>
        </section>
      </ToolContent>
    </ToolPageLayout>
  );
}