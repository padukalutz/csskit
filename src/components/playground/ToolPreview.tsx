type ToolPreviewProps = {
  type: string;
};

export default function ToolPreview({ type }: ToolPreviewProps) {
  if (type === "shadow") {
    return (
      <div className="mini-preview shadow-preview">
        <div className="mini-shadow-box" />
        <span>0 12px 28px</span>
      </div>
    );
  }

  if (type === "color") {
    return (
      <div className="mini-preview color-preview">
        <div className="color-orb orb-one" />
        <div className="color-orb orb-two" />
        <div className="color-orb orb-three" />
        <span>#7664F5</span>
      </div>
    );
  }

  if (type === "gradient") {
    return (
      <div className="mini-preview gradient-preview">
        <div className="gradient-bar" />
        <div className="gradient-stops">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  return (
    <div className="mini-preview type-preview">
      <strong>Aa</strong>
      <div>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}