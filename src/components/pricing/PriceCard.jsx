import React from "react"
import { price } from "../../dummydata"
import { Link } from "react-router-dom"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span>Rs</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <Link to="/contact">
          <button className='outline-btn'>GET STARTED</button>
          </Link>
        </div>
      ))}
    </>
  )
}

export default PriceCard
