
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { ImageGallery } from "@/components/home/ImageGallery";
import { VideoSection } from "@/components/home/VideoSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <FacilitiesPreview />
      <ImageGallery />
      <VideoSection />
      <NewsSection />
      <ChatBot />
    </div>
  );
};

export default Index;
