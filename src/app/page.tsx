"use client";

import { useState, useEffect } from "react";
import SectionLabel from "@/components/sectionLabel";
import {
  ArrowIcon,
  CheckIcon,
  CopyIcon,
  MoonIcon,
  ShareIcon,
  ShieldIcon,
  SparkleIcon,
  SunIcon,
} from "@/components/icons";
import Orb from "@/components/orb";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import GlassSurfaces from "@/components/glassSurfaces";

export default function GlassShowcase() {
  const [dark, setDark] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="bg-bg-page min-h-dvh overflow-x-hidden font-poppins text-text-primary">
      <Orb />

      <Navbar dark={dark} setDark={setDark} />

      <div className="z-1 relative pt-28 pb-30 container">
        <HeroSection />

        <GlassSurfaces />
        {/* Done till here */}

        {/* ══════════════════════════════════════════════
            SECTION 3 — BUTTONS
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Button System</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Four variants, one system
            </h2>
          </div>

          <div className="glass" style={{ padding: "40px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <button className="btn btn-primary" style={{ gap: "8px" }}>
                Primary Button <ArrowIcon />
              </button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-ghost">Ghost Button</button>
              <button
                className="btn-icon"
                aria-label="Copy"
                style={{ color: "var(--text-secondary)" }}
              >
                <CopyIcon />
              </button>
              <button
                className="btn-icon"
                aria-label="Share"
                style={{ color: "var(--text-secondary)" }}
              >
                <ShareIcon />
              </button>
            </div>

            <div className="divider" />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  marginRight: "4px",
                }}
              >
                Sizes:
              </span>
              <button
                className="btn btn-primary"
                style={{ padding: "6px 14px", fontSize: "0.8125rem" }}
              >
                Small
              </button>
              <button
                className="btn btn-primary"
                style={{ padding: "10px 24px", fontSize: "0.9375rem" }}
              >
                Medium
              </button>
              <button
                className="btn btn-primary"
                style={{ padding: "14px 32px", fontSize: "1.0625rem" }}
              >
                Large
              </button>
              <button
                className="btn btn-primary"
                style={{
                  padding: "12px 24px",
                  opacity: 0.5,
                  cursor: "not-allowed",
                }}
                disabled
              >
                Disabled
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — BADGES & TAGS
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Badges & Tags</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Label everything
            </h2>
          </div>

          <div className="glass" style={{ padding: "40px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <span className="badge badge-blue">Blue Badge</span>
              <span className="badge badge-purple">Purple Badge</span>
              <span className="badge badge-gradient">
                <SparkleIcon /> Gradient Badge
              </span>
              <span className="badge badge-blue">v1.0.0</span>
              <span className="badge badge-purple">Pro</span>
              <span className="badge badge-gradient">New</span>
              <span className="badge badge-blue">Beta</span>
            </div>

            <div className="divider-gradient" />

            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              Use <code>.badge-blue</code> for status/version info,{" "}
              <code>.badge-purple</code> for premium labels, and{" "}
              <code>.badge-gradient</code> sparingly for "New" / "Hot" callouts.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — TYPOGRAPHY
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Typography</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Syne + DM Sans
            </h2>
          </div>

          <div className="glass" style={{ padding: "40px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
              }}
            >
              <div>
                <h6
                  style={{ marginBottom: "24px", color: "var(--text-muted)" }}
                >
                  Display — Syne
                </h6>
                {[1, 2, 3, 4].map((n) => {
                  const sizes = [
                    "clamp(2rem,5vw,3.5rem)",
                    "clamp(1.5rem,3.5vw,2.5rem)",
                    "clamp(1.2rem,2.5vw,1.75rem)",
                    "1.25rem",
                  ];
                  return (
                    <div key={n} style={{ marginBottom: "16px" }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--text-muted)",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginRight: "12px",
                        }}
                      >
                        H{n}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: sizes[n - 1],
                          lineHeight: 1.15,
                        }}
                      >
                        {n === 1
                          ? "Glass UI"
                          : n === 2
                            ? "Design System"
                            : n === 3
                              ? "Blue × Purple"
                              : "Typography Scale"}
                      </span>
                    </div>
                  );
                })}
                <div style={{ marginTop: "16px" }}>
                  <h1 style={{ fontSize: "2rem" }}>
                    Gradient: <span className="text-gradient">Glass UI</span>
                  </h1>
                </div>
              </div>

              <div>
                <h6
                  style={{ marginBottom: "24px", color: "var(--text-muted)" }}
                >
                  Body — DM Sans
                </h6>
                <p
                  style={{
                    marginBottom: "12px",
                    color: "var(--text-primary)",
                    fontWeight: 500,
                  }}
                >
                  Primary text — used for headings inside glass panels, labels,
                  and prominent body copy.
                </p>
                <p style={{ marginBottom: "12px" }}>
                  Secondary text — the default body copy color. Readable against
                  both light and dark glass surfaces.
                </p>
                <p style={{ color: "var(--text-muted)", marginBottom: "12px" }}>
                  Muted text — captions, meta info, timestamps.
                </p>
                <p style={{ marginBottom: "12px" }}>
                  This is a <a href="#">link to somewhere</a> and this is{" "}
                  <strong>bold text</strong> and{" "}
                  <small>small/caption text</small>.
                </p>
                <p style={{ marginBottom: "12px" }}>
                  Inline code: <code>backdrop-filter: blur(16px)</code>
                </p>
                <p>
                  Keyboard shortcut: press <kbd>⌘K</kbd> to open search.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6 — FORM ELEMENTS
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Form Elements</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Glass inputs & controls
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
            }}
          >
            <div className="glass" style={{ padding: "36px" }}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  marginBottom: "24px",
                }}
              >
                Contact Form
              </h4>

              <div style={{ marginBottom: "16px" }}>
                <label>Full Name</label>
                <input type="text" placeholder="Ada Lovelace" />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label>Email Address</label>
                <input type="email" placeholder="ada@glasssystem.dev" />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label>Role</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option>Frontend Developer</option>
                  <option>Designer</option>
                  <option>Product Manager</option>
                </select>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <label>Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you're building..."
                  style={{ resize: "vertical" }}
                />
              </div>

              {formSent ? (
                <div
                  className="glass-accent"
                  style={{
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <CheckIcon />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--accent-purple)",
                    }}
                  >
                    Message sent!
                  </span>
                </div>
              ) : (
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => setFormSent(true)}
                >
                  Send Message <ArrowIcon />
                </button>
              )}
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="glass-subtle" style={{ padding: "24px" }}>
                <h5
                  style={{
                    fontFamily: "var(--font-display)",
                    marginBottom: "16px",
                  }}
                >
                  Search
                </h5>
                <input type="search" placeholder="Search components..." />
              </div>

              <div className="glass" style={{ padding: "24px" }}>
                <h5
                  style={{
                    fontFamily: "var(--font-display)",
                    marginBottom: "16px",
                  }}
                >
                  Focused State
                </h5>
                <input
                  type="text"
                  defaultValue="Focused input"
                  // autoFocus
                  style={{ marginBottom: "12px" }}
                />
                <p
                  style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}
                >
                  Click any input to see the purple focus ring.
                </p>
              </div>

              <div className="glass-accent" style={{ padding: "24px" }}>
                <h5
                  style={{
                    fontFamily: "var(--font-display)",
                    marginBottom: "16px",
                  }}
                >
                  Newsletter
                </h5>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{ flex: 1 }}
                  />
                  <button
                    className="btn btn-primary"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 7 — GRADIENTS SHOWCASE
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Gradient Tokens</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Every gradient, exposed
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                label: "--gradient-brand",
                style: { background: "var(--gradient-brand)" },
              },
              {
                label: "--gradient-brand-vivid",
                style: { background: "var(--gradient-brand-vivid)" },
              },
              {
                label: "--gradient-brand-soft",
                style: { background: "var(--gradient-brand-soft)" },
              },
              {
                label: "--gradient-radial",
                style: {
                  background: "var(--gradient-radial)",
                  border: "1px solid var(--border-default)",
                },
              },
            ].map((g) => (
              <div
                key={g.label}
                className="glass-interactive"
                style={{ overflow: "hidden" }}
              >
                <div style={{ height: "80px", ...g.style }} />
                <div style={{ padding: "14px 16px" }}>
                  <code
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {g.label}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 8 — ANIMATIONS
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Animations</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Motion utilities
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
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
              <div
                key={a.cls}
                className={`glass ${a.cls}`}
                style={{ padding: "24px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "var(--gradient-brand-vivid)",
                    marginInline: "auto",
                    marginBottom: "16px",
                  }}
                />
                <code
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--accent-purple)",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  .{a.label}
                </code>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 9 — SKELETON LOADER
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Loading States</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Skeleton shimmer
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {/* Skeleton card */}
            <div className="glass" style={{ padding: "28px" }}>
              <h5
                style={{
                  fontFamily: "var(--font-display)",
                  marginBottom: "20px",
                }}
              >
                Loading state
              </h5>
              <div
                style={{ display: "flex", gap: "12px", marginBottom: "16px" }}
              >
                <div
                  className="skeleton"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    className="skeleton"
                    style={{
                      height: "14px",
                      marginBottom: "8px",
                      width: "60%",
                    }}
                  />
                  <div
                    className="skeleton"
                    style={{ height: "12px", width: "40%" }}
                  />
                </div>
              </div>
              <div
                className="skeleton"
                style={{ height: "12px", marginBottom: "8px" }}
              />
              <div
                className="skeleton"
                style={{ height: "12px", marginBottom: "8px", width: "85%" }}
              />
              <div
                className="skeleton"
                style={{ height: "12px", width: "70%" }}
              />
            </div>

            {/* Loaded state */}
            <div className="glass" style={{ padding: "28px" }}>
              <h5
                style={{
                  fontFamily: "var(--font-display)",
                  marginBottom: "20px",
                }}
              >
                {loading ? "Fetching data…" : "Loaded ✓"}
              </h5>
              {loading ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      className="skeleton"
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        className="skeleton"
                        style={{
                          height: "14px",
                          marginBottom: "8px",
                          width: "55%",
                        }}
                      />
                      <div
                        className="skeleton"
                        style={{ height: "12px", width: "35%" }}
                      />
                    </div>
                  </div>
                  <div
                    className="skeleton"
                    style={{ height: "12px", marginBottom: "8px" }}
                  />
                  <div
                    className="skeleton"
                    style={{ height: "12px", width: "80%" }}
                  />
                </>
              ) : (
                <div className="animate-fade-in">
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "var(--gradient-brand-vivid)",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      <SparkleIcon />
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          margin: 0,
                        }}
                      >
                        Ada Lovelace
                      </p>
                      <small>ada@glasssystem.dev</small>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.875rem", marginBottom: "12px" }}>
                    Data loaded successfully after simulated 1.8s delay.
                  </p>
                  <span className="badge badge-gradient">
                    <CheckIcon /> Resolved
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 10 — DIVIDERS
        ══════════════════════════════════════════════ */}
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Dividers</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Separators & section breaks
            </h2>
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
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Heavy Glass</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Modal & dialog surfaces
            </h2>
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
                  fontFamily: "var(--font-display)",
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
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Real-world Example</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>Pricing cards</h2>
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
        <section style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Status Messages</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)" }}>
              Info, success, warning & error
            </h2>
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
                  fontFamily: "var(--font-display)",
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
                    fontFamily: "var(--font-display)",
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
                fontFamily: "var(--font-display)",
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
