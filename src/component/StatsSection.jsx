import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StatsSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    return (
        <section className="stats-section" data-aos="fade-up">
            <Container>
                <div className="stats-box">
                    <Row className="text-center">

                        <Col md={6} lg={3} className="stat-item" data-aos="zoom-in" data-aos-delay="100">
                            <h2>
                                <CountUp end={1500} duration={2} separator="," />+
                            </h2>
                            <p>Enterprise Projects Delivered</p>
                        </Col>

                        <Col md={6} lg={3} className="stat-item" data-aos="zoom-in" data-aos-delay="200">
                            <h2>
                                <CountUp end={400} duration={2} />+
                            </h2>
                            <p>Students & Interns Trained</p>
                        </Col>

                        <Col md={6} lg={3} className="stat-item" data-aos="zoom-in" data-aos-delay="300">
                            <h2>
                                <CountUp end={99} duration={2} />%
                            </h2>
                            <p>Corporate Technology Partnerships</p>
                        </Col>

                        <Col md={6} lg={3} className="stat-item" data-aos="zoom-in" data-aos-delay="400">
                            <h2>24H</h2>
                            <p>Placement Assistance Support</p>
                        </Col>

                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default StatsSection;