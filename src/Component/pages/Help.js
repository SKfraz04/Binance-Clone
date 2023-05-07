import React from "react";
import { Container, Row } from "react-bootstrap";

const Help = () => {
  return (
    <section>
      <Container>
        <Row>
          <h2>Need help?</h2>
          <div className="d-flex need-help-cards">
            <div className="need-help-card col-md-4">
              <img src="./image/cs.svg" alt="" />
              <h4>24/7 Chat Support</h4>
              <p>
                Get 24/7 chat support with our friendly customer service agents
                at your service.
              </p>
              <a href="/">Chat Now</a>
            </div>
            <div className="need-help-card col-md-4">
              <img src="./image/comminity.svg" alt="" />
              <h4>FAQs</h4>
              <p>View FAQs for detailed instructions on specific features.</p>
              <a href="/">Learn more..</a>
            </div>
            <div className="need-help-card col-md-4">
              <img src="./image/blog.svg" alt="" />
              <h4>Blog</h4>
              <p>Stay up to date with the latest stories and commentary.</p>
              <a href="/">Learn more..</a>
            </div>
          </div>
          <div className="start-earning">
            <h2>Start earning Today</h2>
            <button className="binance-button">Sign uo Now</button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Help;
