import { motion } from 'motion/react';
import { siteConfig } from '../config.ts';

export default function About() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      className="relative w-full bg-[#080A0B] py-24 sm:py-32 lg:py-40 text-white overflow-hidden border-t border-white/[0.06]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Label & Large Editorial Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block mb-5">
                <span className="text-[11px] font-semibold tracking-[0.28em] text-[#A6A6A6] uppercase select-none font-mono">
                  {about.label}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[52px] font-normal leading-[1.12] tracking-[-0.03em] text-[#F5F5F5]">
                Building meaningful
                <span className="block font-normal">solutions for a</span>
                <span className="block">
                  <span className="font-serif-italic font-normal text-[1.14em] text-white">changing</span>{' '}
                  <span className="font-light text-white/90">world.</span>
                </span>
              </h2>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Descriptive Copy + 3 Information Blocks + Architectural Photo */}
          <div className="lg:col-span-7 lg:pl-6 space-y-12">
            {/* Top row with paragraph and architectural image + vertical editorial label */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-7 text-[#A6A6A6] text-sm sm:text-base leading-relaxed font-normal"
              >
                <p className="text-[#F5F5F5] text-base sm:text-lg font-light leading-relaxed mb-4">
                  {about.paragraph1}
                </p>
                <p className="text-xs sm:text-sm text-[#707070] leading-relaxed">
                  {about.paragraph2}
                </p>
              </motion.div>

              {/* Architectural Monochrome Detail Photo + Vertical Marker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 flex items-stretch gap-4"
              >
                <div className="relative w-full h-36 sm:h-40 overflow-hidden border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                    alt="Minimal modern architectural glass facade"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0B]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Vertical Divider & Pillars */}
                <div className="hidden sm:flex flex-col justify-between pl-2 border-l border-white/15 py-1">
                  <div className="space-y-1 text-[9px] font-mono tracking-[0.25em] text-[#707070] uppercase leading-tight select-none">
                    <p className="text-[#A6A6A6]">PEOPLE</p>
                    <p>IDEAS</p>
                    <p>TECHNOLOGY</p>
                    <p>IMPACT</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 3 Information Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-white/[0.14] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
            >
              {about.infoBlocks.map((block) => (
                <div
                  key={block.number}
                  className="space-y-3 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono tracking-wider text-white/50 group-hover:text-white transition-colors duration-200">
                      {block.number}
                    </span>
                    <span className="w-5 h-[1px] bg-white/20 group-hover:w-8 group-hover:bg-white/60 transition-all duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-[#F5F5F5] tracking-wide">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed font-normal">
                    {block.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
