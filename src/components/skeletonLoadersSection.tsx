import { useEffect, useState } from "react";
import SectionLabel from "@/components/sectionLabel";
import { CheckIcon, SparkleIcon } from "@/components/icons";

const SkeletonLoadersSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Loading States</SectionLabel>
        <h2>Skeleton shimmer</h2>
      </div>

      <div className="gap-6 grid grid-cols-2">
        <div className="p-7 glass">
          <h5 className="mb-5">Loading state</h5>
          <div className="flex gap-3 mb-4">
            <div className="rounded-[50%] w-11 h-11 skeleton shrink-0" />
            <div className="flex-1">
              <div className="mb-2 w-[60%] h-3.5 skeleton" />
              <div className="w-[40%] h-3 skeleton" />
            </div>
          </div>
          <div className="mb-2 h-3 skeleton" />
          <div className="mb-2 w-[85%] h-3 skeleton" />
          <div className="w-[70%] h-12 skeleton" />
        </div>

        <div className="p-7 glass">
          <h5 className="mb-5">{loading ? "Fetching data…" : "Loaded ✓"}</h5>
          {loading ? (
            <>
              <div className="flex gap-3 mb-4">
                <div className="rounded-[50%] w-11 h-11 skeleton shrink-0" />
                <div className="flex-1">
                  <div className="mb-2 w-[55%] h-11 skeleton" />
                  <div className="w-[35%] h-3 skeleton" />
                </div>
              </div>
              <div className="mb-2 h-3 skeleton" />
              <div className="w-[80%] h-3 skeleton" />
            </>
          ) : (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[50%] bg-(image:--gradient-brand-vivid) shrink-0 flex items-center justify-center text-white">
                  <SparkleIcon />
                </div>
                <div>
                  <p className="m-0 font-semibold text-text-primary">
                    Ada Lovelace
                  </p>
                  <small>ada@glasssystem.dev</small>
                </div>
              </div>
              <p className="mb-3 text-sm">
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
  );
};

export default SkeletonLoadersSection;
