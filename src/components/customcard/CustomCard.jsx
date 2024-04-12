import React from 'react'
import {Card, Button} from 'react-bootstrap'
import style from './customCard.module.css'

const CustomCard = ({img, title, price}) => {
  return (
        <Card className='h-100 border-0 '>
            <div className={`${style.container_cardImg} `}>
                <Card.Img src={img} alt={title} className='w-100 h-100 object-fit-cover img-fluid '/>
            </div>
            <Card.Body className=' d-flex flex-column justify-content-between' >
                <Card.Title className='h6'>{title}</Card.Title>
                <div>
                    <Button>$ {price}</Button>
                </div>
            </Card.Body>
        </Card>
  )
}

export default CustomCard