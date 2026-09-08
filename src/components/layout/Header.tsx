import {
  Code2,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink
          className="brand"
          to="/"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>

          <span className="brand-name">
            CSS<span>Kit</span>
          </span>
        </NavLink>

        <nav className="desktop-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Tools
            <ChevronDown size={13} />
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Resources
          </NavLink>
        </nav>

        <div className="header-actions">
          <NavLink
            to="/developer"
            className={({ isActive }) =>
              `developer-button ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            <Code2 size={15} />
            <span>For developers</span>
          </NavLink>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Tools
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Resources
          </NavLink>

          <NavLink
            to="/developer"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            For developers
          </NavLink>
        </nav>
      )}
    </header>
  );
}