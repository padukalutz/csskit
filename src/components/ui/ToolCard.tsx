import { ArrowRight } from "lucide-react";
import type { ElementType } from "react";
import { Link } from "react-router-dom";
import ToolPreview from "../playground/ToolPreview";

type ToolCardProps = {
  tool: {
    number: string;
    icon: ElementType;
    name: string;
    description: string;
    accent: string;
    preview: string;
    href: string;
  };
};

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link
      className={`tool-card accent-${tool.accent}`}
      to={tool.href}
    >
      <div className="tool-card-head">
        <div className="tool-icon">
          <Icon size={19} strokeWidth={1.8} />
        </div>

        <span className="tool-card-number">
          {tool.number}
        </span>
      </div>

      <ToolPreview type={tool.preview} />

      <div className="tool-card-content">
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
      </div>

      <span className="tool-arrow">
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}