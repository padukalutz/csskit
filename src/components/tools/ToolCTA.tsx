import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCTAProps {
  title: string;
  description: string;
  href: string;
  label: string;
}

export default function ToolCTA({
  title,
  description,
  href,
  label,
}: ToolCTAProps) {
  return (
    <section className="tool-bottom-cta">
      <span className="section-kicker">
        CSSKIT
      </span>

      <h2>{title}</h2>

      <p>{description}</p>

      <Link
        className="primary-button"
        to={href}
      >
        {label}
        <ArrowRight size={17} />
      </Link>
    </section>
  );
}
