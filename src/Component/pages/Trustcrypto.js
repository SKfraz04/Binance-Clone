import React from "react";
import { Container, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Trustcrypto.css";

const Trustcrypto = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className="col-md-12 trust-crypto-headline">
            <div className="d-flex ">
              <h3 className="col-md-10">Your trusted crypto exchange</h3>
              <a href="/" className="col-md-2">
                Learn more <MdKeyboardArrowRight />
              </a>
            </div>
            <p>
              Here at Binance, we are committed to user protection with strict
              protocols and industry-leading technical measures.
            </p>
          </div>
          <div className="col-md-6 py-5">
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  src="./image/secure-asset.svg"
                  alt="nft"
                  width={72}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 trust-crypto-content">
                <h4>Secure Asset Fund for Users (SAFU)</h4>
                <p>
                  Binance stores 10% of all trading fees in a secure asset fund
                  to protect a share of user funds.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  src="./image/access-control.svg"
                  alt="nft"
                  width={72}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 trust-crypto-content">
                <h4>Personalised Access Control</h4>
                <p>
                  Personalized access control allows you to restrict devices and
                  addresses that can access your account, for greater ease of
                  mind.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  src="./image/unlock.svg"
                  alt="nft"
                  width={72}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 trust-crypto-content">
                <h4>Advanced Data Encryption</h4>
                <p>
                  Your transaction data is secured via end-to-end encryption,
                  ensuring that only you have access to your personal
                  information.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <button className="binance-button w-100 my-5">Start Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="trust-crypto-img">
              <img
                src="./image/trusted-section.webp"
                alt="trusted crypto"
                className="img-fluid"
              />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Trustcrypto;
