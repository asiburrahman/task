import React from 'react';

const BuildForEveryone = () => {
  return (
    <section className="w-[1440px] bg-white">
      <div className="max- mx-auto px-[120px] py-[100px]">
        {/* Title */}
        <div className="text-center mb-16">
         <div className='relative  w-[418px] h-[64px] mx-auto  mb-6'> 
            <h2 className="text-[48px] font-bold  text-black">Build for Everyone</h2>
            <img src="/images/sign.png" alt="" className='absolute -right-4 bottom-[-12px] ' />
         </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you're booking services, managing tasks, or tracking
            operations, we've designed an effortless experience for you.
          </p>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col justify-center items-center">
          {/* Users Section */}
         <div className='flex w-[1155px] h-[516px] gap-16'>
          <div>
            <h3 className="text-green-600 border-2 border-green-600 inline-block px-4 py-1 rounded-2xl font-semibold mb-3">Users</h3>
            <h4 className="text-2xl text-black font-bold mb-5">
              Book services, track progress and stay updated
            </h4>
            <p className="text-gray-600 mb-5">
              Easily schedule appointments, get real-time updates, and enjoy a
              smooth, transparent service experience.
            </p>
            <ul className=" text-black space-y-3">
              <li className='border-l-green-400 pl-4  border-l-2'>Book services in seconds</li>
              <li className='border-l-green-300 pl-4 border-l-2'>Track real-time job updates</li>
              <li className='border-l-green-200 pl-4 border-l-2'>Schedule appointments at your convenience</li>
            </ul>
          </div>
           
            <div className=" w-[610px] h-[516px] overflow-hidden relative ">
              <img
                src="/images/user-app.png"
                alt="Users App"
                className="w-full"
              />
              <div className='w-[700px] h-[133px] bg-white absolute z-10 opacity-100 blur-2xl  bottom-0'></div>
            </div>
          
          </div>

          {/* Business Owners Section */}
          <div className='flex w-[1155px] h-[516px] gap-16'>
            
             <div className=" w-[610px] h-[516px] overflow-hidden relative ">
              <img
                src="/images/business-app.png"
                alt="Users App"
                className="w-full"
              />
              <div className='w-[700px] h-[133px] bg-white absolute z-10 opacity-100 blur-2xl  bottom-0'></div>
            </div>
          
          <div className="">
            <h3 className="text-green-600 border-2 border-green-600 inline-block px-4 py-1 rounded-2xl font-semibold mb-3">
              Business Owners
            </h3>
            <h4 className="text-2xl text-black font-bold mb-5">
              Assign jobs, monitor performance, and streamline operations
            </h4>
            <p className="text-gray-600 mb-5">
              Gain full control of your workflow with real-time tracking, smart
              scheduling, and smooth team management all in one app.
            </p>
            <ul className=" text-black space-y-3">
              <li className='border-l-green-400 pl-4  border-l-2'>Assign jobs to the right team member</li>
              <li className='border-l-green-300 pl-4 border-l-2'>Monitor performance in real-time</li>
              <li className='border-l-green-200 pl-4 border-l-2'>Manage clients and services seamlessly</li>
            </ul>
          </div>
          
         
          </div>
           

          {/* Freelancers Section */}
          <div className='flex w-[1155px] h-[516px] gap-16'>
          <div>
            <h3 className="text-green-600 border-2 border-green-600 inline-block px-4 py-1 rounded-2xl font-semibold mb-3">Freelancers</h3>
            <h4 className="text-2xl text-black font-bold mb-5">
              See tasks, track time, and navigate routes with ease
            </h4>
            <p className="text-gray-600 mb-5">
              Everything you need to manage your workday from job assignments to
              task completion and time logging.
            </p>
            <ul className=" text-black space-y-3">
              <li className='border-l-green-400 pl-4  border-l-2'>Stay on top of your tasks</li>
              <li className='border-l-green-300 pl-4 border-l-2'>Log time with accuracy</li>
              <li className='border-l-green-200 pl-4 border-l-2'>Navigate routes easily</li>
            </ul>
          </div>
           <div className=" w-[610px] h-[516px] overflow-hidden relative ">
              <img
                src="/images/freelancer-app.png"
                alt="Users App"
                className="w-full"
              />
              <div className='w-[700px] h-[133px] bg-white absolute z-10 opacity-100 blur-2xl  bottom-0'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildForEveryone;
