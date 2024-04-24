import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

const Footer = () => {
  const date =  new Date();

  const {isDark} = useContext(ThemeContext)

  return (
    <footer className={`py-4 justify-content-center align-items-center d-flex flex-column ${isDark ? 'bg-dark' : 'bg--violet'} `}>
        <p className='m-0 text-center small w-75 text-white'>&copy; {date.getFullYear()} EpiBooks - Created with React by 🥷&nbsp;<a href='https://github.com/giacomosx' target='_blank' rel="noreferrer" className=' text-white '>@giacomosx</a> </p>
        
    </footer>
  )
}

export default Footer