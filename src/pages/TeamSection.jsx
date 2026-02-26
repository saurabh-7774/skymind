import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

import img1 from "../assets/smiling-customer-support-service-operator-with-hands-free-headset-working-in-office.jpg";
import img2 from "../assets/smiling-customer-support-service-operator-with-hands-free-headset-working-in-office.jpg";
import img3 from "../assets/smiling-customer-support-service-operator-with-hands-free-headset-working-in-office.jpg";

const teamMembers = [
  {
    image: img1,
    name: "Mr. John Doe",
    role: "DIRECTOR",
  },
  {
    image: img2,
    name: "Mr. David Smith",
    role: "IT MANAGER",
  },
  {
    image: img3,
    name: "Mr. Alex Brown",
    role: "SUPPORT ENGINEER",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <Container>

        {/* Top Header */}
        <Row className="align-items-center mb-5">
          <Col lg={7}>
            <span className="badge3">
              MEET OUR IT SPECIALISTS
            </span>

            <h2>
              Meet With Our Team Of Certified IT Technicians
              <span> And Support Engineers.</span>
            </h2>
          </Col>

          <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
            <p className="team-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Button className="team-btn">
              Discover Team →
            </Button>
          </Col>
        </Row>

        {/* Team Cards */}
        <Row>
          {teamMembers.map((member, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <div className="team-card">

                <img src={member.image} alt={member.name} />

                <div className="team-overlay">
                  <h5>{member.name}</h5>
                  <span>{member.role}</span>

                  <div className="team-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaPinterestP /></a>
                  </div>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default TeamSection;