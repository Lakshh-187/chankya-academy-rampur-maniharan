
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CertificateSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <Award className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recognition & Achievement
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Chanakya International Academy is proudly recognized as a Certified Institution 
            committed to Practical, Global, and Human-Centric Education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UNCIF Certified Institution</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <Award className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Recognized for adopting 7-Pillar Curriculum & Transformation Model</span>
                </p>
                <p className="flex items-start">
                  <Award className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Certified by Uniford National Council Of Institutes & Frontliners</span>
                </p>
                <p className="flex items-start">
                  <Award className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Committed to practical, global, and human-centric education</span>
                </p>
                <p className="flex items-start">
                  <Award className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Part of USEC Scholar Council network</span>
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Certificate Date: 25 June 2025</p>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                  onClick={() => window.open("https://uncif.uniford.org/", "_blank")}
                >
                  View Certification Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/0a7b0d91-1ece-4a7f-9a7c-a89a5fd1933c.png"
                alt="UNCIF Certificate of Achievement - Chanakya International Academy"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">2025</div>
            <div className="text-gray-700">Certified Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">7-Pillar</div>
            <div className="text-gray-700">Curriculum Model</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">UNCIF</div>
            <div className="text-gray-700">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">Global</div>
            <div className="text-gray-700">Standards</div>
          </div>
        </div>
      </div>
    </section>
  );
};
