export default function Dice(props) {

  return (
    <div className="h-10 w-10 bg-[#FFFFFF] grid place-items-center rounded shadow-dice-shadow .dice-selected">
      <span>{props.random}</span>
    </div>
  )
}