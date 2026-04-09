const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container px-6 text-center">
      <p className="font-display text-background/80 text-sm">
        © {new Date().getFullYear()} Beth Frankos — Business Acquisitions & Investments
      </p>
      <p className="font-body text-background/40 text-xs mt-2">
        Cleveland, OH · info@bethfrankos.org
      </p>
    </div>
  </footer>
);

export default Footer;
