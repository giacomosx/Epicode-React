import React from 'react'

const ToggleBtn = ({onClick}) => {
  return (
    <button className="btn d-lg-none p-0" onClick={onClick}>
        <img src="./icons/list.svg" alt="Show menu" width={36} height={36}/>
    </button>
  )
}

export default ToggleBtn
