import SectionLabel from "@/components/sectionLabel";
import { ShieldIcon } from "@/components/icons";

const ModalsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Heavy Glass</SectionLabel>
        <h2>Modal & dialog surfaces</h2>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="glass-heavy"
          style={{
            maxWidth: "460px",
            width: "100%",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "var(--gradient-brand-vivid)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginInline: "auto",
              marginBottom: "20px",
              boxShadow: "0 8px 24px rgba(139,92,246,0.4)",
            }}
          >
            <ShieldIcon />
          </div>
          <span
            className="badge badge-gradient"
            style={{ marginBottom: "16px", display: "inline-flex" }}
          >
            .glass-heavy
          </span>
          <h3
            style={{
              marginBottom: "12px",
            }}
          >
            Confirm Action
          </h3>
          <p
            style={{
              fontSize: "0.9375rem",
              marginBottom: "28px",
              marginInline: "auto",
            }}
          >
            This surface uses 80% opacity and 28px blur — ideal for modals,
            drawers, and confirmation dialogs.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalsSection;
