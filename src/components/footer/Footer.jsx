import React from 'react'

const Footer = () => {
  const date =  new Date();

  return (
    <footer className='py-4 justify-content-center align-items-center d-flex flex-column  bg-body-tertiary '>
        <p className='m-0'>&copy; {date.getFullYear()} EpiBooks - Created with React by <a href='https://github.com/giacomosx' target='_blank' rel="noreferrer" className=' text-primary '>@giacomosx</a> </p>
        
    </footer>
  )
}

export default Footer