import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome bg-white'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/aboutimg.jpg' alt='' />
          </div>
          <div className='right row'>
            //detail
            <Heading subtitle='Why Choose NextZeni?' title='A brief overview of your mission and vision:' />
            <p>NextZeni is dedicated to equipping students and professionals with essential skills that open
              doors to success. We blend interactive learning with real-world applications to make your journey
              enjoyable and impactful!</p>
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
