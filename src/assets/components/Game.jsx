import Dice from "./Dice"

export default function Game(props) {

  const dices = props.diceNums.map((dice, i) => <Dice key={`${dice}-${i}`} random={dice} />)

  return (
    <div className="game grid grid-cols-5 gap-6 m-6">
      {dices}
    </div>
  )
}