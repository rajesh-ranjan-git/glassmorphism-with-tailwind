import SectionLabel from "@/components/sectionLabel";
import { ArrowIcon, CheckIcon, SparkleIcon } from "@/components/icons";

const PricingCardsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Real-world Example</SectionLabel>
        <h2>Pricing cards</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div className="glass" style={{ padding: "32px" }}>
          <span
            className="badge badge-blue"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            Free
          </span>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "4px",
            }}
          >
            $0
          </div>
          <p style={{ fontSize: "0.875rem", marginBottom: "24px" }}>
            Perfect to get started
          </p>
          <div className="divider" style={{ margin: "0 0 20px" }} />
          {[
            "5 projects",
            "Glass tokens",
            "Light & dark mode",
            "Community support",
          ].map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "var(--accent-blue)", flexShrink: 0 }}>
                <CheckIcon />
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                {f}
              </span>
            </div>
          ))}
          <button
            className="btn btn-secondary"
            style={{
              width: "100%",
              marginTop: "24px",
              justifyContent: "center",
            }}
          >
            Get started free
          </button>
        </div>

        <div
          className="glass-accent"
          style={{ padding: "32px", transform: "scale(1.02)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <span className="badge badge-purple">Pro</span>
            <span className="badge badge-gradient">
              <SparkleIcon /> Popular
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "4px",
            }}
          >
            <span className="text-gradient">$19</span>
          </div>
          <p style={{ fontSize: "0.875rem", marginBottom: "24px" }}>
            per month, billed annually
          </p>
          <div className="divider-gradient" style={{ margin: "0 0 20px" }} />
          {[
            "Unlimited projects",
            "All glass variants",
            "Priority support",
            "Custom accent colors",
            "Advanced animations",
          ].map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "var(--accent-purple)", flexShrink: 0 }}>
                <CheckIcon />
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                {f}
              </span>
            </div>
          ))}
          <button
            className="btn btn-primary"
            style={{
              width: "100%",
              marginTop: "24px",
              justifyContent: "center",
            }}
          >
            Start Pro trial <ArrowIcon />
          </button>
        </div>

        <div className="glass" style={{ padding: "32px" }}>
          <span
            className="badge badge-purple"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            Enterprise
          </span>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "4px",
            }}
          >
            Custom
          </div>
          <p style={{ fontSize: "0.875rem", marginBottom: "24px" }}>
            Talk to our team
          </p>
          <div className="divider" style={{ margin: "0 0 20px" }} />
          {[
            "Everything in Pro",
            "SSO & SAML",
            "SLA guarantees",
            "Dedicated engineer",
            "White-label",
          ].map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "var(--accent-purple)", flexShrink: 0 }}>
                <CheckIcon />
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                {f}
              </span>
            </div>
          ))}
          <button
            className="btn btn-ghost"
            style={{
              width: "100%",
              marginTop: "24px",
              justifyContent: "center",
              border: "1px solid var(--glass-border-accent)",
            }}
          >
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingCardsSection;
