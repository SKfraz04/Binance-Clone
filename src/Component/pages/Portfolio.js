import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <selection>
      <Container>
        <Row className="py-5">
          <div className="portfolio-heading col-md-6">
            <div className="d-flex py-5">
              <div>
                <h3>Build your crypto portfolio</h3>
                <p> Start your first trade with these easy steps.</p>
              </div>
            </div>
            <div>
              <div className="d-flex py-3">
                <img
                  src="./image/kyc.svg"
                  alt="kyc"
                  width={80}
                  className="img-fluid col-md-2 me-5"
                />
                <div>
                  <h4>Verify your identity</h4>
                  <p>
                    Complete the identity verification process to secure your
                    account and transactions.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex py-3">
                <img
                  src="./image/user.svg"
                  alt="kyc"
                  width={80}
                  className="img-fluid col-md-2 me-5"
                />
                <div>
                  <h4>Fund your account</h4>
                  <p>
                    Add funds to your crypto account to start trading crypto.
                    You can add funds with a variety of payment methods.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex py-3">
                <img
                  src="./image/spot.svg"
                  alt="kyc"
                  width={80}
                  className="img-fluid col-md-2 me-5"
                />
                <div>
                  <h4>Start trading</h4>
                  <p>
                    You're good to go! Buy/sell crypto, set up recurring buys
                    for your investments, and discover what Binance has to
                    offer.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="mt-5 col-md-4 binance-button">Get Started</button>
            </div>
          </div>
          <div className="col-md-6 text-center binance-portfolio">
            <img
              src="./image/portfolio-section.webp"
              alt="binance profile"
              className="binance-profile img-fluid"
            />
          </div>
        </Row>
      </Container>
    </selection>
  );
};

export default Portfolio;
