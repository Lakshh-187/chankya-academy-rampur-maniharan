
import { GraduationCap, Users, Award, BookOpen, Globe, Trophy } from "lucide-react";

export const InstitutesCluster = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Excellence in Education
                <span className="block text-blue-600">Across All Levels</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From foundational learning to advanced academics, our comprehensive educational 
                ecosystem nurtures students at every stage of their journey. Experience world-class 
                facilities, innovative teaching methods, and holistic development programs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Students</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Faculty</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Years Legacy</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Results</div>
              </div>
            </div>
          </div>

          {/* Right Side - Images Cluster */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-96 lg:h-[500px]">
              {/* Main Large Image */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png"
                  alt="Chanakya International Academy Main Building"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Main Campus</h3>
                  <p className="text-blue-100">State-of-the-art Infrastructure</p>
                </div>
              </div>

              {/* Smaller Images */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/lovable-uploads/69226f61-a530-4ccb-b140-7e3dde8b5205.png"
                  alt="Laboratory Facilities"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-sm font-semibold">Smart Labs</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/lovable-uploads/cf2bb5ae-b20d-45d0-933f-912da5c10d55.png"
                  alt="Sports Complex"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-sm font-semibold">Sports Arena</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/lovable-uploads/958498e1-726d-4346-8392-cfc7908f2852.png"
                  alt="Library"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-sm font-semibold">Digital Library</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/lovable-uploads/cd7dc758-eb79-4f38-a043-26a5a9bca7d4.png"
                  alt="Arts & Culture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-sm font-semibold">Arts Center</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="absolute top-1/3 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
              <GraduationCap className="h-6 w-6 text-blue-500" />
            </div>
            <div className="absolute bottom-16 -right-2 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1000">
              <Award className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
