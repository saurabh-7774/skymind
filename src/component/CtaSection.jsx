import { Container, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CtaSection = () => {
  const navigate = useNavigate()
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out"
      });
    }, []);

  return (
    <section className="cta-section">

      <div className="overlay"></div>

      <Container className="cta-content text-center">

        <div className="badge3" data-aos="fade-up">
          FUTURE-READY TECHNOLOGY SOLUTIONS
        </div>

        <h2 data-aos="fade-up" data-aos-delay="100">
          Transform Your Business With <span>AI & Cloud Innovation</span><br />
          Or Accelerate Your Career In Tech.
        </h2>

        <p data-aos="fade-up" data-aos-delay="200">
          Whether you're an enterprise seeking intelligent automation
          or a student aiming to build an industry-ready career in
          AI, Data Science, Cloud, or DevOps — we provide the
          expertise, training, and real-world execution you need.
        </p>

        <Button
          className="contact-btn"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={()=>navigate("/coursedetils/advanced-ai-engineering")}
        >
          Get Started Today →
        </Button>

      </Container>

    </section>
  );
};

export default CtaSection;