import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>気分記録</h1>
          <div className="happy">
            <button>😊</button>
          </div>
          <div className="sad">
            <button>😭</button>
          </div>
          <div className="angry">
            <button>😠</button>
          </div>
          <div className="fantastic">
            <button>🤩</button>
          </div>
      </div>
      <p className="read-the-docs">
        Click on the emotion
      </p>
    </>
  )
}

export default App
