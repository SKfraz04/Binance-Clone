import { Container, Row } from "react-bootstrap";
import { FiGift } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import "../pages/LoginPage.css";
// import { useState, useEffect } from "react";

const LoginPage = () => {
  return (
    <section className="loginpage py-5">
      <Container>
        <Row>
          <div className="col-md-6 my-auto loginpage-discription">
            <h1 className="py-5">
              Buy, trade, and hold 350+ cryptocurrencies on Binance
            </h1>
            <a href="/">
              <span>
                <FiGift />
              </span>
              Trade Bitcoin for free <MdKeyboardArrowRight />
            </a>
            <button className="col-md-8 my-5 binance-button">
              <CgProfile />
              Sign up with Email or Phone
            </button>
            <h3 className="col-md-8 me-auto">
              <span>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;</span>or
              continue with
              <span>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;</span>
            </h3>
            <div className="d-flex col-md-8">
              <button className="binance-button2 col-md-6 me-3">
                <FcGoogle /> Google
              </button>
              <button className="binance-button2 col-md-6">
                <BsApple /> Apple
              </button>
            </div>
          </div>
          <div className="col-md-6 login-page-right">
            <img src="./image/foreground.png" alt="nft" className="img-fluid" />
          </div>
          <div className="col-md-12 d-flex pt-5 binance-users">
            <div className="binance-user col-md-3 pe-5">
              <h2>$38 billion</h2>
              <p>24h trading volume on Binance exchange</p>
            </div>
            <div className="binance-user col-md-3 pe-5 ">
              <h2>350+</h2>
              <p>Cryptocurrencies listed</p>
            </div>
            <div className="binance-user col-md-3 pe-5 ">
              <h2>120 million</h2>
              <p>Registered users</p>
            </div>
            <div className="binance-user col-md-3 pe-5 ">
              <h2>0.10%</h2>
              <p>Lowest transaction fees</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage;
