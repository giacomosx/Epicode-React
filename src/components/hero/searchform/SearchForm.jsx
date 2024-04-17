import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'

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
        <Button onClick={searchBook}>Explore</Button>
    </div>
  )
}

export default SearchForm