import FeatureCard from "@/services/web-development/FeatureCard";
import { AI_SERVICE_CARDS } from "./data";

const ServicesSection = () => (
  <section className="py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {AI_SERVICE_CARDS.map((card, idx) => (
        <FeatureCard
          key={idx}
          title={card.title}
          details={card.details}
          icon={card.icon}
          link={card.link}
        />
      ))}
    </div>
  </section>
);

export default ServicesSection;
