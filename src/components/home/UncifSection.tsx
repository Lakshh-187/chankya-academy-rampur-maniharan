
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, BookOpen, Users } from "lucide-react";

export const UncifSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            UNCIF Certified Programs
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Empowering students with internationally recognized certifications through 
            the United Nations Children's International Foundation programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <BookOpen className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Global Curriculum</h3>
            <p className="text-blue-100">International standard educational programs</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Award className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Certified Excellence</h3>
            <p className="text-blue-100">UN-backed certification for quality education</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Student Development</h3>
            <p className="text-blue-100">Holistic growth and skill development</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            onClick={() => window.open("https://uncif.uniford.org/", "_blank")}
          >
            Explore UNCIF Programs
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
