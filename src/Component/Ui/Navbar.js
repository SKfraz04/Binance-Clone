import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiBinance } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { FiGift, FiSun } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoMdMoon } from "react-icons/io";
import { useState, useEffect } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import Login from "../pages/Login";
// import LoginPage from "../pages/LoginPage";

function NavScrollExample() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove(theme === "light" ? "dark" : "light");
    body.classList.add(theme);
  }, [theme]);

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand fluid className="brandlogo" href="#">
        <SiBinance /> BINANCE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Container>
          <Nav
            className="me-auto my-2 my-lg-0 d-flex"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title={<CgMenuGridR />} id="navbarScrollingDropdown">
              <NavDropdown.Item className="d-flex menu1" href="#action1" >
                <div>
                  <h4>Exchange</h4> <p>BlockChain & Crypro assets</p>{" "}
                </div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2" className="d-flex">
              <div><h4>Charity</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3" className="d-flex">
              <div><h4>Labs</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="d-flex">
              <div><h4>Trust Wallet</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className="d-flex">
              <div><h4>BABT</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              <div><h4>Academy</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7" className="d-flex">
              <div><h4>Cloud</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8" className="d-flex">
              <div><h4>Lounch Pad</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9" className="d-flex">
              <div><h4>Binance Gift</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action10" className="d-flex">
              <div><h4>Learn & Earn</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action11" className="d-flex">
              <div><h4>DEX</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action12" className="d-flex">
              <div><h4>Research</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action13" className="d-flex">
              <div><h4>BinanceLive</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Buy Crypro ₹" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className="d-flex">
                <div><h4>P2P Trading</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3" className="d-flex">
                <div><h4>Third-Party Payment</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Market</Nav.Link>
            <NavDropdown title="Trading" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1" className="d-flex">
                <div><h4>Binance Convert</h4> <p>BlockChain & Crypro assets</p>{" "}</div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2" className="d-flex">
                <div><h4>Spot</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3" className="d-flex">
                <div><h4>Margin</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="d-flex">
                <div><h4>Strategy Trading</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5"className="d-flex">
                <div><h4>P2P</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6" className="d-flex" >
                <div><h4>Swap Farming</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7"className="d-flex">
                <div><h4>Fan Tokan</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8"className="d-flex">
                <div><h4>Binance OTC</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Darivative" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1"className="d-flex">
                <div><h4>USD-M Futures</h4> <p>BlockChain & Crypro assets</p>{" "}</div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2"className="d-flex">
                <div><h4>Coin-M Future</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3"className="d-flex">
                <div><h4>Options</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4"className="d-flex">
                <div><h4>Leverage Tokan</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5"className="d-flex">
                <div><h4>Leaderboard</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6"className="d-flex">
                <div><h4>Binance Future OverView</h4>{" "}</div>
                <p>BlockChain & Crypro assets</p>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7"className="d-flex">
                <div><h4>Responsible Trading</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8"className="d-flex">
                <div><h4>Blog</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8"className="d-flex">
                <div><h4>VIP Potal</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Earn" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1"className="d-flex">
                <div><h4>Binance Earn</h4> <p>BlockChain & Crypro assets</p>{" "}</div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2"className="d-flex">
                <div><h4>Simple Earn</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3"className="d-flex">
                <div><h4>BNB Value</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4"className="d-flex">
                <div><h4>Lequidity Farmimg</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5"className="d-flex">
                <div><h4>Binance Pool</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6"className="d-flex">
                <div><h4>Binance Future OverView</h4>{" "}</div>
                <p>BlockChain & Crypro assets</p>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7"className="d-flex">
                <div><h4>Responsible Trading</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8"className="d-flex">
                <div><h4>Blog</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8"className="d-flex">
                <div><h4>VIP Potal</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8"className="d-flex">
                <div><h4>VIP Potal</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Finance" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1"className="d-flex">
                <div><h4>Binance Card</h4> <p>BlockChain & Crypro assets</p>{" "}</div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2"className="d-flex">
                <div><h4>Crypto Loan</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3"className="d-flex">
                <div><h4>Binance Pay</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4"className="d-flex">
                <div><h4>Biannce Gift Card</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">NFT</Nav.Link>
            <NavDropdown title="Earn" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1"className="d-flex">
                <div><h4>Institusional Home</h4> <p>BlockChain & Crypro assets</p>{" "}</div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2" className="d-flex">
                <div><h4>Assets Management Solution</h4>{" "}
                <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3" className="d-flex">
              <div><h4>Custody</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="d-flex">
              <div> <h4>APIs</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className="d-flex">
              <div> <h4>Excution & OTC Service</h4>{" "}
                <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6" className="d-flex">
              <div> <h4>LInk</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7" className="d-flex">
              <div> <h4>VIP Potal</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8" className="d-flex">
              <div> <h4>VIp Loan</h4> <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8" className="d-flex">
              <div> <h4>Historical Markit Data</h4>{" "}
                <p>BlockChain & Crypro assets</p></div>
                <BsArrowRight />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Feed</Nav.Link>
            <ul className="d-flex footer-button">
              <li>
                <a href={<Login />}>Log In</a>
              </li>
              <li>
                <button className="binance-button">
                  <FiGift />
                  Register
                </button>
              </li>
              <li>
                <a href="/">
                  <MdFileDownload />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <TbWorld />{" "}
                </a>
              </li>
              <li>
                <a href="/"> USD</a>
              </li>
              <li>
                <div className="dark-mode">
                  <dark-mode-button onClick={toggleTheme}>
                    {theme === "light" ? <IoMdMoon /> : <FiSun />}
                  </dark-mode-button>
                </div>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavScrollExample;
