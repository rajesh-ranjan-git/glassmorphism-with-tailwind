import { useState } from "react";
import SectionLabel from "@/components/sectionLabel";
import { ArrowIcon, CheckIcon } from "@/components/icons";

const FormElementsSection = () => {
  const [formSent, setFormSent] = useState(false);

  return (
    <section className="mb-25">
      <div className="mb-12 text-center">
        <SectionLabel>Form Elements</SectionLabel>
        <h2>Glass inputs & controls</h2>
      </div>

      <div className="gap-7 grid grid-cols-2">
        <div className="p-9 glass">
          <h4 className="mb-6">Contact Form</h4>

          <div className="mb-4">
            <label>Full Name</label>
            <input type="text" placeholder="Ada Lovelace" />
          </div>
          <div className="mb-4">
            <label>Email Address</label>
            <input type="email" placeholder="ada@glasssystem.dev" />
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            <label>Message</label>
            <textarea
              rows={3}
              placeholder="Tell us what you're building..."
              className="resize-y"
            />
          </div>

          {formSent ? (
            <div className="flex items-center gap-2 px-4 py-3 glass-accent">
              <CheckIcon />
              <span className="text-sm text-accent-purple">Message sent!</span>
            </div>
          ) : (
            <button
              className="justify-center w-full btn btn-primary"
              onClick={() => setFormSent(true)}
            >
              Send Message <ArrowIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="p-6 glass-subtle">
            <h5 className="mb-4">Search</h5>
            <input type="search" placeholder="Search components..." />
          </div>

          <div className="p-6 glass">
            <h5 className="mb-4">Focused State</h5>
            <input
              type="text"
              defaultValue="Focused input"
              className="mb-3"
              // autoFocus
            />
            <p className="text-text-muted text-sm">
              Click any input to see the purple focus ring.
            </p>
          </div>

          <div className="p-6 glass-accent">
            <h5 className="mb-4">Newsletter</h5>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
              />
              <button className="text-nowrap btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormElementsSection;
