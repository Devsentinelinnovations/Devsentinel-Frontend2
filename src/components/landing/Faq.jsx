import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

function Faq() {
  const [activeStudentFaq, setActiveStudentFaq] = useState(null);
  const [activeBusinessFaq, setActiveBusinessFaq] = useState(null);

  const studentFaqs = [
    { question: "How do I join a course?", 
      answer: "Click on the course you’re interested in, then fill the form. You’ll get a reply by email." },
    { question: "Do I get a certificate after completion?",
      answer: "Yes, you receive a verified certificate upon successful completion of the course requirements." },
    { question: "What if I need help during the course?",
      answer: "You have access to mentors, community support, and regular Q&A sessions." },
    { question: "Are there prerequisites for the courses?",
      answer: "Prerequisites vary by course. Basic courses often require no prior experience." },
    { question: "Can I access the course content after completion?",
      answer: "Yes, you get lifetime access to the course materials after purchase." },
    { question: "Is there a refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied." }
  ];

  const businessFaqs = [
    { question: "What kind of projects can you build?",
      answer: "We build websites, mobile apps, APIs, dashboards—whatever you need, as long as it’s digital." },
    { question: "How can DevSentinel help my business?",
      answer: "We provide custom solutions, training programs, and technical consulting for businesses." },
    { question: "Do you offer enterprise-level support?",
      answer: "Yes, we provide dedicated enterprise support and custom SLAs." },
    { question: "Can you train our existing team?",
      answer: "We offer customized corporate training programs for your team." },
    { question: "What are your payment terms?",
      answer: "We offer flexible payment plans and enterprise pricing." },
    { question: "How do we get started?",
      answer: "Schedule a consultation call to discuss your needs and objectives." }
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className='text-center text-2xl md:text-4xl font-bold mb-12'>
        Got Questions? Here's <br /> What People Usually Ask
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Students FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">For Students</h2>
          <div className="space-y-4">
            {studentFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 bg-btn2 rounded-lg">
                <button
                  className="w-full p-4 text-left flex justify-between items-center"
                  onClick={() => setActiveStudentFaq(activeStudentFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {activeStudentFaq === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {activeStudentFaq === index && (
                  <div className="px-4 pb-4 text-black">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Business FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">For Business clients</h2>
          <div className="space-y-4">
            {businessFaqs.map((faq, index) => (
              <div key={index} className="border-1 border-gray-200 bg-btn2 rounded-lg">
                <button
                  className="w-full p-4 text-left flex justify-between items-center"
                  onClick={() => setActiveBusinessFaq(activeBusinessFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {activeBusinessFaq === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {activeBusinessFaq === index && (
                  <div className="px-4 pb-4 text-black">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq