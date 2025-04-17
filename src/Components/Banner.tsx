import { useEffect, useState } from "react";

function Banner() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsOznHaVMdApckt2UI3ATtr7yOegvgkLKjVVV37X0Z9qsL6dZtbfpvSiT_8u_2z19Vs0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hdn5GDYIw-aO6bw14Cpo8aduzYAD6fe5aQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrc8hdDanWgmHN-oOsqqnYsh4z7Ca2jpxQSHjR347JUzGMeavgSc13BPrrGJaOkzL4T8&usqp=CAU",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg mx-auto w-[380px] my-4">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            } transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
