import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types.ts';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onInquire,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0D0F10] border border-white/20 p-6 sm:p-10 text-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#A7A7A7] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/40 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
              Capability {service.number}
            </span>
            <span className="w-6 h-[1px] bg-white/20" />
          </div>
          <h3
            id="service-modal-title"
            className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-3"
          >
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-[#A7A7A7] leading-relaxed">
            {service.details.overview}
          </p>
        </div>

        {/* Key Competencies / Capabilities */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-[#A7A7A7] uppercase mb-4">
            Core Methodologies & Architecture
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.details.capabilities.map((cap, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-8 pt-6 border-t border-white/10">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-[#A7A7A7] uppercase mb-4">
            Measurable Enterprise Outcomes
          </h4>
          <div className="space-y-2.5">
            {service.details.outcomes.map((out, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7A7A7]"
              >
                <CheckCircle2 className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">{out}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onInquire(service.title)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#080A0B] text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <span>Initiate Engagement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm text-[#A7A7A7] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
