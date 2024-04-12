import React from 'react'
import Container from 'react-bootstrap/Container'
import Allbooks from '../allbooks/Allbooks'
import fantasy from "../../books/fantasy.json";
import Hero from '../hero/Hero';

const Main = () => {
  return (
    <Container fluid='lg' className='py-3'>
        <Hero />
        <Allbooks sectionTitle={'Fantasy'} data={fantasy}/>
    </Container>
  )
}

export default Main