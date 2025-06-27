
export default function Management() {
  const management = [
    {
      name: "Dr. Rajesh Kumar Sharma",
      position: "Chairman",
      education: "Ph.D. in Education, M.A. in Psychology",
      experience: "25+ years in educational leadership",
      message: "Education is the foundation of a progressive society. At CIA, we nurture minds to build tomorrow's leaders.",
      image: "/lovable-uploads/07149658-af3e-4508-a526-0f4b3afe2e5e.png"
    },
    {
      name: "Mrs. Sunita Verma",
      position: "Principal",
      education: "M.Ed., B.Ed., M.A. in English",
      experience: "20+ years in academic administration",
      message: "Every child is unique and has unlimited potential. Our role is to discover and nurture that potential.",
      image: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png"
    }
  ];

  const staff = [
    { department: "Mathematics", teachers: 8, head: "Dr. Amit Singh" },
    { department: "Science", teachers: 12, head: "Mrs. Priya Gupta" },
    { department: "English", teachers: 6, head: "Mr. Rohit Sharma" },
    { department: "Social Studies", teachers: 5, head: "Mrs. Neha Verma" },
    { department: "Computer Science", teachers: 4, head: "Mr. Vikash Kumar" },
    { department: "Physical Education", teachers: 3, head: "Coach Rajesh" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Management & Staff
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Meet the dedicated leadership and faculty team at Chanakya International Academy, 
            Rampur Maniharan, committed to educational excellence.
          </p>
        </div>
      </div>

      {/* Leadership Messages */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Leadership Messages</h2>
          
          <div className="space-y-16">
            {management.map((leader, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{leader.position}</p>
                    <div className="mb-6">
                      <p className="text-gray-700 mb-2"><strong>Education:</strong> {leader.education}</p>
                      <p className="text-gray-700"><strong>Experience:</strong> {leader.experience}</p>
                    </div>
                    <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-4">
                      "{leader.message}"
                    </blockquote>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Departments */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Faculty Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 hover-scale">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{dept.department}</h3>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Department Head:</strong> {dept.head}</p>
                  <p className="text-gray-700"><strong>Faculty Members:</strong> {dept.teachers}</p>
                </div>
                <div className="mt-4 bg-blue-100 p-3 rounded">
                  <p className="text-sm text-blue-800">Experienced educators committed to academic excellence</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Classroom Activities Gallery */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Classroom Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png"
                alt="Achievement Ceremony"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Achievement Ceremony</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/263ac7ec-cc2c-4965-9c82-711b76988292.png"
                alt="Sports Training"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Sports Training</h4>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/07149658-af3e-4508-a526-0f4b3afe2e5e.png"
                alt="Faculty Team"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Faculty Team</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Qualified Teachers</div>
            </div>
            <div className="text-center bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">15:1</div>
              <div className="text-gray-700">Student-Teacher Ratio</div>
            </div>
            <div className="text-center bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700">Qualified Faculty</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
