import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body uppercase tracking-[0.25em] text-sm mb-4">
              The Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-8">
              Capital Ready, <em className="text-accent">Relationships First</em>
            </h2>

            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                I acquire small businesses using a combination of private investment capital, 
                business lending, and equity partnerships. This flexible capital stack means 
                I can structure deals creatively and close efficiently—without unnecessary delays.
              </p>
              <p>
                Based in Cleveland, Ohio, I operate without geographic constraints. Whether a 
                business is across town or across the country, I'm open to the conversation. 
                I'm also actively seeking co-investors and strategic partners who share a 
                long-term, value-driven outlook.
              </p>
              <p>
                My focus is simple: find well-run, revenue-strong businesses in essential 
                service sectors, preserve what works, and create value for everyone involved. 
                If you're a broker, seller, or fellow investor with the right opportunity—I'd 
                like to hear from you. I don't wait around when the fundamentals are right.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-8 text-sm">
              <div>
                <p className="text-accent font-body uppercase tracking-widest text-xs mb-1">Base</p>
                <p className="text-foreground font-display">Cleveland, OH</p>
              </div>
              <div>
                <p className="text-accent font-body uppercase tracking-widest text-xs mb-1">Reach</p>
                <p className="text-foreground font-display">National & Global</p>
              </div>
              <div>
                <p className="text-accent font-body uppercase tracking-widest text-xs mb-1">Target Revenue</p>
                <p className="text-foreground font-display">Under $3M</p>
              </div>
              <div>
                <p className="text-accent font-body uppercase tracking-widest text-xs mb-1">Structure</p>
                <p className="text-foreground font-display">Private + Debt + Equity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
