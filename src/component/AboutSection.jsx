import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import supportImg from "../assets/smiling-customer-support-service-operator-with-hands-free-headset-working-in-office.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    return (
        <section className="about-section">
            <Container>
                <Row className="align-items-center justify-content-evenly">

                    {/* Right Content */}
                    <Col lg={5} data-aos="fade-right">
                        <div className="about-content">

                            <span className="badge-title" data-aos="fade-up">
                                ABOUT SMKCG PVT LTD
                            </span>

                            <h2 data-aos="fade-up" data-aos-delay="100">
                                Tech Support <br />
                                <span>Backed By Years</span> <br />
                                Of Experience
                            </h2>

                            <p className="about-desc" data-aos="fade-up" data-aos-delay="200">
                                SMKCG Pvt Ltd is a forward-thinking technology and consulting company
                                specializing in Artificial Intelligence, Data Science, Cloud Engineering,
                                Enterprise Software Development, and Digital Transformation solutions.
                                Through our dedicated training division, SkyMind IT Training & Solutions,
                                we prepare industry-ready professionals with real-world experience.
                            </p>

                            <ul className="about-list">
                                <li data-aos="fade-up" data-aos-delay="300"><FaCheck /> AI, ML & Generative AI Solutions for Enterprises</li>
                                <li data-aos="fade-up" data-aos-delay="400"><FaCheck /> Cloud, DevOps & Scalable Infrastructure Engineering</li>
                                <li data-aos="fade-up" data-aos-delay="500"><FaCheck /> Industry-Driven Internships & Placement Assistance</li>
                            </ul>

                            <Button className="about-btn" data-aos="zoom-in" data-aos-delay="600">
                                Explore Our Services →
                            </Button>

                        </div>
                    </Col>

                    {/* Left Image */}
                    <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-left">
                        <div className="about-image-wrapper">

                            <img
                                src={supportImg}
                                alt="Support"
                                className="about-image"
                                data-aos="zoom-in"
                            />

                            <div className="floating-card" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-circle">
                                    🎧
                                </div>
                                <div>
                                    <h5>AI-Driven Innovation</h5>
                                    <p>Delivering intelligent, scalable and future-ready technology solutions.</p>
                                </div>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;