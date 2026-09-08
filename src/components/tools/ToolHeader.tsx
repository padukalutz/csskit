import type { ReactNode } from "react";

interface ToolHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
}

export default function ToolHeader({
  eyebrow = "CSS TOOL",
  title,
  description,
  action,
}: ToolHeaderProps) {
  return (
    <header className="tool-page-header">
      <div>
        <span className="section-kicker">{eyebrow}</span>

        <h1>{title}</h1>

        <p>{description}</p>
      </div>

      {action}
    </header>
  );
}
