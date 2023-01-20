export default function GameButton(props) {
  return (
    <button
      className="text-white bg-indigo-700 rounded-md shadow-lg h-9 w-24 my-2"
      onClick={props.handleClick}
    >Roll</button>
  )
}