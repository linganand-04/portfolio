import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { slideInLeft, slideInRight } from "@/animations/variants";
import emailjs from "@emailjs/browser"

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.whatsapp },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };


  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's"
          highlight="talk"
          description="Have a project in mind, or just want to say hi? My inbox is open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal variants={slideInLeft} className="flex flex-col gap-6 lg:col-span-2">
            <div className="glass rounded-3xl p-8">
              <h3 className="mb-6 font-display text-lg font-semibold text-text">
                Contact information
              </h3>
              <div className="flex flex-col gap-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-accent">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-faint">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-text hover:text-accent transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-text">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-white-10-top pt-6">
                <p className="mb-4 text-xs uppercase tracking-wide text-text-faint">
                  Find me elsewhere
                </p>
                <SocialLinks />
              </div>
            </div>
          </Reveal>

          <Reveal variants={slideInRight} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-3xl p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
              <Field
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project..."
                textarea
                required
              />

              <MagneticButton type="submit" variant="primary" className="w-full sm:w-fit">
                <Send size={16} /> Send Message
              </MagneticButton>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-400"
                >
                  <CheckCircle2 size={16} /> Opening your email client — thanks for reaching out!
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", textarea = false, required = false }) {
  const baseClasses =
    "w-full rounded-xl border border-white-10 bg-white/3 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.05]";

  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-text-faint">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
        />
      )}
    </label>
  );
}
