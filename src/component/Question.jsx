import React from 'react';

const Question = () => {
    return (
        <div className='w-[1440px] h-[551px] bg-white'>
            <div className='text-center mb-14 space-y-2'>
                <h2 className="text-[48px] font-bold  text-black">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Quick answers to help you get the most out of our app.
                </p>
            </div>
            <div className='w-[996px] h-[400px] mx-auto space-y-4'>
                <div className="collapse collapse-plus text-black border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title  font-semibold">Is the app free to use?</div>
                    <div className="collapse-content pl-16 text-sm">Yes! We offer free for individual and small teams. Paid plan unlock more future for scaling business.</div>
                </div>
                <div className="collapse collapse-plus text-black border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Can I assign multiple employee to one job?</div>
                    <div className="collapse-content text-sm pl-16">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-plus text-black border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Dose it work on both mobile and desktop?</div>
                    <div className="collapse-content text-sm pl-16">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-plus text-black border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold"></div>
                    <div className="collapse-content text-sm pl-16"></div>
                </div>
            </div>

        </div>
    );
};

export default Question;