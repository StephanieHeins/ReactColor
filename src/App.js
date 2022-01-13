import React, { useState } from 'react';
import './App.css';

function App() {

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{id: 1}, {id: 2}, {id: 3}]
  });

  return (
    <div className="App">
      <h1>
        Test
      </h1>

      { appState.objects.map((element, index) => (
        <div>
        </div>
      )) }
    </div>
  );
}

export default App;
