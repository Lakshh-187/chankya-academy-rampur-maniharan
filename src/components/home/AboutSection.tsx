
export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excellence in Education at Rampur Maniharan
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Located in the serene town of Rampur Maniharan, Chanakya International Academy 
              offers a perfect blend of modern infrastructure and traditional Indian values. 
              Our state-of-the-art facilities combined with experienced faculty create an 
              environment where students thrive academically and personally.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">International standard curriculum with Indian cultural values</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">World-class infrastructure and learning facilities</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Holistic development through academics, sports, and arts</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/4639dc33-b996-46ff-be6a-59c11b58ab80.png"
              alt="School Campus"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/lovable-uploads/6df13610-406f-477d-a2ec-76366f8002f6.png"
              alt="School Building"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
