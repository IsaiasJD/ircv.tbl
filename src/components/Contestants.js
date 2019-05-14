import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "./images/background.jpg";

export default function Contestants(props) {
    return props.contestants.map((contestant, i) => (
        <div key={i} style={contestantsrStyle.div}>
            <Link to={`/authentication/${contestant.profileLink}`}>
                <h3 style={contestantsrStyle.h3}>
                    {i + 1}. {contestant.firstName} {contestant.lastName}
                </h3>
            </Link>
            <p style={contestantsrStyle.p}>Percentage of Weight Loss:</p>
            <p style={contestantsrStyle.p}>%{contestant.percentLost}</p>
        </div>
    ));
}

const contestantsrStyle = {
    div: {
        color: "white",
        textAlign: "center",
        padding: "10px",
        margin: "15px 0px 15px 0px",
        fontWeight: "bold",
        fontSize: "22px",
        opacity: "1"
    },
    h3: {
        padding: "1px",
        fontWeight: "bold"
    },
    p: {
        padding: "1px",
        fontWeight: "bold",
        fontSize: "20px"
    }
};
