import { Container, Row, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/indian-call-center-agent-wearing-headset-working-on-customer-support-service--1024x683.jpg";
import img2 from "../assets/female-person-working-in-support-service-of-company-682x1024.jpg";

const ToolsSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    return (
        <section className="tools-section">
            <Container>
                <Row className="align-items-center justify-content-evenly">

                    {/* LEFT CONTENT */}``
                    <Col lg={6} data-aos="fade-right">
                        <div className="tools-content">

                            <span className="badge3" data-aos="fade-up">
                                TECHNOLOGY STACK
                            </span>

                            <h2 data-aos="fade-up" data-aos-delay="100">
                                Powered By Modern <br />
                                <span>AI & Cloud Technologies</span>
                            </h2>

                            <p data-aos="fade-up" data-aos-delay="200">
                                At SMKCG Pvt Ltd, we leverage cutting-edge technologies including
                                Artificial Intelligence, Cloud Platforms, DevOps automation,
                                Data Engineering, and Enterprise frameworks to deliver scalable,
                                secure, and future-ready digital solutions.
                            </p>

                            <div
                                className="tools-image-bottom"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <img src={img1} alt="Support" />
                            </div>

                        </div>
                    </Col>

                    {/* RIGHT SIDE */}
                    <Col lg={4} data-aos="fade-left">
                        <div className="tools-right-wrapper">

                            <div className="tools-image-box">

                                <img
                                    src={img2}
                                    alt="Support"
                                    data-aos="zoom-in"
                                />

                                <div
                                    className="play-btn"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                >
                                    <FaPlay />
                                </div>

                                <div
                                    className="stats-card"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <h3>
                                        10+ <span>Domains</span>
                                    </h3>
                                    <p>Advanced Technology Expertise</p>
                                </div>

                                <div
                                    className="info-card"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <h5>
                                        Enterprise-Grade Architecture & Innovation
                                    </h5>
                                    <p>
                                        From AI systems and cloud-native applications to DevOps pipelines and
                                        cybersecurity frameworks, we design solutions that scale with your business.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ToolsSection;