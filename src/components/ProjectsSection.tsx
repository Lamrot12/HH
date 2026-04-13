import { useState } from "react";
import { MapPin, Calendar, Users, DollarSign } from "lucide-react";
import hospitalImg from "@/assets/project-alibira-hospital.jpg";
import towerImg from "@/assets/project-kebede-tower.jpg";
import guesthouseImg from "@/assets/project-guesthouse.jpg";
import churchillImg from "@/assets/project-churchill-hotel.jpg";
import haramayaGHImg from "@/assets/project-haramaya-guesthouse.jpg";
import teskaroImg from "@/assets/project-teskaro.jpg";
import tsehayImg from "@/assets/project-tsehay.jpg";
import haramayaSciImg from "@/assets/project-haramaya-science.jpg";

const projects = [
  {
    img: hospitalImg,
    title: "Dr. Ar. Alibira General Hospital",
    category: "Healthcare",
    location: "Haramaya",
    client: "Ali Birra Foundation",
    value: "2.83B ETB",
    staff: 13,
    start: "Oct 2025",
  },
  {
    img: towerImg,
    title: "Kebede Mixed Use G+34",
    category: "High-Rise",
    location: "Addis Ababa",
    client: "Kebede Chkual",
    value: "6.6B ETB",
    staff: 9,
    start: "Aug 2025",
  },
  {
    img: churchillImg,
    title: "Churchill Hotel",
    category: "Hospitality",
    location: "Addis Ababa",
    client: "Endale and Families PLC",
    value: "1.3B ETB",
    staff: 13,
    start: "Jun 2025",
  },
  {
    img: haramayaGHImg,
    title: "Haramaya University Guest House",
    category: "Institutional",
    location: "Addis Ababa",
    client: "Haramaya University",
    value: "1.96B ETB",
    staff: 9,
    start: "Feb 2025",
  },
  {
    img: teskaroImg,
    title: "Teskaro Behame G+12",
    category: "Mixed-Use",
    location: "Addis Ababa",
    client: "Teskaro Behame PLC",
    value: "780M ETB",
    staff: 9,
    start: "Aug 2025",
  },
  {
    img: tsehayImg,
    title: "Tsehay 36 Apartment",
    category: "Residential",
    location: "Addis Ababa",
    client: "Tsehay 36 Housing Cooperative",
    value: "888M ETB",
    staff: 7,
    start: "Aug 2025",
  },
  {
    img: guesthouseImg,
    title: "Dr. Ar. Alibira Cancer Guest House",
    category: "Healthcare",
    location: "Haramaya",
    client: "Ali Birra Foundation",
    value: "192.7M ETB",
    staff: 13,
    start: "Oct 2025",
  },
  {
    img: haramayaSciImg,
    title: "Haramaya University Science Complex",
    category: "Education",
    location: "Haramaya",
    client: "Haramaya University",
    value: "1.4M Birr",
    staff: 9,
    start: "Jun 2021",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Work</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4 mb-8" />
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  active === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all bg-card border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-bold text-foreground mb-3 leading-tight">{project.title}</h3>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-accent" />{project.location}</div>
                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-accent" />{project.client}</div>
                  <div className="flex items-center gap-2"><DollarSign className="w-3.5 h-3.5 text-accent" />{project.value}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-accent" />{project.start}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
