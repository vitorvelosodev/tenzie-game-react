export default function Dice(props) {
  const style = {backgroundColor: props.clicked ? '#59E391' : ''}

  return (
    <div
      className="h-10 w-10 bg-[#FFFFFF] grid place-items-center rounded shadow-dice-shadow cursor-pointer"
      style={style}
      onClick={() => props.handleToggle(props.id)}
    >
      <span>{props.number}</span>
    </div>
  )
}