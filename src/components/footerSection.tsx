import { ThemeToggleProps } from "@/types/propTypes";
import { MoonIcon, SparkleIcon, SunIcon } from "@/components/icons";

const FooterSection = ({ dark, setDark }: ThemeToggleProps) => {
  return (
    <footer className="glass-nav mt-0 p-6 border-t border-(--border-default) border-b-0">
      <div className="flex flex-wrap justify-between items-center gap-3 container">
        <div className="flex items-center gap-2">
          <div className="w-5.5 h-5.5 bg-(image:--gradient-brand-vivid) flex items-center justify-center rounded-sm">
            <SparkleIcon />
          </div>
          <span className="font-tourney font-bold text-gradient text-lg">
            GlassUI
          </span>
        </div>
        <small>
          Built with the Glassmorphism Design System · Blue × Purple
        </small>
        <button
          className="text-text-secondary btn-icon"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
