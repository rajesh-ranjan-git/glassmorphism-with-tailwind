const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-3">
    <div
      style={{
        height: "1px",
        width: "32px",
        background: "var(--gradient-brand)",
        opacity: 0.6,
      }}
    />
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--accent-purple)",
      }}
    >
      {children}
    </span>
    <div
      style={{
        height: "1px",
        width: "32px",
        background: "var(--gradient-brand)",
        opacity: 0.6,
      }}
    />
  </div>
);

export default SectionLabel;
