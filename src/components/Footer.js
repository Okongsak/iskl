import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <Link to="/">
              <img className="logo-footer" src="/logo_white_sh.png" alt="" />
            </Link>
          </Col>
          <Col md={8} sm={12}>
            <div className="footer-detail">
              <span>
                Copyright © 2023 Pacific Prime Insurance Brokers Limited (PPIB).
                All rights reserved. <br/> PPIB is a licensed insurance broker company
                subject to the regulation of the Insurance Authority (IA) of
                Hong Kong (Reg. No. FB1422).<br/> Pacific Prime | Unit 5-11, 35/F,
                One Hung To Rd, Hong Kong
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footers;
