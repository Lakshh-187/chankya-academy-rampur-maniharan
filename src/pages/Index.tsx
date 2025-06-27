
import { HeroSection } from "@/components/home/HeroSection";
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
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
  );
};

export default Index;
