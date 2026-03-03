'use client';

import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react';
import Image from "next/image";
// Replace with your actual font imports / next/font setup
import { Playfair_Display, Merriweather } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });
const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400'] });

// For standalone use, swap className={playfair.className} → className="font-playfair" etc.

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@yourcompany.com',
    href: 'mailto:hello@yourcompany.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Mumbai, Maharashtra, India',
    href: '#',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400)); // simulate request
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0b08] px-6 md:px-12 py-28"
    >
      {/* ── Background image with overlay ── */}
      

        <div className="absolute inset-0 z-0">
        <Image
            src="/siteoffice-2.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-10"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-black" />
        </div>

      {/* ── Ambient blobs ── */}
      <div className="absolute -top-40 -right-24 w-140 h-140 rounded-full bg-[#886c46]/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 -left-16 w-[24rem] h-96 rounded-full bg-[#886c46]/8 blur-3xl pointer-events-none z-0" />

      {/* ── Top rule ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/50 to-transparent z-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── LEFT — Supporting text ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border bg-[#000000] px-6 py-2.5 text-[0.65rem] font-light tracking-[0.28em] text-[#886c46] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#886c46] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#886c46]" />
                </span>
                Get In Touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] bg-linear-to-r from-white via-[#a8926d] to-[#886c46] bg-clip-text text-transparent mb-7"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let{`'`}s Build
              <br />
              <span className="">
                Together
              </span>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="text-base font-light leading-[1.9] text-white/55 max-w-md mb-12"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Whether you{`'`}re planning a new installation or looking for inspiration, our team is ready to guide you from concept to completion. Share your vision and we{`'`}ll take it from there.
            </motion.p>

            {/* Contact details */}
            <div className="space-y-6">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.38 + i * 0.1 }}
                    className="group flex items-center gap-5 no-underline"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-xl border border-[#886c46]/30 bg-[#886c46]/10 flex items-center justify-center group-hover:bg-[#886c46]/20 group-hover:border-[#886c46]/60 transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#a8926d]" />
                    </div>
                    <div>
                      <p
                        className="text-[0.6rem] font-light uppercase tracking-[0.22em] text-white/30 mb-0.5"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm text-white/70 group-hover:text-[#a8926d] transition-colors duration-300"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {item.value}
                      </p>
                    </div>
                    <ArrowRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-[#886c46] group-hover:translate-x-1 transition-all duration-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14 h-px bg-linear-to-r from-[#886c46]/40 via-[#886c46]/10 to-transparent"
            />
          </div>

          {/* ── RIGHT — Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <div className="border border-[#886c46]/20 rounded-2xl bg-white/3 backdrop-blur-xl overflow-hidden">
              {/* Form header */}
              <div className="px-8 pt-8 pb-6 border-b border-[#886c46]/15">
                <p
                  className="text-[0.62rem] uppercase tracking-[0.28em] text-[#a8926d] font-light mb-1"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Send a Message
                </p>
                <p
                  className="text-xs text-white/30 font-light"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  We typically respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                /* ── Success state ── */
                <div className="px-8 py-16 flex flex-col items-center text-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#886c46]/15 border border-[#886c46]/30 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#a8926d]" />
                  </div>
                  <div>
                    <p
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Message Received
                    </p>
                    <p
                      className="text-sm font-light text-white/45 leading-relaxed max-w-xs"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Arjun Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="arjun@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  {/* Message */}
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-[0.22em] text-white/35 font-light mb-2"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project, structure type, location, and timeline..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#886c46]/60 focus:bg-white/8 transition-all duration-300 text-sm font-light resize-none"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-[#886c46] hover:bg-[#9a7a52] disabled:opacity-60 transition-all duration-300 text-white text-sm font-light tracking-widest uppercase"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p
                    className="text-center text-[0.58rem] text-white/20 font-light tracking-wider"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom rule ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/40 to-transparent z-10"
      />
    </section>
  );
}

/* ── Reusable field ── */
interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Field({ label, name, type, placeholder, value, onChange, required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.6rem] uppercase tracking-[0.22em] text-white/35 font-light mb-2"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#886c46]/60 focus:bg-white/8 transition-all duration-300 text-sm font-light"
        style={{ fontFamily: "'Merriweather', serif" }}
      />
    </div>
  );
}