import React from 'react'
import MainLayout from '../layout/MainLayout'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
    const navigate = useNavigate()
  return (
    <MainLayout>
        <div className="col-12 col-lg-9 d-flex flex-column gap-5 align-items-center justify-content-between h-100 ">
            <img src='/404.png' className='w-100' alt='Not found page' />
            <p>Go to <button  onClick={() => navigate('/')} className='btn nav-link cursor-pointer text-decoration-underline icon-link '><ion-icon name="return-up-back-outline"></ion-icon>Homepage</button></p>
        </div>
    </MainLayout>
  )
}

export default Page404