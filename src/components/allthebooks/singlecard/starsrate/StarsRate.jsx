import React from 'react'
import './starsrate.css'

const StarsRate = () => {
  return (
    <div className='d-flex align-items-end h-100 gap-1'>
        <span className="star-rate fill"><ion-icon name="star" ></ion-icon></span>
        <span className="star-rate fill"><ion-icon name="star" ></ion-icon></span>
        <span className="star-rate fill"><ion-icon name="star" ></ion-icon></span>
        <span className="star-rate "><ion-icon name="star" ></ion-icon></span>
        <span className="star-rate "><ion-icon name="star" ></ion-icon></span>
        <span className='text-secondary ms-1 align-self-start small pt-2 d-none d-lg-block '>3/5</span>
    </div>
  )
}

export default StarsRate
