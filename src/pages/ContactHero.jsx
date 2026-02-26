import { Container, Row, Col } from "react-bootstrap";

const ContactHero = () => {
    return (
        <section className="contact-hero">
            <div className="overlay"></div>

            <Container className="hero-content px-2 px-lg-5">
                <Row className="align-items-center justify-content-evenly">

                    <Col lg={8} className="hero-left text-center text-lg-start">
                        <h1>
                            Get In <span>Touch</span>
                        </h1>
                        <p>
                            Reach out to our expert team for technology consultation, digital transformation solutions, or support services.
                        </p>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ContactHero;