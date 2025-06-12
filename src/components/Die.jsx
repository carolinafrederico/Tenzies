import React from "react"
import "../index.css"

export default function Die({ value, isHeld, holdDie }) {
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }

    return (
        <button 
            className="die" 
            style={styles} 
            onClick={holdDie}  // ✅ Call the function passed from App
        >
            {value}
        </button>
    )
}
