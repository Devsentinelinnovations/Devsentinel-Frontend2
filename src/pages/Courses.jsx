import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Navbar from '../components/landing/Navbar'
import Footer from '../components/landing/Footer'

function Courses() {
    const [searchQuery, setSearchQuery] = useState('');
    const courses = [
      {
        id: 1,
        title: "Cybersecurity",
        description: "Master cybersecurity fundamentals and practices with hands-on projects",
        duration: "3 months",
        covers: [
          "Training",
          "Exam",
          "Certification",
          "Resources",
          "Hands-on Project"
        ]
      },
      {
        id: 2,
        title: "CCNA",
        description: "Comprehensive networking certification program with practical training",
        duration: "4 months",
        covers: [
          "Training",
          "Exam",
          "Certification",
          "Hands-on Project",
          "Resources"
        ]
      },
      {
        id: 3,
        title: "UI/UX Design",
        description: "Create stunning user interfaces and experiences with industry best practices",
        duration: "3 months",
        covers: [
          "Training",
          "Exam",
          "Certification",
          "Resources",
          "Hands-on Project"
        ]
      },
      {
        id: 4,
        title: "Web Development",
        description: "Comprehensive full-stack web development bootcamp",
        duration: "5 months",
        covers: [
          "Training",
          "Exam",
          "Certification",
          "Hands-on Project",
          "Resources"
        ]
      },
      {
        id: 5,
        title: "Data Analysis",
        description: "Master data analysis tools and techniques for insights",
        duration: "5 months",
        covers: [
          "Training",
          "Exam",
          "Certification",
          "Hands-on Project",
          "Resources"
        ]
      }
    ];

    const filteredCourses = courses.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className='fade-in'>
        <Navbar/>
        <div className='text-center mt-16'>
            <h1 className='text-center font-bold text-4xl'>Browse available course</h1>
            <p className='text-center font-semibold pt-4 text-lg'>UI/UX Design, Frontend and Backend web development, AI & Machine <br /> learning, Data Science and so much more.</p>
            
            <div className="max-w-xl mx-auto mt-8 px-4">
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Browse available courses"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              </div> */}
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 border-1 border-[#F2F2F2]">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">Duration: {course.duration}</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold mb-2">Course Covers:</p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm">
                      {course.covers.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-start">
                    <button 
                      onClick={() => window.open('https://forms.gle/X3tkuEvi6irp4WjLA', '_blank')}
                      className="py-2 px-4 bg-btn1 text-white rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What We Also Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              { [
                "Job-Ready Training",
                "Career Launchpad",
                "Job Placement Support",
                "Interview Mastery",
                "Real-World Experience"
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-center">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Courses