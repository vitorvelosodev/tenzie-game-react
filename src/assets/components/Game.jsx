import Dice from "./Dice"

export default function Game(props) {

  const dices = props.dicesObj.map(dice =>
    <Dice
      key={`${dice.id}-${dice.number}`}
      id={dice.id}
      number={dice.number}
      clicked={dice.clicked}
      handleToggle={props.handleToggle}
    />
  )

  return (
    <div className="game grid grid-cols-5 gap-6 m-6">
      {dices}
    </div>
  )
}