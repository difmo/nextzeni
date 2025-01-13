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
            <Heading subtitle='WELCOME TO NEXTZENI' title='Empowering Your Future, One Skill at a Time' />
            <p>
            Learn Communication, English Speaking, and Soft Skills with NextZeni - Your Partner in Personal
            and Professional Growth           </p>
            <div className='button'>
              <button className='primary-btn'>
              Join a Free Workshop <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <Link href="/courses"> */}
              <button>
              Explore Courses <i className='fa fa-long-arrow-alt-right'></i>
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
