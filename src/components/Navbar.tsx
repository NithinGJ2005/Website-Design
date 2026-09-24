import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo.tsx';
import { NavItem } from '../types.ts';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky background after 40px scroll
      setIsScrolled(window.scrollY > 40);

      // Determine active section by observing scroll offset
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A0B]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* LEFT: Logo & Company Name */}
          <div className="flex-1 flex items-center">
            <BrandLogo />
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-12"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  id={`nav-link-${sectionId}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-sm tracking-wide transition-colors duration-200 py-1 group focus:outline-none focus:text-white"
                >
                  <span
                    className={`${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-[#A7A7A7] hover:text-white font-normal'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator underline matching reference design */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white transition-all duration-300" />
                  )}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: CTA Button (Desktop) */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-[11px] lg:text-xs tracking-[0.16em] uppercase border border-white/20 hover:border-white/60 bg-transparent text-[#F5F5F5] hover:text-white transition-all duration-300 rounded-[2px] group focus:outline-none focus:ring-1 focus:ring-white/40"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-white/80" />
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-1 focus:ring-white/40"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-drawer-overlay"
        className={`fixed inset-0 z-40 bg-[#080A0B]/98 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6 pt-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A7A7A7] mb-2">
            Navigation
          </p>
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                id={`mobile-nav-${sectionId}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-2xl font-light tracking-wide transition-colors py-1 ${
                  isActive ? 'text-white font-normal' : 'text-[#A7A7A7] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <a
            id="mobile-nav-cta"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-between w-full px-6 py-4 text-sm uppercase tracking-wider bg-white text-[#080A0B] font-medium transition-all"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#A7A7A7] text-center tracking-wide">
            © 2026 Meridian Strategy & Technology
          </p>
        </div>
      </div>
    </>
  );
}
