import { Container, Row, Col, Button } from "react-bootstrap";
import {
    FiClock,
    FiAward,
    FiZap,
    FiShield,
    FiPackage,
    FiSettings
} from "react-icons/fi";
import csss from '../assets/customer-service-man-at-work-1024x682.jpg'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const features = [
    {
        title: "AI & Generative AI Expertise",
        desc: "Advanced machine learning, deep learning, NLP, and intelligent automation systems.",
        icon: <FiZap />,
        active: true,
    },
    {
        title: "Certified Industry Professionals",
        desc: "Experienced AI architects, cloud engineers, and enterprise developers.",
        icon: <FiAward />,
    },
    {
        title: "Cloud & DevOps Excellence",
        desc: "Scalable AWS, Azure, GCP infrastructure with CI/CD and automation pipelines.",
        icon: <FiSettings />,
    },
    {
        title: "Enterprise-Grade Security",
        desc: "Secure system architecture, data protection, and compliance-ready frameworks.",
        icon: <FiShield />,
    },
    {
        title: "Industry-Driven Internship Programs",
        desc: "Hands-on projects, interview preparation, and structured placement support.",
        icon: <FiPackage />,
    },
    {
        title: "Long-Term Technology Partnership",
        desc: "Strategic consulting and continuous innovation for sustainable growth.",
        icon: <FiClock />,
    },
];

const SupportSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }, []);

    return (
        <section>

            {/* ===== BOTTOM CONTENT ===== */}
            <Container className="mt-5">
                <Row className="align-items-center mb-5">

                    <Col lg={6} data-aos="fade-right">
                        <div className="badge-title">
                            WHY OUR CLIENTS TRUST US
                        </div>

                        <h3 className="support-title">
                            Enterprise-Grade Solutions
                            <span> Backed By Industry Experts.</span>
                        </h3>
                    </Col>

                    <Col lg={7} className="pt-2" data-aos="fade-left">
                        <p>
                            Our team of certified engineers, AI architects, and corporate trainers
                            bring real-world experience to every project and training program,
                            ensuring scalable solutions and career-ready professionals.
                        </p>
                    </Col>

                </Row>

                {/* FEATURES GRID */}
                <Row>
                    {features.map((item, index) => (
                        <Col
                            md={6}
                            lg={4}
                            key={index}
                            className="mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                        >
                            <div className={`feature-card ${item.active ? "active" : ""}`}>
                                <div className="feature-icon">
                                    {item.icon}
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>

            {/* ===== TOP IMAGE AREA ===== */}
            <div className="support-hero">

                <div className="overlay"></div>

                <Container className="support-hero-content">
                    <Row className="tools-content">

                        <Col md={6} data-aos="fade-up">

                            <div className="badge3">WHY CHOOSE SMKCG</div>

                            <h2>
                                Driving Innovation With <br />
                                <span>AI, Cloud & Enterprise Expertise</span>
                            </h2>

                            <p>
                                SkyMind offers Training Excellence through an Industry-Relevant Curriculum with Hands-On Practical learning and Real-World Projects...
                            </p>

                            <Button
                                className="contact-btn"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                Contact Us →
                            </Button>

                        </Col>

                    </Row>
                </Container>

            </div>

        </section>
    );
};

export default SupportSection;