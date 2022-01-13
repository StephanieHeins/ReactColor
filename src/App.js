import React, { useState } from 'react';
import './App.css';

function App() {

  const [appState, changeState] = useState({
    activeObject: {id: 1},
    objects: [
      {id: 1,
      color: "red"}, 
      {id: 2,
      color: "blue"}, 
      {id: 3,
      color: "green"}
    ]
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

  function colorBoxToggle(){
    if(appState.objects[0] === appState.activeObject) {
      return "colorbox red";
    } else if(appState.objects[1] === appState.activeObject){
      return "colorbox blue";
    } else {
      return "colorbox green";
    }
  }

  return (
    <div className="App">

    <div>
      <div className={colorBoxToggle()}>
      </div>
    </div>
    
      <div>

      { appState.objects.map((element, index) => (
        
        <div
          key={index}
          className={toggleStlyes(index)}
          onClick={() => {activeToggle(index)}}
          > {element.color}
        </div>
      )) }
    </div>
    </div>
  );
}

export default App;
