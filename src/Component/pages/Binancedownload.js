import React from "react";
import { Container } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsApple, BsPlugFill } from "react-icons/bs";
import { RiGooglePlayFill } from "react-icons/ri";
import { MdOutlineAndroid } from "react-icons/md";
import { DiLinux } from "react-icons/di";
import { AiFillWindows } from "react-icons/ai";
import { SiMacos } from "react-icons/si";
import "./Binancedownload.css";
const Binancedownload = () => {
  return (
    <section>
      <Container>
        <div className="d-flex Download-section">
          <div className="col-md-10 download-content-left">
            <h3>Trade on the go. Anywhere, anytime.</h3>
            <p>Stay in the know with our app and desktop client.</p>
          </div>
          <div className="col-md-2">
            <a href="/">
              More download option <MdKeyboardArrowRight />
            </a>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-md-6 p-5">
            <div>
              <img
                src="./image/download-section.webp"
                alt="binance"
                className="img-fluid"
              />
            </div>
          </div>
          <div col-md-6>
            <div className="barcode-card d-flex">
              <svg
                shape-rendering="crispEdges"
                height="86"
                width="86"
                viewBox="0 0 37 37"
              >
                <path fill="#FFFFFF" d="M0,0 h37v37H0z"></path>
                <path
                  fill="#000000"
                  d="M0 0h7v1H0zM8 0h1v1H8zM12 0h1v1H12zM17 0h1v1H17zM19 0h5v1H19zM25 0h1v1H25zM30,0 h7v1H30zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h1v1H11zM15 1h2v1H15zM18 1h2v1H18zM22 1h5v1H22zM28 1h1v1H28zM30 1h1v1H30zM36,1 h1v1H36zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h2v1H8zM12 2h2v1H12zM16 2h1v1H16zM19 2h1v1H19zM21 2h1v1H21zM23 2h1v1H23zM25 2h2v1H25zM30 2h1v1H30zM32 2h3v1H32zM36,2 h1v1H36zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM9 3h2v1H9zM12 3h1v1H12zM14 3h2v1H14zM17 3h1v1H17zM20 3h2v1H20zM23 3h3v1H23zM27 3h2v1H27zM30 3h1v1H30zM32 3h3v1H32zM36,3 h1v1H36zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM11 4h1v1H11zM13 4h1v1H13zM18 4h2v1H18zM21 4h1v1H21zM26 4h1v1H26zM28 4h1v1H28zM30 4h1v1H30zM32 4h3v1H32zM36,4 h1v1H36zM0 5h1v1H0zM6 5h1v1H6zM9 5h1v1H9zM13 5h2v1H13zM16 5h1v1H16zM20 5h1v1H20zM22 5h2v1H22zM25 5h2v1H25zM28 5h1v1H28zM30 5h1v1H30zM36,5 h1v1H36zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30,6 h7v1H30zM9 7h1v1H9zM11 7h1v1H11zM13 7h2v1H13zM16 7h3v1H16zM22 7h2v1H22zM25 7h1v1H25zM27 7h2v1H27zM0 8h1v1H0zM3 8h8v1H3zM13 8h3v1H13zM21 8h4v1H21zM26 8h1v1H26zM28 8h2v1H28zM32 8h1v1H32zM34,8 h3v1H34zM0 9h1v1H0zM2 9h2v1H2zM5 9h1v1H5zM10 9h1v1H10zM12 9h2v1H12zM16 9h1v1H16zM18 9h1v1H18zM21 9h1v1H21zM24 9h4v1H24zM29 9h1v1H29zM31 9h2v1H31zM34 9h2v1H34zM0 10h1v1H0zM2 10h1v1H2zM6 10h1v1H6zM8 10h1v1H8zM10 10h2v1H10zM15 10h3v1H15zM19 10h2v1H19zM22 10h2v1H22zM25 10h1v1H25zM27 10h1v1H27zM30 10h3v1H30zM34 10h1v1H34zM36,10 h1v1H36zM2 11h1v1H2zM5 11h1v1H5zM7 11h2v1H7zM10 11h1v1H10zM12 11h1v1H12zM16 11h5v1H16zM22 11h3v1H22zM31 11h1v1H31zM33,11 h4v1H33zM0 12h1v1H0zM2 12h1v1H2zM6 12h1v1H6zM10 12h2v1H10zM14 12h3v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h3v1H22zM27 12h2v1H27zM30 12h1v1H30zM33 12h1v1H33zM36,12 h1v1H36zM2 13h1v1H2zM7 13h1v1H7zM9 13h2v1H9zM13 13h1v1H13zM15 13h2v1H15zM21 13h1v1H21zM23 13h2v1H23zM26 13h4v1H26zM32 13h2v1H32zM0 14h1v1H0zM2 14h1v1H2zM4 14h3v1H4zM8 14h6v1H8zM15 14h1v1H15zM18 14h2v1H18zM26 14h2v1H26zM30 14h1v1H30zM32,14 h5v1H32zM3 15h1v1H3zM5 15h1v1H5zM7 15h2v1H7zM13 15h1v1H13zM15 15h2v1H15zM21 15h2v1H21zM26 15h1v1H26zM28 15h1v1H28zM30 15h2v1H30zM33 15h2v1H33zM2 16h1v1H2zM6 16h2v1H6zM11 16h1v1H11zM15 16h1v1H15zM17 16h3v1H17zM21 16h2v1H21zM24 16h2v1H24zM30 16h1v1H30zM34,16 h3v1H34zM0 17h1v1H0zM2 17h1v1H2zM4 17h2v1H4zM7 17h1v1H7zM9 17h1v1H9zM14 17h1v1H14zM21 17h2v1H21zM27 17h1v1H27zM29 17h1v1H29zM31 17h1v1H31zM33 17h2v1H33zM3 18h1v1H3zM5 18h3v1H5zM10 18h1v1H10zM12 18h2v1H12zM16 18h1v1H16zM19 18h1v1H19zM23 18h1v1H23zM26 18h2v1H26zM30 18h1v1H30zM32 18h1v1H32zM34 18h1v1H34zM36,18 h1v1H36zM0 19h2v1H0zM5 19h1v1H5zM8 19h1v1H8zM11 19h2v1H11zM15 19h2v1H15zM19 19h2v1H19zM22 19h2v1H22zM25 19h1v1H25zM27 19h3v1H27zM36,19 h1v1H36zM4 20h1v1H4zM6 20h2v1H6zM9 20h2v1H9zM14 20h1v1H14zM17 20h1v1H17zM19 20h1v1H19zM23 20h2v1H23zM26 20h1v1H26zM28 20h5v1H28zM0 21h3v1H0zM5 21h1v1H5zM7 21h2v1H7zM12 21h4v1H12zM17 21h1v1H17zM19 21h1v1H19zM22 21h2v1H22zM25 21h3v1H25zM29 21h1v1H29zM32 21h1v1H32zM34 21h2v1H34zM0 22h2v1H0zM6 22h1v1H6zM9 22h4v1H9zM15 22h2v1H15zM20 22h2v1H20zM23 22h1v1H23zM27 22h1v1H27zM29 22h3v1H29zM33 22h1v1H33zM36,22 h1v1H36zM0 23h4v1H0zM7 23h1v1H7zM9 23h2v1H9zM12 23h1v1H12zM15 23h1v1H15zM18 23h3v1H18zM27 23h2v1H27zM30 23h5v1H30zM36,23 h1v1H36zM2 24h2v1H2zM6 24h1v1H6zM8 24h1v1H8zM11 24h2v1H11zM17 24h1v1H17zM20 24h3v1H20zM27 24h1v1H27zM30 24h2v1H30zM36,24 h1v1H36zM0 25h3v1H0zM4 25h1v1H4zM9 25h1v1H9zM11 25h1v1H11zM13 25h1v1H13zM18 25h2v1H18zM22 25h1v1H22zM25 25h2v1H25zM28 25h1v1H28zM32 25h3v1H32zM0 26h5v1H0zM6 26h1v1H6zM8 26h2v1H8zM12 26h1v1H12zM15 26h1v1H15zM21 26h1v1H21zM24 26h4v1H24zM29 26h2v1H29zM32 26h1v1H32zM34,26 h3v1H34zM0 27h1v1H0zM4 27h1v1H4zM7 27h1v1H7zM12 27h1v1H12zM16 27h1v1H16zM19 27h1v1H19zM22 27h1v1H22zM29 27h1v1H29zM31 27h1v1H31zM33 27h2v1H33zM0 28h1v1H0zM2 28h2v1H2zM6 28h2v1H6zM9 28h2v1H9zM13 28h4v1H13zM19 28h2v1H19zM22,28 h15v1H22zM8 29h3v1H8zM17 29h1v1H17zM19 29h4v1H19zM25 29h1v1H25zM28 29h1v1H28zM32 29h1v1H32zM34 29h1v1H34zM0 30h7v1H0zM8 30h6v1H8zM15 30h1v1H15zM17 30h3v1H17zM23 30h1v1H23zM28 30h1v1H28zM30 30h1v1H30zM32 30h1v1H32zM36,30 h1v1H36zM0 31h1v1H0zM6 31h1v1H6zM8 31h7v1H8zM16 31h1v1H16zM21 31h1v1H21zM23 31h3v1H23zM27 31h2v1H27zM32 31h1v1H32zM35 31h1v1H35zM0 32h1v1H0zM2 32h3v1H2zM6 32h1v1H6zM8 32h3v1H8zM13 32h2v1H13zM16 32h1v1H16zM18 32h4v1H18zM24 32h1v1H24zM26 32h7v1H26zM35 32h1v1H35zM0 33h1v1H0zM2 33h3v1H2zM6 33h1v1H6zM8 33h1v1H8zM11 33h2v1H11zM20 33h4v1H20zM25 33h2v1H25zM30 33h1v1H30zM36,33 h1v1H36zM0 34h1v1H0zM2 34h3v1H2zM6 34h1v1H6zM9 34h1v1H9zM11 34h1v1H11zM17 34h1v1H17zM22 34h2v1H22zM25 34h1v1H25zM28 34h2v1H28zM32 34h2v1H32zM36,34 h1v1H36zM0 35h1v1H0zM6 35h1v1H6zM9 35h1v1H9zM12 35h2v1H12zM15 35h1v1H15zM17 35h2v1H17zM23 35h2v1H23zM30 35h1v1H30zM32,35 h5v1H32zM0 36h7v1H0zM8 36h2v1H8zM14 36h1v1H14zM16 36h1v1H16zM19 36h1v1H19zM23 36h2v1H23zM28 36h1v1H28zM31 36h1v1H31zM33 36h1v1H33zM36,36 h1v1H36z"
                ></path>
              </svg>
              <div className="ps-3 barcoad-discription">
                <p>Scan to Download</p>
                <h4>iOS & Android</h4>
              </div>
            </div>
            <div className="col-md-4 d-flex download-cards">
              <div className="">
                <BsApple />
                <h4>Apple</h4>
              </div>
              <div className="">
                <MdOutlineAndroid />
                <h4>Android APK</h4>
              </div>
              <div className="">
                <RiGooglePlayFill />
                <h4>Google Play</h4>
              </div>
              <div className="">
                <SiMacos />
                <h4>Mac OS</h4>
              </div>
              <div className="">
                <AiFillWindows />
                <h4>windows</h4>
              </div>
              <div className="">
                <DiLinux />
                <h4>Linux</h4>
              </div>
              <div className="">
                <BsPlugFill />
                <h4>API</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Binancedownload;
