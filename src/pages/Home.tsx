import { useEffect } from "react";
import {
  ArrowRight,
  Check,
  CircleDot,
  Copy,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { tools } from "../data/tools";
import ToolCard from "../components/ui/ToolCard";

export default function Home() {
  useEffect(() => {
    document.title = "CSSKit — Visual CSS Tools for Developers";

    const description =
      "CSSKit is a collection of fast, visual CSS tools for developers and designers. Generate CSS, experiment with styles, and copy ready-to-use code.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  const recommendedTools = [
    tools[0], // Box Shadow
    tools[2], // Gradients
    tools[8], // CSS Grid
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              CSS utilities, made visual
            </div>

            <h1>
              Shape your CSS
              <span className="headline-accent">
                before you ship.
              </span>
            </h1>

            <p className="hero-description">
              A focused collection of visual CSS utilities designed to make
              styling faster, clearer, and a little more enjoyable.
            </p>

            <div className="hero-actions">
              <Link className="primary-button" to="/tools">
                Explore the toolkit
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-meta">
              <span>
                <Check size={13} />
                Free to use
              </span>

              <span>
                <Check size={13} />
                No sign-up
              </span>

              <span>
                <Check size={13} />
                Runs in your browser
              </span>
            </div>
          </div>

          {/* PLAYGROUND */}
          <div className="hero-visual">
            <div className="visual-grid" />

            <div className="visual-label label-top">
              <span className="label-marker" />
              visual playground
            </div>

            <div className="code-chip chip-top">
              <span className="code-dot purple" />
              box-shadow
            </div>

            <div className="code-chip chip-bottom">
              <span className="code-dot cyan" />
              border-radius
            </div>

            <div className="visual-card">
              <div className="visual-card-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>preview.css</span>

                <button type="button" aria-label="Copy CSS">
                  <Copy size={13} />
                </button>
              </div>

              <div className="visual-editor">
                <div className="editor-line">
                  <span className="line-number">01</span>
                  <span className="syntax-selector">.card</span>
                  <span> {"{"}</span>
                </div>

                <div className="editor-line indent">
                  <span className="line-number">02</span>
                  <span className="syntax-property">display</span>
                  <span>: </span>
                  <span className="syntax-value">grid</span>
                  <span>;</span>
                </div>

                <div className="editor-line indent">
                  <span className="line-number">03</span>
                  <span className="syntax-property">padding</span>
                  <span>: </span>
                  <span className="syntax-number">24px</span>
                  <span>;</span>
                </div>

                <div className="editor-line indent">
                  <span className="line-number">04</span>
                  <span className="syntax-property">radius</span>
                  <span>: </span>
                  <span className="syntax-number">18px</span>
                  <span>;</span>
                </div>

                <div className="editor-line indent">
                  <span className="line-number">05</span>
                  <span className="syntax-property">background</span>
                  <span>: </span>
                  <span className="syntax-value">white</span>
                  <span>;</span>
                </div>

                <div className="editor-line">
                  <span className="line-number">06</span>
                  <span>{"}"}</span>
                </div>
              </div>

              <div className="visual-result">
                <div className="result-shape">
                  <Sparkles size={19} />
                </div>

                <div className="result-copy">
                  <strong>Styled.</strong>
                  <span>Exactly how you imagined.</span>
                </div>

                <div className="result-status">
                  <CircleDot size={10} />
                  live
                </div>
              </div>
            </div>

            <div className="floating-value value-one">
              <span>radius</span>
              <strong>18px</strong>
            </div>

            <div className="floating-value value-two">
              <span>shadow</span>
              <strong>soft</strong>
            </div>

            <div className="visual-css-tag">{"</>"}</div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-strip">
        <div className="container intro-inner">
          <div className="intro-number">01</div>

          <div className="intro-title">
            <span>One place</span>
            <strong>for the CSS details.</strong>
          </div>

          <p>
            Stop rebuilding tiny CSS experiments in empty browser tabs.
            CSSKit keeps the useful stuff close, visual, and ready to copy.
          </p>

          <div className="intro-code">
            <span>style</span>
            <i>→</i>
            <strong>see</strong>
            <i>→</i>
            <b>ship</b>
          </div>
        </div>
      </section>

      {/* RECOMMENDED TOOLS */}
      <section className="tool-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                RECOMMENDED TOOLS
              </span>

              <h2>
                Start with the
                <br />
                essentials.
              </h2>
            </div>

            <p>
              A few useful CSS tools to get you started. Adjust the visual,
              understand the CSS, then take it with you.
            </p>
          </div>

          <div className="tool-grid recommended-tools-grid">
            {recommendedTools.map((tool) => (
              <ToolCard
                key={tool.name}
                tool={tool}
              />
            ))}
          </div>

          <div className="tool-section-action">
            <Link
              className="secondary-button"
              to="/tools"
            >
              Explore all 14 tools
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <div className="process-shell">
            <div className="process-copy">
              <span className="section-kicker">THE IDEA</span>

              <h2>
                Less tweaking.
                <br />
                More making.
              </h2>

              <p>
                CSSKit turns fiddly CSS decisions into a simple visual
                process. Change it, see it, copy it.
              </p>

              <div className="process-code">
                <span>input</span>
                <i>→</i>
                <span>visual</span>
                <i>→</i>
                <strong>CSS</strong>
              </div>
            </div>

            <div className="process-steps">
              <div className="process-step active">
                <span className="step-index">01</span>

                <div className="step-content">
                  <strong>Adjust</strong>
                  <p>Play with the values visually.</p>
                </div>

                <span className="step-line" />
              </div>

              <div className="process-step">
                <span className="step-index">02</span>

                <div className="step-content">
                  <strong>Preview</strong>
                  <p>See the result immediately.</p>
                </div>

                <span className="step-line" />
              </div>

              <div className="process-step">
                <span className="step-index">03</span>

                <div className="step-content">
                  <strong>Copy</strong>
                  <p>Take clean CSS into your project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-decoration decoration-left">
              {"{ }"}
            </div>

            <div className="cta-decoration decoration-right">
              {"</>"}
            </div>

            <div className="cta-grid-pattern" />

            <Sparkles
              className="cta-sparkle"
              size={18}
            />

            <span className="section-kicker">
              READY WHEN YOU ARE
            </span>

            <h2>
              Make the next style
              <br />
              feel effortless.
            </h2>

            <p>
              A growing collection of focused CSS utilities for everyday
              frontend work.
            </p>

            <Link
              className="primary-button cta-button"
              to="/tools"
            >
              Explore CSSKit
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}