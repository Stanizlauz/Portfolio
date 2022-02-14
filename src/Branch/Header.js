import React from 'react'

export default function Header() {
    return (
        <>
            {/* Header */}
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h1 className="h1-large">I love to create beautiful and efficient websites</h1>
                                <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
                                <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user" />Contact Me</a>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </header> {/* end of header */}
            {/* end of header */}

        </>
    )
}
