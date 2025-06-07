import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Subscribe Section */}
          <div className="lg:max-w-xs">
               <div className="flex-shrink-0 flex  mb-6 items-center">
                    <Link to="/" className="flex items-center ">
                   <img src= {logo} alt="DevSentinel Logo" className="h-12 w-auto" />
                    {/* <span className="text-2xl font-bold text-btn1">DevSentinel</span> */}
                  </Link>
                </div>
            <p className="text-gray-600 mb-4">Be the first to receive all the recent updates, articles, and valuable materials.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-btn1"
              />
              <button className="whitespace-nowrap px-4 py-2 bg-btn1 text-white rounded-lg">
                Subscribe
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[#667185] hover:text-btn1" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/about" className="text-[#667185] hover:text-btn1" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
              <li><Link to="/course" className="text-[#667185] hover:text-btn1" onClick={() => window.scrollTo(0, 0)}>Courses</Link></li>
              <li><Link to="/contact" className="text-[#667185] hover:text-btn1" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
            </ul>
          </div>

          {/* Products Links */}
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-[#667185] hover:text-btn1">Mass Payments </Link></li>
                <li><Link to="/Debit Card" className="text-[#667185] hover:text-btn1">Debit Card</Link></li>
              <li><Link to="/startup" className="text-[#667185] hover:text-btn1">Rayna for startups </Link></li>
              <li><Link to="/devs" className="text-[#667185] hover:text-btn1">Rayna for Developers</Link></li>
              <li><Link to="/no code" className="text-[#667185] hover:text-btn1">Rayna for  No-code</Link></li>
              <li><Link to="/assets" className="text-[#667185] hover:text-btn1">Assets</Link></li>
            </ul>
          </div> */}

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/devsentinel-innovations/" className="text-[#667185] hover:text-btn1">Linkedln</a></li>
              <li><a href="https://www.facebook.com/share/16ekbk5ESX/" className="text-[#667185] hover:text-btn1">Facebook</a></li>
              <li><a href="https://www.instagram.com/devsentinelinnovations?igsh=MW1nZ3lodmoyNzdzeQ==" className="text-[#667185] hover:text-btn1">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@_devsentinelhub?_t=ZS-8wyy8YKY4vw&_r=1" className="text-[#667185] hover:text-btn1">Tiktok</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-3 mb-2 md:mb-0">
              <Link to="/terms" className="text-sm text-gray-600 hover:text-btn1">Terms of Service</Link>
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-btn1">Privacy Policy</Link>
            </div>
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} DevSentinelSolutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer