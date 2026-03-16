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
      // Using Web3Forms for simpler, reliable form submission.
      // 1. Go to https://web3forms.com/
      // 2. Enter your email to get a free Access Key
      // 3. Paste the Access Key below:
      const Web3FormsAccessKey = "YOUR_ACCESS_KEY_HERE";

      if (Web3FormsAccessKey === "YOUR_ACCESS_KEY_HERE") {
        toast.error("Please add your Web3Forms Access Key in the code first.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: Web3FormsAccessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "New Contact Message from Portfolio",
          from_name: "Portfolio Website",
        }),
      });

      const result = await response.json();

      if (response.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error", result);
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Form Submit Error:", error);
      toast.error("Network error. Please try again later.");
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
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's build something amazing together!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "moaz.osama.dev@gmail.com", href: "mailto:moaz.osama.dev@gmail.com" },
                { icon: Phone, text: "+201095341166", href: "tel:+201095341166" },
                { icon: MapPin, text: "Cairo" },
              ].map(({ icon: Icon, text, href }) => {
                const innerContent = (
                  <>
                    <div className="p-3 rounded-lg bg-card border border-border/50 group-hover:bg-primary/10 transition-colors shadow-sm">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="group-hover:text-primary transition-colors font-medium">{text}</span>
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

          <form onSubmit={handleSubmit} className="bg-card/40 backdrop-blur-md rounded-2xl p-8 border border-border/50 shadow-sm space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                required
                disabled={isSubmitting}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all disabled:opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                required
                type="email"
                disabled={isSubmitting}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                rows={4}
                disabled={isSubmitting}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none disabled:opacity-50"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
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
