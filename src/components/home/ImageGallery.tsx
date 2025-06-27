
export const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/07149658-af3e-4508-a526-0f4b3afe2e5e.png",
      alt: "Faculty and Staff",
      title: "Dedicated Faculty"
    },
    {
      src: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png",
      alt: "Student Achievement Ceremony",
      title: "Student Achievements"
    },
    {
      src: "/lovable-uploads/263ac7ec-cc2c-4965-9c82-711b76988292.png",
      alt: "Sports Activities",
      title: "Sports & Recreation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life at CIA, Rampur Maniharan
          </h2>
          <p className="text-lg text-gray-600">
            Capturing moments of learning, growth, and achievement at our campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg hover-scale"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
