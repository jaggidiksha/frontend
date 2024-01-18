import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navi = useNavigate();
  return (
    <section className='home' >
      <div className="hero">
        <div className="stroked">
          <h2 >Bags</h2>
          <div className="mainDiv">
            <div className="content">
              <p>Discover unparalleled travel experiences with Eccom's exceptional travel bags and luggage collection. Engineered for style and durability, our products redefine your journey, ensuring seamless adventures with every step.</p>
              <button onClick={() => navi('./all')} >Check products</button>
            </div>
            <div className="content">
              <p>Elevate your journey effortlessly – simply click below to add the perfect travel companion to our list. Experience convenience and style with Eccom, where every click unlocks a world of travel possibilities.</p>
              <button onClick={() => navi('./add')} >Add</button>
            </div>
          </div>
        </div>
        <div className="left"></div>
        {/* <div className="right">
          <p>Discover unparalleled travel experiences with Eccom's exceptional travel bags and <br /> luggage collection. Engineered for style and durability, our products redefine your journey, ensuring seamless adventures with every step.</p>
        </div> */}
      </div>
      <section className="hero2">
        <div className="left">
          <div className="image"></div>
        </div>
        <div className="right">
          <h3>Get the<br />Best</h3>
          <p>Indulge in unmatched elegance and functionality with Eccom's curated collections. We pride ourselves on offering the finest travel bags and luggage, ensuring you access the best in style and innovation for your journeys.</p>
        </div>
      </section>
    </section>
  )
}

export default Home