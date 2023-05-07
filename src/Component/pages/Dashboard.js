import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CryptoDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const getPriceChangeClass = (change) => {
    if (change >= 0) {
      return 'price-increase';
    } else {
      return 'price-decrease';
    }
  };

  return (
    <div className="dashboard-container py-5">
      <h1 className="dashboard-title">Earn daily rewards on your idle tokens</h1>
      <p>Simple & Secure. Search popular coins and start earning.</p>
      <table className="dashboard-table">
        <tbody className="d-flex table-body">
          {data.map((coin) => (
            <div className='cards m-3'>
            <ul className='dashboard-list my-0 text-center' key={coin.id}>
              <li> <img src={coin.image} alt="icon" width={40} /></li>
              <li>{coin.name}</li>
              <li>APR</li>
              <li className={getPriceChangeClass(coin.price_change_percentage_24h)}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </li>
              <li><span><MdKeyboardArrowRight /></span></li>
            </ul>
          </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoDashboard;
