import { Container, Button } from "react-bootstrap";

const CtaSection = () => {
  return (
    <section className="cta-section">

      <div className="overlay"></div>

      <Container className="cta-content text-center">

        <div className="badge3">
          FUTURE-READY TECHNOLOGY SOLUTIONS
        </div>

        <h2>
          Transform Your Business With <span>AI & Cloud Innovation</span><br />
          Or Accelerate Your Career In Tech.
        </h2>

        <p>
          Whether you're an enterprise seeking intelligent automation
          or a student aiming to build an industry-ready career in
          AI, Data Science, Cloud, or DevOps — we provide the
          expertise, training, and real-world execution you need.
        </p>

        <Button className="contact-btn">
          Get Started Today →
        </Button>

      </Container>

    </section>
  );
};

export default CtaSection;