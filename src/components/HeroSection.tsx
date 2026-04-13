import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Modern architecture building"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
          Architects & Engineers PLC
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          HH Consulting
        </h1>
        <div className="w-20 h-0.5 bg-accent mx-auto mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }} />
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Worldwide Consulting. Engineered Excellence.
        </p>
        <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          For any international projects, we are your dedicated global partner in design and construction supervision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a href="#services" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider transition-colors">
            Our Services
          </a>
          <a href="#contact" className="border border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
