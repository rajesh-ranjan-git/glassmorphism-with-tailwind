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
        {/* Done till here */}

        <div
          className="animate-slide-up glass-interactive"
          style={{ padding: "28px", animationDelay: "60ms" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span className="badge badge-purple">.glass-interactive</span>
            <ZapIcon />
          </div>
          <h4
            style={{
              fontFamily: "var(--font-display)",
              marginBottom: "8px",
            }}
          >
            Interactive Glass
          </h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Hover me — lift, glow, accent border. For clickable cards.
          </p>
        </div>

        {/* .glass-accent */}
        <div
          className="animate-slide-up glass-accent"
          style={{ padding: "28px", animationDelay: "120ms" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span className="badge badge-gradient">.glass-accent</span>
            <SparkleIcon />
          </div>
          <h4
            style={{
              fontFamily: "var(--font-display)",
              marginBottom: "8px",
            }}
          >
            Accent Glass
          </h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Purple-tinted. Selected states, featured items, highlights.
          </p>
        </div>

        {/* .glass-subtle */}
        <div
          className="animate-slide-up glass-subtle"
          style={{ padding: "28px", animationDelay: "180ms" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-muted)",
              }}
            >
              .glass-subtle
            </span>
            <ShieldIcon />
          </div>
          <h4
            style={{
              fontFamily: "var(--font-display)",
              marginBottom: "8px",
            }}
          >
            Subtle Glass
          </h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Nested panels, code blocks, secondary content. 8px blur.
          </p>
        </div>

        {/* .glass-heavy */}
        <div
          className="animate-slide-up glass-heavy"
          style={{ padding: "28px", animationDelay: "240ms" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span className="badge badge-purple">.glass-heavy</span>
            <LayersIcon />
          </div>
          <h4
            style={{
              fontFamily: "var(--font-display)",
              marginBottom: "8px",
            }}
          >
            Heavy Glass
          </h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Modals, drawers, dialogs. 80% opacity, 28px blur.
          </p>
        </div>

        {/* Stats card using glass-interactive */}
        <div
          className="animate-pulse-glow animate-slide-up glass-interactive"
          style={{
            padding: "28px",
            animationDelay: "300ms",
            borderColor: "var(--glass-border-accent)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent-purple)",
              marginBottom: "8px",
            }}
          >
            Featured Card
          </p>
          <div
            style={{
              fontSize: "2.5rem",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              marginBottom: "4px",
            }}
          >
            <span className="text-gradient">98%</span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            Glass-interactive with pulse-glow animation
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlassSurfaces;
