import PillarCard from "@/services/web-development/PillarCard";
import { EXCELLENCE_PILLARS } from "./data";

const PillarsSection = () => (
  <section className="py-12 md:py-20">
    <h2 className="text-3xl font-bold tracking-tight text-white mb-8 text-center">
      Our Pillars of Excellence
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {EXCELLENCE_PILLARS.map((pillar, idx) => (
        <PillarCard
          key={idx}
          title={pillar.title}
          description={pillar.description}
          details={pillar.details}
          icon={pillar.icon}
        />
      ))}
    </div>
  </section>
);

export default PillarsSection;
