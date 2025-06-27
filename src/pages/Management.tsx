
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Management() {
  const management = [
    {
      name: "Mr. Dharmendra Tomar",
      position: "Managing Director",
      education: "M.A., B.Ed., Educational Leadership",
      experience: "25+ years in educational administration",
      message: "Education is the foundation of a progressive society. At CIA, we nurture minds to build tomorrow's leaders.",
      image: "/lovable-uploads/07149658-af3e-4508-a526-0f4b3afe2e5e.png"
    },
    {
      name: "Mr. Lavish Tomar",
      position: "Director",
      education: "M.Ed., B.Ed., Management Studies",
      experience: "20+ years in academic administration",
      message: "Every child is unique and has unlimited potential. Our role is to discover and nurture that potential.",
      image: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png"
    },
    {
      name: "Mrs. Neha Pundir",
      position: "Principal",
      education: "M.Ed., B.Ed., M.A. in Education",
      experience: "18+ years in school administration",
      message: "Quality education with moral values is our commitment to every student and parent.",
      image: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png"
    }
  ];

  const staffData = [
    { srNo: 1, name: "Mr. Dharmendra Tomar", fatherName: "Mr. Mangpal Singh", designation: "Managing Director" },
    { srNo: 2, name: "Mr. Lavish Tomar", fatherName: "Mr. Dharmendra Tomar", designation: "Director" },
    { srNo: 3, name: "Mrs. Savita Choudhary", fatherName: "Mr. Dharmendra Tomar", designation: "Manager" },
    { srNo: 4, name: "Mrs. Neha Pundir", fatherName: "", designation: "Principal" },
    { srNo: 5, name: "Mrs. Hemlata", fatherName: "Mr. Rajendra Prashad", designation: "Vice Principal" },
    { srNo: 6, name: "Mr. Mayank Singh Pundir", fatherName: "Mr. Rajesh Kumar", designation: "Admin Head" },
    { srNo: 7, name: "Mr. Vikas Kumar", fatherName: "Mr. Pappu Singh", designation: "(PT) TGT" },
    { srNo: 8, name: "Mrs. Parol Kapoor", fatherName: "Mr. Sudheer Kapoor", designation: "PRT" },
    { srNo: 9, name: "Mrs. Reena", fatherName: "Mr. Praveen Kumar Saini", designation: "PRT" },
    { srNo: 10, name: "Mrs. Nirmal", fatherName: "Mr. Subhash Chander", designation: "PRT" },
    { srNo: 11, name: "Mrs. Manju Tyagi", fatherName: "Mr. Mohit Tyagi", designation: "PRT" },
    { srNo: 12, name: "Km. Pinki Rani", fatherName: "Late Kurdi", designation: "TGT" },
    { srNo: 13, name: "Miss. Saloni Saini", fatherName: "Late Jitendra Kumar", designation: "TGT" },
    { srNo: 14, name: "Miss. Deepika Kapil", fatherName: "Mr. Arun Kapil", designation: "TGT" },
    { srNo: 15, name: "Miss. Vidhi Jain", fatherName: "Mr. Ramesh Kumar Jain", designation: "TGT" },
    { srNo: 16, name: "Mr. Shwetank Sharma", fatherName: "Mr. Kamlesh Sharma", designation: "TGT" }
  ];

  const departments = [
    { department: "Mathematics", teachers: 3, head: "Mr. Vikas Kumar" },
    { department: "Science", teachers: 4, head: "Mrs. Deepika Kapil" },
    { department: "English", teachers: 3, head: "Miss. Saloni Saini" },
    { department: "Social Studies", teachers: 2, head: "Mr. Shwetank Sharma" },
    { department: "Primary Section", teachers: 4, head: "Mrs. Hemlata (Vice Principal)" },
    { department: "Administration", teachers: 3, head: "Mr. Mayank Singh Pundir" }
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

      {/* Official Staff Data Table */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Official Staff Data</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold text-center">Chanakya International Academy</h3>
              <p className="text-center text-blue-100">Delhi Road, Rampur Maniharan, Saharanpur (247451)</p>
              <p className="text-center text-blue-100 font-semibold">School Staff Data</p>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">S. No.</TableHead>
                  <TableHead className="text-center font-bold">Staff Name</TableHead>
                  <TableHead className="text-center font-bold">Father/Husband Name</TableHead>
                  <TableHead className="text-center font-bold">Designation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffData.map((staff) => (
                  <TableRow key={staff.srNo}>
                    <TableCell className="text-center">{staff.srNo}</TableCell>
                    <TableCell className="text-center">{staff.name}</TableCell>
                    <TableCell className="text-center">{staff.fatherName}</TableCell>
                    <TableCell className="text-center font-semibold">{staff.designation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Faculty Departments */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Faculty Departments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
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
