import React from 'react'
import './herocard.css'

const HeroCard = ({img, title}) => {
  return (
    <>
        <div className='m-1 card mb-4 border-0 shadow-sm rounded-4 '>
            <div className='card-img cardImg '>
                <img src={img} alt={title} className='rounded-4 h-100 w-100 object-fit-cover '/>
            </div>
        </div>
    </>
  )
}

export default HeroCard