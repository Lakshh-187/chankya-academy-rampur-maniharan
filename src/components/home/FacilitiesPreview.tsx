
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FacilitiesPreview = () => {
  const facilities = [
    {
      title: "Fully AC Classrooms",
      description: "Climate-controlled learning environments for optimal comfort",
      icon: "❄️"
    },
    {
      title: "Digital Smart Classes",
      description: "Interactive digital boards and modern teaching aids",
      icon: "💻"
    },
    {
      title: "Swimming Pool",
      description: "Olympic-size swimming pool for aquatic sports training",
      icon: "🏊"
    },
    {
      title: "Sports Playground",
      description: "Multi-sport facilities for physical development",
      icon: "⚽"
    },
    {
      title: "STEM Learning",
      description: "Science, Technology, Engineering, and Mathematics labs",
      icon: "🔬"
    },
    {
      title: "Day Boarding",
      description: "Extended learning with evening meals and classes",
      icon: "🏫"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art infrastructure designed to provide the best learning environment 
            for our students at Chanakya International Academy, Rampur Maniharan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow hover-scale"
            >
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/facilities">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore All Facilities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
