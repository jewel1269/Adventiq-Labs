import ServicesSection from "@/services/ServicesSection/ServicesSection";
import AboutUsSection from "../adventiq-identity/about-section";
import HeroWavebox from "../hero-section/hero";
import TechStack from "../tech-stack/tech-stack";
import Products from "../product/product-page";
import CustomerReviews from "../testimonials/testimonials";
import Footer from "../layout/Footer/footer";
import ContactPage from "@/services/contact-page/contact-page";
import FAQ from "../faq/faq";
import TrustedPartners from "@/services/partners/partners";

const HomePage = () => {
  return (
    <div>
      <HeroWavebox />
      <AboutUsSection />
      <ServicesSection />
      <TechStack />
      <Products />
      <TrustedPartners />
      <CustomerReviews />
      <ContactPage />
      <FAQ />
    </div>
  );
};

export default HomePage;
