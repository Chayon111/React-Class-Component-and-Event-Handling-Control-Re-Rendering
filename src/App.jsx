import './App.css'
import Clock from './Conponents/Clock'

function App() {
console.log("App was render");
  return (
    <div>
      <Clock />
      {/* <Clock locale="en-US" /> */}
    </div>
  )
}

export default App
