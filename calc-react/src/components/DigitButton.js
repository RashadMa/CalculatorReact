import { ACTIONS } from "../App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button className="digits"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}