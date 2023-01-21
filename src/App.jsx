import { useState, useEffect } from 'react'
import './App.css'
import Conf from './assets/components/Conf'
import Game from './assets/components/Game'
import GameButton from './assets/components/GameButton'
import Header from './assets/components/Header'
import Swal from 'sweetalert2'


export default function App() {
  const numberOfDices = 10

  // Generates the initial array of numbers os the dice elements
  function generateNumbers() {
    const diceObjArray = []
    for (let i = 0; i < numberOfDices; i += 1) {

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
      for (let i = 0; i < numberOfDices; i += 1) {
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

  const [confetti, setConfetti] = useState()

  useEffect(() => {
    console.log('changed')
    const checkWinArray = dicesObj.map(num => num.clicked ? num.number : undefined)
    console.log(checkWinArray)
    let winning = true
    checkWinArray.forEach(num => {
      for (let i = 0; i < checkWinArray.length; i += 1) {
        if (num !== checkWinArray[i] || num === undefined) winning = false
      }
    })
    if (winning === true) {
      setConfetti(<Conf />)
      setTimeout(async () => {
        await Swal.fire({
          title: 'Congrats!\n You win!',
          icon: 'success',
          width: 400,
          confirmButtonText: "Let's play again!",
          padding: '3em',
          color: '#716add',
          background: '#fff',
          backdrop: `
            rgba(0,0,123,0.1)
            url('./nyan-cat.gif')
            left top
            no-repeat
          `,
          showClass: {
            popup: 'animate__animated animate__zoomIn'
          },
        })
        document.location.reload(true)
      }
      , 1500)
    }
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
      {confetti}
    </div>
  )
}
