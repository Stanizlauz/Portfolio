import React from 'react'

export default function Details() {
    return (
        <>
            {/* Details */}
            <div className="split">
                <div className="area-1">
                </div>{/* end of area-1 on same line and no space between comments to eliminate margin white space */}<div className="area-2 bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Text Container */}
                                <div className="text-container">
                                    <h2>Why Work With Me</h2>
                                    <p>I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
                                    <h5>DESIGN TOOLS</h5>
                                    <p>My favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too</p>
                                    <h5>DEVELOPMENT SKILLS</h5>
                                    <p>I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks</p>
                                    <div className="icons-container">
                                        <img src="images/details-icon-photoshop.png" alt="alternative" />
                                        <img src="images/details-icon-illustrator.png" alt="alternative" />
                                        <img src="images/details-icon-html.png" alt="alternative" />
                                        <img src="images/details-icon-css.png" alt="alternative" />
                                        <img src="images/details-icon-bootstrap.png" alt="alternative" />
                                        <img src="images/details-icon-javascript.png" alt="alternative" />
                                    </div> {/* end of icons-container */}
                                </div> {/* end of text-container */}
                                {/* end of text container */}
                            </div> {/* end of col */}
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div> {/* end of area-2 */}
            </div> {/* end of split */}
            {/* end of details */}

        </>
    )
}
