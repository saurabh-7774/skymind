import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ITContactSection = () => {
  return (
    <section className="itcontact-section">

      <Container>

        {/* Badge */}
        <div className="itcontact-badge">
          LETS CONNECTED
        </div>

        {/* Heading */}
        <h2 className="itcontact-title">
          Our Team Responds Quickly With Clear Instructions
          <span> Or Tailored Service Suggestions.</span>
        </h2>

        {/* Contact Info Cards */}
        <Row className="mt-5 justify-content-center">
          <Col md={4} className="mb-4">
            <div className="itcontact-card active">
              <div className="itcontact-icon">
                <FiMapPin />
              </div>
              <h5>Office Address</h5>
              <p>TechCare Center, Jakarta</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="itcontact-card">
              <div className="itcontact-icon">
                <FiPhone />
              </div>
              <h5>Telephone</h5>
              <p>+62 123 456 789</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="itcontact-card">
              <div className="itcontact-icon">
                <FiMail />
              </div>
              <h5>Email Address</h5>
              <p>info@example.com</p>
            </div>
          </Col>
        </Row>

        {/* Form + Map */}
        <Row className="itcontact-main mt-5">

          {/* Form */}
          <Col lg={6} className="mb-4">
            <div className="itcontact-form">

              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Control placeholder="First Name" className="mb-3" />
                  </Col>
                  <Col md={6}>
                    <Form.Control placeholder="Last Name" className="mb-3" />
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Control type="email" placeholder="Email" className="mb-3" />
                  </Col>
                  <Col md={6}>
                    <Form.Control placeholder="Subject" className="mb-3" />
                  </Col>
                </Row>

                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message here..."
                  className="mb-4"
                />

                <Button className="itcontact-btn">
                  Send Message
                </Button>
              </Form>

            </div>
          </Col>

          {/* Map */}
          <Col lg={6}>
            <div className="itcontact-map">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
              ></iframe>
            </div>
          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default ITContactSection;