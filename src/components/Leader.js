import React, { Component } from "react";

export default function Leader(props) {
  return (
      <div style={leaderStyle.div}>
          <h3 style={leaderStyle.h3}>
          The Leader So Far is:
        </h3>
        <p style={leaderStyle.p}>{props.leader.firstName} {props.leader.lastName}</p>
        <p style={leaderStyle.p}>With %{props.leader.percentLost}</p>
        <p style={leaderStyle.p}>Keep It Up!!</p>
      </div>
  )
}

const leaderStyle = {
    div:{
        color: 'white', 
        textAlign: 'center', 
        padding: '10px',
        margin: '15px 0px 15px 0px',
        fontWeight: 'bold', 
        fontSize: '22px',
        opacity: '1'
        },
    h3: {
        padding: '1px',
        fontWeight: 'bold'
    },
    p: {
        padding: '1px',
        fontWeight: 'bold', 
        fontSize: '20px'
    }
}