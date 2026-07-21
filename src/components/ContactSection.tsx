import { Mail, MapPin, Phone, Send, Loader2, Github, BriefcaseBusiness, Sparkles, User, AtSign, MessageSquare, Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// EmailJS Credentials Configuration
const EMAILJS_SERVICE_ID = "service_d83jeml";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_wf3d7ys";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_9fpczk9";
const EMAILJS_PUBLIC_KEY = "_AdtBzD1xFnKwlGau";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("moaz.osama.dev@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        to_email: form.email,
        message: form.message,
        to_name: "Moaz Osama",
      };

      // 1. Send Main Notification & 2. Send Auto-Reply
      await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CONTACT_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        ).catch((err) => console.warn("Auto-reply background notice:", err))
      ]);

      toast.success("Message sent successfully! Check your email for confirmation.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email Submit Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email Address",
      value: "moaz.osama.dev@gmail.com",
      href: "mailto:moaz.osama.dev@gmail.com",
      action: handleCopyEmail,
      actionIcon: copied ? Check : Copy,
      actionText: copied ? "Copied" : "Copy",
    },
    {
      icon: Phone,
      label: "Phone & WhatsApp",
      value: "+20 109 534 1166",
      href: "https://wa.me/201095341166",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "github.com/moazosama1",
      href: "https://github.com/moazosama1",
    },
    {
      icon: BriefcaseBusiness,
      label: "Mostaql Freelance",
      value: "mostaql.com/u/moaz_osama_a1",
      href: "https://mostaql.com/u/moaz_osama_a1",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt (Remote / Relocation Available)",
    },
  ];

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={13} /> Let's Connect
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-foreground tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-mono">
            Have a project in mind, mobile app idea, or opportunity? Feel free to reach out anytime!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Availability Status & Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Status Pill Badge */}
            <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/60 flex items-center gap-3 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <h4 className="text-xs font-mono font-bold text-foreground">Available for New Opportunities</h4>
                <p className="text-[11px] text-muted-foreground font-mono">Freelance, Full-time & Remote Roles</p>
              </div>
            </div>

            {/* Contact Cards List */}
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const ActionIcon = item.actionIcon;

                return (
                  <div
                    key={item.label}
                    className="group relative bg-card/60 backdrop-blur-xl rounded-2xl p-4 border border-border/50 hover:border-primary/40 shadow-sm hover:shadow-[0_8px_25px_rgba(var(--primary),0.15)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3.5 overflow-hidden">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon size={18} />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-mono font-medium text-muted-foreground block">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm font-semibold font-mono text-foreground hover:text-primary transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-xs sm:text-sm font-semibold font-mono text-foreground truncate block">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>

                    {item.action && ActionIcon && (
                      <button
                        type="button"
                        onClick={item.action}
                        className="flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all shrink-0"
                        title={item.actionText}
                      >
                        <ActionIcon size={13} />
                        <span className="hidden sm:inline">{item.actionText}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Modern Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-card/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/60 shadow-xl space-y-5 overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-2">
                <h3 className="text-lg font-bold font-heading text-foreground">Send a Direct Message</h3>
                <span className="text-xs font-mono text-muted-foreground">Quick Response Guaranteed</span>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-mono font-medium text-foreground/90 mb-1.5 flex items-center gap-1.5">
                  <User size={13} className="text-primary" /> Your Name
                </label>
                <input
                  required
                  disabled={isSubmitting}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all disabled:opacity-50 font-mono"
                  placeholder="e.g. John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-mono font-medium text-foreground/90 mb-1.5 flex items-center gap-1.5">
                  <AtSign size={13} className="text-primary" /> Your Email
                </label>
                <input
                  required
                  type="email"
                  disabled={isSubmitting}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all disabled:opacity-50 font-mono"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-mono font-medium text-foreground/90 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-primary" /> Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  disabled={isSubmitting}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all resize-none disabled:opacity-50 font-mono"
                  placeholder="Hello Moaz, I would like to talk about..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:opacity-95 transition-all shadow-md hover:shadow-[0_0_25px_rgba(var(--primary),0.4)] disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
