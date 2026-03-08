import { Container, Row, Col } from "react-bootstrap";
import defaultHero from "..//assets//working-customer-support-service-operator-communication-in-corporate-business-advisor-concept--1024x576.jpg"; // default image
import aiimg from '../assets/1_3.jpg'

const ServicesHero = ({ title, highlight, description, bgImage }) => {
  const background = bgImage || defaultHero;

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
          <Col lg={4} className="hero-left text-center text-lg-start">
            <h1>
              {title} <span>{highlight}</span>
            </h1>

            {/* <p

            >{description}</p> */}
          </Col>
          <Col lg={5}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHero;