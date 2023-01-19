import Dice from "./Dice"

export default function Game() {
  return (
    <div className="game grid grid-cols-4 gap-6 m-6">
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
    </div>
  )
}