"use client";

import { useState, useEffect } from "react";
import {
  ArrowIcon,
  CheckIcon,
  MoonIcon,
  ShieldIcon,
  SparkleIcon,
  SunIcon,
} from "@/components/icons";
import SectionLabel from "@/components/sectionLabel";
import Orb from "@/components/orb";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import GlassSurfacesSection from "@/components/glassSurfacesSection";
import ButtonsSection from "@/components/buttonsSection";
import BadgesAndTagsSection from "@/components/badgesAndTagsSection";
import TypographySection from "@/components/typographySection";
import FormElementsSection from "@/components/formElementsSection";
import GradientsSection from "@/components/gradientsSection";
import AnimationsSection from "@/components/animationsSection";
import SkeletonLoadersSection from "@/components/skeletonLoadersSection";

export default function GlassShowcase() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("activeTheme");
    if (storedTheme === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("activeTheme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className="bg-bg-page min-h-dvh overflow-x-hidden font-poppins text-text-primary">
      <Orb />

      <Navbar dark={dark} setDark={setDark} />

      <div className="z-1 relative pt-28 pb-30 container">
        <HeroSection />

        <GlassSurfacesSection />

        <ButtonsSection />

        <BadgesAndTagsSection />

        <TypographySection />

        <FormElementsSection />

        <GradientsSection />

        <AnimationsSection />

        <SkeletonLoadersSection />
        {/* Done till here */}

        {/* ══════════════════════════════════════════════
            SECTION 10 — DIVIDERS
        ══════════════════════════════════════════════ */}
        <section className="mb-25">
          <div className="mb-12 text-center">
            <SectionLabel>Dividers</SectionLabel>
            <h2>Separators & section breaks</h2>
          </div>

          <div className="glass" style={{ padding: "40px" }}>
            <p style={{ color: "var(--text-secondary)", marginBottom: "0" }}>
              Content above — default divider (.divider)
            </p>
            <hr className="divider" />
            <p style={{ color: "var(--text-secondary)", marginBottom: "0" }}>
              Content above — gradient divider (.divider-gradient)
            </p>
            <div className="divider-gradient" />
            <p style={{ color: "var(--text-secondary)", margin: 0 }}>
              Content below the gradient divider. Notice the blue-to-purple
              fade.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 11 — MODAL-STYLE HEAVY GLASS
        ══════════════════════════════════════════════ */}
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

        {/* ══════════════════════════════════════════════
            SECTION 12 — PRICING CARDS (real-world use)
        ══════════════════════════════════════════════ */}
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
            {/* Free */}
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

            {/* Pro — accent glass */}
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
              <div
                className="divider-gradient"
                style={{ margin: "0 0 20px" }}
              />
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
                  <span
                    style={{ color: "var(--accent-purple)", flexShrink: 0 }}
                  >
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

            {/* Enterprise */}
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
                  <span
                    style={{ color: "var(--accent-purple)", flexShrink: 0 }}
                  >
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

        {/* ══════════════════════════════════════════════
    SECTION — STATUS MESSAGES
══════════════════════════════════════════════ */}
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
            {/* ── Left: base variants ── */}
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

            {/* ── Right: glow variants + dismissible ── */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
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
                <span>
                  Always-on green glow — confirmed / completed states.
                </span>
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
                  Pulsing glow (.alert-pulse) — draws attention to active
                  warnings.
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

        {/* ══════════════════════════════════════════════
            FOOTER CTA
        ══════════════════════════════════════════════ */}
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
              All tokens, surfaces, and components from this page are live in
              your <code>globals.css</code>. Drop them in and go.
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
      </div>

      {/* ── Footer ── */}
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
    </main>
  );
}
