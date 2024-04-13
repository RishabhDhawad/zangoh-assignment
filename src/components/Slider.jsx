import React, { useEffect, useState } from "react";

const Slider = () => {
  const images = [
    { url: "src/assets/firstImage.png" },
    { url: "src/assets/secondImage.png" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (current === 0) {
        setCurrent(1);
      } else {
        setCurrent(0);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [current]);

  return (
    <div className=" lg:w-1/2 w-full lg:min-h-[100vh] min-h-[30vh] absolute top-0 right-0">
      <div
        className=" h-[100vh] transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[current].url})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* text content */}
      <div className=" absolute top-[390px] left-20">
        <div className=" max-w-[45%] flex flex-col gap-5">
          <h1 className=" text-[#FFFFFF] text-[18px] font-semibold">
            Type Text
          </h1>
          <p className=" text-[#FFE8DF] text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className=" flex items-center gap-3">
            {images.map((dot, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={` transition-all duration-1000 w-[15px] h-[15px] bg-[#FEE7DE] rounded-full cursor-pointer ${
                  index === current && "opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;