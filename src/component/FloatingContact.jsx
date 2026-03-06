import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <>
      <a
        href="https://wa.me/919309174601"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919309174601"
        className="call-float"
      >
        <FaPhoneAlt />
      </a>
    </>
  );
};

export default FloatingContact;