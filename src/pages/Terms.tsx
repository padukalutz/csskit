import { useEffect } from "react";

import ToolBreadcrumb from "../components/tools/ToolBreadcrumb";
import ToolContent from "../components/tools/ToolContent";
import ToolPageLayout from "../components/tools/ToolPageLayout";

export default function Terms() {
  useEffect(() => {
    const title = "Terms of Service — CSSKit";

    const description =
      "Read the CSSKit Terms of Service to understand the rules, responsibilities, limitations, and conditions for using CSSKit and its tools.";

    const canonicalUrl =
      `${window.location.origin}/terms`;

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

    const schemaId = "csskit-terms-schema";

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
        name: "Terms of service and website usage",
      },
    });

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <ToolPageLayout className="legal-page">
      <ToolBreadcrumb toolName="Terms of Service" />

      <header className="tool-page-header">
        <div>
          <span className="section-kicker">
            LEGAL
          </span>

          <h1>Terms of Service</h1>

          <p>
            Please read these terms before using CSSKit
            and its CSS tools.
          </p>
        </div>
      </header>

      <ToolContent>
        <section className="tool-content-section">
          <p>
            <strong>Last updated: September 8, 2026</strong>
          </p>

          <p>
            These Terms of Service ("Terms") govern
            your access to and use of the CSSKit website,
            tools, content, and related services.
          </p>

          <p>
            By accessing or using CSSKit, you agree to
            be bound by these Terms. If you do not agree
            with these Terms, please do not use the
            website.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">01</span>
          <h2>Use of CSSKit</h2>

          <p>
            CSSKit provides browser-based CSS generators
            and utilities intended to help users create,
            understand, and work with CSS code.
          </p>

          <p>
            You may use CSSKit for personal, educational,
            professional, and commercial purposes,
            provided that your use complies with these
            Terms and applicable laws.
          </p>

          <p>
            CSSKit is provided as a general-purpose
            utility and does not guarantee that generated
            CSS will be suitable for every project,
            browser, device, or production environment.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">02</span>
          <h2>Generated CSS and Content</h2>

          <p>
            CSSKit tools may generate CSS code based on
            values, settings, and options selected by the
            user.
          </p>

          <p>
            You are responsible for reviewing, testing,
            modifying, and using generated code before
            incorporating it into your projects.
          </p>

          <p>
            CSSKit does not guarantee that generated
            output will be error-free, compatible with
            every browser, or appropriate for a particular
            use case.
          </p>

          <p>
            You retain responsibility for any project,
            website, application, or other work in which
            you use CSS generated by CSSKit.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">03</span>
          <h2>Acceptable Use</h2>

          <p>
            You agree to use CSSKit only for lawful
            purposes and in a manner that does not
            interfere with the operation or security of
            the website.
          </p>

          <p>You must not:</p>

          <ul>
            <li>
              Use CSSKit for unlawful or fraudulent
              activities
            </li>
            <li>
              Attempt to disrupt, damage, or overload
              the website
            </li>
            <li>
              Attempt to gain unauthorized access to
              systems or services
            </li>
            <li>
              Introduce malicious code, malware, or
              harmful content
            </li>
            <li>
              Attempt to bypass security or technical
              restrictions
            </li>
            <li>
              Abuse automated requests or other
              mechanisms in a way that harms the service
            </li>
            <li>
              Use CSSKit in violation of applicable
              laws or regulations
            </li>
          </ul>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">04</span>
          <h2>Intellectual Property</h2>

          <p>
            The CSSKit website, including its branding,
            design, interface, original content, graphics,
            code, and other materials, may be protected
            by applicable intellectual property laws.
          </p>

          <p>
            Unless otherwise stated, CSSKit and its
            licensors retain rights to the website and
            its original materials.
          </p>

          <p>
            You may use CSSKit's generated CSS output in
            your own projects, subject to your
            responsibility for reviewing and testing that
            output.
          </p>

          <p>
            You may not reproduce, redistribute, sell, or
            republish substantial portions of the CSSKit
            website or its original materials without
            appropriate permission.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">05</span>
          <h2>Third-Party Services</h2>

          <p>
            CSSKit may use third-party services for
            hosting, analytics, advertising, security,
            performance monitoring, or other website
            functionality.
          </p>

          <p>
            Your use of third-party services may also be
            subject to the terms and policies provided by
            those third parties.
          </p>

          <p>
            CSSKit is not responsible for the content,
            availability, policies, or practices of
            third-party services.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">06</span>
          <h2>External Links</h2>

          <p>
            CSSKit may provide links to external websites,
            documentation, tools, or other resources.
          </p>

          <p>
            These links are provided for convenience and
            informational purposes.
          </p>

          <p>
            CSSKit does not control external websites and
            is not responsible for their content,
            availability, security, privacy practices, or
            terms.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">07</span>
          <h2>Availability</h2>

          <p>
            We may modify, update, suspend, or
            discontinue any part of CSSKit at any time.
          </p>

          <p>
            We do not guarantee that CSSKit or any
            individual tool will always be available,
            uninterrupted, secure, or free from errors.
          </p>

          <p>
            Features, tools, content, and functionality
            may change as CSSKit is developed and
            maintained.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">08</span>
          <h2>Disclaimer of Warranties</h2>

          <p>
            CSSKit is provided on an "as is" and "as
            available" basis to the maximum extent
            permitted by applicable law.
          </p>

          <p>
            We make no warranties or representations
            regarding the accuracy, reliability,
            availability, suitability, or completeness of
            CSSKit, its tools, generated output, or its
            content.
          </p>

          <p>
            You use CSSKit at your own discretion and
            risk.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">09</span>
          <h2>Limitation of Liability</h2>

          <p>
            To the maximum extent permitted by applicable
            law, CSSKit and its operators will not be
            liable for any direct, indirect, incidental,
            consequential, special, or other damages
            resulting from or related to your use of, or
            inability to use, the website or its tools.
          </p>

          <p>
            This includes, where permitted by law, loss of
            data, loss of profits, business interruption,
            project issues, or other losses arising from
            reliance on generated output or website
            content.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">10</span>
          <h2>User Responsibility</h2>

          <p>
            You are responsible for how you use CSSKit
            and any code or information generated through
            the website.
          </p>

          <p>
            Before deploying generated CSS in a
            production environment, you should review,
            test, and adapt the output to your specific
            requirements.
          </p>

          <p>
            You are also responsible for maintaining
            appropriate backups and testing your own
            projects independently of CSSKit.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">11</span>
          <h2>Changes to These Terms</h2>

          <p>
            We may update these Terms from time to time
            to reflect changes to CSSKit, its services,
            applicable laws, or our operating practices.
          </p>

          <p>
            When changes are made, the "Last updated"
            date at the top of this page will be updated.
          </p>

          <p>
            Your continued use of CSSKit after changes
            are published means that you accept the
            updated Terms, to the extent permitted by
            applicable law.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">12</span>
          <h2>Termination</h2>

          <p>
            We may restrict or terminate access to CSSKit
            if we reasonably believe that a user has
            violated these Terms, abused the service, or
            engaged in activity that may harm CSSKit or
            other users.
          </p>

          <p>
            Because CSSKit is primarily a public,
            client-side website, certain functionality may
            also be changed or removed without prior
            notice.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">13</span>
          <h2>Governing Law</h2>

          <p>
            These Terms shall be interpreted and applied
            in accordance with applicable laws and
            regulations.
          </p>

          <p>
            Nothing in these Terms is intended to exclude
            or limit rights that cannot lawfully be
            excluded or limited under applicable law.
          </p>
        </section>

        <section className="tool-content-section">
          <span className="section-kicker">14</span>
          <h2>Contact Us</h2>

          <p>
            If you have questions regarding these Terms
            or the use of CSSKit, please contact us
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
            These Terms of Service are provided for
            general informational purposes and should be
            reviewed and adapted to the actual operation
            of CSSKit and the laws applicable to its
            users and operators.
          </p>
        </section>
      </ToolContent>
    </ToolPageLayout>
  );
}