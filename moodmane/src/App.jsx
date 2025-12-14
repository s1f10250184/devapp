import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Recode() {

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>気分記録</h1>
          <div className="happy">
            <button type="button" onClick={() => selectMood("happy")}>😊</button>
          </div>
          <div className="sad">
            <button type="button" onClick={() => selectMood("sad")}>😭</button>
          </div>
          <div className="angry">
            <button type="button" onClicl={() => selectMood("angry")}>😠</button>
          </div>
          <div className="fantastic">
            <button type="button" onClick={() => selectMood("fantastic")}>🤩</button>
          </div>
      </div>
      <p className="read-the-docs">
        Click on the emotion
      </p>
    </>
  )
}

export default App
