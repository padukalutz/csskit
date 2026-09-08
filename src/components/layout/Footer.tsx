import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <NavLink
            className="brand"
            to="/"
          >
            <span
              className="brand-mark"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>

            <span className="brand-name">
              CSS<span>Kit</span>
            </span>
          </NavLink>

          <p>
            Useful CSS tools,
            <br />
            without the unnecessary stuff.
          </p>
        </div>

        <div className="footer-column">
          <span className="footer-heading">
            TOOLS
          </span>

          <NavLink to="/tools/box-shadow">
            Box Shadow
          </NavLink>

          <NavLink to="/tools/text-shadow">
            Text Shadow
          </NavLink>

          <NavLink to="/tools/gradients">
            Gradients
          </NavLink>

          <NavLink to="/tools/colors">
            Colors
          </NavLink>
        </div>

        <div className="footer-column">
          <span className="footer-heading">
            RESOURCES
          </span>

          <NavLink to="/resources/guides">
            CSS Guides
          </NavLink>

          <NavLink to="/resources/references">
            CSS References
          </NavLink>

          <NavLink to="/resources/snippets">
            CSS Snippets
          </NavLink>

          <NavLink to="/resources/inspiration">
            Inspiration
          </NavLink>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-copyright">
          © 2026 CSSKit
        </span>

        <nav
          className="footer-links"
          aria-label="Footer navigation"
        >
          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          <NavLink to="/privacy-policy">
            Privacy
          </NavLink>

          <NavLink to="/terms">
            Terms
          </NavLink>

          <NavLink to="/disclaimer">
            Disclaimer
          </NavLink>

          <NavLink to="/cookie-policy">
            Cookies
          </NavLink>

          <a href="/sitemap.xml">
            Sitemap
          </a>
        </nav>

        <span className="footer-made">
          Built for the web.
          <i />
          Made with CSS.
        </span>
      </div>
    </footer>
  );
}