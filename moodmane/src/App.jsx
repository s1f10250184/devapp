import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  const MOODS = [
    { key: "happy", label: "😊"},
    { key: "sad", label: "😭"},
    { key: "angry", label: "😠"},
    { key: "fantastic", label: "🤩"},
  ];

function Recode() {
  
}

const Header = <h2>mood-management</h2>;

function App() {
  const selectMood = (key) => {
    console.log("selected:", key);
  };

  return (
    <div> 
      <div className="Head">
        {Header}
      </div>
      <div className="moods">
        {MOODS.map((m) => (
          <button 
            key={m.key} 
            type="button" 
            className="moodBtn"
            onClick={() => selectMood(m.key)}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function CommentsField({memo, setMemo}) {
  return (
    <div>
      <div>
        <label>メモ</label>
        <textarea
          value = {memo}
          placeholder="今日の気分はどうだった？"
          maxLength={200}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>
      <div>
        <p>送信</p>
        <MyButton/> 
      </div>
    </div>
  )
}



export default App
