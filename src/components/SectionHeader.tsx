interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center mb-14">
      <span className="pill-header">{title}</span>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-center max-w-md">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;