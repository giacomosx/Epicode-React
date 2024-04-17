import React from 'react'

const ToggleBtn = ({onClick}) => {
  return (
    <button className="btn d-lg-none " onClick={onClick}>
        <img src="./icons/list.svg" alt="Show menu" width={32} height={32}/>
    </button>
  )
}

export default ToggleBtn
