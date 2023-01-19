import { Habit } from "./components/Habit"
import "./styles/global.css"


function App() {
  return (
    <div className="App">
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={2} />
      <Habit completed={5} />
    </div>
  )
}

export default App
