import { useState } from "react";
import { SEO } from "@/components/SEO";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "campus", name: "Campus" },
    { id: "events", name: "Events" },
    { id: "sports", name: "Sports" },
    { id: "academics", name: "Academics" }
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png",
      title: "Main Building",
      category: "campus",
      description: "Our state-of-the-art main academic building"
    },
    {
      src: "/lovable-uploads/4639dc33-b996-46ff-be6a-59c11b58ab80.png",
      title: "Campus View",
      category: "campus",
      description: "Beautiful campus surrounded by greenery"
    },
    {
      src: "/lovable-uploads/6df13610-406f-477d-a2ec-76366f8002f6.png",
      title: "Sports Complex",
      category: "campus",
      description: "Modern sports facilities for students"
    },
    {
      src: "/lovable-uploads/07149658-af3e-4508-a526-0f4b3afe2e5e.png",
      title: "Faculty Team",
      category: "academics",
      description: "Our dedicated team of educators"
    },
    {
      src: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png",
      title: "Achievement Ceremony",
      category: "events",
      description: "Celebrating student achievements and excellence"
    },
    {
      src: "/lovable-uploads/263ac7ec-cc2c-4965-9c82-711b76988292.png",
      title: "Sports Training",
      category: "sports",
      description: "Students engaged in physical training activities"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <>
      <SEO 
        title="Photo Gallery - Chanakya International Academy, Rampur Maniharan | CIARampur"
        description="Browse through our photo gallery showcasing campus life, events, sports activities, and academic achievements at Chanakya International Academy, Rampur Maniharan. See our beautiful campus and vibrant student life."
        keywords="Chanakya International Academy gallery, school photos Rampur Maniharan, campus images, student life, school events, sports activities, academic achievements"
        canonicalUrl="https://ciarampur.com/gallery"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Capturing memorable moments and showcasing the vibrant life at 
              Chanakya International Academy, Rampur Maniharan.
            </p>
          </div>
        </div>

        {/* Gallery Filter */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-purple-50 shadow-md"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover-scale"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Stats */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-lg shadow-lg p-6 hover-scale">
                <div className="text-4xl mb-4">📸</div>
                <div className="text-2xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-700">Photos Captured</div>
              </div>
              <div className="text-center bg-white rounded-lg shadow-lg p-6 hover-scale">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-2xl font-bold text-pink-600 mb-2">50+</div>
                <div className="text-gray-700">Events Organized</div>
              </div>
              <div className="text-center bg-white rounded-lg shadow-lg p-6 hover-scale">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-2xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-700">Achievements</div>
              </div>
              <div className="text-center bg-white rounded-lg shadow-lg p-6 hover-scale">
                <div className="text-4xl mb-4">😊</div>
                <div className="text-2xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-700">Happy Moments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-screen object-contain rounded-lg"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
