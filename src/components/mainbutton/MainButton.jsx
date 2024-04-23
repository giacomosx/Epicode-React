import React from 'react'
import './mainbutton.css'

const MainButton = ({children, onClick, className = ''}) => {
  return (
    <button className={`btn btn-violet ` + className} onClick={onClick}>{children}</button>
  )
}

export default MainButton