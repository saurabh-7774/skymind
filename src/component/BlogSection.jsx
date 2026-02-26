import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import img1 from "../assets/young-customer-support-representative-1024x682.jpg";
import img2 from "../assets/young-customer-support-representative-1024x682.jpg";
import img3 from "../assets/young-customer-support-representative-1024x682.jpg";

const blogs = [
    {
        image: img1,
        category: "Artificial Intelligence",
        date: { day: "12", month: "Jan" },
        title: "How Generative AI Is Reshaping Enterprise Automation",
        desc: "Explore how Generative AI and intelligent agents are transforming business workflows and operational efficiency across industries.",
        content: `
        Generative AI is revolutionizing enterprise automation by enabling intelligent
        document processing, predictive analytics, and conversational AI systems.
        Companies are now integrating AI agents into CRM, ERP, and customer support
        systems to increase efficiency and reduce operational costs.
        `
    },
    {
        image: img2,
        category: "Cloud & DevOps",
        date: { day: "28", month: "Jan" },
        title: "Cloud Migration Strategy: From Legacy Systems to Scalable Architecture",
        desc: "A complete guide to migrating enterprise systems to AWS, Azure, or GCP with DevOps automation and security best practices.",
        content: `
        Migrating to cloud platforms like AWS or Azure improves scalability,
        security, and deployment speed. A structured DevOps pipeline ensures
        zero downtime deployments and infrastructure automation.
        `
    },
    {
        image: img3,
        category: "Career & Internships",
        date: { day: "05", month: "Feb" },
        title: "How To Become Industry-Ready In AI & Data Science",
        desc: "Learn the roadmap to mastering AI, machine learning, and data analytics through practical training, live projects, and structured mentorship.",
        content: `
        Becoming industry-ready requires mastering Python, ML algorithms,
        real-world datasets, and working on live capstone projects with mentorship.
        Certifications and internship exposure add strong credibility.
        `
    }
];

const BlogSection = () => {

    const [show, setShow] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleShow = (blog) => {
        setSelectedBlog(blog);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <>
            <section className="blog-section">
                <Container>

                    <Row>
                        {blogs.map((blog, index) => (
                            <Col lg={4} md={6} className="mb-4" key={index}>
                                <div className="blog-card">

                                    <div className="blog-image-wrapper">
                                        <img src={blog.image} alt={blog.title} />

                                        <span className="category-badge">
                                            {blog.category}
                                        </span>

                                        <div className="date-badge">
                                            <strong>{blog.date.day}</strong>
                                            <span>{blog.date.month}</span>
                                        </div>
                                    </div>

                                    <div className="blog-content">
                                        <h5>{blog.title}</h5>
                                        <p>{blog.desc}</p>

                                        <span
                                            className="read-more"
                                            onClick={() => handleShow(blog)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Read More →
                                        </span>
                                    </div>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* 🔥 Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                size="lg"
                className="blog-modal"
            >
                {selectedBlog && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedBlog.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body >
                            <p className="modal-category">
                                {selectedBlog.category}
                            </p>
                            <br />
                            <img
                                src={selectedBlog.image}
                                alt={selectedBlog.title}
                                className="modal-image"
                            />


                            <p className="modal-content">
                                {selectedBlog.content}
                            </p>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={handleClose} className="blog-btn">
                                Close
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </>
    );
};

export default BlogSection;