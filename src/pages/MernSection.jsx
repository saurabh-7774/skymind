import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { FaCheckCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const MernServiceSection = ({
  badgeText,
  heading,
  highlightText,
  descriptionOne,
  descriptionTwo,
  services = [],
  rightCardTitle,
  rightCardDescription,
  rightCardPoints = [],
  videoImage
}) => {
  return (
    <section className="mernSec_wrapper py-5">
      <Container>
        <Row className="align-items-start">

          {/* LEFT CONTENT */}
          <Col className="">
            <span className="mernSec_badge px-3 py-2 mb-3 d-inline-block">
              {badgeText}
            </span>

            <h1 className="mernSec_heading mernSec fw-bold display-5 mb-4">
              {heading}
              <span className="mernSec_highlight"> {highlightText}</span>
            </h1>

            <p className="mernSec_desc text-muted mb-3">
              {descriptionOne}
            </p>

            <p className="mernSec_desc text-muted mb-5">
              {descriptionTwo}
            </p>

          </Col>



        </Row>
      </Container>
    </section>
  );
};

export default MernServiceSection;