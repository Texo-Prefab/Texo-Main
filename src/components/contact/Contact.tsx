"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Merriweather, Playfair_Display } from "next/font/google";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});



export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section className={`${merri.className} relative bg-[#faf9f7] overflow-hidden z-99999`}>

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Ambient glow — top right */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-[#886c46]/8 blur-[100px] z-0" />
      {/* Ambient glow — bottom left */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-100 h-100 rounded-full bg-[#886c46]/6 blur-[80px] z-0" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(136,108,70,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Section header ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p  className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#886c46] mb-3">
          Get In Touch
        </p>
        <h2  className="text-4xl sm:text-5xl font-bold text-black leading-tight">
          We&apos;d love to{" "}
          <span className={`${playfair.className} italic text-[#886c46]`}>hear</span>{" "}
          from you
        </h2>
      </div>

      {/* ── Two-column body ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-6xl mx-auto px-6 pb-24 flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl shadow-black/[0.07] border border-black/8"
      >

        {/* ── LEFT: Info — soft-black panel ── */}
        <div className="w-full lg:w-105 shrink-0 bg-[#111110] text-white flex flex-col relative overflow-hidden">

          <div className="pointer-events-none absolute top-0 left-0 w-64 h-64 rounded-full bg-[#886c46]/12 blur-[80px]" />

          {/* Office 1 */}
          <div  className="p-8 border-b border-white/[0.07] relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#886c46] font-medium">
                Head Office
              </span>
            </div>
            <h3 className={`${playfair.className} text-2xl font-bold text-white mb-5`}>
              Hyderabad
            </h3>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-4 h-4 text-[#886c46] mt-0.5 shrink-0" strokeWidth={1.8} />
              <p className="text-sm font-light text-white/60 leading-relaxed">
                1-2-3/69, xyz street,<br />
                Hyderabad, Telangana — 100 001
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-[#886c46] shrink-0" strokeWidth={1.8} />
              <p className="text-sm font-light text-white/60">
                Mon – Sat &nbsp;·&nbsp; 9:00 AM – 6:30 PM
              </p>
            </div>
          </div>

          {/* Office 2 */}
          <div  className="p-8 border-b border-white/[0.07] relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#886c46]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#886c46] font-medium">
                Branch Office
              </span>
            </div>
            <h3 className={`${playfair.className} text-2xl font-bold text-white mb-5`}>
              Hyderabad
            </h3>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-4 h-4 text-[#886c46] mt-0.5 shrink-0" strokeWidth={1.8} />
              <p className="text-sm font-light text-white/60 leading-relaxed">
                xyz complex, omg street,<br />
                Hyderabad — 100 001
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-[#886c46] shrink-0" strokeWidth={1.8} />
              <p className="text-sm font-light text-white/60">
                Mon – Sat &nbsp;·&nbsp; 9:30 AM – 6:00 PM
              </p>
            </div>
          </div>

          <div  className="p-8 flex flex-col gap-5 mt-auto relative z-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#886c46] font-medium mb-1">
              Contact Details
            </p>
            {["+91 987654321", "+91 123456789"].map((num) => (
              <motion.a
                key={num}
                href={`tel:${num.replace(/\s/g, "")}`}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 group"
              >
                <Phone className="w-4 h-4 text-[#886c46] shrink-0" strokeWidth={1.8} />
                <span className="text-sm font-light text-white/60 group-hover:text-white transition-colors duration-200">
                  {num}
                </span>
              </motion.a>
            ))}
            {["texomain.in", "texoman.in"].map((email) => (
              <motion.a
                key={email}
                href={`mailto:${email}`}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 group"
              >
                <Mail className="w-4 h-4 text-[#886c46] shrink-0" strokeWidth={1.8} />
                <span className="text-sm font-light text-white/60 group-hover:text-white transition-colors duration-200">
                  {email}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form — warm white panel ── */}
        <div className="flex-1 border-t lg:border-t-0 lg:border-l border-black/8 p-8 sm:p-12 flex flex-col justify-center bg-white relative overflow-hidden">

          <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#886c46]/5 blur-[80px]" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center justify-center text-center gap-5 py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-14 h-14 rounded-full border-2 border-[#886c46] flex items-center justify-center"
              >
                <Send className="w-5 h-5 text-[#886c46]" strokeWidth={1.8} />
              </motion.div>
              <h3 className={`${playfair.className} text-3xl font-bold text-black`}>
                Message sent.
              </h3>
              <p className="text-sm font-light text-black/50 max-w-xs leading-relaxed">
                Thank you for reaching out. We&apos;ll get back to you within one business day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                className="mt-2 text-xs font-medium text-[#886c46] underline underline-offset-4 hover:text-black transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="relative z-10 flex flex-col gap-7">

              <div>
                <p className={`${playfair.className} text-xl italic text-[#886c46] mb-1`}>
                  Say hello.
                </p>
                <p className="text-sm font-light text-black/45 leading-relaxed">
                  Fill in the form and our team will get back to you shortly.
                </p>
              </div>

              {/* Name + Phone */}
              <div  className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.15em] uppercase text-black/70">
                    Full Name <span className="text-[#886c46]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Arjun Sharma"
                    className="w-full border-b border-black/15 focus:border-[#886c46] bg-transparent py-2.5 text-sm font-light text-black placeholder:text-black/20 outline-none transition-colors duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[11px] font-medium tracking-[0.15em] uppercase text-black/70">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98200 XXXXX"
                    className="w-full border-b border-black/15 focus:border-[#886c46] bg-transparent py-2.5 text-sm font-light text-black placeholder:text-black/20 outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div  className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.15em] uppercase text-black/70">
                  Email Address <span className="text-[#886c46]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="arjun@example.com"
                  className="w-full border-b border-black/15 focus:border-[#886c46] bg-transparent py-2.5 text-sm font-light text-black placeholder:text-black/20 outline-none transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div  className="flex flex-col gap-2">
                <label className="text-[11px] font-medium tracking-[0.15em] uppercase text-black/70">
                  Message <span className="text-[#886c46]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us how we can help you…"
                  className="w-full border-b border-black/15 focus:border-[#886c46] bg-transparent py-2.5 text-sm font-light text-black placeholder:text-black/20 outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <div  className="flex items-center justify-between pt-2">
                <p className="text-[11px] font-light text-black/35">
                  <span className="text-[#886c46]">*</span> Required fields
                </p>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-black text-white text-sm font-medium shadow-lg shadow-black/10 hover:bg-[#886c46] hover:shadow-[#886c46]/25 transition-all duration-300 group"
                >
                  Send Message
                  <Send
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    strokeWidth={2}
                  />
                </motion.button>
              </div>

            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}