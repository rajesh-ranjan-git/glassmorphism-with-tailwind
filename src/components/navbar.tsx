import { NavbarProps } from "@/types/propTypes";
import { MoonIcon, SparkleIcon, SunIcon } from "@/components/icons";

const Navbar = ({ dark, setDark }: NavbarProps) => {
  return (
    <nav className="top-0 fixed px-6 w-full glass-nav z-(--z-sticky) backdrop-blur-sm">
      <div className="flex justify-between items-center h-16 container">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-(image:--gradient-brand-vivid) flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.4)] rounded-md">
            <SparkleIcon />
          </div>
          <span className="font-tourney font-semibold text-gradient text-4xl tracking-wide">
            GlassUI
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden badge badge-blue">v1.0</span>
          <button className="text-sm btn btn-ghost">Docs</button>
          <button className="text-sm btn btn-ghost">GitHub</button>
          <button
            className="text-text-secondary btn-icon"
            onClick={() => setDark((d: boolean) => !d)}
            aria-label="Toggle theme"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="px-4.5 py-2 text-sm btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
