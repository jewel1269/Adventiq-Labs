import ServicesSection from "@/services/ServicesSection/ServicesSection";
import AboutUsSection from "../adventiq-identity/about-section";
import HeroWavebox from "../hero-section/hero";
import TechStack from "../tech-stack/tech-stack";
import Products from "../product/product-page";
import CustomerReviews from "../testimonials/testimonials";
import Footer from "../layout/Footer/footer";

const HomePage = () => {
  return (
    <div>
      <HeroWavebox />
      <AboutUsSection />
      <ServicesSection />
      <TechStack />
      <Products />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default HomePage;
