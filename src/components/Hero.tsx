import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    image: 'images/1.jpg',
    title: 'Authentic Premium Tea',
    description: 'Fresh from the fields of Assam, straight into your cup!',
  },
  {
    image: 'images/2.jpg',
    title: 'Premium Quality Assurance',
    description: 'Experience the finest tea leaves from misty plantations',
  },
  {
    image: 'images/3.jpg',
    title: 'Pure & Natural Ingredients',
    description: 'Handpicked and processed with traditional methods',
  },
  {
    image: 'images/4.jpg',
    title: 'Special Elaichi Chai',
    description: 'A perfect blend of premium tea with aromatic cardamom',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {slide.title}
              </h2>
              <p className="text-xl text-white mb-8">{slide.description}</p>
              <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}