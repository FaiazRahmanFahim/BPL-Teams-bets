import React from "react";
import bgShadow from "../../assets/bg-shadow.png";
import bannerImg from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="mt-5 w-full max-w-[1320px] mx-auto h-[520px] sm:h-[400px] md:h-[450px] lg:h-[520px] bg-black bg-no-repeat bg-cover bg-center rounded-2xl flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 space-y-3 sm:space-y-4 text-center"
      style={{ backgroundImage: `url(${bgShadow})` }}
    >
      <img src={bannerImg} alt="" />
      <h2 className="text-white font-bold text-2xl lg:text-4xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <h4 className="font-medium text-xl md:text-2xl text-gray-300">
        Beyond Boundaries Beyond Limits
      </h4>
      <button className="btn bg-[#e2f828]">Claim Free Credit</button>
    </div>
  );
};

export default Banner;
