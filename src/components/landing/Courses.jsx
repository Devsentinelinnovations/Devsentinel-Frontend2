import React, { useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import avatar from '../../assets/avatar.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import FullStack from '../../assets/Full Stack Web Development.png'
import CS from '../../assets/Cybersecurity.png'
import CCNA from '../../assets/CCNA.png'
import DA from '../../assets/Data Analysis.png'
import Ui from '../../assets/UI-UX Design.png'

function Courses() {
  const scrollContainerRef = useRef(null);
  
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const courses = [
    {
      id: 1,
      image: FullStack,
      title: "Web Development",
      description: "Learn how to build responsive and interactive websites using modern technologies like HTML, CSS, and JavaScript. This course covers the fundamentals of frontend and backend development, giving you the skills to create dynamic web applications from the ground up."
    },
    {
      id: 2,
      image: CS,
      title: "Cybersecurity",
      description: "Learn how to protect systems, networks, and data from cyber threats. This course covers essential topics like ethical hacking, threat detection, network security, and best practices for securing modern digital infrastructures.",
    },
    {
      id: 3,
      image: DA,
      title: "Data Analysis",
      description: "Learn how to collect, process, and interpret data to uncover insights and support decision-making. This course covers essential tools like Excel, SQL, and Python, along with data visualization techniques to help you make sense of complex datasets.",
    },
    {
      id: 4,
      image: CCNA,
      title: "CCNA",
      description: "Prepare for the Cisco Certified Network Associate (CCNA) certification by gaining a solid foundation in networking. This course covers key concepts like IP addressing, routing and switching, network security, and troubleshooting, equipping you with the skills needed to configure and manage modern network infrastructures",
    },
       {
      id: 5,
      image: Ui,
      title: "UI/UX Design",
      description: "Learn the principles of user interface and user experience design to create intuitive, engaging digital products. This course covers wireframing, prototyping, user research, and modern design tools—equipping you to craft designs that are both functional and user-friendly.",
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8">
      <div className='flex justify-between items-center flex-col md:flex-row mb-12'>
        <div className="max-w-2xl mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Want to Learn Tech Skills That Matter?</h2>
          <p className="text-black text-lg">Choose a course, get feedback after registering to join the private Slack community for learning and support.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-3 bg-btn2 border rounded-xl border-gray-200 hover:bg-gray-50"
          >
            <FiArrowLeft size={24} className="text-gray-700" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 bg-btn1 rounded-xl text-white hover:bg-opacity-90"
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-[350px]">
            <img src={course.image} alt={course.title} className="w-full h-auto object-contain" />
            <div className="p-6 border-0 border-[#F2F2F2]">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-black mb-4">{course.description}</p>
              
              {/* <div className="flex items-center mb-4">
                <img src={course.teacher.avatar} alt={course.teacher.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{course.teacher.name}</p>
                  <p className="text-black text-sm">{course.teacher.role}</p>
                </div>
              </div> */}

              {/* <div className="flex justify-start">
                <button className="py-2 px-4 bg-[#F2F2F2] text-black rounded-lg hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses