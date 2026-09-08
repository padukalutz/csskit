import type { ReactNode } from "react";

interface ToolContentProps {
  children: ReactNode;
}

export default function ToolContent({
  children,
}: ToolContentProps) {
  return (
    <div className="tool-content">
      {children}
    </div>
  );
}
