import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import lg from '../assets/llg.png'
import { FaPhoneAlt } from "react-icons/fa";
import { clientIssues } from './course'
import { courses } from './subcourse'

import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [activeCourse, setActiveCourse] = useState(courses[0].slug);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowSideNav(true);
      } else {
        setShowSideNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate = useNavigate()

  return (
    <header className="main-header">

      {/* ===== Top Bar ===== */}
      <div className="top-bar d-none d-lg-flex px-lg-4">
        <Container className="d-flex justify-content-between align-items-center px-lg-5">
          <div className="top-left px-5">
            <span ><IoMdMail className="icn" /><a onClick={(e) => e.stopPropagation()}
              style={{ textDecoration: "none", color: "inherit" }}
            > info@smkcg.com</a> </span>
            <span className="ms-4">
              <FaPhoneAlt className="icn" />
              <a
                href="tel:+919309174601"
                style={{ textDecoration: "none", color: "inherit" }} onClick={(e) => e.stopPropagation()}

              >
                +91 9309174601
              </a>
            </span>          </div>

          <div className="top-right pe-5">
            <div className="footer-social">
              <span>
                <a href="https://www.facebook.com/people/SkyMind/61585457930638/#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              </span>

              <span>
                <a href="https://www.instagram.com/skymind.it/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </span>

              <span>
                <a href="https://www.linkedin.com/company/skymind-it-training-solutions/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </span>

              <span>
                <a href="https://www.google.com/maps?sca_esv=0c0ded2c55dfde36&sxsrf=ANbL-n6TG_khw30nQUq_USjek_Z70bA0wQ:1772647894325&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiI3NreW1pbmQgaXQgc29sdXRpb25zIG5hc2hpayB5b3V0dWJlMggQIRigARjDBEinFlD3CFiUE3ACeACQAQCYAdoCoAH0DaoBBzAuNC4yLjK4AQPIAQD4AQGYAgagAsAFwgILEAAYiQUYogQYsAPCAgsQABiABBiiBBiwA8ICCBAAGO8FGLADwgIEECMYJ8ICCBAAGIkFGKIEwgIIEAAYgAQYogTCAgUQABjvBcICChAhGAoYoAEYwwSYAwCIBgGQBgWSBwUyLjMuMaAH4RuyBwUwLjMuMbgHtwXCBwUxLjIuM8gHDoAIAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTkBWkmR6907MUJkNQID13cA&daddr=4th+floor,+Shobana+Palza,+Shahid+Circle,+Gangapur+Rd,+above+Sai+Chinese+Corner,+Abhyuday+Colony,+S.T.+Colony,+Nashik,+Maharashtra+422013" target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt />
                </a>
              </span>
            </div>
          </div>
        </Container>
      </div>
      {showSideNav && (
        <div className="vertical-navbar-super">
          <div className="vertical-navbar">

            <div className="vertical-item" onClick={() => navigate("/")}>
              <FaHome />
              <span>Home</span>
            </div>

            <div className="vertical-item" onClick={() => navigate("/about")}>
              <FaInfoCircle />
              <span>About</span>
            </div>

            {/* Services Dropdown */}
            <div className="vertical-services">

              <div className="vertical-item">
                <FaServicestack />
              </div>

              <div className="vertical-services-dropdown">
                {clientIssues.map((ok, index) => (
                  <div
                    key={index}
                    className="vertical-sub-item"
                    onClick={() => navigate(`/courses/${ok.slug}`)}
                  >
                    {ok.title}
                  </div>
                ))}
              </div>

            </div>

            <div className="vertical-item" onClick={() => navigate("/contact")}>
              <FaPhone />
              <span>Contact</span>
            </div>

          </div>
        </div>
      )}
      {/* ===== Main Navbar ===== */}
      <Container>

        <Navbar
          expand="lg"
          expanded={expanded}
          variant="dark"   // 👈 add this

          className="custom-navbar -lg-3 px-lg-5"
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

                  <div className="services-dropdown-menu mega-menu">

                    <div className="mega-container">

                      {/* LEFT SIDE - MAIN COURSES */}
                      <div className="mega-left">
                        {courses.map((course, index) => (
                          <div
                            key={index}
                            className={`mega-course-tab ${activeCourse === course.slug ? "active" : ""
                              }`}
                            onClick={() => setActiveCourse(course.slug)}
                          >
                            {course.heroTitle}
                          </div>
                        ))}
                      </div>

                      {/* RIGHT SIDE - SUBCOURSES */}
                      <div className="mega-right">
                        {courses
                          .find((c) => c.slug === activeCourse)
                          ?.subcourses.map((sub, i) => (
                            <div
                              key={i}
                              className="mega-subcourse"
                              onClick={() => {
                                navigate(`/coursedetils/${sub.slug}`);
                                setExpanded(false);
                              }}
                            >
                              {sub.label}
                            </div>
                          ))}
                      </div>

                    </div>

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