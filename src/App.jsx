import { useState, useRef, useEffect} from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import "./index.css"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const [rollCount, setRollCount] = useState(0)
    const buttonRef = useRef(null) // ✅ This is what was missing

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if (gameWon && buttonRef.current) {
            buttonRef.current.focus()
        }
    }, [gameWon])

    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }))
    }

    function rollDice() {
        if (gameWon) {
            setDice(generateAllNewDice())
            setRollCount(0)
        } else {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
            ))
            setRollCount(prev => prev + 1)
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ? { ...die, isHeld: !die.isHeld } : die
        ))
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            hold={() => hold(die.id)}
        />
    ))

    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <p className="roll-count">Rolls: {rollCount}</p>
            <button
                className="roll-dice"
                onClick={rollDice}
                ref={buttonRef} // ✅ set the ref here
            >
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}
