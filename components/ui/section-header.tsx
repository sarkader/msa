type Props = {
  eyebrow?: string;
  title: string;
  kicker?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  kicker,
  description,
  align = "left",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`${className} ${alignClass}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-[#111111] mb-4">
        {title}
      </h2>
      {kicker && (
        <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] font-medium text-[#111111] mb-4">
          {kicker}
        </p>
      )}
      {description && (
        <p className="text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-[#525252] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
