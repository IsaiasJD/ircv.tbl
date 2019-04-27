import React, { Component } from 'react'

export class Conversion extends Component {
  render() {
    return (
      <div>
        <p>Percentage of Weight Loss:</p>
        <p>{Math.round((this.props.contestant.currentWeight / this.props.contestant.startingWeight) * 10000) / 100}</p>
      </div>
    )
  }
}

export default Conversion
