import SectionLabel from "@/components/sectionLabel";
import { SparkleIcon } from "@/components/icons";

const BadgesAndTagsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Badges & Tags</SectionLabel>
        <h2>Label everything</h2>
      </div>

      <div className="p-10 glass">
        <div className="flex flex-wrap items-center gap-3 mb-6">
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

        <p className="text-text-secondary text-sm">
          Use <code>.badge-blue</code> for status/version info,&nbsp;
          <code>.badge-purple</code> for premium labels, and&nbsp;
          <code>.badge-gradient</code> sparingly for "New" / "Hot" callouts.
        </p>
      </div>
    </section>
  );
};

export default BadgesAndTagsSection;
