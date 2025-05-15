import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Navbar from '../components/landing/Navbar'
import avatar from '../assets/avatar.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
// import courseImg from '../assets/course.png'

function Courses() {
    const [searchQuery, setSearchQuery] = useState('');
    const courses = [
      {
        id: 1,
        // image: courseImg,
        title: "Full Stack Web Development",
        description: "Learn modern web development from frontend to backend",
        teacher: {
          name: "Timmily Odunsaya",
          avatar: avatar4,
        }
      },
      {
        id: 2,
        // image: courseImg,
        title: "Cloud Computing & DevOps",
        description: "Master cloud platforms and automation tools",
        teacher: {
          name: "Sarah Johnson",
          avatar: avatar,
        }
      },
      {
        id: 3,
        // image: courseImg,
        title: "Mobile App Development",
        description: "Build cross-platform mobile applications",
        teacher: {
          name: "Michael Patrick",
          avatar: avatar3,
        }
      },
      {
        id: 4,
        // image: courseImg,
        title: "Backend Development",
        description: "Learn server-side programming and database management",
        teacher: {
          name: "Emmanuel Walter",
          avatar: avatar,
        }
      },
         {
        id: 5,
        // image: courseImg,
        title: "UI/UX Design",
        description: "Create user-friendly interfaces and experiences",
        teacher: {
          name: "Uche Phillips",
          avatar: avatar4,
        }
      },
           {
        id: 6,
        // image: courseImg,
        title: "UI/UX Design",
        description: "Create user-friendly interfaces and experiences",
        teacher: {
          name: "Rowland Ogenedo",
          avatar: avatar4,
        }
      }
    ];

    const filteredCourses = courses.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
        <Navbar/>
        <div className='text-center mt-16'>
            <h1 className='text-center font-bold text-4xl'>Browse available course</h1>
            <p className='text-center font-semibold pt-4 text-lg'>UI/UX Design, Frontend and Backend web development, AI & Machine <br /> learning, Data Science and so much more.</p>
            
            <div className="max-w-xl mx-auto mt-8 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Browse available courses"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl  overflow-hidden hover:shadow-lg transition-shadow">
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
        <div className="flex justify-center mt-12 mb-16">
          <button className="px-8 py-3 bg-btn1 text-white rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
            View More Courses
          </button>
        </div>
    </div>
  )
}

export default Courses