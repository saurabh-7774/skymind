import { Container, Row, Col } from "react-bootstrap";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="overlay"></div>

      <Container className="hero-content px-2 px-lg-5">
        <Row className="align-items-center justify-content-evenly">

          <Col lg={8} className="hero-left text-center text-lg-start">
            <h1>
              About <span>SMKCG Pvt Ltd</span>
            </h1>
            <p>
              We are a technology-driven company delivering Artificial Intelligence,
              Cloud Engineering, Enterprise Software Development, and Digital
              Transformation services to empower businesses and professionals.
            </p>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutHero;