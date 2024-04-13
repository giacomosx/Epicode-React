
import React from 'react'
import horror from "../../books/horror.json";
import SwiperComp from '../swipercomp/SwiperComp';
import {Button} from 'react-bootstrap'

const Hero = () => {
  return (
      <div className='row py-4 ' id='top'>
          <div className='col-12 col-md-6'>
          <SwiperComp category={horror}/>
      </div>
      <div className='col-12 col-md-6 order-first order-md-last '>
          <div className="p-3 d-flex flex-column align-items-center justify-content-center h-100">
            <h1 className="display-6">Welcome to EpiBook!</h1>
            <blockquote className="text-secondary text-center blockquote">Discover, read, love. The books you desire, just a click away.</blockquote>
            <Button>Explore now</Button>
          </div>
      </div>
      </div>
  )
}

export default Hero