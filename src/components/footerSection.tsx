import { ThemeToggleProps } from "@/types/propTypes";
import { MoonIcon, SparkleIcon, SunIcon } from "@/components/icons";

const FooterSection = ({ dark, setDark }: ThemeToggleProps) => {
  return (
    <footer
      className="glass-nav"
      style={{
        marginTop: "0",
        padding: "24px",
        borderTop: "1px solid var(--border-default)",
        borderBottom: "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "6px",
              background: "var(--gradient-brand-vivid)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SparkleIcon />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            GlassUI
          </span>
        </div>
        <small>
          Built with the Glassmorphism Design System · Blue × Purple
        </small>
        <button
          className="btn-icon"
          onClick={() => setDark((d) => !d)}
          style={{ color: "var(--text-secondary)" }}
          aria-label="Toggle theme"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
