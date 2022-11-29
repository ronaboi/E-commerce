import React from 'react'
import './Home.css'
import Product from "./Product"
import Image from "./Banner.jpg"
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            {/* <Link style={{display: 'inline-block'}} to="/ott"> */}
            <img className="home__image" src={Image} alt="carousel" />
            {/* </Link> */}
            <div className="home__row">
                <Product id={1} title="Apple iPhone 13 Pro (128GB) - Graphite" price={109900} img="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664008855/Croma%20Assets/Communication/Mobiles/Images/243517_0_g3gvu2.png/mxw_640,f_auto" rating={4.5}/>
                <Product id={2} title="Oneodio Pro-10 Wired Over Ear Headphones With Mic Bass S With 50Mm Driver" price={1899} img="https://m.media-amazon.com/images/I/4137LQyVY8L._SX300_SY300_QL70_FMwebp_.jpg" rating={4}/>
            </div>
            <div className="home__row">
                <Product id={3} title="Lux Shower Gel 245 ml & Lux Shower Gel,245 ml" price={188} img="https://m.media-amazon.com/images/I/618ds-aFGWL._SY879_.jpg" rating={3.5}/>
                <Product id={4} title="Fastrack Analog Dial Women's Watch" price={1485} img="https://m.media-amazon.com/images/I/61tVnsppc-S._UX679_.jpg" rating={4}/>
                <Product id={5} title="Panasonic 20 L Solo Microwave Oven (NN-SM25JBFDG,Black)" price={5499} img="https://m.media-amazon.com/images/I/41W38NtsbCL._SY445_SX342_QL70_FMwebp_.jpg" rating={4.5}/>
            </div>
            <div className="home__row">
                <Product id={6} title="HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/ MS Office 2021/1.69 Kg, 15s-fq2673TU" price={44490} img="https://m.media-amazon.com/images/I/91-U2J7fKoL._SX522_.jpg" rating={4}/>
            </div>
            
        </div>
    </div>

  )
}

export default Home