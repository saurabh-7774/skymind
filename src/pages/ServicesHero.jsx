import { Container, Row, Col } from "react-bootstrap";

const ServicesHero = ({ title, highlight, description }) => {
  return (
    <section className="about-hero">
      <div className="overlay"></div>

      <Container className="hero-content px-2 px-lg-5">
        <Row className="align-items-center justify-content-evenly">
          <Col lg={8} className="hero-left text-center text-lg-start">
            <h1>
              {title} <span>{highlight}</span>
            </h1>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHero;