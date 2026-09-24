import { ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo.tsx';
import { siteConfig } from '../config.ts';

export default function Footer() {
  const { socialLinks } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#080A0B] border-t border-white/[0.08] text-white py-8 sm:py-10"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Logo & Mission Tagline */}
        <div className="flex items-center gap-6 sm:gap-8">
          <BrandLogo />
          <span className="hidden sm:inline-block h-3.5 w-[1px] bg-white/20" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#707070] uppercase select-none">
            A BRIGHTER TOMORROW, TOGETHER.
          </span>
        </div>

        {/* Center: Minimal Navigation */}
        <nav
          className="flex items-center gap-6 sm:gap-8 text-xs text-[#A6A6A6] tracking-wide"
          aria-label="Footer Navigation"
        >
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: Socials & Copyright */}
        <div className="flex items-center gap-6 text-xs text-[#A6A6A6]">
          <div className="flex items-center gap-4 text-xs font-mono">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-[11px]"
                aria-label={social.label}
              >
                {social.label === 'LinkedIn' ? 'in' : social.label === 'Instagram' ? 'ig' : '𝕏'}
              </a>
            ))}
          </div>

          <span className="text-[11px] text-[#707070]">
            &copy; 2026 Meridian. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
