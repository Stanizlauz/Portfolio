import React from 'react'

export default function AboutMe() {
    return (
        <>
            {/* About*/}
            <div id="about" className="basic-1 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-container first">
                                <h2>Hi there I'm Stanley,</h2>
                                <p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <div className="text-container second">
                                <div className="time">2019 - PRESENT</div>
                                <h6>Freelance Web Developer</h6>
                                <p>Working happily on my own web projects</p>
                                <div className="time">2018 - 2019</div>
                                <h6>Lead Web Developer</h6>
                                <p>Beautiful project for a major digital agency</p>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <div className="text-container third">
                                <div className="time">2017 - 2018</div>
                                <h6>Senior Web Designer</h6>
                                <p>Inhouse web designer for ecommerce firm</p>
                                <div className="time">2016 - 2017</div>
                                <h6>Junior Web Designer</h6>
                                <p>Junior web designer for small web agency</p>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of basic-1 */}
            {/* end of about */}

        </>
    )
}
