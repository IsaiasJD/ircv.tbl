import React, { Component } from "react";

export class Conversion extends Component {
    render() {
        return (
            <div>
                <p>Percentage of Weight Loss:</p>
                <p>
                    {(
                        (this.props.contestant.currentWeight /
                            this.props.contestant.startingWeight) *
                        100
                    ).toFixed(2)}
                </p>
            </div>
        );
    }
}

export default Conversion;
