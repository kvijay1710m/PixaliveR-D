import React from 'react'

const Mission = () => {
    return (
        <>
            <div className="container mt-4 mb-16 mx-auto px-6 md:px-12 py-10">
                {/* Section Title */}
                <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                    Our Mission
                </p>


                <div className="text-start my-6 mt-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Scaling your <br /> Unfair Advantage
                    </h1>
                </div>

                {/* Three Columns Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Column 1 */}
                    <div>
                        <h2 className="text-xl from-neutral-600 font-semibold mb-2">By Right Positioning</h2>
                        <p className="mt-10 text-gray-600">
                            You want to become an admirable brand and differentiate from competitors. The right positioning of your brand enables exponential business and revenue growth.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h2 className="text-xl from-neutral-600 font-semibold mb-2">Through Right Technology</h2>
                        <p className="mt-10 text-gray-600">
                            Your product or service needs to create delight. Technology differentiates you with your twin competitor and makes you win the mind share by delighting your customers.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-xl from-neutral-600 font-semibold mb-2">With Right Sales+Marketing Alignment</h4>
                        <p className="mt-10 text-gray-600">
                            Because funnels don't work at scale! Our aligned Sales+Marketing efforts will create a coherency & boost your market share to let you make an impact that you always wanted to.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mission