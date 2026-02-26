import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
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
        <footer className="footer-section">

            <Container>

                <Row className="gy-5">

                    {/* COLUMN 1 */}
                    <Col lg={4}>
                        <div className="footer-logo">
                            <h2>SkyMind Technologies</h2>
                            <p>
                                Empowering businesses and future professionals with
                                AI-driven innovation, cloud transformation, and
                                industry-focused technology training programs.
                            </p>

                            <div className="subscribe-box">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    className="subscribe-input"
                                />
                                <Button className="subscribe-btn">
                                    contact
                                </Button>
                            </div>
                        </div>
                    </Col>

                    {/* COLUMN 2 */}
                    <Col lg={2}>
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>AI Solutions</li>
                            <li>Training Programs</li>
                            <li>Contact</li>
                        </ul>
                    </Col>

                    {/* COLUMN 3 */}
                    <Col lg={3}>
                        <h5 className="footer-title">Our Expertise</h5>
                        <ul className="footer-links">
                            {clientIssues.map((ok) => {
                                return (
                                    <li  onClick={() => navigate(`/courses/${ok.slug}`)}>{ok.title}</li>
                                )
                            })}
                        </ul>
                    </Col>

                    {/* COLUMN 4 */}
                    <Col lg={3}>
                        <h5 className="footer-title">Head</h5>
                        <p className="footer-address">
                            📍 4th Floor, Shobhana Plaza, Shahid Circle,
                            Gangapur Road, Nashik – 422013
                        </p>

                        <h5 className="footer-title mt-4">Working Hours</h5>
                        <p>Monday - Friday | 9:00 AM - 6:00 PM</p>
                    </Col>

                </Row>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Row */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} SkyMind Technologies. All Rights Reserved.
                    </p>

                    <div className="footer-social">
                        <span><FaFacebookF /></span>
                        <span><FaTwitter /></span>
                        <span><FaYoutube /></span>
                        <span><FaLinkedinIn /></span>
                    </div>

                </div>

            </Container>

            {/* Scroll Top */}
            <div className="scroll-top">
                <FaArrowUp />
            </div>

        </footer>
    );
};

export default Footer;