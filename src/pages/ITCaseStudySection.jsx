import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ITCaseStudySection = ({
    image,
    badge,
    title,
    highlight,

    description,
    heroTitle,
    clientTitle,
    clientDescription,
    clientIssues = [],
    benefits = [],
}) => {
    const navigate = useNavigate()

    return (
        < section className="itcasestudy-section" >
            <Container>

                {/* Top Image */}


                <Row className="itcasestudy-content px-lg-5 ">


                    {/* RIGHT CONTENT */}
                    <Col lg={8} className="pt-4">
                        {/* <div className="itcasestudy-image">
                            <img src={image} alt="Case Study" />
                        </div> */}
                        <div className="itcasestudy-right">


{/* 
                            <h2>
                                <span>{heroTitle}</span>
                            </h2> */}

                            <div
                                className="itcasestudy-description"
                                dangerouslySetInnerHTML={{ __html: description }}
                            ></div>



                        </div>
                    </Col>

                    {/* LEFT CLIENT INFO */}
                    <Col lg={4}>
                        <div className="itcasestudy-client">
                            <h5>
                                Course Modules & Specializations
                            </h5>
                            <p>Dive into specialized modules covering advanced concepts, real-world applications, and industry-relevant technologies.</p>
                            {benefits.map((issue, index) => (
                                <div key={index} className="itcasestudy-issue" onClick={() => navigate(`/coursedetils/${issue.slug}`)}>
                                    <span className="dot"></span>
                                    <div>
                                        <strong>{issue.label}</strong>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

            </Container>
        </section >
    );
};

export default ITCaseStudySection;