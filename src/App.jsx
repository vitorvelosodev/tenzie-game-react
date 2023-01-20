import { useState, useEffect } from 'react'
import './App.css'
import Game from './assets/components/Game'
import GameButton from './assets/components/GameButton'
import Header from './assets/components/Header'

export default function App() {
  const generateNumbers = () => {
    const arr = []
    for (let i = 0; i < 10; i += 1) {
      arr.push(Math.floor(Math.random() * 6) + 1)
    }
    return arr
  }
  const [diceNums, setDiceNums] = useState(generateNumbers())

  function changeDices() {
    console.log('click')
    setDiceNums(generateNumbers())
  }

  useEffect(() => console.log('changed'), [diceNums])

  return (
    <div className='flex flex-col justify-center h-96 items-center w-96 text-center mx-auto bg-inner rounded-lg'>
      <Header />
      <Game 
        diceNums = {diceNums}
      />
      <GameButton
        handleClick={changeDices}
      />
    </div>
  )
}
