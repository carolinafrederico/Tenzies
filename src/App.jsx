import { useState } from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import "./index.css"

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    // ✅ Step 1: Log the clicked die’s id
    function holdDie(id) {
        console.log("Clicked die with id:", id)
    }

    // ✅ Step 2: Pass holdDie to each Die
    const diceElements = dice.map(dieObj => (
        <Die 
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            holdDie={() => holdDie(dieObj.id)}
        />
    ))

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}
