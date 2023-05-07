import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaDiscord, FaTelegramPlane, FaRedditAlien } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className="d-flex footer-content">
            <div className="footer-about-us">
              <ul>
                <h4>About Us</h4>
                <li>About</li>
                <li>Careers</li>
                <li>Business Contacts</li>
                <li>Community</li>
                <li>Binance Blog</li>
                <li>Building Trust</li>
                <li>Legal</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Risk Warning</li>
                <li>Announcements</li>
                <li>News</li>
                <li>Notices</li>
                <li>Sitemap</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div className="footer-products">
              <ul>
                <h4>Product</h4>
                <li>Exchange</li>
                <li>Academy</li>
                <li>Binance Live</li>
                <li>Charity</li>
                <li>Card</li>
                <li>Labs</li>
                <li>Launchpad</li>
                <li>Research</li>
                <li>Trust Wallet</li>
                <li>NFT</li>
                <li>Binance Pay</li>
                <li>Binance Gift Card</li>
                <li>BABT</li>
              </ul>
            </div>
            <div className="footer-service">
              <ul>
                <h4>Service</h4>
                <li>Downloads</li>
                <li>Desktop Application</li>
                <li>Buy Crypto</li>
                <li>Institutional & VIP Services</li>
                <li>OTC Trading</li>
                <li>Referral</li>
                <li>Affiliate</li>
                <li>BNB</li>
                <li>Listing Application</li>
                <li>P2P Merchant Application</li>
                <li>P2Pro Merchant Application</li>
                <li>Historical Market Data</li>
                <li>Proof of Reserves</li>
              </ul>
            </div>
            <div className="footer-support">
              <ul>
                <h4>Support</h4>
                <li>Request a Feature</li>
                <li>Support Center</li>
                <li>24/7 Chat Support</li>
                <li>APIs</li>
                <li>Fees</li>
                <li>Trading Rules</li>
                <li>Binance Verify</li>
                <li>Law Enforcement Requests</li>
                <li>Binance Legal (Court Orders)</li>
                <li>Binance Airdrop Portal</li>
              </ul>
            </div>
            <div className="footer-learn">
              <ul>
                <h4>Learn</h4>
                <li>Learn & Earn</li>
                <li>Browse Crypto Prices</li>
                <li>Bitcoin Price</li>
                <li>Ethereum Price</li>
                <li>Buy BUSD</li>
                <li>Buy Bitcoin</li>
                <li>Buy Ethereum</li>
                <li>Buy Dogecoin</li>
                <li>Buy XRP</li>
                <li>Buy Tradable Altcoins</li>
              </ul>
            </div>
            <div className="footer-community">
              <ul>
                <h4>Community</h4>
                <li>
                  <FaDiscord />
                </li>
                <li>
                  <FaTelegramPlane />
                </li>
                <li>
                  <SiTiktok />
                </li>
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <BsTwitter />
                </li>
                <li>
                  <FaRedditAlien />
                </li>
                <li>
                  <FiInstagram />
                </li>
                <li>
                  <AiFillYoutube />
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
      <div className="footer-bottom text-center">
      <hr />
      <h6>Binance © 2023</h6>
      </div>
    </section>
  );
};

export default Footer;
