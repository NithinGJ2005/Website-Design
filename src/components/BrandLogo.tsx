interface BrandLogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <a
      href="#home"
      id="brand-logo-link"
      className={`inline-flex items-center gap-3 group transition-opacity duration-200 focus:outline-none focus:ring-1 focus:ring-white/40 ${className}`}
      aria-label="Meridian Home"
    >
      {/* Precision Geometric Monogram Emblem */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-105"
        >
          {/* Architectural minimal geometric mark */}
          <path
            d="M5 26L16 6L27 26H20.5L16 16.5L11.5 26H5Z"
            fill="currentColor"
          />
          <path
            d="M16 11.5L19 18H13L16 11.5Z"
            fill="#080A0B"
          />
        </svg>
      </div>

      <span className="text-white text-base md:text-lg font-medium tracking-[0.22em] uppercase font-sans select-none">
        MERIDIAN
      </span>
    </a>
  );
}
