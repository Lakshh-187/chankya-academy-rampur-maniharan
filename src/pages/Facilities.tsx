import { SEO } from "@/components/SEO";

export default function Facilities() {
  const facilities = [
    {
      title: "Fully AC Classrooms",
      description: "Climate-controlled learning environments with modern furniture and optimal lighting for comfortable studying throughout the year.",
      features: ["Central air conditioning", "Ergonomic furniture", "Natural lighting", "Smart boards"],
      image: "/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png"
    },
    {
      title: "Digital Smart Classes",
      description: "Interactive digital boards and multimedia learning systems that make education engaging and effective.",
      features: ["Interactive whiteboards", "Multimedia projectors", "Audio systems", "Digital content library"],
      image: "/lovable-uploads/4639dc33-b996-46ff-be6a-59c11b58ab80.png"
    },
    {
      title: "Swimming Pool",
      description: "Olympic-standard swimming pool with proper safety measures and professional training facilities.",
      features: ["Olympic size pool", "Safety equipment", "Trained lifeguards", "Swimming lessons"],
      image: "/lovable-uploads/6df13610-406f-477d-a2ec-76366f8002f6.png"
    },
    {
      title: "Sports Playground",
      description: "Multi-sport facilities including cricket, football, basketball, and athletics tracks for comprehensive physical development.",
      features: ["Cricket ground", "Football field", "Basketball court", "Athletics track"],
      image: "/lovable-uploads/263ac7ec-cc2c-4965-9c82-711b76988292.png"
    },
    {
      title: "STEM Learning Labs",
      description: "State-of-the-art Science, Technology, Engineering, and Mathematics laboratories for hands-on learning.",
      features: ["Physics lab", "Chemistry lab", "Biology lab", "Computer lab"],
      image: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png"
    },
    {
      title: "Day Boarding Facilities",
      description: "Extended learning environment with evening meals, study sessions, and recreational activities.",
      features: ["Evening meals", "Study sessions", "Recreational activities", "Transport facility"],
      image: "/lovable-uploads/07149658-af3e-4508-a526-0f4b3afe2e5e.png"
    }
  ];

  return (
    <>
      <SEO 
        title="World-Class Facilities - Chanakya International Academy, Rampur Maniharan | CIARampur"
        description="Explore state-of-the-art facilities at Chanakya International Academy, Rampur Maniharan - AC classrooms, smart classes, swimming pool, sports grounds, STEM labs, and day boarding facilities for holistic education."
        keywords="school facilities Rampur Maniharan, AC classrooms, smart classes, swimming pool school, sports facilities, STEM labs, day boarding, Chanakya International Academy facilities"
        canonicalUrl="https://ciarampur.com/facilities"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              World-Class Facilities
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              At Chanakya International Academy, Rampur Maniharan, we provide state-of-the-art 
              infrastructure to ensure the best learning environment for our students.
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {facilities.map((facility, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{facility.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Additional Learning Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">International Curriculum</h3>
                <p className="text-gray-600 text-sm">Global standard education with local values</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Practical Learning</h3>
                <p className="text-gray-600 text-sm">Hands-on experience in all subjects</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovative Learning</h3>
                <p className="text-gray-600 text-sm">AI and robotics integration</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Evening Meals</h3>
                <p className="text-gray-600 text-sm">Nutritious meals and extended learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
