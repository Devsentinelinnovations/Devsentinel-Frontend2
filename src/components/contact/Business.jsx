import React from "react";
import misc from "../../assets/misc.png";
import hero from "../../assets/hero.png";
const Business = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:h-[350px] mt-10">
      <div className="w-full md:w-2/3 flex flex-col items-start justify-between px-5 pt-5 pb-3 h-full bg-[#F5F5F5] rounded-2xl shadow-lg transition-all">
        <img src={misc} alt="Feature icon" className="w-12 h-12" />
        <div className="flex flex-col items-start mt-8 text-left">
          <h2 className="text-black text-xl font-bold mb-2">
            For Businesses of all sizes
          </h2>
          <p className="text-black text-sm font-semibold">
            Whether you're a startup founder looking to turn your ideas into
            reality, a small business owner looking to establish your presence
            online or a big enterprise looking to fix things in your application
            or train your staff, we're here for you.
          </p>
          <div className="mt-5">
            <button className="px-8 py-3 bg-btn1 text-white rounded-lg hover:bg-btn1/85 duration-300 transition-colors font-semibold cursor-pointer">
              Partner with us today
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 h-[350px]">
        <img
          src={hero}
          alt="student and teacher"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Business;
