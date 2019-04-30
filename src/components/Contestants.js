import React, { Component } from "react";
import Background from './images/background.jpg';

export default function Contestants(props) {
  return props.contestants
    .sort((a, b) => b.percentLost - a.percentLost)
    .map((contestant, i) => (
        <div key={i} style={ contestantsrStyle.div }>
            <h3 style={ contestantsrStyle.h3 }>
                 {i+1}. {contestant.firstName} {contestant.lastName}
            </h3>
            <p style={ contestantsrStyle.p }>Percentage of Weight Loss:</p>
            <p style={ contestantsrStyle.p }>{contestant.percentLost}</p>
        </div>
    ));
}

const contestantsrStyle = {
    div:{
    color: '#000000', 
    textAlign: 'center', 
    padding: '10px',
    margin: '15px 0px 15px 0px',
    },
    h3: {
        padding: '1px',
    },
    p: {
        padding: '1px',
    }
}
