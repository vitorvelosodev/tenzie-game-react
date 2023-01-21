import { useState, useEffect } from 'react'
import './App.css'
import Game from './assets/components/Game'
import GameButton from './assets/components/GameButton'
import Header from './assets/components/Header'

export default function App() {
  // Generates the initial array of numbers os the dice elements
  function generateNumbers() {
    const diceObjArray = []
    for (let i = 0; i < 10; i += 1) {

      diceObjArray.push(
        {
          id: i,
          number: (Math.floor(Math.random() * 6) + 1),
          clicked: false
        }
      )

    }
    return diceObjArray
  }
  const [dicesObj, setDicesObj] = useState(generateNumbers())

  // Set new state for the dices in the page, with new numbers
  function changeDices() {
    setDicesObj(prevState => {
      const diceObjArray = []
      for (let i = 0; i < 10; i += 1) {
        prevState[i].clicked ? diceObjArray.push(prevState[i]) : 
          diceObjArray.push(
            {
              id: i,
              number: (Math.floor(Math.random() * 6) + 1),
              clicked: false
            }
          )
      }
    return diceObjArray
    })
  }

  // Toggles the dice if it is clicked by the user
  function toggleSelection(id) {
    setDicesObj(prevState => {
      const newDiceObj = []
      prevState.forEach(dice => {
        if (dice.id === id) {
          const newDice = {
            ...dice,
            clicked: !dice.clicked
          }
          newDiceObj.push(newDice)
        } else {
          const newDice = {
            ...dice
          }
          newDiceObj.push(newDice)
        }
      })
      return newDiceObj
    })
  }

  useEffect(() => {
    console.log('changed')
    const checkWinArray = dicesObj.map(num => num.clicked ? num.number : undefined)
    console.log(checkWinArray)
    let winning = true
    checkWinArray.forEach(num => {
      for (let i = 0; i < checkWinArray.length; i += 1) {
        if (num !== checkWinArray[i]) winning = false
      }
    })
    if (winning === true) console.log('Winner!')
  }, [dicesObj])

  return (
    <div className='flex flex-col justify-center h-96 items-center w-96 text-center mx-auto bg-inner rounded-lg'>
      <Header />
      <Game 
        dicesObj={dicesObj}
        handleToggle={toggleSelection}
      />
      <GameButton
        handleClick={changeDices}
      />
    </div>
  )
}
