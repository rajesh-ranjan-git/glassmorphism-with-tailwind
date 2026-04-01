import SectionLabel from "@/components/sectionLabel";
import {
  LayersIcon,
  ShieldIcon,
  SparkleIcon,
  ZapIcon,
} from "@/components/icons";

const GlassSurfaces = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Glass Surfaces</SectionLabel>
        <h2 className="font-alkatra">Every glass variant, side by side</h2>
      </div>

      <div className="gap-5 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        <div className="p-7 animate-slide-up delay-0 glass">
          <div className="flex justify-between items-center mb-3">
            <span className="badge badge-blue">.glass</span>
            <LayersIcon />
          </div>
          <h4 className="mb-2 font-poppins">Base Glass</h4>
          <p className="text-text-secondary text-sm">
            Static cards, panels, info boxes. 55% opacity, 16px blur.
          </p>
        </div>

        <div className="p-7 animate-slide-up delay-60 glass-interactive">
          <div className="flex justify-between items-center mb-3">
            <span className="badge badge-purple">.glass-interactive</span>
            <ZapIcon />
          </div>
          <h4 className="mb-2 font-poppins">Interactive Glass</h4>
          <p className="text-text-secondary text-sm">
            Hover me — lift, glow, accent border. For clickable cards.
          </p>
        </div>

        <div className="p-7 animate-slide-up delay-120 glass-accent">
          <div className="flex justify-between items-center mb-3">
            <span className="badge badge-gradient">.glass-accent</span>
            <SparkleIcon />
          </div>
          <h4 className="mb-2 font-poppins">Accent Glass</h4>
          <p className="text-text-secondary text-sm">
            Purple-tinted. Selected states, featured items, highlights.
          </p>
        </div>

        <div className="p-7 animate-slide-up delay-180 glass-subtle">
          <div className="flex justify-between items-center mb-3">
            <span className="font-poppins font-semibold text-text-muted text-xs">
              .glass-subtle
            </span>
            <ShieldIcon />
          </div>
          <h4 className="mb-2 font-poppins">Subtle Glass</h4>
          <p className="text-text-secondary text-sm">
            Nested panels, code blocks, secondary content. 8px blur.
          </p>
        </div>

        <div className="p-7 animate-slide-up delay-240 glass-heavy">
          <div className="flex justify-between items-center mb-3">
            <span className="badge badge-purple">.glass-heavy</span>
            <LayersIcon />
          </div>
          <h4 className="mb-2 font-poppins">Heavy Glass</h4>
          <p className="text-text-secondary text-sm">
            Modals, drawers, dialogs. 80% opacity, 28px blur.
          </p>
        </div>

        <div className="p-7 border-glass-border-accent animate-pulse-glow animate-slide-up delay-300 glass-interactive">
          <p className="font-semibold text-xs uppercase tracking-widest text-accent-purple">
            Featured Card
          </p>
          <div className="mb-1 font-poppins font-extrabold text-[2.5rem]">
            <span className="text-gradient">98%</span>
          </div>
          <p className="text-text-secondary text-sm">
            Glass-interactive with pulse-glow animation
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlassSurfaces;
