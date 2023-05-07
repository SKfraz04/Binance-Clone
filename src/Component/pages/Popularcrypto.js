import { Container, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Popularcrypto.css";

const Popularcrypto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
      );
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <section>
      <Container>
        <Row>
          <div className="popularCryptos-tagline d-flex">
            <h2 className="col-md-10">Popular cryptocurrencies</h2>
            <a href="/" className="col-md-2">
              View more markets <MdKeyboardArrowRight />
            </a>
          </div>
          {/* api 5 crypto list */}
          <div className="popular-tokan">
            <table>
              <thead className="popular-crypto">
                <tr>
                  <th className="crypto-heading">Name</th>
                  <th className="crypto-heading">Last Price</th>
                  <th className="crypto-heading">24h Change</th>
                  <th className="crypto-heading">Market Cap</th>
                </tr>
              </thead>
              <tbody className="popular-coin">
                {data.map((coin) => (
                  <tr key={coin.id}>
                    <td>
                      <img
                        src={coin.image}
                        alt="icon"
                        width={32}
                        className="me-3"
                      />
                      {coin.name} <span>{coin.symbol.toUpperCase()}</span>
                    </td>
                    <td>${coin.current_price.toLocaleString()}</td>
                    <td
                      className={
                        coin.price_change_percentage_24h < 0 ? "red" : "green"
                      }
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>${coin.market_cap.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="binance-signup">
            <h3>Sign up now to build your own portfolio for free!</h3>
            <button className="mt-5 binance-button">Get Started</button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Popularcrypto;
