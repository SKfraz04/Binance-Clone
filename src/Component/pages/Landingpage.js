import React from 'react'
// import Darkmode from '../Ui/Darkmode'
import Banner from './Banner'
import Binancedownload from './Binancedownload'
import Dashboard from './Dashboard'
import Explore from './Explore'
import Footer from './Footer'
import Help from './Help'
import LoginPage from './LoginPage'
// import ChangeImage from './LoginpageImage'
import Popularcrypto from './Popularcrypto'
import Portfolio from './Portfolio'
import Trustcrypto from './Trustcrypto'

const Landingpage = () => {
  return (
    <React.Fragment>
      <LoginPage />
      <Banner /> 
      <Popularcrypto />  
      <Portfolio />     
      <Dashboard />
      <Explore />
      <Trustcrypto />
      <Binancedownload />
      <Help />
      <Footer />
      {/* <Darkmode /> */}
      {/* <ChangeImage /> */}
    </React.Fragment>
  )
}

export default Landingpage