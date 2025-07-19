export const Crown = ({ className = "", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="50%" stopColor="#ffed4e" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M20 70 L25 40 L35 50 L50 30 L65 50 L75 40 L80 70 Z"
      fill="url(#crownGradient)"
      stroke="#b45309"
      strokeWidth="1"
      filter="url(#glow)"
    />
    <circle cx="30" cy="45" r="3" fill="#02c809" />
    <circle cx="50" cy="35" r="4" fill="#fa06f2" />
    <circle cx="70" cy="45" r="3" fill="#02c809" />
    <rect x="20" y="70" width="60" height="8" fill="url(#crownGradient)" stroke="#b45309" strokeWidth="1" />
  </svg>
)