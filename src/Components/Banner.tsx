import { useEffect, useState } from "react";

function Banner() {
  const images = [
    "https://daryo.uz/cache/2019/06/5455734-680x454.jpg",
    "https://img1.advisor.travel/fs440x440px-Masjid_al_Haram_20.jpg",
    "https://i.pinimg.com/474x/38/59/7f/38597fdb438149003e4970e7e0d673fd.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[380px] h-[220px] mx-auto rounded-2xl overflow-hidden shadow-lg my-4 bg-black flex items-center justify-center">
      <img
        src={images[currentIndex]}
        alt="Slide"
        className="w-full  h-full object-center "
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
