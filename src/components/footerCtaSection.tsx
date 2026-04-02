import { ArrowIcon } from "@/components/icons";

const FooterCtaSection = () => {
  return (
    <section>
      <div className="relative px-12 py-16 overflow-hidden text-center glass-heavy">
        <div className="absolute w-75 h-75 rounded-[50%] bg-(image:--gradient-brand-vivid) opacity-8 -top-25 -right-20 blur-2xl" />
        <div className="-bottom-15 -left-15 absolute opacity-10 blur-2xl rounded-[50%] w-50 h-50 bg-accent-blue" />

        <span className="inline-flex shadow-md hover:shadow-lg mb-5 badge badge-gradient">
          Ready to ship?
        </span>
        <h2 className="mx-auto mb-4 max-w-130">
          Start building with <span className="text-gradient">GlassUI</span>
          &nbsp; today
        </h2>
        <p className="mx-auto mb-8 max-w-95">
          All tokens, surfaces, and components from this page are live in your{" "}
          <code>globals.css</code>. Drop them in and go.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="gap-2 px-8 py-3.5 text-lg btn btn-primary">
            Read the docs <ArrowIcon />
          </button>
          <button className="gap-2 px-8 py-3.5 text-lg btn btn-secondary">
            View on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCtaSection;
