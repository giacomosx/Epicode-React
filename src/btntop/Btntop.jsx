import React from 'react'
import './btntop.css'

const Btntop = ({selector}) => {
  return (
    <a href={selector} title="Go up" className="btn--top"><img src="./arrow-up.svg" alt="Top" width={25} height={25}/></a>
  )
}

export default Btntop