import React from 'react'
import {Card, Button} from 'react-bootstrap'

const SingleCard = ({img, title, price}) => {
  return (
        <Card className='h-100 border-0 p-2'>
            <div>
                <Card.Img src={img} alt={title} className='w-100 h-100 object-fit-cover img-fluid '/>
            </div>
            <Card.Body className=' d-flex flex-column justify-content-between' >
                <Card.Title className='h6 text-truncate '>{title}</Card.Title>
                <div>
                    <Button variant='outline-primary'>$ {price}</Button>
                </div>
            </Card.Body>
        </Card>
  )
}

export default SingleCard