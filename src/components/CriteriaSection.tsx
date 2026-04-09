import { motion } from "framer-motion";
import { Shield, Globe, Users, TrendingUp, Zap, Building } from "lucide-react";

const criteria = [
  {
    icon: Shield,
    title: "Recession-Proof",
    description: "Essential services that maintain demand regardless of economic cycles.",
  },
  {
    icon: Users,
    title: "Teams in Place",
    description: "Remote or absentee-friendly operations with established management and staff.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Based Strength",
    description: "Proven, consistent cash flow with clear financial track records under $3M revenue.",
  },
  {
    icon: Building,
    title: "Essential Services",
    description: "Businesses providing services people rely on—day in, day out.",
  },
  {
    icon: Zap,
    title: "Ready to Close",
    description: "Prepared to move quickly with financing in place for the right acquisition.",
  },
  {
    icon: Globe,
    title: "Open to Partnership",
    description: "Structured with private capital, lending, and equity—seeking aligned co-investors.",
  },
];

const CriteriaSection = () => {
  return (
    <section id="criteria" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-body uppercase tracking-[0.25em] text-sm mb-4">
            Investment Criteria
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
            What I'm Looking For
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto font-body leading-relaxed">
            Targeting small businesses under $3M in revenue with strong fundamentals, 
            loyal customer bases, and the potential for streamlined ownership transitions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {criteria.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded bg-card border border-border/60 hover:border-accent/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <item.icon className="w-5 h-5 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
