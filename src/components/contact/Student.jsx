import React from "react";
import hero2 from "../../assets/hero2.png";
import misc from "../../assets/misc.png";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 md:h-[350px]">
      <div className="w-full md:w-1/3 h-[350px]">
        <img
          src={hero2}
          alt="student and teacher"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-2/3 flex flex-col items-start justify-between px-5 pt-5 pb-3 h-full bg-[#F5F5F5] rounded-2xl shadow-lg transition-all">
        <img src={misc} alt="Feature icon" className="w-12 h-12" />
        <div className="flex flex-col items-start mt-8 text-left">
          <h2 className="text-black text-xl font-bold mb-2">For Students</h2>
          <p className="text-black text-sm font-semibold">
            Whether you're looking to start a new career in tech or upskill your
            level in tech, we're here for you, click the button below, select
            the course suitable for you and fill the google form course detail
            page
          </p>
          <div className="mt-5">
            <Link to="/course" onClick={() => window.scrollTo(0, 0)}>
            <button className="px-8 py-3 bg-btn1 text-white rounded-lg hover:bg-btn1/85 duration-300 transition-colors cursor-pointer font-semibold">
              Start learning today
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
