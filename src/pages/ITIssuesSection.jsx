import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import itIssuesImg from "../assets/customer-service-man-at-work-1024x682.jpg"
const ITIssuesSection = ({ itIssuesFeatures, heroTitle }) => {
  const navigate = useNavigate()
  return (
    <section className="itissues-section">

      <div className="itissues-overlay"></div>

      <Container className="itissues-content">

        {/* <div className="badge3">WHO WE ARE</div> */}

        <h2 className="itissues-title">

          <span>  Also Visit</span>
        </h2>

        <Row className="align-items-center mt-5 pt-5  justify-content-evenly">

          {itIssuesFeatures.map((item, index) => (
            <Col md={4} key={index} className="mb-4" onClick={() => navigate(`/courses/${item.slug}`)}>
              <div className={`itissues-card ${item.active ? "active" : ""}`}>
                <span className="itissues-card-number">
                  {index}
                </span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>


      </Container>

    </section>
  );
};

export default ITIssuesSection;