import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import im from '../assets/businessman-wearing-headset-talking-to-caller-in-busy-customer-services-centre-682x1024.jpg'
import "swiper/css";

const testimonials = [
    // {
    //     text: "SMKCG helped us implement an AI-driven analytics system that significantly improved our operational efficiency and decision-making process.",
    //     name: "Rahul Mehta",
    //     role: "CTO, FinTech Company",
    //     image: im,
    // },
    {
        text: "The SkyMind internship program gave me real-world project experience in Machine Learning and helped me crack interviews.",
        name: "Priya Sharma",
        role: "Data Science Intern",
        image: im,
    },
    // {
    //     text: "Their cloud and DevOps expertise enabled us to migrate to AWS seamlessly with secure and scalable infrastructure.",
    //     name: "Amit Kulkarni",
    //     role: "IT Manager, Enterprise Client",
    //     image: im,
    // },
    {
        text: "The mentorship and mock interview sessions boosted my confidence and helped me secure a full stack developer role.",
        name: "Sneha Patil",
        role: "Full Stack Trainee",
        image: im,
    },
];

const TestimonialSection = () => {
    return (
        <section className="testimonial-section">

            <div className="overlay"></div>

            <Container className="testimonial-content">
                <Row className="align-items-center justify-content-evenly">

                    {/* LEFT SLIDER */}
                    <Col lg={6}>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={2}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                992: { slidesPerView: 2 },
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-card">
                                        <div className="stars">★★★★★</div>
                                        <p>{item.text}</p>

                                        <div className="client-info">
                                            {/* <img src={item.image} alt={item.name} /> */}
                                            <div>
                                                <h6>{item.name}</h6>
                                                <span>{item.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>

                    {/* RIGHT CONTENT */}
                    <Col lg={5} className="right-content">
                        <div className="badge3">CLIENT & STUDENT TESTIMONIALS</div>

                        <h2>
                            Trusted By Enterprises &
                            <span> Empowering Future Professionals.</span>
                        </h2>


                        <p>
                            From enterprise AI implementations to industry-driven internships,
                            our commitment to excellence, innovation, and practical learning
                            consistently earns the trust of clients and students alike.
                        </p>
                    </Col>

                </Row>
            </Container>

        </section>
    );
};

export default TestimonialSection;