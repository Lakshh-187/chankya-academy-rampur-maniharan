
import { HeroSection } from "@/components/home/HeroSection";
import { InstitutesCluster } from "@/components/home/InstitutesCluster";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { ImageCarousel } from "@/components/home/ImageCarousel";
import { UncifSection } from "@/components/home/UncifSection";
import { ImageGallery } from "@/components/home/ImageGallery";
import { VideoSection } from "@/components/home/VideoSection";
import { NewsSection } from "@/components/home/NewsSection";
import { CertificateSection } from "@/components/home/CertificateSection";
import { ChatBot } from "@/components/ChatBot";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Chanakya International Academy, Rampur Maniharan - Premier CBSE School | CIARampur"
        description="Chanakya International Academy, Rampur Maniharan - Leading CBSE affiliated school offering world-class education with traditional Indian values. Admissions open for 2024-25. Contact us for quality education in Rampur Maniharan, UP."
        keywords="Chanakya International Academy, Rampur Maniharan, CBSE school, best school Rampur, CIARampur, quality education UP, admission 2024, boarding school, day school, UNCIF certified, international curriculum"
        canonicalUrl="https://ciarampur.com/"
        ogImage="https://ciarampur.com/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png"
      />
      <div className="min-h-screen">
        <HeroSection />
        <InstitutesCluster />
        <TrustSection />
        <AboutSection />
        <ImageCarousel />
        <UncifSection />
        <FacilitiesPreview />
        <ImageGallery />
        <VideoSection />
        <NewsSection />
        <CertificateSection />
        <ChatBot />
      </div>
    </>
  );
};

export default Index;
