import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container mt-4 mb-16 mx-auto px-6 md:px-12 py-10">
                <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                    Our Services
                </p>

                <div className="text-start my-6 mt-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        From Positioning to Scaling <br /> & Everything in Between
                    </h1>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-xl from-neutral-600 font-semibold mb-2">Strategy & Scale</h2>
                        <p>Hyper-Growth</p>
                        <p>Business Consulting</p>
                        <p>Brand Positioning</p>
                        <p>Fundraising</p>
                    </div>

                    <div>
                        <h2 className="text-xl from-neutral-600 font-semibold mb-2">Digital Marketing</h2>
                        <p>Social Media & PR</p>
                        <p>Video Marketing</p>
                        <p>SEO & SEM</p>
                        <p>Sales Enablement</p>
                        <p>Inbound Marketing 2.0</p>
                    </div>

                    <div>
                        <h4 className="text-xl from-neutral-600 font-semibold mb-2">Branding & Design</h4>
                        <p>Logo & Brand Identity Design</p>
                        <p>Enterprise Design System</p>
                        <p>Brand Messaging</p>
                        <p>UX/ UI Design</p>
                        <p>Design Thinking & Sprints</p>
                    </div>
                    <div>
                        <h4 className="text-xl from-neutral-600 font-semibold mb-2">Technology</h4>
                        <p>Website Development</p>
                        <p>Mobile Apps</p>
                        <p>SaaS Platform</p>
                        <p>DevOps</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services