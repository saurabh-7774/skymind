import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaYoutube, FaArrowUp, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { clientIssues } from "./course";

const Footer = () => {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <footer className="footer-section">

            <Container>

                <Row className="gy-5">

                    {/* COLUMN 1 */}
                    <Col lg={4} data-aos="fade-up">
                        <div className="footer-logo">

                            <h2>SkyMind Technologies</h2>

                            <p>
                                Empowering businesses and future professionals with
                                AI-driven innovation, cloud transformation, and
                                industry-focused technology training programs.
                            </p>

                            <div className="subscribe-box">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    className="subscribe-input"
                                />

                                <Button className="subscribe-btn">
                                    contact
                                </Button>
                            </div>

                        </div>
                    </Col>

                    {/* COLUMN 2 */}
                    <Col lg={2} data-aos="fade-up" data-aos-delay="100">

                        <h5 className="footer-title">Quick Links</h5>

                        <ul className="footer-links">

                            <li onClick={() => {
                                navigate(`/`);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}>Home</li>

                            <li onClick={() => {
                                navigate(`/about`);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}>About Us</li>

                            <li onClick={() => {
                                navigate(`/`);
                                window.scrollTo({ top: 1800, behavior: "smooth" });
                            }}>AI Solutions</li>

                            <li onClick={() => {
                                navigate(`/`);
                                window.scrollTo({ top: 3600, behavior: "smooth" });
                            }}>Training Programs</li>

                            <li onClick={() => {
                                navigate(`/contact`);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}>Contact</li>

                        </ul>

                    </Col>

                    {/* COLUMN 3 */}
                    <Col lg={3} data-aos="fade-up" data-aos-delay="200">

                        <h5 className="footer-title">Our Expertise</h5>

                        <ul className="footer-links">

                            {clientIssues.map((ok) => {
                                return (
                                    <li
                                        key={ok.slug}
                                        onClick={() => {
                                            navigate(`/courses/${ok.slug}`);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                    >
                                        {ok.title}
                                    </li>
                                )
                            })}

                        </ul>

                    </Col>

                    {/* COLUMN 4 */}
                    <Col lg={3} data-aos="fade-up" data-aos-delay="300">

                        <h5 className="footer-title">Head</h5>

                        <p className="footer-address">
                            📍 4th Floor, Shobhana Plaza, Shahid Circle,
                            Gangapur Road, Nashik – 422013
                        </p>

                        <h5 className="footer-title mt-4">Working Hours</h5>

                        <p>
                            Monday - Saturday  | 9:00 AM - 8:00 PM
                        </p>

                    </Col>

                </Row>

                {/* Divider */}
                <div className="footer-divider" data-aos="fade-up"></div>

                {/* Bottom Row */}
                <div className="footer-bottom" data-aos="fade-up" data-aos-delay="200">

                    <p>
                        © {new Date().getFullYear()} SkyMind Technologies. All Rights Reserved.
                    </p>

                    <div className="footer-social">

                        <span>
                            <a href="https://www.facebook.com/people/SkyMind/61585457930638/#" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                        </span>

                        <span>
                            <a href="https://www.instagram.com/skymind.it?igsh=MWl1eWh4YnpnMnkwMg==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </span>

                        <span>
                            <a href="https://www.linkedin.com/company/skymind-it-training-solutions/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        </span>

                        <span>
                            <a href="https://share.google/PL9U3fKDzB62aeGZN" target="_blank" rel="noopener noreferrer">
                                <FaMapMarkerAlt />
                            </a>
                        </span>

                    </div>

                </div>

            </Container>

            {/* Scroll Top */}
            <div
                className="scroll-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                data-aos="zoom-in"
            >
                <FaArrowUp />
            </div>

        </footer>
    );
};

export default Footer;