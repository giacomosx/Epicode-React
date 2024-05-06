import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { Form } from 'react-bootstrap'

import './searchform.css'
import MainButton from '../../mainbutton/MainButton'

import { useDispatch } from 'react-redux'
import { filterByTitle, resetResults } from '../../../redux/booksSlice'


const SearchForm = () => {
  let [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
    dispatch(resetResults())
  }

  const searchBook = () => {
    dispatch(filterByTitle(value))
  }

  
  return (
    <div className='d-flex gap-3 w-75 flex-column flex-md-row mb-4'>
        <Form.Control type='text' placeholder='Type a title and...' className=' flex-grow-0' onChange={handleChange}/>
        <MainButton onClick={searchBook} ><HashLink to={'#results'} >Explore</HashLink></MainButton>
        
    </div>
  )
}

export default SearchForm