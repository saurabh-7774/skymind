import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Container, Row, Col, Form, Button } from "react-bootstrap";


const HeroSlider = () => {
  return (
    <section className="hero-slider">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
      >

        {/* Slide 1 */}
        {/* <SwiperSlide>
          <div className="slide slide-1">
            <div className="overlay"></div>

            <Container className="hero-content px-2 px-lg-5">
              <Row className="align-items-center justify-content-evenly">

                <Col lg={6} className="hero-left" >
                  <h1>
                    Smart Minds. <br />
                    <span>Smarter Solutions.</span>
                  </h1>
                  <p>
                    SMKCG Pvt Ltd delivers cutting-edge Artificial Intelligence, Cloud Engineering,
                    Enterprise Software Development, and Digital Transformation solutions
                    to help businesses scale faster and innovate smarter.
                  </p>
                </Col>

                <Col lg={4} className=" form-section">
                  <div className="hero-form-card">
                    <h5 className="form-title">Whether You Need On Site Support</h5>

                    <Form>
                      <Form.Control className="mb-3" placeholder="Your Name" />
                      <Form.Control className="mb-3" placeholder="Email" />
                      <Form.Control className="mb-3" placeholder="Your Need" />
                      <Button className="w-100 submit-btn">
                        Start Your Digital Transformation Today
                      </Button>
                    </Form>
                  </div>
                </Col>

              </Row>
            </Container>
          </div>
        </SwiperSlide> */}
    {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide slide-1">
            <div className="overlay"></div>

            <Container className="hero-content px-2 px-lg-5">
              <Row className="align-items-center justify-content-evenly">

                <Col lg={6} className="hero-left">
                  <h1>
                    Build Your Career In <br />
                    <span>AI & Advanced Technologies</span>
                  </h1>
                  <p>
                    SkyMind IT Training & Solutions offers industry-driven internships
                    in AI, Data Science, Cloud, Full Stack Development, and DevOps
                    with live projects and 100% placement assistance.
                  </p>
                </Col>

                <Col lg={4} className="form-section">
                  <div className="hero-form-card">
                    <h5 className="form-title">  Book a Free IT Consultation</h5>

                    <Form>
                      <Form.Control className="mb-3" placeholder="Your Name" />
                      <Form.Control className="mb-3" placeholder="Email" />
                      <Form.Control className="mb-3" placeholder="Your Need" />
                      <Button className="w-100 submit-btn">
                        Apply For Internship / Training
                      </Button>
                    </Form>
                  </div>
                </Col>

              </Row>
            </Container>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide slide-2">
            <div className="overlay"></div>

            <Container className="hero-content px-2 px-lg-5">
              <Row className="align-items-center justify-content-evenly">

                <Col lg={6} className="hero-left">
                  <h1>
                    Build Your Career In <br />
                    <span>AI & Advanced Technologies</span>
                  </h1>
                  <p>
                    SkyMind IT Training & Solutions offers industry-driven internships
                    in AI, Data Science, Cloud, Full Stack Development, and DevOps
                    with live projects and 100% placement assistance.
                  </p>
                </Col>

                <Col lg={4} className="form-section">
                  <div className="hero-form-card">
                    <h5 className="form-title">  Book a Free IT Consultation</h5>

                    <Form>
                      <Form.Control className="mb-3" placeholder="Your Name" />
                      <Form.Control className="mb-3" placeholder="Email" />
                      <Form.Control className="mb-3" placeholder="Your Need" />
                      <Button className="w-100 submit-btn">
                        Apply For Internship / Training
                      </Button>
                    </Form>
                  </div>
                </Col>

              </Row>
            </Container>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default HeroSlider;