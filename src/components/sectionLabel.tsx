const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="bg-(image:--gradient-brand) opacity-60 w-8 h-px" />
    <span className="font-alkatra font-semibold text-xs uppercase tracking-widest text-accent-purple">
      {children}
    </span>
    <div className="h-px w-8 bg-(image:--gradient-brand) opacity-60" />
  </div>
);

export default SectionLabel;
