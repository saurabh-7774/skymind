import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import faqImg from "../assets/customer-service-man-at-work-1024x682.jpg";

const faqData = [
    {
        question: "Do you provide AI solutions for enterprises?",
        answer:
            "Yes. We design and implement AI-driven automation, predictive analytics, and intelligent business solutions tailored to enterprise workflows and scalability requirements.",
    },
    {
        question: "Which cloud platforms do you work with?",
        answer:
            "We specialize in AWS, Microsoft Azure, and Google Cloud Platform. Our services include cloud migration, DevOps automation, CI/CD pipeline setup, and secure architecture design.",
    },
    {
        question: "Do you offer hands-on training in AI and Data Science?",
        answer:
            "Absolutely. Our training programs include real-world projects, mentorship from industry experts, and internship opportunities to ensure students become industry-ready.",
    },
    {
        question: "Are your programs suitable for beginners?",
        answer:
            "Yes. We provide structured learning paths starting from fundamentals to advanced AI, Machine Learning, Data Engineering, and Cloud technologies.",
    },
    {
        question: "Do you offer corporate training or long-term technology partnerships?",
        answer:
            "Yes. We offer customized corporate training programs and long-term enterprise partnerships focused on innovation, automation, and digital transformation.",
    },
    {
        question: "How do you ensure data security in AI and Cloud projects?",
        answer:
            "We follow industry best practices including encrypted communication, secure cloud architecture, role-based access control, and compliance with global security standards to protect sensitive business data.",
    },
    {
        question: "Do you provide real-world project experience during training?",
        answer:
            "Yes. Our programs are project-based and include live case studies, capstone projects, and mentorship to simulate real enterprise environments and improve practical skills.",
    },
    {
        question: "Can startups collaborate with you for product development?",
        answer:
            "Absolutely. We help startups design, build, and scale AI-powered products, SaaS platforms, and cloud-native applications with strategic technical guidance and implementation support.",
    },
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <Container>
                <Row className="align-items-center">

                    {/* LEFT SIDE */}
                    <Col lg={6}>
                        <div className="faq-badge">KNOWLEDGE & SUPPORT</div>

                        <h2 className="faq-title">
                            Everything You Need To Know About
                            <span> AI, Cloud & Career Growth.</span>
                        </h2>

                        <div className="faq-image">
                            <img src={faqImg} alt="FAQ" />
                        </div>
                    </Col>

                    {/* RIGHT SIDE */}
                    <Col lg={6}>
                        <div className="faq-accordion rounded-pill">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeIndex === index ? "active" : ""
                                        }`}
                                >
                                    <div
                                        className="faq-question rounded-pill"
                                        onClick={() => toggle(index)}
                                    >
                                        {item.question}
                                        <span>
                                            {activeIndex === index ? "▲" : "▼"}
                                        </span>
                                    </div>

                                    {activeIndex === index && (
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default FaqSection;