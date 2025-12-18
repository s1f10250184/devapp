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

function App() {
  const selectMood = (key) => {
    console.log("selected:", key);
  };

  return (
    <div className="moods">
      {MOODS.map((m) => (
        <button key={m.key} type="button" onClick={() => selectMood(m.key)}>
          {m.label}
        </button>
      ))}
    </div>
  );
}


export default App
