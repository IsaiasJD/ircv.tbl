import React, { Component } from 'react';
import Contestants from './components/Contestants';
import './App.css';

class App extends Component {
  state = {
    contestants: [
      {
        id: 1,
        firstName: 'Shannon', 
        lastName: 'Curtis', 
        startingWeight: 250, 
        currentWeight: 245
      },
      {
        id: 2,
        firstName: 'Deisy', 
        lastName: 'Saavedra', 
        startingWeight: 220, 
        currentWeight: 221
      },
      {
        id: 3,
        firstName: 'Alva', 
        lastName: 'Perez', 
        startingWeight: 120, 
        currentWeight: 117
      }
    ]
  }
  render() {
  return (
    <div className="App">
      <h1>The Biggest Loser</h1>
      <Contestants contestants={this.state.contestants} />

    </div>
  );
}
}

export default App;
