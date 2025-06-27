
export const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Baba Akhand Bharat Trust
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Established under the auspices of Baba Akhand Bharat Trust, Chanakya International Academy 
              stands as a beacon of educational excellence, committed to nurturing young minds with 
              traditional values and modern education methodologies.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2020</div>
                <div className="text-gray-600">Established</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Faculty Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
