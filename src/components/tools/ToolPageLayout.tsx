import type { ReactNode } from "react";

interface ToolPageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ToolPageLayout({
  children,
  className = "",
}: ToolPageLayoutProps) {
  return (
    <main className={`tool-page ${className}`.trim()}>
      <div className="container">
        {children}
      </div>
    </main>
  );
}
