import React from 'react';

const testimonials = [
  {
    name: "Farzana H.",
    role: "Owner, CleanPro Services",
    text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    img: "/images/user1.png",
  },
  {
    name: "Ahmed R.",
    role: "Technician",
    text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    img: "/images/user2.png",
  },
  {
    name: "Farzana H.",
    role: "Rafiq M., Homeowner",
    text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    img: "/images/user3.png",
  },
];

const Testimonials = () => {
  return (
    <div className="w-[1440px]  bg-gradient-to-b from-white to-[#F8FCFF] py-12">
      <div className="w-[1200px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[48px] font-bold text-gray-900">What Our Users Are Saying</h2>
        <p className="text-gray-500 w-[455px] h-[42px] mx-auto mt-2">
          Real stories from clients, employees, and business owners who use our app every day.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-3 gap-6 mt-20">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl w-[387px] h-[208px] shadow-md p-6  text-left">
              <div className="flex items-center mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pt-4 w-[331px] h-[52px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
