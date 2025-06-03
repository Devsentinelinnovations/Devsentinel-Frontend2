import React, { useState } from 'react'
import Navbar from '../components/landing/Navbar'
import hero from '../assets/hero.png'
import hero2 from '../assets/hero2.png'
import cards from '../assets/cards.png'
import aws from '../assets/aws.png'
import alx from '../assets/alx.png'
import gtb from '../assets/gtb.png'
import miva from '../assets/miva.png'
import microsoft from '../assets/microsoft.png'
import zoom from '../assets/zoom.png'
import Why from '../components/landing/Why';
import Courses from '../components/landing/Courses'
import Feedback from '../components/landing/Feedback'
import Faq from '../components/landing/Faq'
import Footer from '../components/landing/Footer'

function LandingPage() {
  const [currentImage, setCurrentImage] = useState(1); // Start with middle image
  const images = [hero2, hero, hero2]; // Add your three images here

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen fade-in">
        <Navbar/>
        <div className="pt-2 pb-16"> {/* Increased padding */}
          <div className='flex flex-col md:flex-row justify-between items-center px-6 md:px-8 max-w-7xl mx-auto gap-12'>
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-black font-bold md:text-[38px] text-2xl ">
                Learn. Build. Succeed. <br /> 
                We'll Help You Every <br /> 
                Step of the way.
              </h1>
              <p className='max-w-xl md:text-lg text-base font-semibold text-black'>
                Whether you're trying to grow your tech skills or launch something for your business, DevSentinelSolutions helps you do it well — no hype, just real work that pays off.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-btn1 text-white rounded-lg font-bold hover:bg-btn1 transition-colors">
                  Start learning now
                </button>
                <button className="px-6 py-3 text-btn1 bg-btn2 border-btn1 border-1 font-bold rounded-lg hover:border-btn1 transition-colors">
                  partner with us today
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative flex mt-6 items-center justify-center gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 h-[450px] ${
                      index === currentImage
                        ? 'w-[500px] opacity-100 scale-100'
                        : 'w-[200px] opacity-50 scale-90'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Hero illustration ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full z-10 hover:bg-white/80"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full z-10 hover:bg-white/80"
                >
                  →
                </button>
              </div>
            </div>
          </div>
          {/* trusted by */}
          <div className='w-full py-12 mt-16'>
            <div className='max-w-7xl mx-auto px-4 md:px-8'>
              <h1 className='text-black font-bold text-xl  mb-8'>
                Trusted by learners and teams from Microsoft, Zoom, AWS, and more.
              </h1>
              <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 place-items-center'>
                {[
                  { src: microsoft, alt: "Microsoft" },
                  { src: miva, alt: "Miva" },
                  { src: alx, alt: "ALX" },
                  { src: gtb, alt: "GTB" },
                  { src: aws, alt: "AWS" },
                  { src: zoom, alt: "Zoom" }
                ].map((logo) => (
                  <div key={logo.alt} className="w-24 md:w-32 h-12 md:h-16 flex items-center justify-between">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* why people chose */}
          <Why/>
          <div className='mt-6 mx-auto px-4 max-w-7xl'>
            <div className='text-center'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Need Something Built?</h1>
              <p className='text-black text-base md:text-lg font-semibold pt-2 px-4 md:px-0'>
                Here's how DevSentinelSolutions can help your business:
              </p>
            </div>
            <div className='flex justify-center mt-4 overflow-hidden'>
              <img 
                src={cards} 
                alt="Services cards" 
                className='w-full md:w-[80%] lg:w-[1000px] h-auto object-contain'
              />
            </div>
          </div>
          {/* course */}
          <Courses/>
          {/* feedback */}
          <Feedback/>
          {/* faq */}
          <Faq/>
          {/* outro */}
          <div className='bg-btn1 p-4 md:p-8 rounded-lg max-w-7xl mx-auto mt-16'>
            <h2 className='text-white text-xl md:text-2xl lg:text-3xl text-center font-bold'>
              Ready to take the next step?
            </h2>
            <p className='text-white text-center text-sm md:text-base pt-4 px-4 md:px-8 max-w-2xl mx-auto'>
              Whether you want to build something for your business or learn a new skill, we're here to help you get started.
            </p>
            <div className='flex flex-col md:flex-row mt-6 justify-center gap-4 px-4'>
              <button className='px-4 font-semibold py-2 rounded-lg text-btn1 bg-white w-full md:w-auto'>
                Start Learning Today
              </button>
              <button className='px-4 font-semibold py-2 border border-white rounded-lg text-white bg-btn1 w-full md:w-auto'>
                Build Your Product
              </button>
            </div>
          </div>
          {/* footer */}
          <Footer/>
        </div>
    </div>
  )
}

export default LandingPage