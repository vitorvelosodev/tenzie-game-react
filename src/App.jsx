import { useState, useEffect } from 'react'
import './App.css'
import Game from './assets/components/Game'
import GameButton from './assets/components/GameButton'
import Header from './assets/components/Header'

export default function App() {

  return (
    <div className='flex flex-col justify-center h-96 items-center w-96 text-center mx-auto bg-outer'>
      <Header />
      <Game />
      <GameButton />
    </div>
  )
}
