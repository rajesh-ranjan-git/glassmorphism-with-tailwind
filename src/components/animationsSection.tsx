import SectionLabel from "@/components/sectionLabel";

const AnimationsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Animations</SectionLabel>
        <h2>Motion utilities</h2>
      </div>

      <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {[
          {
            cls: "animate-fade-in",
            label: "fade-in",
            desc: "Fade + slide up",
          },
          {
            cls: "animate-fade-in-scale",
            label: "fade-in-scale",
            desc: "Fade + scale up",
          },
          {
            cls: "animate-slide-up",
            label: "slide-up",
            desc: "Slides from below",
          },
          {
            cls: "animate-float",
            label: "float",
            desc: "Gentle levitation",
          },
          {
            cls: "animate-pulse-glow",
            label: "pulse-glow",
            desc: "Purple glow pulse",
          },
        ].map((a) => (
          <div key={a.cls} className={`glass p-6 text-center ${a.cls}`}>
            <div className="bg-gradient-brand-vivid mx-auto mb-4 rounded-xl w-12 h-12" />
            <code className="block mb-1.5 text-sm text-accent-purple">
              .{a.label}
            </code>
            <p className="m-0 text-text-muted text-sm">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimationsSection;
