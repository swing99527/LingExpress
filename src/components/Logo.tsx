export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="url(#gradient)" />
      
      {/* Network Nodes */}
      <circle cx="30" cy="30" r="4" fill="white" opacity="0.9" />
      <circle cx="70" cy="30" r="4" fill="white" opacity="0.9" />
      <circle cx="50" cy="50" r="5" fill="white" />
      <circle cx="30" cy="70" r="4" fill="white" opacity="0.9" />
      <circle cx="70" cy="70" r="4" fill="white" opacity="0.9" />
      
      {/* Connection Lines */}
      <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />
      <line x1="70" y1="30" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />
      <line x1="30" y1="70" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />
      <line x1="70" y1="70" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />
      <line x1="30" y1="30" x2="70" y2="30" stroke="white" strokeWidth="2" opacity="0.4" />
      <line x1="30" y1="70" x2="70" y2="70" stroke="white" strokeWidth="2" opacity="0.4" />
      
      {/* Letter 'L' */}
      <path
        d="M 42 38 L 42 62 L 58 62"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
    </svg>
  );
}
