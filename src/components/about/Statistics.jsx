import React from "react";

const Statistics = () => {
  const stats = [
    { value: "1,200+", label: "Students trained" },
    { value: "100+", label: "Business served" },
    { value: "30+", label: "Active partnerships" },
    { value: "5yrs", label: "Operating since 2020" },
    { value: "24/7", label: "Customer support" },
  ];
  return (
    <div className="bg-btn1 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto gap-10 lg:gap-2 xl:gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <span className="text-white text-4xl font-bold">{stat.value}</span>
            <p className="text-white text-normal font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    // <div className="bg-btn1 py-8">
    //   <div className="flex justify-center gap-10">
    //     {stats.map((stat, index) => (
    //       <div key={index} className="flex flex-col items-center gap-3">
    //         <span className="text-white text-4xl font-bold">{stat.value}</span>
    //         <p className="text-white text-normal font-semibold">{stat.label}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Statistics;
