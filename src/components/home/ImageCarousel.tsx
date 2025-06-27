
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/cf2bb5ae-b20d-45d0-933f-912da5c10d55.png",
      alt: "Chanakya International Academy Campus Building",
      title: "Modern Campus Infrastructure"
    },
    {
      src: "/lovable-uploads/69226f61-a530-4ccb-b140-7e3dde8b5205.png",
      alt: "Students playing sports on playground",
      title: "Sports & Physical Activities"
    },
    {
      src: "/lovable-uploads/958498e1-726d-4346-8392-cfc7908f2852.png",
      alt: "Students with medals and certificates",
      title: "Academic Excellence & Achievements"
    },
    {
      src: "/lovable-uploads/cd7dc758-eb79-4f38-a043-26a5a9bca7d4.png",
      alt: "Award ceremony with students",
      title: "Recognition & Awards"
    },
    {
      src: "/lovable-uploads/cf66943e-a9dc-4d46-b548-27830d47ee55.png",
      alt: "Independence Day celebration with management",
      title: "Cultural Events & Celebrations"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience CIA Excellence
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the vibrant life at Chanakya International Academy through our campus moments
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                          <div className="w-12 h-1 bg-blue-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
