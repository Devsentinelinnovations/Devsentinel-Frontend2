import React from 'react'
import groups from '../../assets/groups.png'

function Feedback() {
  const testimonials = [
    {
      id: 1,
      text: "The course material was comprehensive and well-structured. I learned more in 3 months than I did in a year of self-study.",
      name: "Alex Thompson",
      course:  "Full Stack Development Student"
    },
    {
      id: 2,
      text: "The hands-on projects and real-world applications helped me understand complex concepts easily. Highly recommended!",
      name: "Sarah Olatunji",
      course: "Cloud Computing Student"
    },
    {
      id: 3,
      text: "The mentorship and community support were invaluable. I landed my dream job right after completing the course.",
      name: "Michael Olaoye",
      course: "DevOps Engineering Student"
    },
     {
      id: 4,
      text: "I used to watch random YouTube tutorials, but I wasn’t improving. This course gave me a clear path. The feedback after every task helped me stay on track.",
      name: "Emeka Chukwuma",
      course: "Web Development Student"
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-12'>
          Real Feedback from Real <br /> Students & Business Partners
        </h1>
        
        <div className="flex justify-center mb-16">
          <img src={groups} alt="profiles" className="max-w-full" />
        </div>

        <div className="flex overflow-x-auto gap-8 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} 
                 className="bg-[#F5F5F5] p-8 rounded-xl flex-shrink-0 w-[350px]">
              <div className="text-lg text-[#344054] font-semibold text-center mb-6">
                "{testimonial.text}"
              </div>
              <div>
                <p className="font-semibold text-center text-[#344054]">{testimonial.name}</p>
                <p className="text-[#344054] text-center">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feedback