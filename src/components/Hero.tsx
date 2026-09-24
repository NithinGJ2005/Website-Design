import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config.ts';

export default function Hero() {
  const { hero } = siteConfig;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#080A0B]"
    >
      {/* Cinematic Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          src={hero.bgImage}
          alt="Modern executive office architectural environment"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.12]"
          loading="eager"
        />

        {/* Sophisticated Dark Gradient Overlays - Left is darker, right is transparent to show warm office light */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0B] via-[#080A0B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0B]/85 via-transparent to-[#080A0B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_35%,rgba(0,0,0,0)_0%,rgba(8,10,11,0.5)_100%)] pointer-events-none" />
      </div>

      {/* Main Content Area: Centered Vertically */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-36 md:pt-44 lg:pt-48 pb-16 flex-grow flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-8"
          >
            <span
              id="hero-eyebrow"
              className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#A7A7A7] uppercase select-none font-mono"
            >
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Large Headline with Selective Italic Serif Editorial Treatment */}
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[96px] font-normal leading-[1.04] tracking-[-0.03em] text-white mb-6 md:mb-8"
          >
            {/* First line: Geist (font-sans) */}
            <span className="block font-sans font-normal tracking-[-0.035em] text-white">
              Turn Possibilities
            </span>
            {/* Second line: Instrument Serif Italic (font-serif-italic) */}
            <span className="block font-serif-italic tracking-[-0.01em] text-white/95 text-[1.12em] leading-[1.02]">
              Into Progress
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            id="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-[18px] font-normal text-[#A6A6A6] leading-[1.7] max-w-[540px] mb-10 md:mb-12 tracking-[-0.01em]"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons - Non-pill, minimal architectural geometry */}
          <motion.div
            id="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            {/* Primary Button: Off-white background with black text */}
            <button
              id="hero-primary-cta"
              type="button"
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#F5F5F5] hover:bg-white text-[#080A0B] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 rounded-[2px] active:scale-[0.98] group cursor-pointer focus:outline-none focus:ring-1 focus:ring-white"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button: Transparent, thin border, white text */}
            <button
              id="hero-secondary-cta"
              type="button"
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-[#F5F5F5] border border-white/20 hover:border-white/60 text-xs sm:text-sm font-normal tracking-wide transition-all duration-300 rounded-[2px] hover:bg-white/[0.04] active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/40"
            >
              <span>{hero.secondaryCta}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Area: Thin Divider + Capability Indicators + Mission Statement */}
      <motion.div
        id="hero-bottom-indicators"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.85, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-8 md:pb-12"
      >
        {/* Thin 1px Horizontal Divider */}
        <div className="w-full h-[1px] bg-white/15 mb-8" />

        {/* Indicators and Right Tagline */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          {/* Three Capability Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 md:gap-16 w-full lg:w-auto">
            {hero.capabilities.map((item) => (
              <div
                key={item.number}
                className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm tracking-wide text-white/90 select-none group"
              >
                <span className="font-mono text-white/50 text-xs sm:text-sm">
                  {item.number}
                </span>
                <span className="w-6 h-[1px] bg-white/30 transition-all duration-300 group-hover:w-8 group-hover:bg-white" />
                <span className="font-light tracking-wider text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Far Right Editorial Statement */}
          <div className="pt-2 lg:pt-0 self-end lg:self-center">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.25em] text-[#A7A7A7] uppercase text-right leading-relaxed select-none">
              A BRIGHTER
              <br />
              TOMORROW, TOGETHER.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
