import { NavbarProps } from "@/types/propTypes";
import { MoonIcon, SparkleIcon, SunIcon } from "@/components/icons";

const Navbar = ({ dark, setDark }: NavbarProps) => {
  return (
    <nav
      className="glass-nav"
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: "var(--z-sticky)" as any,
        padding: "0 24px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "var(--gradient-brand-vivid)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(139,92,246,0.4)",
            }}
          >
            <SparkleIcon />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "var(--text-primary)",
            }}
          >
            GlassUI
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="badge badge-blue" style={{ display: "none" }}>
            v1.0
          </span>
          <button className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
            Docs
          </button>
          <button className="btn btn-ghost" style={{ fontSize: "0.875rem" }}>
            GitHub
          </button>
          <button
            className="btn-icon"
            onClick={() => setDark((d: boolean) => !d)}
            aria-label="Toggle theme"
            style={{ color: "var(--text-secondary)" }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="btn btn-primary"
            style={{ fontSize: "0.875rem", padding: "8px 18px" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
