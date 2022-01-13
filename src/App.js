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

  function toggleStlyes(index){
    if(appState.objects[index] === appState.activeObject) {
      return "boxes active";
    } else {
      return "boxes inactive";
    }
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
          className={toggleStlyes(index)}
          onClick={() => {activeToggle(index)}}
          >
        </div>
      )) }
    </div>
    </div>
  );
}

export default App;
