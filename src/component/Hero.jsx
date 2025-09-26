import React from "react";

const Hero = () => {
  return (
    <section className="w-[1440px]   bg-white">
      <div className="w-[1440px] mx-auto  flex items-center justify-between  pl-[120px] ">
        {/* Left Content */}
        <div className="w-[655px] h-[] flex flex-col justify-center gap-6">
          <h1 className="text-[64px] font-bold  relative text-gray-900">
            All Your Jobs <br /> One Smart App
            <img src="./images/sign.png" className="absolute left-52 -bottom-1" alt="" />
            <img src="./images/flower.png" alt=""  className="absolute -top-20 left-40 "/>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Built for business owners, employees, and clients to streamline job
            scheduling, service tracking, and team management in one powerful
            app.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <img
              src="./images/appstore.png"
              alt="Download on App Store"
              className="h-12"
            />
            <img
              src="./images/googleplay.png"
              alt="Get it on Google Play"
              className="h-12"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[720px] h-[656px]">
          <img
            src="./images/hand-phone.png"
            alt="Mobile App Preview"
            
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
