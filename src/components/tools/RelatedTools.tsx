import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedTool {
  name: string;
  href: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
}

export default function RelatedTools({
  tools,
}: RelatedToolsProps) {
  return (
    <section className="related-tools">
      <div>
        <span className="section-kicker">
          KEEP BUILDING
        </span>

        <h2>More CSS tools.</h2>

        <p>
          Explore other CSS utilities as the CSSKit toolkit
          grows.
        </p>
      </div>

      <div className="related-tool-links">
        {tools.map((tool) => (
          <Link key={tool.href} to={tool.href}>
            {tool.name}
            <ArrowRight size={15} />
          </Link>
        ))}
      </div>
    </section>
  );
}
