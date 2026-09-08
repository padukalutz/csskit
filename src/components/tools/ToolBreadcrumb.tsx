import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolBreadcrumbProps {
  toolName: string;
}

export default function ToolBreadcrumb({
  toolName,
}: ToolBreadcrumbProps) {
  return (
    <nav className="tool-breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>

      <ChevronRight size={14} aria-hidden="true" />

      <Link to="/tools">Tools</Link>

      <ChevronRight size={14} aria-hidden="true" />

      <span>{toolName}</span>
    </nav>
  );
}
