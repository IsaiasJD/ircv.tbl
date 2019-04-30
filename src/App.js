import React, { Component } from "react";
import Contestants from "./components/Contestants";
import Header from "./components/layout/Header";
import "./App.css";

class App extends Component {
  state = {
    contestants: [
      {
        id: 1,
        firstName: "Shannon",
        lastName: "Curtis",
        startingWeight: 250,
        currentWeight: 245
      },
      {
        id: 2,
        firstName: "Deisy",
        lastName: "Saavedra",
        startingWeight: 220,
        currentWeight: 221
      },
      {
        id: 3,
        firstName: "Alva",
        lastName: "Perez",
        startingWeight: 120,
        currentWeight: 117
      }
    ]
  };
  componentDidMount() {
    const contestants = [].concat(this.state.contestants).map(c => {
      const percentLost =
        Math.round(
          ((c.startingWeight - c.currentWeight) / c.startingWeight) * 10000
        ) / 100;
      return { ...c, percentLost };
    });
    this.setState({ contestants });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="background">
          <Contestants contestants={this.state.contestants} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;