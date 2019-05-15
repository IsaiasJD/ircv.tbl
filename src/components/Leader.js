import React, { Component } from "react";

export default function Leader(props) {
    return (
        <div className="text-block">
            <h3>The Leader So Far is:</h3>
            <p>
                {props.leader.firstName} {props.leader.lastName}
            </p>
            <p>
                With
                <span> %{props.leader.percentLost}</span>
            </p>
            <p>Keep It Up!!</p>
        </div>
    );
}
