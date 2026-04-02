import SectionLabel from "@/components/sectionLabel";
import { ArrowIcon, CheckIcon, SparkleIcon } from "@/components/icons";

const PricingCardsSection = () => {
  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Real-world Example</SectionLabel>
        <h2>Pricing cards</h2>
      </div>

      <div className="items-start gap-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        <div className="p-8 glass">
          <span className="inline-flex mb-5 badge badge-blue">Free</span>
          <div className="mb-1 font-extrabold text-4xl">$0</div>
          <p className="mb-6 text-sm">Perfect to get started</p>
          <div className="mb-5 divider" />
          {[
            "5 projects",
            "Glass tokens",
            "Light & dark mode",
            "Community support",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5 mb-2.5">
              <span className="text-accent-blue shrink-0">
                <CheckIcon />
              </span>
              <span className="text-text-secondary text-sm">{f}</span>
            </div>
          ))}
          <button className="justify-center mt-6 w-full btn btn-secondary">
            Get started free
          </button>
        </div>

        <div className="p-8 scale-105 glass-accent">
          <div className="flex justify-between items-center mb-5">
            <span className="badge badge-purple">Pro</span>
            <span className="badge badge-gradient">
              <SparkleIcon /> Popular
            </span>
          </div>
          <div className="mb-1 font-extrabold text-4xl">
            <span className="text-gradient">$19</span>
          </div>
          <p className="mb-6 text-sm">per month, billed annually</p>
          <div className="mb-5 divider-gradient" />
          {[
            "Unlimited projects",
            "All glass variants",
            "Priority support",
            "Custom accent colors",
            "Advanced animations",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5 mb-2.5">
              <span className="text-accent-purple shrink-0">
                <CheckIcon />
              </span>
              <span className="text-text-secondary text-sm">{f}</span>
            </div>
          ))}
          <button className="justify-center mt-6 w-full btn btn-primary">
            Start Pro trial <ArrowIcon />
          </button>
        </div>

        <div className="p-8 glass">
          <span className="inline-flex mb-5 badge badge-purple">
            Enterprise
          </span>
          <div className="mb-1 font-extrabold text-4xl">Custom</div>
          <p className="mb-6 text-sm">Talk to our team</p>
          <div className="mb-5 divider" />
          {[
            "Everything in Pro",
            "SSO & SAML",
            "SLA guarantees",
            "Dedicated engineer",
            "White-label",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5 mb-2.5">
              <span className="text-accent-purple shrink-0">
                <CheckIcon />
              </span>
              <span className="text-text-secondary text-sm">{f}</span>
            </div>
          ))}
          <button className="justify-center mt-6 border border-glass-border-accent w-full btn btn-ghost">
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingCardsSection;
