import React from 'react'
import MainLayout from '../components/Layout/ProfileLayout'
import GIF from '../images/graph.gif'

const Statistics = () => {
  return (
    <MainLayout>
        <div className="flex items-center justify-center">
        <img src={GIF} alt="" className="mr-4 w-48" />
            <h1 className="text-2xl font-bold">Statistical Data For You</h1>
            
          </div>
    </MainLayout>
  )
}

export default Statistics