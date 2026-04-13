const Footer = () => {
  return (
    <footer className="bg-primary py-10 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-serif text-lg font-bold text-primary-foreground mb-2">HH Consulting</p>
            <p className="text-primary-foreground/50 text-sm">Architects & Engineers PLC</p>
            <p className="text-primary-foreground/40 text-xs mt-2">Worldwide Consulting. Engineered Excellence.</p>
          </div>
          <div>
            <p className="text-primary-foreground/70 font-semibold text-sm mb-3 uppercase tracking-wider">Quick Links</p>
            <div className="grid grid-cols-2 gap-1">
              {["About", "Services", "Projects", "Team", "Gallery", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary-foreground/70 font-semibold text-sm mb-3 uppercase tracking-wider">Contact</p>
            <p className="text-primary-foreground/50 text-sm">Addis Ababa, Ethiopia</p>
            <p className="text-primary-foreground/50 text-sm">info@hhconsulting.com</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} HH Consulting Architects & Engineers PLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
