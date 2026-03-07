import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const EnquiryPopup = ({ show, handleClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("YOUR_GOOGLE_SCRIPT_URL_HERE", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      alert("Enquiry Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: ""
      });

      handleClose(); // close popup

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="enquiry-modal"
    >

      <Modal.Header closeButton className="enquiry-header">
        <Modal.Title>Book Free Consultation</Modal.Title>
      </Modal.Header>

      <Modal.Body className="enquiry-body">

        <p className="enquiry-subtitle">
          Talk with our experts and get the best solution for your business.
        </p>

        <Form onSubmit={handleSubmit}>

          <div className="input-group-custom">
            <FaUser className="input-icon" />
            <Form.Control
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group-custom">
            <FaEnvelope className="input-icon" />
            <Form.Control
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group-custom">
            <FaPhone className="input-icon" />
            <Form.Control
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="enquiry-btn w-100"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </Button>

        </Form>

      </Modal.Body>

    </Modal>
  );
};

export default EnquiryPopup;