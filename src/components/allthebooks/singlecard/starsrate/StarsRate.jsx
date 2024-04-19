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
    </div>
  )
}

export default StarsRate
