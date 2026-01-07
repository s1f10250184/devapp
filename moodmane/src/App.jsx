import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  const MOODS = [
    { key: "happy", label: "😊"},
    { key: "sad", label: "😭"},
    { key: "angry", label: "😠"},
    { key: "fantastic", label: "🤩"},
  ];

function MyButton() {
  return (
    <button>送信</button>
  );
}


const Header = <h2>mood-management</h2>;

function App() {
  const selectMood = (key) => {
    console.log("selected:", key);
  };

  const [memo, setMemo] = useState("");


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
      <CommentsField/>
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
          placeholder="一言"
          maxLength={200}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>
      <div>
        <MyButton/> 
      </div>
    </div>
  );
}

function Data() {
  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}



export default App