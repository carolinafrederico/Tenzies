
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"     // ← pull in your global styles here

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />)