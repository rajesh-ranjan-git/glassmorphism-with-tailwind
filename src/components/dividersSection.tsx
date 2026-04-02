import SectionLabel from "@/components/sectionLabel";

const DividersSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Dividers</SectionLabel>
        <h2>Separators & section breaks</h2>
      </div>

      <div className="p-10 glass">
        <p className="mb-0 text-text-secondary">
          Content above — default divider (.divider)
        </p>
        <hr className="text-text-secondary divider" />
        <p>Content above — gradient divider (.divider-gradient)</p>
        <hr className="divider-gradient" />
        <p className="m-0 text-text-secondary">
          Content below the gradient divider. Notice the blue-to-purple fade.
        </p>
        <hr className="divider-gradient-to-right" />
        <p className="m-0 text-text-secondary">
          Content below the gradient divider. Notice the blue-to-purple fade to
          right. (.divider-gradient-to-right)
        </p>
        <hr className="divider-gradient-to-left" />
        <p className="m-0 text-text-secondary">
          Content below the gradient divider. Notice the blue-to-purple fade to
          left. (.divider-gradient-to-left)
        </p>
      </div>
    </section>
  );
};

export default DividersSection;
