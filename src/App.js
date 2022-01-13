import React, { useState } from 'react';
import './App.css';

function App() {

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{id: 1}, {id: 2}, {id: 3}]
  });

  return (
    <div className="App">

      { appState.objects.map((element, index) => (
        <div
          key={index}
          className="boxes active"

          >
        </div>
      )) }
    </div>
  );
}

export default App;
