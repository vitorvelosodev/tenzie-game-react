import { useState, useEffect } from 'react'
import './App.css'
import Header from './assets/components/Header'

export default function App() {

  return (
    <div className='flex flex-col justify-center h-screen items-center w-96 text-center mx-auto'>
      <Header />
    </div>
  )
}
