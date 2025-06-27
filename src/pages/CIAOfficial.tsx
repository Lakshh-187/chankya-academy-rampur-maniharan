
import { Button } from "@/components/ui/button";
import { Download, Phone, Mail, MessageSquare } from "lucide-react";

export default function CIAOfficial() {
  const documents = [
    { name: "Application Form 2024-25", type: "PDF", size: "2.5 MB" },
    { name: "School Brochure", type: "PDF", size: "15.8 MB" },
    { name: "Fee Structure 2024-25", type: "PDF", size: "1.2 MB" },
    { name: "Curriculum Overview", type: "PDF", size: "8.3 MB" },
    { name: "Syllabus - Primary", type: "PDF", size: "3.7 MB" },
    { name: "Syllabus - Secondary", type: "PDF", size: "4.1 MB" },
    { name: "Transport Routes", type: "PDF", size: "900 KB" },
    { name: "Uniform Guidelines", type: "PDF", size: "1.8 MB" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CIA Official Portal
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Download official documents, forms, and get all the information you need 
            about Chanakya International Academy, Rampur Maniharan.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Downloads Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Official Documents</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="bg-red-100 p-2 rounded">
                          <Download className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                          <p className="text-sm text-gray-600">{doc.type} • {doc.size}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Forms Section */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open("https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20about%20admissions", "_blank")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp Inquiry
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open("tel:+919876543210", "_blank")}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open("mailto:info@chanakyaacademy.edu", "_blank")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Application Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-sm text-gray-700">Download application form</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-sm text-gray-700">Fill completely and attach documents</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-sm text-gray-700">Submit at school office</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <p className="text-sm text-gray-700">Attend entrance test</p>
                  </div>
                </div>
              </div>

              {/* Help Desk */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Help Desk</h3>
                <p className="text-gray-700 mb-4">
                  For any assistance regarding admissions, documents, or general inquiries, 
                  contact our help desk.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Timing:</strong> 9:00 AM - 5:00 PM (Mon-Sat)</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Email:</strong> helpdesk@chanakyaacademy.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Structure Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fee Structure 2024-25</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Class</th>
                    <th className="px-6 py-4 text-left">Tuition Fee (Annual)</th>
                    <th className="px-6 py-4 text-left">Development Fee</th>
                    <th className="px-6 py-4 text-left">Total Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Nursery - UKG</td>
                    <td className="px-6 py-4">₹ 45,000</td>
                    <td className="px-6 py-4">₹ 15,000</td>
                    <td className="px-6 py-4 font-semibold">₹ 60,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Class I - V</td>
                    <td className="px-6 py-4">₹ 55,000</td>
                    <td className="px-6 py-4">₹ 20,000</td>
                    <td className="px-6 py-4 font-semibold">₹ 75,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Class VI - VIII</td>
                    <td className="px-6 py-4">₹ 65,000</td>
                    <td className="px-6 py-4">₹ 25,000</td>
                    <td className="px-6 py-4 font-semibold">₹ 90,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Class IX - X</td>
                    <td className="px-6 py-4">₹ 75,000</td>
                    <td className="px-6 py-4">₹ 30,000</td>
                    <td className="px-6 py-4 font-semibold">₹ 1,05,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Class XI - XII</td>
                    <td className="px-6 py-4">₹ 85,000</td>
                    <td className="px-6 py-4">₹ 35,000</td>
                    <td className="px-6 py-4 font-semibold">₹ 1,20,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              *Additional charges for transport, meals, and extra-curricular activities apply separately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
