import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface ToolOutputProps {
  css: string;
  property: string;
}

export default function ToolOutput({
  css,
  property,
}: ToolOutputProps) {
  const [copied, setCopied] = useState(false);

  const copyCSS = async () => {
    try {
      await navigator.clipboard.writeText(css);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const prefix = `${property}:`;
  const value = css.startsWith(prefix)
    ? css.slice(prefix.length).trim()
    : css;

  return (
    <section className="shadow-output">
      <div className="output-heading">
        <div>
          <span className="section-kicker">
            GENERATED CSS
          </span>

          <h2>Ready to copy.</h2>
        </div>

        <button
          className={`copy-button ${copied ? "copied" : ""}`}
          type="button"
          onClick={copyCSS}
        >
          {copied ? (
            <Check size={15} />
          ) : (
            <Copy size={15} />
          )}

          {copied ? "Copied" : "Copy CSS"}
        </button>
      </div>

      <div className="css-output-box">
        <span className="css-property">
          {property}:
        </span>{" "}
        <span>{value}</span>
      </div>
    </section>
  );
}