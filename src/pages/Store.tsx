
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Download, Book, Shirt } from "lucide-react";

export default function Store() {
  const [activeTab, setActiveTab] = useState("physical");

  const physicalItems = [
    {
      name: "School Uniform (Set)",
      price: "₹ 1,200",
      description: "Complete school uniform with shirt, pants/skirt, tie, and belt",
      image: "/lovable-uploads/07149658-af3e-4508-a526-0f4b3afe2e5e.png"
    },
    {
      name: "Mathematics Textbook",
      price: "₹ 450",
      description: "CBSE approved mathematics textbook for class X",
      image: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png"
    },
    {
      name: "Science Lab Manual",
      price: "₹ 350",
      description: "Comprehensive science lab manual with experiments",
      image: "/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png"
    },
    {
      name: "Sports Kit",
      price: "₹ 800",
      description: "Complete sports uniform and equipment set",
      image: "/lovable-uploads/263ac7ec-cc2c-4965-9c82-711b76988292.png"
    }
  ];

  const digitalItems = [
    {
      name: "Class Notes - Mathematics",
      type: "PDF",
      size: "15.2 MB",
      description: "Comprehensive mathematics notes for all chapters"
    },
    {
      name: "Science Practicals Guide",
      type: "PDF",
      size: "8.7 MB",
      description: "Step-by-step guide for science practical experiments"
    },
    {
      name: "English Literature Summary",
      type: "PDF",
      size: "12.3 MB",
      description: "Complete summary of prescribed English literature"
    },
    {
      name: "Sample Question Papers",
      type: "PDF",
      size: "5.4 MB",
      description: "Previous year question papers and mock tests"
    },
    {
      name: "Study Timetable Template",
      type: "PDF",
      size: "2.1 MB",
      description: "Effective study schedule template for students"
    },
    {
      name: "Project Guidelines",
      type: "PDF",
      size: "6.8 MB",
      description: "Guidelines for science and social studies projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CIA Store
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Your one-stop destination for school essentials and digital resources 
            at Chanakya International Academy, Rampur Maniharan.
          </p>
        </div>
      </div>

      {/* Store Navigation */}
      <div className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setActiveTab("physical")}
              variant={activeTab === "physical" ? "default" : "outline"}
              className="px-8 py-3"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Physical Store
            </Button>
            <Button
              onClick={() => setActiveTab("digital")}
              variant={activeTab === "digital" ? "default" : "outline"}
              className="px-8 py-3"
            >
              <Download className="mr-2 h-4 w-4" />
              Digital Store
            </Button>
          </div>
        </div>
      </div>

      {/* Store Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Physical Store */}
          {activeTab === "physical" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Physical Store</h2>
                <p className="text-lg text-gray-600">
                  Purchase school uniforms, books, and other essential items
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {physicalItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-green-600">{item.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => window.open("https://wa.me/919876543210?text=I%20want%20to%20purchase%20" + item.name, "_blank")}
                        >
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Shirt className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Uniforms & Accessories</h3>
                  <p className="text-gray-600">Complete school uniform sets, ties, belts, and accessories</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Book className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Books & Stationery</h3>
                  <p className="text-gray-600">Textbooks, notebooks, and all school stationery items</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <ShoppingCart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sports & Equipment</h3>
                  <p className="text-gray-600">Sports uniforms, equipment, and activity materials</p>
                </div>
              </div>
            </div>
          )}

          {/* Digital Store */}
          {activeTab === "digital" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Store</h2>
                <p className="text-lg text-gray-600">
                  Free downloadable resources for students and parents
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {digitalItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover-scale">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Download className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">FREE</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{item.type}</span>
                      <span>{item.size}</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Free
                    </Button>
                  </div>
                ))}
              </div>

              {/* Digital Resources Info */}
              <div className="mt-16 bg-blue-50 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Educational Resources</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Access a wealth of educational materials including study notes, practice papers, 
                    project guidelines, and more - all completely free for CIA students and parents.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-gray-700">Study Materials</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-2">100+</div>
                      <div className="text-gray-700">Practice Papers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
                      <div className="text-gray-700">Access Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
