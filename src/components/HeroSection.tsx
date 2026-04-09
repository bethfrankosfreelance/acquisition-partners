import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import OrganicBlush from "./OrganicBlush";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      <OrganicBlush />

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
