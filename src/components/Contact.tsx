import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config.ts';
import { ContactFormData } from '../types.ts';

interface ContactProps {
  initialServiceInquiry?: string;
}

export default function Contact({ initialServiceInquiry }: ContactProps) {
  const { contact } = siteConfig;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: initialServiceInquiry
      ? `Hello, we are interested in discussing ${initialServiceInquiry} for our organization.`
      : '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please provide your name, valid email, and message.');
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    // Simulate clean enterprise submission
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#080A0B] py-24 sm:py-32 lg:py-36 text-white border-t border-white/[0.06]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Heading & Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] font-semibold tracking-[0.28em] text-[#A6A6A6] uppercase mb-4 block select-none font-mono">
                CONTACT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[50px] font-normal leading-[1.12] tracking-[-0.03em] text-[#F5F5F5] mb-4">
                Let's build something
                <span className="block font-serif-italic font-normal text-white text-[1.14em]">
                  meaningful.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#A6A6A6] font-normal leading-relaxed max-w-md">
                {contact.subheading}
              </p>
            </motion.div>

            {/* Direct Contact Links in a minimal horizontal row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#A6A6A6]"
            >
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-white/50" />
                <span>{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-white/50" />
                <span>{contact.phone}</span>
              </a>

              <div className="inline-flex items-center gap-2 text-[#707070]">
                <MapPin className="w-3.5 h-3.5 text-white/40" />
                <span>{contact.location}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Ultra-Minimal Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {status === 'success' ? (
                <div className="p-8 sm:p-12 bg-[#0D1011] border border-white/[0.14] text-center space-y-6">
                  <div className="w-12 h-12 mx-auto border border-white/20 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-normal text-white">
                      Message Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6A6A6] max-w-md mx-auto leading-relaxed">
                      Thank you for connecting. A Senior Partner will review your inquiry within one business day.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-xs uppercase tracking-wider text-white hover:border-white transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {errorMessage && (
                    <div className="p-3 text-xs text-red-300 bg-red-950/40 border border-red-500/30">
                      {errorMessage}
                    </div>
                  )}

                  {/* Top row: Name & Email side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-[#080A0B] border border-white/[0.14] focus:border-white/50 text-[#F5F5F5] placeholder-[#707070] text-xs sm:text-sm focus:outline-none transition-colors rounded-[2px]"
                    />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-[#080A0B] border border-white/[0.14] focus:border-white/50 text-[#F5F5F5] placeholder-[#707070] text-xs sm:text-sm focus:outline-none transition-colors rounded-[2px]"
                    />
                  </div>

                  {/* Company row */}
                  <div>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-[#080A0B] border border-white/[0.14] focus:border-white/50 text-[#F5F5F5] placeholder-[#707070] text-xs sm:text-sm focus:outline-none transition-colors rounded-[2px]"
                    />
                  </div>

                  {/* Message row */}
                  <div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-[#080A0B] border border-white/[0.14] focus:border-white/50 text-[#F5F5F5] placeholder-[#707070] text-xs sm:text-sm focus:outline-none transition-colors resize-none rounded-[2px]"
                    />
                  </div>

                  {/* Submit Button aligned to right */}
                  <div className="flex justify-end pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#F5F5F5] hover:bg-white text-[#080A0B] text-xs uppercase tracking-widest font-medium transition-all duration-300 rounded-[2px] active:scale-[0.98] group cursor-pointer disabled:opacity-50"
                    >
                      <span>
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
