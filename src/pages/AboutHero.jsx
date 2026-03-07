import { Container, Row, Col } from "react-bootstrap";

import defaultHero from '../assets/aobutpage.png'

const AboutHero = () => {
  const background =  defaultHero;

  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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