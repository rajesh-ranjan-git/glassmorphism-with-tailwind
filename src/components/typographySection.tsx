import SectionLabel from "@/components/sectionLabel";

const TypographySection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Typography</SectionLabel>
        <h2>Alkatra + Poppins + Arima</h2>
      </div>

      <div className="p-10 glass">
        <div className="gap-12 grid grid-cols-2">
          <div>
            <h6 className="mb-6 text-text-muted">Display — Poppins</h6>
            {[1, 2, 3, 4].map((n) => {
              const sizes = [
                "clamp(2rem,5vw,3.5rem)",
                "clamp(1.5rem,3.5vw,2.5rem)",
                "clamp(1.2rem,2.5vw,1.75rem)",
                "1.25rem",
              ];
              return (
                <div key={n} className="mb-4">
                  <span className="mr-3 font-semibold text-text-muted text-xs uppercase tracking-widest">
                    H{n}
                  </span>
                  <span
                    className="font-alkatra font-bold"
                    style={{
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
            <div className="mb-4">
              <h1 className="font-arima text-4xl">
                Gradient: <span className="text-gradient">Glass UI</span>
              </h1>
            </div>
          </div>

          <div>
            <h6 className="mb-6 text-text-muted">Body — Poppins</h6>
            <p className="mb-3 font-medium text-text-primary">
              Primary text — used for headings inside glass panels, labels, and
              prominent body copy.
            </p>
            <p className="mb-3">
              Secondary text — the default body copy color. Readable against
              both light and dark glass surfaces.
            </p>
            <p className="mb-3 text-text-muted">
              Muted text — captions, meta info, timestamps.
            </p>
            <p className="mb-3">
              This is a <a href="#">link to somewhere</a> and this is{" "}
              <strong>bold text</strong> and <small>small/caption text</small>.
            </p>
            <p className="mb-3">
              Inline code: <code>backdrop-filter: blur(16px)</code>
            </p>
            <p>
              Keyboard shortcut: press <kbd>⌘K</kbd> to open search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;
