import SectionLabel from "@/components/sectionLabel";
import { ArrowIcon, CopyIcon, ShareIcon } from "@/components/icons";

const ButtonsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Button System</SectionLabel>
        <h2>Four variants, one system</h2>
      </div>

      <div className="p-10 glass">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button className="gap-2 btn btn-primary">
            Primary Button <ArrowIcon />
          </button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-ghost">Ghost Button</button>
          <button className="text-text-secondary btn-icon" aria-label="Copy">
            <CopyIcon />
          </button>
          <button className="text-text-secondary btn-icon" aria-label="Share">
            <ShareIcon />
          </button>
        </div>

        <div className="divider" />

        <div className="flex flex-wrap items-center gap-3">
          <span className="mb-1 text-text-muted text-sm">Sizes:</span>
          <button className="px-3.5 py-1.5 text-xs btn btn-primary">
            Small
          </button>
          <button className="px-6 py-2.5 text-sm btn btn-primary">
            Medium
          </button>
          <button className="px-8 py-3.5 text-lg btn btn-primary">Large</button>
          <button
            className="opacity-50 px-6 py-3 cursor-not-allowed btn btn-primary"
            disabled
          >
            Disabled
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButtonsSection;
