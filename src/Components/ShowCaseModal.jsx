import { useState } from "react";

function ShowCaseModal({ project, setProject }) {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const images = project.data.showCaseImages;
  const shiftIndex = (shift) => {
    if (shift < 0) {
      setCurrImgIndex(images.length - 1);
      return;
    }
    setCurrImgIndex(shift % images.length);
  };
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.55)] z-200 h-[100dvh]">
      <i
        onClick={() => setProject({ isVisible: false, data: null })}
        className="fa-solid fa-circle-xmark absolute right-5 top-5 text-2xl text-white cursor-pointer"
      ></i>
      <i
        onClick={() => shiftIndex(currImgIndex + 1)}
        className="fa-solid fa-circle-chevron-right absolute right-5 top-[50%] text-red text-4xl transform -translate-y-1/2 cursor-pointer"
      ></i>
      <i
        onClick={() => shiftIndex(currImgIndex - 1)}
        className="fa-solid fa-circle-chevron-left absolute left-5 top-[50%] text-red text-4xl transform -translate-y-1/2 cursor-pointer"
      ></i>
      <div className="absolute top-[50%] right-[50%] transform -translate-y-1/2 translate-x-1/2">
        {images[currImgIndex].endsWith(".mp4") ? (
          <video
            className="max-w-[70vw] max-h-[80dvh] object-contain mx-auto"
            src={`/assets/${images[currImgIndex]}`}
            controls
            autoPlay
            loop
          />
        ) : (
          <img
            className="max-w-[70vw] max-h-[80dvh] object-contain mx-auto"
            src={`/assets/${images[currImgIndex]}`}
            alt={`Showcase ${currImgIndex}`}
          />
        )}
        <div className="w-full flex justify-center gap-2 my-2">
          {images.map((image, index) => {
            return (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer inline-block ${
                  index === currImgIndex ? "bg-black" : "bg-bgColor"
                }`}
                onClick={() => shiftIndex(index)}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowCaseModal;
