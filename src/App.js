import React, { useState } from 'react';
import './App.css';

function App() {

  const [appState, changeState] = useState({
    activeObject: {id: 1},
    objects: [{id: 1}, {id: 2}, {id: 3}]
  });

  function activeToggle(index){
    changeState({...appState, activeObject: appState.objects[index]});
  }

  return (
    <div>

    <div>
      <div className="colorBox">
        Test
      </div>
    </div>
    
      <div className="App">

      { appState.objects.map((element, index) => (
        <div
          key={index}
          className="boxes active"
          onClick={() => {activeToggle(index)}}
          >
        </div>
      )) }
    </div>
    </div>
  );
}

export default App;
