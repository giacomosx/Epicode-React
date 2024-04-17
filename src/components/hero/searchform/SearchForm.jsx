import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { Form } from 'react-bootstrap'


const SearchForm = (props) => {
  let [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    props.setresult([])
  }

  const searchBook = () => {
    props.setresult(props.allbooks.filter(book => book.title.toLowerCase().includes(value.toLowerCase())))
  }

  
  return (
    <div className='d-flex gap-3 w-75 flex-column flex-md-row mb-4'>
        <Form.Control type='text' placeholder='Type a title and...' className=' flex-grow-0' onChange={handleChange}/>
        <HashLink to={'#results'} onClick={searchBook} className='btn btn-primary'>Explore</HashLink>
        
    </div>
  )
}

export default SearchForm