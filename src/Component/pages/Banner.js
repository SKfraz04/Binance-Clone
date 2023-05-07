import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Banner.css"

const Banner = () => {
  return (
    <div>
        <Container>
            <Row>
                <div className='py-5 banner-image'>
                    <img src="./image/en-desktop.png" alt="binance banner" className='img-fluid'/>
                </div>
            </Row>
        </Container>
    </div>  
  )
}

export default Banner