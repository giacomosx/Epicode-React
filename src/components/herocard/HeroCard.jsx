import React from 'react'
import './herocard.css'

const HeroCard = ({img, title}) => {
  return (
    <>
        <div className='card mb-4 border-0 '>
            <div className='card-img cardImg '>
                <img src={img} alt={title} className='rounded h-100 w-100 object-fit-cover '/>
            </div>
        </div>
    </>
  )
}

export default HeroCard