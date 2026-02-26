import { Container, Row, Col } from "react-bootstrap";

const services = [

  {
    icon: "🔗",
    title: "AI, Data Science & Analytics",
    desc: "Covers artificial intelligence fundamentals, machine learning algorithms, deep learning concepts, data analytics techniques, and real-world data-driven decision-making strategies."
  },
  {
    icon: "🔗",
    title: "Cloud & DevOps",
    desc: "Focuses on cloud computing platforms, CI/CD pipelines, infrastructure as code, containerization, monitoring, and automation practices for scalable and reliable deployments."
  },
  {
    icon: "🔗",
    title: "Full Stack Development",
    desc: "Covers front-end and back-end development, RESTful APIs, database integration, authentication systems, and modern web technologies for building complete web applications."
  },
  {
    icon: "🔗",
    title: "Mobile Development",
    desc: "Introduces mobile app development for Android and iOS, cross-platform frameworks, UI components, state management, API integration, and performance optimization techniques."
  },
  {
    icon: "🔗",
    title: "UI/UX & Creative Design",
    desc: "Focuses on user experience research, wireframing, prototyping, visual design principles, usability testing, and creating intuitive and engaging digital interfaces."
  },
  {
    icon: "🔗",
    title: "Database & Storage Systems",
    desc: "Covers relational and NoSQL databases, data modeling, indexing, performance tuning, distributed storage systems, and secure data management strategies."
  }
]
const ServicesSection = () => {
  return (
    <section className="services-section ">
      <div className="names">
        <Container>
          <div className="badge-title">
            OUR CORE SERVICES
          </div>

          <h2 className="section-title">
            Innovative <span>Technology & Training Solutions</span><br />
            Powering Digital Transformation
          </h2>

          {/* Cards */}
          <Row className="mt-5">
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <div className="service-card">

                  <div className="icon-circle">
                    {service.icon}
                  </div>

                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>

                  <a href="#" className="learn-more">
                    Learn More →
                  </a>

                </div>
              </Col>
            ))}
          </Row>

        </Container>
      </div>
    </section>
  );
};

export default ServicesSection;