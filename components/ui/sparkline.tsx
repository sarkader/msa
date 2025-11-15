type Props = {
  data: number[];
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
};

export default function Sparkline({
  data,
  width = 400,
  height = 120,
  strokeColor = "#1E3A8A",
  strokeWidth = 2,
}: Props) {
  if (data.length === 0) {
    return null;
  }

  // Calculate scale
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1; // Avoid division by zero
  const padding = 10;

  // Calculate points
  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1 || 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  });

  // Create path for line
  const pathD = points
    .map((point, index) => {
      const [x, y] = point.split(",").map(Number);
      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(" ");

  // Create area path (for fill, though we're keeping it transparent)
  const areaPath = [
    `M ${padding},${height - padding}`,
    ...points.map((point) => `L ${point}`),
    `L ${width - padding},${height - padding}`,
    "Z",
  ].join(" ");

  return (
    <div className="w-full overflow-hidden">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-hidden="true"
      >
        {/* Area fill (transparent) */}
        <path d={areaPath} fill="transparent" />
        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Data points */}
        {points.map((point) => {
          const [x, y] = point.split(",").map(Number);
          return (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={3}
              fill={strokeColor}
              stroke="white"
              strokeWidth={1}
            />
          );
        })}
      </svg>
    </div>
  );
}
