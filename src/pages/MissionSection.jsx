import { Container, Row, Col } from "react-bootstrap";
import { FaHandshake, FaChartLine, FaPlay } from "react-icons/fa";

import img1 from "../assets/cheerful-young-african-girl-operator-it-support-at-workplace--1024x683.jpg";
import img2 from "../assets/female-person-working-in-support-service-of-company-682x1024.jpg";
import img3 from "../assets/black-man-call-center-and-laptop-in-customer-service-telemarketing-or-support-at-office-happy-af.jpg";

const MissionSection = () => {
    return (
        <section className="mission-section">
            <Container>
                <Row className="align-items-center">

                    {/* LEFT SIDE */}
                    <Col lg={6}>
                        <div className="mission-left">

                            <span className="mission-badge">
                                MISSION & VISION
                            </span>
                            <h2>
                                Transforming Learners Into
                                <span> Skilled IT Professionals</span>
                            </h2>

                            <p>
                                We create measurable value through innovation,
                                continuous learning, and a customer-first appro
                            </p>

                            {/* Feature Card */}
                            <Col lg={11}>
                                <div className="mission-card">

                                    <div className="mission-item">
                                        <div className="icon-circle">
                                            <FaHandshake />
                                        </div>
                                        <div>
                                            <h6>Our Mission</h6>
                                            <p>
                                                To provide high-quality, affordable, and reliable
                                                IT services that simplify processes and enhance productivity.
                                            </p>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="mission-item">
                                        <div className="icon-circle">
                                            <FaChartLine />
                                        </div>
                                        <div>
                                            <h6>Our VISION</h6>
                                            <p>
                                                ach.
                                                Our vision is to become a globally trusted IT innovation partner
                                                by delivering future-ready, intelligent, and scalable technology
                                                solutions that empower businesses to grow, transform, and lead
                                                in the digital era.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blur-circle"></div>

                                </div>
                            </Col>
                        </div>
                    </Col>

                    {/* RIGHT SIDE IMAGES */}
                    <Col lg={6} md={12}>
                        <Row>

                            {/* Small Image 1 */}
                            <Col xs={6} className="mb-3">
                                <div className="img-small">
                                    <img src={img1} alt="Mission" className="img-fluid w-100" />
                                </div>
                            </Col>

                            {/* Small Image 2 */}
                            <Col xs={6} className="mb-3">
                                <div className="img-small">
                                    <img src={img1} alt="Mission" className="img-fluid w-100" />
                                </div>
                            </Col>

                            {/* Large Image Full Width */}
                            <Col xs={12}>
                                <div className="img-large position-relative">
                                    <img src={img3} alt="Mission" className="img-fluid w-100" />

                                    <div className="play-btn">
                                        <FaPlay />
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default MissionSection;