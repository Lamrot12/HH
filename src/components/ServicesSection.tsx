import { Building2, Route, TreePine, ClipboardCheck, HardHat, Compass } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architectural & Engineering Design",
    items: ["Architectural Design", "Structural Engineering", "Electrical and Mechanical Systems Design", "Sanitary and Plumbing Systems"],
  },
  {
    icon: Route,
    title: "Infrastructure & Civil Engineering",
    items: ["Road and Highway Design", "Bridge and Transportation Structures", "Irrigation and Water Resource Engineering", "Infrastructure Master Planning"],
  },
  {
    icon: TreePine,
    title: "Urban & Environmental Service",
    items: ["Urban and Regional Master Plans", "Environmental Impact Assessments (EIA)", "Landscape Architecture and Design", "Topographic Surveys"],
  },
  {
    icon: ClipboardCheck,
    title: "Feasibility & Planning",
    items: ["Feasibility Studies for Public and Private Projects", "Strategic Planning and Site Analysis", "Concept Development and Cost Estimations"],
  },
  {
    icon: HardHat,
    title: "Construction Supervision & Project Management",
    items: ["Contract Administration", "Quality Control and Assurance", "Site Supervision", "Project Scheduling and Monitoring"],
  },
  {
    icon: Compass,
    title: "Additional Services",
    items: ["Terminal Design", "Irrigations", "Topography Survey", "Landscape Design and Specification"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 section-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">What We Do</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Our Expertise</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-primary-foreground/70 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
