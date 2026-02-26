import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import lg from '../assets/image.png'
import { FaPhoneAlt } from "react-icons/fa";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const clientIssues = [
    {
      slug: "AI_Data_Science_&_Analytics",
      title: "AI, Data Science & Analytics",
      text: "Covers artificial intelligence fundamentals, machine learning algorithms, deep learning concepts, data analytics techniques, and real-world data-driven decision-making strategies."
    },
    {
      slug: "Cloud_&_DevOps",
      title: "Cloud & DevOps",
      text: "Focuses on cloud computing platforms, CI/CD pipelines, infrastructure as code, containerization, monitoring, and automation practices for scalable and reliable deployments."
    },
    {
      slug: "Full_Stack_Development",
      title: "Full Stack Development",
      text: "Covers front-end and back-end development, RESTful APIs, database integration, authentication systems, and modern web technologies for building complete web applications."
    },
    {
      slug: "Mobile_Development",
      title: "Mobile Development",
      text: "Introduces mobile app development for Android and iOS, cross-platform frameworks, UI components, state management, API integration, and performance optimization techniques."
    },
    {
      slug: "UI_UX_&_Creative_Design",
      title: "UI/UX & Creative Design",
      text: "Focuses on user experience research, wireframing, prototyping, visual design principles, usability testing, and creating intuitive and engaging digital interfaces."
    },
    {
      slug: "Database_&_Storage_Systems",
      title: "Database & Storage Systems",
      text: "Covers relational and NoSQL databases, data modeling, indexing, performance tuning, distributed storage systems, and secure data management strategies."
    }
  ]
  const navigate = useNavigate()

  return (
    <header className="main-header">

      {/* ===== Top Bar ===== */}
      <div className="top-bar d-none d-lg-flex p-lg-4">
        <Container className="d-flex justify-content-between align-items-center px-lg-5">
          <div className="top-left px-5">
            <span><IoMdMail className="icn" /> Hello@Email.co</span>
            <span className="ms-4"><FaPhoneAlt className="icn" /> +62 123 486 789</span>
          </div>

          <div className="top-right pe-5">
            <div className="footer-social">
              <span><FaFacebookF /></span>
              <span><FaTwitter /></span>
              <span><FaYoutube /></span>
              <span><FaPinterestP /></span>
            </div>
          </div>
        </Container>
      </div>

      {/* ===== Main Navbar ===== */}
      <Container>

        <Navbar
          expand="lg"
          expanded={expanded}
          variant="dark"   // 👈 add this

          className="custom-navbar py-lg-3 px-lg-5"
        >
          <Container fluid>

            {/* Logo */}
            <Navbar.Brand href="/" className="logo">
              <img src={lg} alt="Tehesu" />
            </Navbar.Brand>

            {/* Hamburger */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto nav-links">
                <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                <Nav.Link href="/about">About +</Nav.Link>
                <li className="nav-item custom-services-dropdown">
                  <span className="nav-link services-trigger">
                    Services +
                  </span>

                  <div className="services-dropdown-menu">
                    {clientIssues.map((ok, index) => (
                      <div
                        key={index}
                        className="services-dropdown-item"
                        onClick={() => {
                          navigate(`/courses/${ok.slug}`);
                          setExpanded(false);
                        }}
                      >
                        {ok.title}
                      </div>
                    ))}
                  </div>
                </li>             <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>

              <Button className="support-btn">
                Request Support →
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>        </Container>
    </header>
  );
};

export default CustomNavbar;