import { Target, Eye, Diamond } from "lucide-react";
import aboutImg from "@/assets/about-engineering.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Who We Are</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            About HH Consulting
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              HH Consulting Architects and Engineers
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A multidisciplinary firm based in Ethiopia, dedicated to providing innovative, sustainable, and integrated solutions in architecture and engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We combine visionary design with technical excellence to deliver impactful and resilient projects across Ethiopia and beyond. We are committed to excellence, sustainability, and innovation.
            </p>
            <h4 className="font-serif text-xl font-bold text-foreground mb-3">Our Approach</h4>
            <p className="text-muted-foreground leading-relaxed">
              Our designs balance aesthetics, function, and environmental responsibility. We work closely with clients, stakeholders, and communities to ensure every project meets technical, regulatory, and social expectations.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={aboutImg} alt="Engineering blueprints and tools" className="w-full h-auto object-cover" loading="lazy" width={1280} height={720} />
          </div>
        </div>

        {/* Mission, Vision, Value */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Mission",
              text: "Driven by a passion for automated project management solutions with architectural and civil engineering services. Implementing innovative ideas across multiple services to promote efficient and economical project management.",
            },
            {
              icon: Eye,
              title: "Vision",
              text: "We strive to achieve innovative project management and quality control solutions for the local construction industry, implementing proper contract administration and design supervision methods.",
            },
            {
              icon: Diamond,
              title: "Value",
              text: "Appropriate usage of time. Developing the behavioral qualities of a good entrepreneurship. Serving customers in kind with dedication and professionalism.",
            },
          ].map((item) => (
            <div key={item.title} className="p-8 rounded-lg bg-secondary/50 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
