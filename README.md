# 🎲 Tenzies Game (React)

A simple and addictive dice game built using **React**. The objective is to roll until all dice show the same number. Players can **freeze** (or "hold") dice between rolls to try to get all dice to match.

This project features React hooks (`useState`, `useEffect`, `useRef`), functional components, basic styling, and a win condition animation with [react-confetti](https://www.npmjs.com/package/react-confetti).

---

## 🧩 Features

- 🎲 Roll 10 dice at once
- 📌 Click any die to "hold" its value between rolls
- 🏆 Win when all dice are held and show the same number
- 🧮 Roll counter to track your attempts
- 🎉 Confetti animation upon winning
- ♿ Accessibility enhancement: "New Game" button auto-focuses on win

---

## 📸 Preview

![Tenzies Game Screenshot](https://via.placeholder.com/800x400.png?text=Tenzies+Game+Preview)

> Replace the above URL with an actual screenshot once hosted.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/tenzies-game.git
   cd tenzies-game

2. **Install dependencies:**
npm install

3. **Run the development server:**
npm run dev

**How to Play**

    Click Roll to roll all 10 dice.

    Click any die to hold its current number.

    Keep rolling until all 10 dice show the same number.

    When you win:

        🎉 Confetti will fall

        🚀 A "New Game" button appears, focused automatically

        🧮 Your roll count is displayed


🔧 Technologies Used

    React – for UI components and state management

    Vite – for fast development server and build tool

    NanoID – for generating unique IDs for each die

    React Confetti – for win animation

    CSS – for layout and visual styles

🧪 React Concepts Used

    useState – to track dice state and roll count

    useEffect – to handle game-winning conditions

    useRef – to focus the button upon winning

    Functional components & props

    JSX event handling and styling

📦 Dependencies

{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-confetti": "^6.0.0",
  "nanoid": "^5.0.0"
}

🛠 Possible Future Enhancements

    Add a timer to track how fast the player wins

    Track best scores (lowest roll count)

    Sound effects on win/roll

    Persistent score tracking with localStorage

    Dice face images instead of numbers

🧑‍💻 Author

Carolina – @carolinafrederico

Feel free to fork and contribute to this project!
