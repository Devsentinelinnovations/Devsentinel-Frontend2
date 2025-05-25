import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Femi",
      role: "CEO, DevSentinelSolutions",
      image: "path_to_image",
    },
    {
      name: "Mr. Gbolahan",
      role: "Product Manager, DevSentinelSolutions",
      image: "path_to_image",
    },
    {
      name: "Mr. Timmy",
      role: "Lead Software Developer, DevSentinelSolutions",
      image: "path_to_image",
    },
  ];

  const memberInitials = teamMembers.map((member) => {
    const nameWords = member.name.trim().split(" ");
    const initials = nameWords
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
    return {
      ...member,
      initials,
    };
  });
  console.log(memberInitials);
  return (
    <div className="max-w-7xl xl:mx-auto md:mx-3 mb-20">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-5 md:mb-12">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 xl:gap-5">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between pb-3 mx-auto w-[350px] lg:w-[320px] xl:w-[350px] h-[400px] rounded-lg shadow-lg hover:shadow-lg transition-all">
            {/* <img src="path_to_image" alt="Team Member" className="w-12 h-12" /> */}
            <div className="flex items-center justify-center w-full bg-[#F5F5F5] h-2/3 rounded-t-lg">
              <div className="flex items-center justify-center bg-black rounded-full w-24 h-24 mx-auto mt-5">
                <p className="flex items-center text-[#F5F5F5] justify-center">
                  {memberInitials[index].initials}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-8 ml-3 text-left">
              <h2 className="text-black text-xl font-bold mb-2">
                {member.name}
              </h2>
              <p className="text-black text-sm">{member.role}</p>
              <div className="flex gap-2 items-center justify-start mt-3">
                <div className="p-2 bg-[#F5F5F5] rounded-full cursor-pointer hover:bg-[#F5F5F5]/20 transition-colors">
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="p-2 bg-[#F5F5F5] rounded-full cursor-pointer hover:bg-[#F5F5F5]/20 transition-colors">
                  <a href="/">
                    <FaFacebook />
                  </a>
                </div>
                <div className="p-2 bg-[#F5F5F5] rounded-full cursor-pointer hover:bg-[#F5F5F5]/20 transition-colors">
                  <a href="/">
                    <FaLinkedin />
                  </a>
                </div>
                <div className="p-2 bg-[#F5F5F5] rounded-full cursor-pointer hover:bg-[#F5F5F5]/20 transition-colors">
                  <a href="/">
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
