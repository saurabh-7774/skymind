import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";

const StatsSection = () => {
    return (
        <section className="stats-section">
            <Container>
                <div className="stats-box">
                    <Row className="text-center">

                        <Col md={6} lg={3} className="stat-item">
                            <h2>
                                <CountUp end={1500} duration={2} separator="," />+
                            </h2>
                            <p>Enterprise Projects Delivered</p>
                        </Col>

                        <Col md={6} lg={3} className="stat-item">
                            <h2>
                                <CountUp end={400} duration={2} />+
                            </h2>
                            <p>Students & Interns Trained</p>
                        </Col>

                        <Col md={6} lg={3} className="stat-item">
                            <h2>
                                <CountUp end={99} duration={2} />%
                            </h2>
                            <p>Corporate Technology Partnerships</p>
                        </Col>

                        <Col md={6} lg={3} className="stat-item">
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