import SectionLabel from "@/components/sectionLabel";

const StatusMessagesSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Status Messages</SectionLabel>
        <h2>Info, success, warning & error</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        <div
          className="glass"
          style={{
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <h5
            style={{
              marginBottom: "8px",
            }}
          >
            Default — hover for glow
          </h5>

          <div className="alert alert-info">
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <p className="alert-title">Information</p>
              <p style={{ margin: 0, fontSize: "0.875rem" }}>
                Your session will expire in 15 minutes. Save your work.
              </p>
            </div>
          </div>

          <div className="alert alert-success">
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <div>
              <p className="alert-title">Success</p>
              <p style={{ margin: 0, fontSize: "0.875rem" }}>
                Profile updated successfully. Changes are live.
              </p>
            </div>
          </div>

          <div className="alert alert-warning">
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <p className="alert-title">Warning</p>
              <p style={{ margin: 0, fontSize: "0.875rem" }}>
                You are approaching your storage limit (87% used).
              </p>
            </div>
          </div>

          <div className="alert alert-error">
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <div>
              <p className="alert-title">Error</p>
              <p style={{ margin: 0, fontSize: "0.875rem" }}>
                Payment failed. Please check your card details.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            className="glass-subtle"
            style={{ padding: "20px 24px", marginBottom: "4px" }}
          >
            <h5
              style={{
                marginBottom: "0",
              }}
            >
              Persistent glow (.alert-glow)
            </h5>
          </div>

          <div className="alert alert-info alert-glow">
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>Always-on blue glow — great for system notices.</span>
          </div>

          <div className="alert alert-success alert-glow">
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Always-on green glow — confirmed / completed states.</span>
          </div>

          <div className="alert alert-warning alert-pulse">
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              Pulsing glow (.alert-pulse) — draws attention to active warnings.
            </span>
          </div>

          <div
            className="alert alert-error alert-pulse"
            style={{ alignItems: "center" }}
          >
            <svg
              className="alert-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span style={{ flex: 1 }}>
              Critical error — pulsing red glow for urgent failures.
            </span>
            <button className="alert-dismiss" aria-label="Dismiss">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusMessagesSection;
