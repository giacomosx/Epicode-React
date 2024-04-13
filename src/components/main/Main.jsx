import React from 'react'
import Container from 'react-bootstrap/Container'
import Allbooks from '../allbooks/Allbooks'
import Hero from '../hero/Hero';
import fantasy from "../../books/fantasy.json";
import history from '../../books/history.json'
import horror from '../../books/horror.json'
import romance from '../../books/romance.json'
import scifi from '../../books/scifi.json'

const Main = () => {
  return (
    <Container fluid='lg' className='py-4 mb-4'>
        <Hero />
        <Allbooks sectionTitle={'Fantasy'} data={fantasy}/>
        <Allbooks sectionTitle={'History'} data={history}/>
        <Allbooks sectionTitle={'Horror'} data={horror}/>
        <Allbooks sectionTitle={'Romance'} data={romance}/>
        <Allbooks sectionTitle={'Sci-fi'} data={scifi}/>
    </Container>
  )
}

export default Main