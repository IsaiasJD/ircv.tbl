import React, { Component } from 'react';
import Conversion from './Conversion'

class Contestants extends Component {
    render() {
        console.log(this.props.contestants);
        return this.props.contestants.map((contestant) => (
            <div>
            <h3>{contestant.firstName} {contestant.lastName}</h3>
            <Conversion contestant={contestant}/>
            </div>
        ));
    }
}

export default Contestants;