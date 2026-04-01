import SectionLabel from "@/components/sectionLabel";

const GradientsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Gradient Tokens</SectionLabel>
        <h2>Every gradient, exposed</h2>
      </div>

      <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {[
          {
            label: "--gradient-brand",
            style: { background: "var(--gradient-brand)" },
          },
          {
            label: "--gradient-brand-vivid",
            style: { background: "var(--gradient-brand-vivid)" },
          },
          {
            label: "--gradient-brand-soft",
            style: { background: "var(--gradient-brand-soft)" },
          },
          {
            label: "--gradient-radial",
            style: {
              background: "var(--gradient-radial)",
              border: "1px solid var(--border-default)",
            },
          },
        ].map((g) => (
          <div key={g.label} className="overflow-hidden glass-interactive">
            <div className="h-20" style={{ ...g.style }} />
            <div className="px-4 py-3.5">
              <code className="text-text-secondary text-sm">{g.label}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GradientsSection;
