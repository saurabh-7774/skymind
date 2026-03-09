import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import processImg from "../assets/female-person-working-in-support-service-of-company-682x1024.jpg";

const SupportProcess = () => {
    return (
        <section className="support-section">
            <Container fluid>
                <Row className="align-items-start gx-5">

                    {/* LEFT SIDE */}
                    <Col lg={5}>
                        <div className="support-left">

                            <span className="badge3">
                                OUR VISION & MISSION
                            </span>

                            <h2>
                                Driving The Future With <br />
                                Intelligent Innovation & Impactful Learning
                            </h2>

                            <div className="support-gradient-card">
                                <h5>
                                    🚀 Our Vision
                                </h5>

                                <p>
                                    To provide high-quality, affordable, and reliable IT services that simplify processes, enhance productivity, and create measurable value—through innovation, continuous learning, and a customer-first approach.
                                </p>

                                <h5 className="mt-4">
                                    🎯 Our Mission
                                </h5>

                                <p>
                                   To become a globally trusted IT innovation partner by delivering future-ready, intelligent, and scalable technology solutions that empower businesses to grow, transform, and lead in the digital era.
                                </p>


                            </div>

                        </div>
                    </Col>

                    {/* CENTER STEPS */}
                    <Col lg={4}>
                        <div className="steps-card">

                            <div className="step-item">
                                <span className="step-number">01</span>
                                <div>
                                    <h6>Innovation First</h6>
                                    <p>Leveraging AI, Cloud, and emerging technologies to build future-ready solutions.</p>
                                </div>
                            </div>

                            <div className="step-item">
                                <span className="step-number">02</span>
                                <div>
                                    <h6>Enterprise Excellence</h6>
                                    <p>Delivering secure, scalable, and high-performance digital systems for businesses.</p>

                                </div>
                            </div>

                            <div className="step-item">
                                <span className="step-number">03</span>
                                <div>
                                    <h6>Empowering Professionals</h6>
                                    <p>Providing industry-driven internships and structured career development programs.</p>
                                </div>
                            </div>

                        </div>
                    </Col>

                    {/* RIGHT IMAGE */}
                    <Col lg={3}>
                        <div className="support-image-wrapper">
                            <img src={processImg} alt="SMKCG Vision and Innovation" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default SupportProcess;