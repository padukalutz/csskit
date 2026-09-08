import type { ReactNode } from "react";

interface ToolWorkspaceProps {
  children: ReactNode;
  className?: string;
}

export default function ToolWorkspace({
  children,
  className = "",
}: ToolWorkspaceProps) {
  return (
    <section className={`shadow-workspace ${className}`.trim()}>
      {children}
    </section>
  );
}
