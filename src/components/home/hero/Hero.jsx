import React from "react"
import Heading from "../../common/heading/Heading"
// import CourseHome from "../../allcourses/CourseHome"
import "./Hero.css"

const HeroHello = () => {
  return (
    <>
      <section className='hero bg-black'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO NEXTZENI' title='Leading Online Learning Specialists.' />
            <p>
            Leading Online Learning Specialists design and deliver engaging, technology-driven educational experiences.
            </p>
            <div className='button'>
              <button className='primary-btn'>
                ENROLL NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <Link href="/courses"> */}
              <button>
                ALL COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default HeroHello
