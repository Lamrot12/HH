import staffLeadership from "@/assets/staff-leadership.png";
import staffDepartments from "@/assets/staff-departments.png";
import staffDepartments3 from "@/assets/staff-departments-3.png";

const leadership = [
  { name: "Hailemichael Solomon", role: "General Manager" },
  { name: "Feven Girma", role: "Deputy General Manager" },
];

const departments = [
  { name: "Helen", role: "Receptionist" },
  { name: "Mekdes Gebru", role: "Receptionist" },
  { name: "Yitbarek Tekle", role: "Human Resource Department" },
  { name: "Dibora Mesfin", role: "Bid Department Head" },
  { name: "Hailegiorgis Solomon", role: "IT Department" },
  { name: "Supervision", role: "& Contract Administration (SCAD)" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Leadership</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">Staff Members</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <img
            src={staffLeadership}
            alt="Leadership - Hailemichael Solomon (General Manager) and Feven Girma (Deputy General Manager)"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Department Staff */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <img
            src={staffDepartments}
            alt="Staff members - Helen, Mekdes Gebru, Yitbarek Tekle, Dibora Mesfin, Hailegiorgis Solomon, and Supervision team"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src={staffDepartments3}
            alt="Design Department, Payment Department, and Staff Recognition"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
