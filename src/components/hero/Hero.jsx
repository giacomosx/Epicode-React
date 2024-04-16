
import React from 'react'
import horror from "../../data/books/horror.json";
import SwiperComp from '../swipercomp/SwiperComp';
import SearchForm from "../searchform/SearchForm";

const Hero = (props) => {
  return (
      <div className='row py-4 ' id='top'>
          <div className='col-12 col-md-6'>
          <SwiperComp category={horror}/>
      </div>
      <div className='col-12 col-md-6 order-first order-md-last '>
          <div className="p-3 d-flex flex-column align-items-center justify-content-center h-100">
            <h1 className="display-6">Welcome to EpiBooks!</h1>
            <blockquote className="text-secondary text-center blockquote">Discover, read, love. The books you desire, just a click away.</blockquote>
            <SearchForm setresult={props.setresults} allbooks={props.allbooks}/>
          </div>
      </div>
      </div>
  )
}

export default Hero