import { useState } from "react";
import { ArrowIcon, CopyIcon, SparkleIcon } from "@/components/icons";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install glass-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-30 text-center animate-fade-in">
      <div className="mb-4">
        <span className="gap-1.5 shadow-md hover:shadow-lg transition-shadow ease-in-out badge badge-gradient">
          <SparkleIcon /> New — Glassmorphism Design System
        </span>
      </div>
      <h1 className="mx-auto mb-5 max-w-195 font-arima font-bold">
        Build beautiful&nbsp;
        <span className="text-gradient">glass interfaces</span> with zero effort
      </h1>
      <p className="mx-auto mb-9 max-w-130 text-text-secondary text-lg">
        A complete design system with CSS tokens, glass surfaces, and every
        component you need — light & dark, production-ready.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-3">
        <button className="gap-2 px-7 py-3 text-lg btn btn-primary">
          Start building <ArrowIcon />
        </button>
        <button className="px-6 py-3 text-lg btn btn-secondary">
          View components
        </button>
      </div>

      <div className="inline-flex items-center gap-3 mt-8 px-5 py-2.5 glass rounded-(--border-radius-pill)">
        <code className="text-text-secondary text-sm">
          <span className="text-accent-purple">$</span> npm install glass-ui
        </code>
        <button
          className={`w-7 h-7 btn-icon ${copied ? "text-accent-purple" : "text-text-muted"}`}
          onClick={handleCopy}
        >
          <CopyIcon />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
