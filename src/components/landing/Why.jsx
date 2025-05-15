import React from 'react'
import misc from '../../assets/misc.png'

function Why() {
  const features = [
    {
      title: "Real Projects, Real Learning",
      description: "Learn by doing. You'll build things that actually work."
    },
    {
      title: "Support That Follows Up",
      description: "Fill a form, get feedback fast. You also join a private Slack group with others learning like you."
    },
    {
      title: "No Tech Background? No Problem.",
      description: "Courses are clear and beginner-friendly, with room to grow."
    },
    {
      title: "Business Owners? We’ve Got You.",
      description: "Whether it’s a mobile app or a full website, you’ll get what you actually need—not what sounds nice."
    }
  ];

  return (
    <div className='bg-btn1 py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-center text-white text-xl md:text-2xl font-bold mb-12'>
          Why People Choose DevSentinelSolutions
        </h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-start px-8 py-12 bg-white rounded-lg hover:shadow-lg transition-all'>
              <img 
                src={misc} 
                alt="Feature icon" 
                className='w-12 h-12 mb-12'
              />
              <div className='flex flex-col items-start mt-8 text-left'>
                <h2 className='text-black text-xl font-bold mb-2'>{feature.title}</h2>
                <p className='text-black font-semibold'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Why