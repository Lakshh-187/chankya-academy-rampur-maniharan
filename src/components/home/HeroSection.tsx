
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png"
          alt="Chanakya International Academy Building"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Chanakya International Academy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fade-in">
            Rampur Maniharan
          </p>
          <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto animate-fade-in">
            Empowering minds with world-class education, innovative learning, and character building. 
            Where excellence meets tradition in the heart of India.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open("https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20about%20admissions", "_blank")}
            >
              Apply for Admission
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
            >
              Explore Campus
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};
