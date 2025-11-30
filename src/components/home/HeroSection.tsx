
import { Button } from "@/components/ui/button";
import { ArrowDown, Award, Users, BookOpen, Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  const heroImages = [
    {
      src: "/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png",
      alt: "Chanakya International Academy Main Building",
      title: "Modern Campus"
    },
    {
      src: "/lovable-uploads/cf2bb5ae-b20d-45d0-933f-912da5c10d55.png",
      alt: "School Infrastructure",
      title: "World-Class Facilities"
    },
    {
      src: "/lovable-uploads/69226f61-a530-4ccb-b140-7e3dde8b5205.png",
      alt: "Students Activities",
      title: "Student Life"
    },
    {
      src: "/lovable-uploads/958498e1-726d-4346-8392-cfc7908f2852.png",
      alt: "Academic Excellence",
      title: "Academic Achievement"
    },
    {
      src: "/lovable-uploads/cd7dc758-eb79-4f38-a043-26a5a9bca7d4.png",
      alt: "Awards and Recognition",
      title: "Awards & Recognition"
    }
  ];

  const schoolHighlights = [
    { icon: Users, text: "500+ Students", color: "text-green-400" },
    { icon: Award, text: "25+ Years Excellence", color: "text-yellow-400" },
    { icon: Globe, text: "International Standards", color: "text-purple-400" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - School Details */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Chanakya
                  <span className="block text-orange-400">International</span>
                  <span className="block">Academy</span>
                </h1>
                
                <div className="flex items-center space-x-2 text-blue-100">
                  <Globe className="w-5 h-5 text-blue-300" />
                  <p className="text-lg md:text-xl font-medium">Rampur Maniharan, Uttar Pradesh</p>
                </div>
                
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
                  Empowering minds with world-class education, innovative learning, and character building. 
                  Where excellence meets tradition in the heart of India.
                </p>
              </div>

              {/* School Highlights */}
              <div className="grid grid-cols-3 gap-4">
                {schoolHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                    <span className="text-white font-medium text-sm md:text-base">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20about%20admissions", "_blank")}
                >
                  Apply for Admission
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Explore Campus
                </Button>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative animate-fade-in">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <Carousel className="w-full" opts={{ align: "center", loop: true }}>
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative group">
                          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                              <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                              <div className="w-16 h-1 bg-orange-400 rounded-full"></div>
                            </div>
                          </div>
                          
                          {/* Decorative elements */}
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-80"></div>
                          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
                  <CarouselNext className="hidden md:flex -right-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
                </Carousel>
                
                {/* Floating stats card */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-900">25+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">500+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-900">95%</div>
                      <div className="text-sm text-gray-600">Success</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/80" />
      </div>
    </div>
  );
};
