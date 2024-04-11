import React from 'react'
import Container from 'react-bootstrap/Container'
import Allbooks from '../allbooks/Allbooks'


const Main = () => {
  return (
    <Container fluid='lg' className='py-3'>
        <Allbooks sectionTitle={'Fantasy'}/>
    </Container>
  )
}

export default Main