import React from 'react'
import MainLayout from '../layout/MainLayout'
import BookDetails from '../components/bookdetails/BookDetails'
import { useParams } from 'react-router-dom'

const Book = () => {
    const { asin } = useParams();
  return (
    <MainLayout>
        <BookDetails asin={asin}/>
    </MainLayout>
  )
}

export default Book