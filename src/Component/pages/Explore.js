import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Explore.css";

const Explore = () => {
  return (
    <section className=" py-5"> 
      <Container>
        <Row>
          <div className="py-5 explore-topic">
            <h2>Explore endless possibilities with Binance</h2>
          </div>
          <div className="d-flex main-explore">
            <div className="col-md-4 explore-card">
              <div className="cards p-4">
                <img src="./image/nft.webp" alt="nft" className="img-fluid" />
                <div className="explore-contant">
                  <h4>Dive into the world of NFTs</h4>
                  <p>
                    Open rear Mistory Box, Explore IGOs, Fan Tokans, and more
                    with Binance NFT.
                  </p>
                  <a href="/" className="explore-contant-ancer">Learn more</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 explore-card">
              <div className="cards p-4">
                <div className="explore-contant">
                  <h4>Grow your business with Binance Pay</h4>
                  <p>
                    Reach more customers as you paid and get paid n other
                    borderless payment system on Binance Pay & Binance
                    MarketPlace
                  </p>
                  <a href="/" className="explore-contant-ancer">Learn more</a>
                </div>
                <img src="./image/nft2.webp" alt="nft" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4 explore-card">
              <div className="cards p-4">
                <img src="./image/nft3.webp" alt="nft" className="img-fluid" />
                <div className="explore-contant">
                  <h4>Binance Earning</h4>
                  <p>Hold your crypto and start Earning</p>
                  <a href="/" className="explore-contant-ancer">Learn more</a>
                </div>
              </div>
            </div>
          </div>
            <div className="col-md-2 my-5">
            <button className="binance-button">Explore Now</button>
            </div>
        </Row>
      </Container>
    </section>
  );
};

export default Explore;
