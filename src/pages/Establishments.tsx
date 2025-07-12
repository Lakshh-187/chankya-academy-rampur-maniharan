import { SEO } from "@/components/SEO";

export default function Establishments() {
  const futureProjects = [
    {
      title: "Boarding Infrastructure",
      description: "State-of-the-art residential facilities for students",
      timeline: "2025-2026",
      features: ["Modern dormitories", "24/7 security", "Recreation areas", "Study halls"],
      status: "Planning Phase"
    },
    {
      title: "Student Hostels",
      description: "Comfortable living spaces with all modern amenities",
      timeline: "2025-2026",
      features: ["AC rooms", "Mess facilities", "Common areas", "Sports facilities"],
      status: "Design Phase"
    },
    {
      title: "AI & Robotics Labs",
      description: "Cutting-edge technology laboratories",
      timeline: "2024-2025",
      features: ["AI learning modules", "Robotics kits", "Programming stations", "3D printing"],
      status: "Under Construction"
    },
    {
      title: "Harvard Scholars Coding Program",
      description: "Elite coding curriculum designed by Harvard scholars",
      timeline: "2024",
      features: ["Advanced algorithms", "Software development", "AI programming", "Industry projects"],
      status: "Ready to Launch"
    }
  ];

  const clubs = [
    { name: "Science Club", description: "Experimental learning and science fairs" },
    { name: "Robotics Club", description: "Building and programming robots" },
    { name: "Coding Club", description: "Programming and software development" },
    { name: "Environment Club", description: "Sustainability and eco-friendly initiatives" },
    { name: "Literature Club", description: "Creative writing and reading activities" },
    { name: "Drama Club", description: "Theater and performing arts" },
    { name: "Music Club", description: "Instrumental and vocal music training" },
    { name: "Sports Club", description: "Various sports and athletic activities" }
  ];

  return (
    <>
      <SEO 
        title="Future Establishments & Projects - Chanakya International Academy, Rampur Maniharan | CIARampur"
        description="Discover upcoming projects and future establishments at Chanakya International Academy, Rampur Maniharan - boarding facilities, AI labs, robotics programs, clubs & societies for comprehensive education."
        keywords="future projects CIA Rampur, boarding facilities, AI robotics labs, Harvard coding program, school clubs societies, upcoming developments Rampur Maniharan"
        canonicalUrl="https://ciarampur.com/establishments"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Future Establishments
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Expanding horizons with world-class infrastructure and innovative programs 
              at Chanakya International Academy, Rampur Maniharan.
            </p>
          </div>
        </div>

        {/* Future Projects */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {futureProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover-scale">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Ready to Launch" ? "bg-green-100 text-green-800" :
                      project.status === "Under Construction" ? "bg-yellow-100 text-yellow-800" :
                      project.status === "Design Phase" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-sm text-purple-600 font-semibold mb-4">Timeline: {project.timeline}</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Partnerships */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Strategic Partnerships</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">University Partnerships</h3>
                  <p className="text-gray-600">Collaborations with top universities for advanced programs and student exchange.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💻</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Tech Giants</h3>
                  <p className="text-gray-600">Google and Microsoft backed AI models and educational technology integration.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Research Institutes</h3>
                  <p className="text-gray-600">Partnerships with leading research institutions for STEM education excellence.</p>
                </div>
              </div>
            </div>

            {/* Clubs and Societies */}
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Clubs & Societies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clubs.map((club, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover-scale">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{club.name}</h3>
                    <p className="text-gray-600 text-sm">{club.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovation Center */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Innovation & Research Center</h2>
                <p className="text-lg mb-6">
                  A dedicated space for innovation, research, and development activities 
                  where students and faculty collaborate on cutting-edge projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Research Labs</h4>
                    <p className="text-blue-100">Advanced research facilities for student and faculty projects.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Innovation Hub</h4>
                    <p className="text-blue-100">Collaborative workspace for creative problem-solving.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Tech Incubator</h4>
                    <p className="text-blue-100">Supporting student startups and tech ventures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
