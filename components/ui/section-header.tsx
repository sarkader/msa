type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, description, className = "" }: Props) {
  return (
    <div className={className}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#1a1a1a] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
