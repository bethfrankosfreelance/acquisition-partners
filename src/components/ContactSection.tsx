import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Message received",
        description: "Thank you for reaching out. I'll be in touch shortly.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-body uppercase tracking-[0.25em] text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Have an Opportunity?
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-primary-foreground/70 max-w-lg mx-auto font-body leading-relaxed">
              Whether you're a business owner exploring a sale, a broker with a listing, 
              or an investor looking to partner—I'm ready to listen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              className="md:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-gold font-body uppercase tracking-widest text-xs mb-1">Email</p>
                  <a
                    href="mailto:info@bethfrankos.org"
                    className="text-primary-foreground/90 hover:text-gold transition-colors font-body"
                  >
                    info@bethfrankos.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-gold font-body uppercase tracking-widest text-xs mb-1">Location</p>
                  <p className="text-primary-foreground/90 font-body">Cleveland, Ohio</p>
                  <p className="text-primary-foreground/50 font-body text-sm mt-1">
                    Open to partnerships globally
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              className="md:col-span-3 space-y-5"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-gold font-body uppercase tracking-widest text-xs mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded px-4 py-3 text-primary-foreground font-body placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gold font-body uppercase tracking-widest text-xs mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength={20}
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded px-4 py-3 text-primary-foreground font-body placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gold font-body uppercase tracking-widest text-xs mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded px-4 py-3 text-primary-foreground font-body placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gold font-body uppercase tracking-widest text-xs mb-2">
                  Brief Overview of Opportunity *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/20 rounded px-4 py-3 text-primary-foreground font-body placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about the business—industry, revenue, location, and anything else relevant."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold tracking-widest uppercase text-xs px-8 py-4 hover:bg-accent/90 transition-colors rounded disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
