import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      await emailjs.send(
        'portfolio_service',
        'template_contact',
        templateParams,
        'LpkQG-tzy5FW17AcN'
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-gradient">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's build something amazing together!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "youssefmdev22@gmail.com", href: "mailto:youssefmdev22@gmail.com" },
                { icon: Phone, text: "+201098445595", href: "tel:+201098445595" },
                { icon: MapPin, text: "Egypt" },
              ].map(({ icon: Icon, text, href }) => {
                const innerContent = (
                  <>
                    <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="group-hover:text-foreground transition-colors">{text}</span>
                  </>
                );

                const className = "flex items-center gap-4 text-muted-foreground group";

                return href ? (
                  <a key={text} href={href} className={className}>
                    {innerContent}
                  </a>
                ) : (
                  <div key={text} className={className}>
                    {innerContent}
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-5">
            <div>
              <label className="block text-sm text-foreground mb-1.5">Name</label>
              <input
                required
                disabled={isSubmitting}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-1.5">Email</label>
              <input
                required
                type="email"
                disabled={isSubmitting}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                disabled={isSubmitting}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none disabled:opacity-50"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
