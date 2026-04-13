const clients = [
  "Haramaya University",
  "Ethiopian Airlines",
  "Ali Birra Foundation",
  "Central Regional Government",
  "IAD",
  "Habesha Steel Mills PLC",
  "Ramada Addis Ababa",
  "Elsewedy Electric",
  "City Lights",
  "ECO",
  "Rift Valley University",
  "Teskaro Behame PLC",
  "Kebede Chkual",
  "Endale & Families PLC",
  "Tsehay 36 Housing Cooperative",
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Trusted By</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Clients</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client}
              className="px-6 py-3 bg-secondary/60 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-accent/10 hover:border-accent/30 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
