import React from 'react';
import './App.css';

function App() {
  const boxesId = [...Array(24).keys()]

  const setTechnicolor = (boxInput) => {
    const randomColor = () => '#' + Math.random().toString(16).slice(2,8);
    const boxToColor = document.getElementById(boxInput);
    boxToColor.style.backgroundColor = randomColor();
    boxToColor.style.boxShadow = '0 0 8px white'
    boxToColor.style.zIndex = 100
  }

  const leaveBox = (boxInput) => {
    const boxToLeave = document.getElementById(boxInput);
    boxToLeave.style.boxShadow = 'none';
  }
  return (
    <div>
      <h1>Technicolor Box</h1>
      <div className="container">
        {boxesId.map((boxId) => {
          return (
            <div key={boxId} className="box" id={boxId} onMouseEnter={() => setTechnicolor(boxId)} onMouseLeave={() => leaveBox(boxId) }>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
