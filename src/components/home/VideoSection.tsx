
import { Button } from "@/components/ui/button";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Our Campus
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Take a virtual tour of Chanakya International Academy, Rampur Maniharan, 
            and see our world-class facilities in action.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center h-full">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
