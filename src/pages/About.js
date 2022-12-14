import React from "react";
import { Link } from 'react-router-dom'


export default function About() {

    function myFunction() {
        const dots = document.getElementById("dots");
        const moreText = document.getElementById("more");
        const btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    return (
        <React.Fragment>
            <div className="overlay"></div>


            <div className="header style--two">
                <div className="header-bottom">
                    <div className="header-bottom-area align-items-center">
                        <div className="logo"><Link to="/"><img src="assets/images/logo.png" alt="logo" /></Link></div>
                        <ul className="menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                        </ul>
                        <div className="header-trigger-wrapper d-flex d-lg-none align-items-center">
                            <div className="header-trigger">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="banner-section bg_img"
                style={{
                    background: 'url(assets/images/thumb/banner.png)'
                }}>
                <div className="container">
                    <div className="banner-content">
                        <h5 style={{
                            fontFamily: 'ahsing',
                            fontSize: '80px',
                            margin: '0',
                            fontWeight: '700',
                            lineHeight: '1.3'
                        }}
                            className="title text--warning mb-4 pb-2" >DAPOK</h5>
                        <p className="fw-semibold fs--20px text-white">Dapok is a Multi-Platfrom Multilingual Parralel Corpus Application.
                        </p>
                    </div>
                </div>
            </div>



            <div className="about-section bg-white pt-100 pb-80" id="about">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2 className="section-title">Project Dapok</h2>
                                <p style={{ fontSize: '32px' }}>Project Dapok aims to build a multilingual parallel corpus by incorporating the following:</p>

                                <p style={{ fontSize: '18px' }}>
                                    •Add crowdsourcing functionality to the application.
                                    <br></br>•Create a moderating module capable of controlling the monolingual data available in the mobile application, as well as analyzing crowdsourced contributions and determining how they align with other contributions presented in the web application.
                                    <br></br>•Finally, to improve the effectiveness of crowdsourcing language data, evaluate the user experience design.



                                    <span id="dots">...</span><span id="more">
                                        <br></br><br></br>Dapok will be available in both mobile and web applications. The system has two types of users: Contributors, who are general users who could contribute translations to the
                                        system via the mobile application, and Validators, who are Linguists or Language Experts who could validate the contributed text via the web application.
                                    </span></p>

                                <a onClick={myFunction} id="myBtn" className="btn btn--sm rounded-0 btn--accent px-5 mt-4" style={{
                                    minWidth: 'unset'
                                }}>Learn more</a>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="assets/images/thumb/about.png" alt="thumb" className="mw-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section bg-white pt-100 pb-80 border-top border-primary">
                <div className="container">
                    <div className="row gy-5 justify-content-between">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2 className="section-title">The Name “Dapok”</h2>
                                <p>The project was named "Dapok" after the Cebuano term "Tapok," which means "to gather or store in a specific location." Because the project's goal is to collect translation contributions from the general public, or simply crowdsourcing, the name Dapok makes sense.
                                </p>
                                <br></br>
                                <p>The logo appears to be a house with a book as its roof. It is designed to appear that way since the meaning of "Dapok" is a collection of something in a specific place, thus the house. Furthermore, because the project collects translations of words, sentences, or phrases, the book serves as a repository for these, hence the book metaphor. In short, the project logo represents knowledge collection or storage.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img src="assets/images/thumb/about2.png" alt="thumb" className="mw-100" />
                        </div>
                    </div>
                </div>
            </div>




            <div className="team-section pt-5 pb-80">
                <div className="team-bg">
                    <img src="assets/images/thumb/team-bg.png" alt="thumb" />
                </div>
                <div className="container">
                    <h2 className="section-title text-center text-white">Our Team</h2>
                    <div className="row gy-4">
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="team-item">
                                <div className="team-item__thumb">
                                    <img src="assets/images/thumb/jann-pic.jpg" alt="thumb" />
                                </div>
                                <div className="team-item__content">
                                    <h3 className="team-item__content-name text--base">Jann Orine</h3>
                                    <h5 className="designation text--base">Project Manager</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="team-item">
                                <div className="team-item__thumb">
                                    <img src="assets/images/thumb/jeffrey-pic.jpg" alt="thumb" />
                                </div>
                                <div className="team-item__content">
                                    <h3 className="team-item__content-name text--base">Jeffrey Lasat</h3>
                                    <h5 className="designation text--base">Document Specialist</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="team-item">
                                <div className="team-item__thumb">
                                    <img src="assets/images/thumb/rado-pic.png" alt="thumb" />
                                </div>
                                <div className="team-item__content">
                                    <h3 className="team-item__content-name text--base">Jason Rado</h3>
                                    <h5 className="designation text--base">Website Developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="team-item">
                                <div className="team-item__thumb">
                                    <img src="assets/images/thumb/doreen-pic.jpg" alt="thumb" />
                                </div>
                                <div className="team-item__content">
                                    <h3 className="team-item__content-name text--base">Doreen Pandi</h3>
                                    <h5 className="designation text--base">Mobile Developer</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact-section pt-60 pb-80">
                <div className="contact-bg">
                    <img src="assets/images/thumb/team-bg.png" alt="thumb" />
                </div>
                <div className="container">
                    <h2 className="section-title mb-1 text-center text-white">Contact Us</h2>
                    <p className="contact-title-text  text-center text-white pb-60">If you have any questions about the project, You can contact us:</p>
                    <div className="row gy-4 justify-content-evenly">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 mb-5 mb-sm-0">
                            <div className="contact-item">
                                <div className="contact-item__icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-item__content">
                                    <h5 className="contact-item__content-title">Email Us</h5>
                                    <a href="mailto:dapok@uic.edu.ph" className="text-decoration-underline">dapok@uic.edu.ph</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                            <div className="contact-item">
                                <div className="contact-item__icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-item__content">
                                    <h5 className="contact-item__content-title">Visit Us</h5>
                                    <p className="mb-0">University of the Immaculate Conception. Father Selga St., Davao City</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <script src="assets/js/lib/jquery-3.6.0.min.js"></script>
            <script src="assets/js/lib/bootstrap.min.js"></script>
            <script src="assets/js/lib/slick.min.js"></script>
            <script src="assets/js/main.js"></script>
        </React.Fragment>
    )
}