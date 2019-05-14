import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Contestants(props) {
    return props.contestants.map((contestant, i) => (
        <div key={i}>
            <Link to={`/authentication/${contestant.profileLink}`}>
                <h3>
                    {i + 1}. {contestant.firstName} {contestant.lastName}
                </h3>
            </Link>
            <p>Percentage of Weight Loss:</p>
            <p>%{contestant.percentLost}</p>
        </div>
    ));
}