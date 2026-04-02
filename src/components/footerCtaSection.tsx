import { ArrowIcon } from "@/components/icons";

const FooterCtaSection = () => {
  return (
    <section>
      <div
        className="glass-heavy"
        style={{
          padding: "64px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Internal orbs */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "var(--gradient-brand-vivid)",
            opacity: 0.08,
            top: "-100px",
            right: "-80px",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "var(--accent-blue)",
            opacity: 0.1,
            bottom: "-60px",
            left: "-60px",
            filter: "blur(40px)",
          }}
        />

        <span
          className="badge badge-gradient"
          style={{ marginBottom: "20px", display: "inline-flex" }}
        >
          Ready to ship?
        </span>
        <h2
          style={{
            maxWidth: "520px",
            marginInline: "auto",
            marginBottom: "16px",
          }}
        >
          Start building with <span className="text-gradient">GlassUI</span>{" "}
          today
        </h2>
        <p
          style={{
            maxWidth: "380px",
            marginInline: "auto",
            marginBottom: "32px",
          }}
        >
          All tokens, surfaces, and components from this page are live in your{" "}
          <code>globals.css</code>. Drop them in and go.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-primary"
            style={{ padding: "14px 32px", fontSize: "1rem", gap: "8px" }}
          >
            Read the docs <ArrowIcon />
          </button>
          <button
            className="btn btn-secondary"
            style={{ padding: "13px 28px", fontSize: "1rem" }}
          >
            View on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCtaSection;
