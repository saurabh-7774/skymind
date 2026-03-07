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
              <p>📍 4th Floor, Shobhana Plaza, Shahid Circle,
                Gangapur Road, Nashik – 422013</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="itcontact-card">
              <div className="itcontact-icon">
                <FiPhone />
              </div>
              <h5>Telephone</h5>
              <p><a
                href="tel:+919309174601"
                style={{ textDecoration: "none", color: "inherit" }} onClick={(e) => e.stopPropagation()}

              >
                +91 9309174601
              </a></p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="itcontact-card">
              <div className="itcontact-icon">
                <FiMail />
              </div>
              <h5>Email Address</h5>
              <p><a onClick={(e) => e.stopPropagation()}
                style={{ textDecoration: "none", color: "inherit" }}
              > info@smkcg.com</a> </p>
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
                src="https://www.google.com/maps?q=4th+floor+Shobana+Plaza+Shahid+Circle+Gangapur+Rd+Nashik&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default ITContactSection;