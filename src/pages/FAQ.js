import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'





export default function Faq() {


    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
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


            <div className="body-wrapper bg--accent min-vh-100 overflow-hidden d-flex align-items-center  position-relative">
                <div className="body-wrapper-inner d-flex flex-wrap pe-lg-0 w-100">
                    <div className="body-wrapper-inner__left faq-page-body-wrapper position-relative">
                        <h2 className="title mb-2 mt-4">Frequently Asked Questions</h2>
                        <p className="mb-4 mb-md-5 fs--20px">Got a question? We are here to answer! If you dont see your question, email us on our About Page</p>
                        <div className={active ? 'faq-item active open' : 'faq-item'} onClick={() => setActive(!active)}>
                            <div className="faq-item__title">
                                <h4 className="title"> What is a Parralel Corpus?</h4>
                            </div>
                            <div className="faq-item__content">
                                <p>	A parallel corpus is made up of two or more monolingual corpora (the corpora are translations of one another). The two languages must be in alignment, which calls for matching sentences or paragraphs in the respective sections of each language.
                                </p>
                            </div>
                        </div>
                        <div className={active2 ? 'faq-item active open' : 'faq-item'} onClick={() => setActive2(!active2)}>
                            <div className="faq-item__title">
                                <h4 className="title">Where do all the contributions go?</h4>
                            </div>
                            <div className="faq-item__content" >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className={active3 ? 'faq-item active open' : 'faq-item'} onClick={() => setActive3(!active3)}>
                            <div className="faq-item__title">
                                <h4 className="title">How are contributions ranked?
                                </h4>
                            </div>
                            <div className="faq-item__content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className={active4 ? 'faq-item active open' : 'faq-item'} onClick={() => setActive4(!active4)}>
                            <div className="faq-item__title">
                                <h4 className="title">How are the source text randomized?</h4>
                            </div>
                            <div className="faq-item__content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className={active5 ? 'faq-item active open' : 'faq-item'} onClick={() => setActive5(!active5)}>
                            <div className="faq-item__title">
                                <h4 className="title">How are </h4>
                            </div>
                            <div className="faq-item__content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="body-wrapper-inner__right text-end align-self-end  d-lg-block d-none">
                        <img src="assets/images/thumb/faq.png" alt="thumb" className="mw-100" />
                    </div>
                </div>
            </div>




            <script src="assets/js/lib/jquery-3.6.0.min.js"></script>
            <script src="assets/js/lib/bootstrap.min.js"></script>
            <script src="assets/js/main.js"></script>
        </React.Fragment>
    )
}