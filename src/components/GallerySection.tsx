import siteWork from "@/assets/site-work.png";
import staffTrip from "@/assets/staff-trip.png";
import clientPresentations from "@/assets/client-presentations.png";
import certificates from "@/assets/certificates.png";

const galleryItems = [
  { img: siteWork, title: "Site Work", description: "On-site supervision and construction at projects including Axum Yohannes Airport" },
  { img: staffTrip, title: "Staff Trip", description: "Team event at Kuriftu Water Park — building relationships and a vibrant company culture" },
  { img: clientPresentations, title: "Client Presentations", description: "Engaging with potential clients and presenting our expertise and project capabilities" },
  { img: certificates, title: "Certificates & Recognition", description: "Professional certifications and industry memberships validating our excellence" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Company Life</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">Our Journey</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {galleryItems.map((item) => (
            <div key={item.title} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-background">
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
