import React from "react";
import misc from "../../assets/misc.png";

const Values = () => {
  const values = [
    {
      title: "People First",
      description: "We listen, we care, we support.",
    },
    {
      title: "Growth Mindset",
      description: "Every project and every course is a learning opportunity.",
    },
    {
      title: "Honest work",
      description: "No overpromising, just real results.",
    },
    {
      title: "Community",
      description: "Learning and building is better together.",
    },
  ];
  return (
    <div className="max-w-7xl xl:mx-auto md:mx-3 mb-20">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-5 md:mb-12">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 xl:gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between px-5 pt-5 pb-3 mx-auto w-[300px] lg:w-[230px] xl:w-[300px] h-[300px] bg-[#F5F5F5] rounded-lg hover:shadow-lg shadow-sm transition-all">
            <img src={misc} alt="Feature icon" className="w-12 h-12" />
            <div className="flex flex-col items-start mt-8 text-left">
              <h2 className="text-black text-xl font-bold mb-2">
                {value.title}
              </h2>
              <p className="text-black text-sm font-semibold">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
