import React from 'react'
const myFunc =()=>{
    const tog=document.getElementById("navbarsExampleDefault");
    tog.classList.toggle("open");
};
export default function Navigation() {
    return (
        <>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <div className="container">
                    {/* Image Logo */}
                    {/* <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a> */}
                    {/* Text Logo - Use this if you don't have a graphic logo */}
                    <a class="navbar-brand logo-text page-scroll" href="index.html">Stanley</a>
                    <button onClick={myFunc} className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#services">Services</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item page-scroll" href="project.html">Project Details</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                                </div>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <span className="nav-item social-icons">
                            <span className="fa-stack">
                                <a href='https://web.facebook.com/bobby.izuka'>
                                    <i className="fas fa-circle fa-stack-2x" />
                                    <i className="fab fa-facebook-f fa-stack-1x" />
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href='https://twitter.com/B_o_b_b_1_E'>
                                    <i className="fas fa-circle fa-stack-2x" />
                                    <i className="fab fa-twitter fa-stack-1x" />
                                </a>
                            </span>
                        </span>
                    </div> {/* end of navbar-collapse */}
                </div> {/* end of container */}
            </nav> {/* end of navbar */}
            {/* end of navigation */}


            {/* <!-- Scripts --> */}
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script> 
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/scripts.js"></script> 

        </>

        
    )
}
