
export const NewsSection = () => {
  const news = [
    {
      title: "Annual Sports Day 2024",
      date: "March 15, 2024",
      excerpt: "Students showcased their athletic talents in our grand sports day celebration.",
      image: "/lovable-uploads/263ac7ec-cc2c-4965-9c82-711b76988292.png"
    },
    {
      title: "Science Exhibition Success",
      date: "February 28, 2024",
      excerpt: "Our students won multiple awards at the district science exhibition.",
      image: "/lovable-uploads/b8f3ac02-f970-4c9d-b9e7-0b02d8143813.png"
    },
    {
      title: "New STEM Lab Inauguration",
      date: "January 10, 2024",
      excerpt: "State-of-the-art STEM laboratory inaugurated to enhance practical learning.",
      image: "/lovable-uploads/56f0c772-334d-439a-8429-03b3dcec23e3.png"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Events
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Stay updated with the latest happenings at CIA, Rampur Maniharan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {news.map((item, index) => (
            <article 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-52 lg:h-48 object-cover"
              />
              <div className="p-4 lg:p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base line-clamp-3">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
