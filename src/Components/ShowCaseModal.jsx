import { useState, useRef } from "react";

function ShowCaseModal({ project, setProject }) {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const images = project.data.showCaseImages;
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const shiftIndex = (shift) => {
    if (shift < 0) {
      setCurrImgIndex(images.length - 1);
      return;
    }
    setCurrImgIndex(shift % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; 
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        shiftIndex(currImgIndex + 1);
      } else {
        shiftIndex((currImgIndex - 1 + images.length) % images.length);
      }
    }
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.55)] z-200 h-[100dvh]">
      <i
        onClick={() => setProject({ isVisible: false, data: null })}
        className="fa-solid fa-circle-xmark absolute right-5 top-5 text-2xl text-white cursor-pointer"
      ></i>
      <i
        onClick={() => shiftIndex(currImgIndex + 1)}
        className="none md:inline-block fa-solid fa-circle-chevron-right absolute right-5 top-[50%] text-red text-4xl transform -translate-y-1/2 cursor-pointer"
      ></i>
      <i
        onClick={() => shiftIndex(currImgIndex - 1)}
        className="none md:inline-block fa-solid fa-circle-chevron-left absolute left-5 top-[50%] text-red text-4xl transform -translate-y-1/2 cursor-pointer"
      ></i>

      <div
        className="w-[100vw] md:w-auto absolute top-[50%] right-[50%] transform -translate-y-1/2 translate-x-1/2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images[currImgIndex].endsWith(".mp4") ? (
          <video
            className="max-w-[100vw] md:max-w-[70vw] max-h-[80dvh] object-contain mx-auto"
            src={`/assets/${images[currImgIndex]}`}
            controls
            autoPlay
            loop
          />
        ) : (
          <img
            className="w-[100vw] md:max-w-[70vw] max-h-[80dvh] object-contain mx-auto"
            src={`/assets/${images[currImgIndex]}`}
            alt={`Showcase ${currImgIndex}`}
          />
        )}

        <div className="w-full flex justify-center gap-2 my-2">
          {images.map((image, index) => {
            return image.endsWith(".mp4") ? (
              <video
                key={index}
                className={`max-w-13 h-10 rounded-sm cursor-pointer object-cover inline-block filter ${
                  index === currImgIndex ? "brightness-100" : "brightness-50"
                }`}
                onClick={() => shiftIndex(index)}
                src={`/assets/${image}`}
              ></video>
            ) : (
              <img
                key={index}
                className={`max-w-13 h-10 rounded-sm cursor-pointer object-cover inline-block filter ${
                  index === currImgIndex ? "brightness-100" : "brightness-70"
                }`}
                onClick={() => shiftIndex(index)}
                src={`/assets/${image}`}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowCaseModal;
