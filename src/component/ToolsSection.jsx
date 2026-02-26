import { Container, Row, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import img1 from "../assets/indian-call-center-agent-wearing-headset-working-on-customer-support-service--1024x683.jpg";
import img2 from "../assets/female-person-working-in-support-service-of-company-682x1024.jpg";

const ToolsSection = () => {
    return (
        <section className="tools-section">
            <Container>
                <Row className="align-items-center justify-content-evenly">

                    {/* LEFT CONTENT */}
                    <Col lg={6}>
                        <div className="tools-content">

                            <span className="badge3">
                                TECHNOLOGY STACK

                            </span>

                            <h2>
                                Powered By Modern <br />
                                <span>AI & Cloud Technologies</span>
                            </h2>
                            <p>
                                At SMKCG Pvt Ltd, we leverage cutting-edge technologies including
                                Artificial Intelligence, Cloud Platforms, DevOps automation,
                                Data Engineering, and Enterprise frameworks to deliver scalable,
                                secure, and future-ready digital solutions.
                            </p>

                            <div className="tools-image-bottom">
                                <img src={img1} alt="Support" />
                            </div>

                        </div>
                    </Col>

                    {/* RIGHT SIDE */}
                    <Col lg={4}>
                        <div className="tools-right-wrapper">

                            <div className="tools-image-box">
                                <img src={img2} alt="Support" />

                                <div className="play-btn">
                                    <FaPlay />
                                </div>

                                <div className="stats-card">
                                    <h3>
                                        10+ <span>Domains</span>
                                    </h3>
                                    <p>Advanced Technology Expertise</p>
                                </div>

                                <div className="info-card">
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