
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayList, setDisplayList] = useState([]);

  const addToList = () => {
    if (inputValue.trim() !== '') {
      setDisplayList([...displayList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="mainContainer">
      <h1 classname ="textleft">Dynamic List Manager</h1>

      <input
        type="text"
        placeholder="Enter an item"
        className="input-list"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={addToList}>Add</button>

      <div className="listContainer">
        <ul>
          {displayList.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
