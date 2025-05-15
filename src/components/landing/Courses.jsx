import React, { useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import avatar from '../../assets/avatar.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'

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
      title: "Full Stack Web Development",
      description: "Learn modern web development from frontend to backend",
      teacher: {
        name: "Timmily Odunsaya",
        avatar: avatar4,
      }
    },
    {
      id: 2,
      title: "Cloud Computing & DevOps",
      description: "Master cloud platforms and automation tools",
      teacher: {
        name: "Sarah Johnson",
        avatar: avatar,
      }
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications",
      teacher: {
        name: "Michael Patrick",
        avatar: avatar3,
      }
    },
    {
      id: 4,
      title: "Backend Development",
      description: "Learn server-side programming and database management",
      teacher: {
        name: "Emmanuel Walter",
        avatar: avatar,
      }
    },
       {
      id: 5,
      title: "UI/UX Design",
      description: "Create user-friendly interfaces and experiences",
      teacher: {
        name: "Uche Phillips",
        avatar: avatar4,
      }
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8">
      <div className='flex justify-between items-center flex-col md:flex-row mb-12'>
        <div className="max-w-2xl mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Want to Learn Tech Skills That Matter?</h2>
          <p className="text-black text-lg">Choose a course, get feedback after signing up, and join the private Slack community for learning and support.</p>
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
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6 border-1 border-[#F2F2F2]">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-black mb-4">{course.description}</p>
              
              <div className="flex items-center mb-4">
                <img src={course.teacher.avatar} alt={course.teacher.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{course.teacher.name}</p>
                  <p className="text-black text-sm">{course.teacher.role}</p>
                </div>
              </div>

              <div className="flex justify-start">
                <button className="py-2 px-4 bg-[#F2F2F2] text-black rounded-lg hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses