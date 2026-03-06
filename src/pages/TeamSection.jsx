import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import reactImg from "../assets/react.svg";
import nodeImg from "../assets/node.svg";
import javaImg from "../assets/java.svg";
import cloudImg from "../assets/cloud.svg";
import dataImg from "../assets/data.svg";
import designImg from "../assets/design.svg";
import businessImg from "../assets/business.svg";

const teamMembers = [
  {
    name: "Er. Saurabh Sunil Kalal",
    role: "Founder & Chief Executive Officer (CEO)",
    techImage: businessImg,
  },
  {
    name: "Maujam Ali Bashir Shaikh",
    role: "Co-Founder & Director",
    techImage: businessImg,
  },
  {
    name: "Sakshi Vijay Bhambere",
    role: "Director – Finance",
    techImage: businessImg,
  },
  {
    name: "Rushikesh Vitthal More",
    role: "Marketing & Branding Manager",
    techImage: businessImg,
  },
  {
    name: "Aniket Sharadchandra Nikam",
    role: "Learning & Development Head",
    techImage: businessImg,
  },
  {
    name: "Snehal Akash Bonde",
    role: "Project Manager",
    techImage: businessImg,
  },
  {
    name: "Amol Tanaji Shinde",
    role: "Senior HR Executive",
    techImage: businessImg,
  },
  {
    name: "Shaikh Raza Aslam",
    role: "Mobile Application Developer",
    techImage: reactImg,
  },
  {
    name: "Rohit Sunil Kalal",
    role: "Data Scientist & Analytics Engineer",
    techImage: dataImg,
  },
  {
    name: "Pallavi Bhausaheb Jadhav",
    role: "UI/UX Designer",
    techImage: designImg,
  },
  {
    name: "Neha Yogesh Jaiswal",
    role: "Cloud & DevOps Engineer",
    techImage: cloudImg,
  },
  {
    name: "Prakhar Rai",
    role: "Software Developer",
    techImage: nodeImg,
  },
  {
    name: "Pranav Bhushan Sonawane",
    role: "Software Developer",
    techImage: nodeImg,
  },
  {
    name: "Pranav Kiran Kasture",
    role: "MERN Stack Developer",
    techImage: reactImg,
  },
  {
    name: "Siddhart Dialani",
    role: "Data Analyst",
    techImage: dataImg,
  },
  {
    name: "Deepak Jitendra Jaiswal",
    role: "MEAN Stack Developer",
    techImage: nodeImg,
  },
  {
    name: "Ishwar Anmol Jaiswal",
    role: "Java Developer",
    techImage: javaImg,
  },
  {
    name: "Akshada Kumar Jadhav",
    role: "Business Development Executive",
    techImage: businessImg,
  },
  {
    name: "Keshar Kumbhare",
    role: "Business Development Executive",
    techImage: businessImg,
  },
];

const TeamSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="team-section">
      <Container>

        {/* Header */}
        <Row className="align-items-center mb-5">

          <Col lg={7} data-aos="fade-right">
            <span className="badge3">
              MEET OUR IT SPECIALISTS
            </span>

            <h2>
              Meet With Our Team Of Certified IT Technicians
              <span> And Support Engineers.</span>
            </h2>
          </Col>

          <Col lg={5} className="text-lg-end mt-4 mt-lg-0" data-aos="fade-left">
            <p className="team-desc">
              Our experienced leadership, engineers, designers and consultants
              work together to deliver innovation-driven solutions and
              industry-ready technology training.
            </p>

            <Button className="team-btn">
              Discover Team →
            </Button>
          </Col>

        </Row>

        {/* Team Cards */}
        <Row>
          {teamMembers.map((member, index) => (
            <Col
              lg={3}
              md={6}
              className="mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >

              <div className="team-card">

                <div className="team-avatar">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="team-overlay">
                  <h5>{member.name}</h5>
                  <span>{member.role}</span>

                  {/* Optional Social Icons */}
                  {/*
                  <div className="team-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaPinterestP /></a>
                  </div>
                  */}

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