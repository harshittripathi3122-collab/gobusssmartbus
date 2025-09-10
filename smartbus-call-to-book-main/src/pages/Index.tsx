import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import OffersSection from "@/components/OffersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OffersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Index;
