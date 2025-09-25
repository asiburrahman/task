import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Easy Service Booking",
            desc: "Streamlined booking process for clients with service catalogs and availability.",
            src: "/images/icon/1.png"
        },
        {
            title: "Real-Time Tracking",
            desc: "Monitor job progress, employee hours, and project timelines with live updates.",
            src: "/images/icon/2.png"
        },
        {
            title: "Performance Analytics",
            desc: "Comprehensive reporting and insights for business efficiency.",
            src: "/images/icon/3.png"
        },
        {
            title: "Secure & Reliable",
            desc: "Enterprise-grade security with 100% uptime guarantee and data protection.",
            src: "/images/icon/4.png"
        },
    ];

    return (
        <section className="w-[1440px] bg-white ">
            <div className='w-[1200px] h-[157px] grid md:grid-cols-4 mx-auto gap-[36px]'>
            {services.map((service, idx) => (
                <div key={idx} className=" w-[248px] h-[157px] space-y-[19px]">
                    <div className="bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center">
                        <img src={service.src}></img>
                    </div>
                    <h3 className="font-semibold text-black text-lg">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Services;