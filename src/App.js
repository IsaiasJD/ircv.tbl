import React, { Component } from "react";
import Contestants from "./components/Contestants";
import Leader from "./components/Leader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
  state = {
    contestants: [
      {
        id: 1,
        firstName: "Shannon",
        lastName: "Curtis",
        startingWeight: 247,
        currentWeight: 247
      },
      {
        id: 2,
        firstName: "Daisy",
        lastName: "Saavedra",
        startingWeight: 202.5,
        currentWeight: 200    
      },
      {
        id: 3,
        firstName: "Alva",
        lastName: "Perez",
        startingWeight: 125,
        currentWeight: 123.5
      },
      {
        id: 4,
        firstName: "Nereida",
        lastName: "Calixto",
        startingWeight: 176,
        currentWeight: 172
      },
      {
        id: 5,
        firstName: "Mrs",
        lastName: "Perrin",
        startingWeight: 147,
        currentWeight: 145
      },
      {
        id: 6,
        firstName: "Dulce",
        lastName: "Saavedra",
        startingWeight: 200,
        currentWeight: 196
      },
      {
        id: 7,
        firstName: "Mrs",
        lastName: "Elizabeth",
        startingWeight: 124,
        currentWeight: 124
      },
      {
        id: 8,
        firstName: "Luisa",
        lastName: "Fuller",
        startingWeight: 191,
        currentWeight: 196
      },
      {
        id: 9,
        firstName: "Mrs",
        lastName: "Chavira",
        startingWeight: 178,
        currentWeight: 178
      },
      {
        id: 10,
        firstName: "Adrian",
        lastName: "Casarrubias",
        startingWeight: 187,
        currentWeight: 179
      },
      {
        id: 11,
        firstName: "Mr",
        lastName: "Machuca",
        startingWeight: 234,
        currentWeight: 234
      },
      {
        id: 12,
        firstName: "Mrs",
        lastName: "Romero",
        startingWeight: 186,
        currentWeight: 186
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
    contestants.sort((a, b) => b.percentLost - a.percentLost)
    this.setState({ contestants });
  }

  render() {
    return (
      <div className="App">
          <Header />
          <div className="background">
          <div className="container left">
          <Contestants contestants={this.state.contestants} />
          </div>
          <div className="container right">
          <Leader leader={this.state.contestants[0]} />
          </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;