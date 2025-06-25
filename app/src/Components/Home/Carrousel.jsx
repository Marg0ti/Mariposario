import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    content: <h2 className="text-4xl font-bold text-white drop-shadow-lg ">¡Dónde los colores vuelan!</h2>,
    bg: "url('/images/subHeader-home.jpg')" 
  },
  {
    id: 2,
    content: (
      <button className="bg-buttonBackground text-buttonText font-semibold px-6 py-3 rounded-sm shadow hover:bg-buttonBackgroundHover hover:text-buttonTextHover transition">
        Compra tus entradas
      </button>
    ),
    bg: "url('/images/subHeader-home2.jpg')" 
  },
  {
    id: 3,
    content: (
      <div className="text-center text-white space-y-2">
        <h3 className="text-2xl font-semibold">Explora, aprende y maravíllate</h3>
        <p className="text-md">Sumérgete en un ecosistema lleno de vida y descubre las maravillas de la naturaleza.</p>
      </div>
    ),
    bg: "url('/images/subHeader-tickets.jpg')" 
  },
];

export default function Carrousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: slide.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/40 p-6 rounded-xl">{slide.content}</div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
