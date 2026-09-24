import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config.ts';
import { ServiceItem } from '../types.ts';
import ServiceDetailModal from './ServiceDetailModal.tsx';

interface ServicesProps {
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForContact }: ServicesProps) {
  const { services } = siteConfig;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleCardClick = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(null);
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#080A0B] py-24 sm:py-32 lg:py-40 text-white border-t border-white/[0.06]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with View All Services link on right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[#A6A6A6] uppercase mb-4 block select-none font-mono">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-normal leading-[1.12] tracking-[-0.03em] text-[#F5F5F5] mb-4">
              How We Create Value
            </h2>
            <p className="text-sm sm:text-base text-[#A6A6A6] font-normal leading-relaxed">
              {services.subheading}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#A6A6A6] hover:text-white transition-colors cursor-pointer select-none group"
            onClick={() => handleCardClick(services.items[0])}
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Minimal Cards Grid: 4 columns on large screens matching reference photo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(item);
                }
              }}
              id={`service-card-${item.id}`}
              className="group relative p-6 sm:p-7 lg:p-8 bg-[#0D1011] border border-white/[0.14] hover:border-white/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between min-h-[280px] sm:min-h-[310px] rounded-[2px] focus:outline-none focus:ring-1 focus:ring-white/40"
            >
              {/* Subtle hover backlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Card Top: Number & Subtle Minimal Arrow */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="font-mono text-xs tracking-wider text-white/50 group-hover:text-white transition-colors duration-200">
                  {item.number}
                </span>

                <div className="w-6 h-6 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Card Bottom: Title in subtle serif italic & Description */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif-italic text-white tracking-wide group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A6] font-normal leading-relaxed line-clamp-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for detailed methodology & capabilities */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquire}
      />
    </section>
  );
}
