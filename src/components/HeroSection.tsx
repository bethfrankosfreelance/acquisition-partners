import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gold font-body uppercase tracking-[0.3em] text-sm mb-6">
            Business Acquisition & Investment
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight mb-6">
            Beth Frankos
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Acquiring and investing in resilient, cash-flowing small businesses.
            <br className="hidden md:block" />
            Ready to move decisively on the right opportunity.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold tracking-widest uppercase text-xs px-8 py-4 hover:bg-accent/90 transition-colors rounded"
          >
            Let's Talk
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-primary-foreground/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
