import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import ToolBreadcrumb from "../components/tools/ToolBreadcrumb";
import ToolContent from "../components/tools/ToolContent";
import ToolPageLayout from "../components/tools/ToolPageLayout";

const FORMSPREE_ENDPOINT =
  "https://formspree.io/f/maeyplrk";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const title = "Contact CSSKit";

    const description =
      "Contact CSSKit for questions, feedback, suggestions, or other inquiries.";

    const canonicalUrl =
      `${window.location.origin}/contact`;

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
      "csskit-contact-page-schema";

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
        "@type": "ContactPage",
        name: title,
        description,
        url: canonicalUrl,
        mainEntity: {
          "@type": "WebSite",
          name: "CSSKit",
          url: window.location.origin,
        },
      });

    return () => {
      document.getElementById(
        schemaId
      )?.remove();
    };
  }, []);

  const validate = (
    form: HTMLFormElement
  ) => {
    const formData = new FormData(form);

    const name = String(
      formData.get("name") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const subject = String(
      formData.get("subject") || ""
    ).trim();

    const message = String(
      formData.get("message") || ""
    ).trim();

    const nextErrors: Record<
      string,
      string
    > = {};

    if (!name) {
      nextErrors.name =
        "Please enter your name.";
    } else if (name.length < 2) {
      nextErrors.name =
        "Name must be at least 2 characters.";
    }

    if (!email) {
      nextErrors.email =
        "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!subject) {
      nextErrors.subject =
        "Please enter a subject.";
    } else if (subject.length < 3) {
      nextErrors.subject =
        "Subject must be at least 3 characters.";
    }

    if (!message) {
      nextErrors.message =
        "Please enter your message.";
    } else if (message.length < 10) {
      nextErrors.message =
        "Message must be at least 10 characters.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    const form = event.currentTarget;

    if (!validate(form)) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to send message."
        );
      }

      setStatus("success");
      setErrors({});
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <ToolPageLayout className="legal-page">
      <ToolBreadcrumb toolName="Contact" />

      <ToolContent>
        <div className="legal-header">
          <span className="tool-label">
            CONTACT
          </span>

          <h1>Get in touch.</h1>

          <p>
            Have a question, feedback, or
            something you want to tell us?
            Send us a message and we'll get
            back to you.
          </p>
        </div>

        <div className="legal-section">
          <h2>Contact CSSKit</h2>

          <p>
            Use the form below to send your
            message. Please provide a valid
            email address so we can respond
            to you.
          </p>

          {status === "success" && (
            <div
              className="contact-status contact-success"
              role="status"
            >
              <strong>
                Message sent successfully.
              </strong>

              <span>
                Thanks for contacting CSSKit.
                We'll get back to you as soon
                as possible.
              </span>
            </div>
          )}

          {status === "error" && (
            <div
              className="contact-status contact-error"
              role="alert"
            >
              <strong>
                Something went wrong.
              </strong>

              <span>
                Your message could not be sent.
                Please try again in a moment.
              </span>
            </div>
          )}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact-field">
              <label htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                maxLength={100}
                disabled={status === "loading"}
                aria-invalid={
                  Boolean(errors.name)
                }
                aria-describedby={
                  errors.name
                    ? "contact-name-error"
                    : undefined
                }
              />

              {errors.name && (
                <span
                  id="contact-name-error"
                  className="contact-field-error"
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={150}
                disabled={status === "loading"}
                aria-invalid={
                  Boolean(errors.email)
                }
                aria-describedby={
                  errors.email
                    ? "contact-email-error"
                    : undefined
                }
              />

              {errors.email && (
                <span
                  id="contact-email-error"
                  className="contact-field-error"
                >
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                maxLength={150}
                disabled={status === "loading"}
                aria-invalid={
                  Boolean(errors.subject)
                }
                aria-describedby={
                  errors.subject
                    ? "contact-subject-error"
                    : undefined
                }
              />

              {errors.subject && (
                <span
                  id="contact-subject-error"
                  className="contact-field-error"
                >
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message..."
                rows={7}
                maxLength={5000}
                disabled={status === "loading"}
                aria-invalid={
                  Boolean(errors.message)
                }
                aria-describedby={
                  errors.message
                    ? "contact-message-error"
                    : undefined
                }
              />

              {errors.message && (
                <span
                  id="contact-message-error"
                  className="contact-field-error"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Sending..."
                : "Send Message"}
            </button>
          </form>
        </div>
      </ToolContent>
    </ToolPageLayout>
  );
}