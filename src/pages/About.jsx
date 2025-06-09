import React from "react";
import Navbar from "../components/landing/Navbar";
import Statistics from "../components/about/Statistics";
import Values from "../components/about/Values";
import Team from "../components/about/Team";
import Footer from "../components/landing/Footer";

function About() {
  return (
    <div className="fade-in">
      <Navbar />
      <div className="flex flex-col items-center gap-4 my-20 lg:mx-0 mx-5">
        {/* <p className="text-sm text-text bg-text/10 font-semibold items-center px-3 py-1 border rounded-2xl">
          About us
        </p> */}
        <h1 className="lg:text-5xl text-2xl font-bold mb-0 lg:mb-4">
          Who We Are and Why it Matters
        </h1>
        <p className="lg:text-lg text-base text-center font-semibold max-w-3xl">
          At Devsentinel Innovations, we help people and business grow through
          technology. whether you're learning how to build your next digital
          product, we meet you where you are and guide you forward-step by step,
          no pressure, no tech talk.
        </p>
      </div>
      <Statistics />

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 my-20">
        <div className="p-5 text-center bg-[#F5F5F5] h-[160px] rounded-lg shadow-sm">
          <h3 className="text-lg text-[#344054] font-bold mb-3">Our Mission</h3>
          <p className="text-sm text-[#344054] font-semibold w-[300px]">
            To make tech accessible. we're here to help more people-especially
            in Africa-build skills, build confidence , and build real solutions
            that solve real problems.
          </p>
        </div>
        <div className="p-5 text-center bg-[#F5F5F5] h-[160px] rounded-lg shadow-sm">
          <h3 className="text-lg text-[#344054] font-bold mb-3">Our Vision</h3>
          <p className="text-sm text-[#344054] font-semibold w-[300px]">
            To be the go-to place for digital growth in Africa. Whether you want
            to learn, build, or launch-we want to be the team you trust.
          </p>
        </div>
      </div>

      <Values />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}
export default About;
