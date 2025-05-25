import React from "react";

const Address = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:h-[350px] mt-10 mb-20">
      <div className="w-full md:w-2/3 md:h-full rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253705.22816534742!2d3.2955782867187544!3d6.503424500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfb5ec6b28bd5%3A0x50f1ac6a4fe6e240!2sSalvation%20Estate%20Scheme%201!5e0!3m2!1sen!2sng!4v1747937738408!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "1rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-start justify-between px-5 pt-5 pb-3 h-full bg-[#F5F5F5] rounded-2xl shadow-lg transition-all">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm text-text3 font-bold">Address</span>
            <p className="font-semibold text-base md:text-sm lg:text-base font-sans">
              16, Salvation Estate, Owode, Ajah, Lagos
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm text-text3 font-bold">Email</span>
            <p className="font-semibold text-base md:text-sm lg:text-base font-sans">
              devsentinelsolutions@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm text-text3 font-bold">Contact</span>
            <p className="font-semibold text-base md:text-sm lg:text-base font-sans">
              0000-000-0000
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg font-lexend">Honest work</h3>
          <p className="text-base md:text-sm lg:text-base font-lexend">
            No overpromising, just real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
