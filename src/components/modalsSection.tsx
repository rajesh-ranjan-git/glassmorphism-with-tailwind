import SectionLabel from "@/components/sectionLabel";
import { ShieldIcon } from "@/components/icons";

const ModalsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Heavy Glass</SectionLabel>
        <h2>Modal & dialog surfaces</h2>
      </div>

      <div className="flex justify-center">
        <div className="p-10 w-full max-w-115 text-center glass-heavy">
          <div className="flex justify-center items-center shadow-[0_8px_24px_rgba(139,92,246,0.4)] mx-auto mb-5 rounded-2xl w-14 h-14 bg-(image:--gradient-brand-vivid)">
            <ShieldIcon />
          </div>
          <span className="inline-flex shadow-md hover:shadow-lg mb-4 badge badge-gradient">
            .glass-heavy
          </span>
          <h3 className="mb-3">Confirm Action</h3>
          <p className="mx-auto mb-7">
            This surface uses 80% opacity and 28px blur — ideal for modals,
            drawers, and confirmation dialogs.
          </p>
          <div className="flex justify-center gap-3">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalsSection;
