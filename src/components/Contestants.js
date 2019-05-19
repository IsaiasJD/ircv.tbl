import React, { component, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";

export default function Contestants(props) {
    function isLoggedIn() {
        console.log(props, "isLoggedIn");
        // const isValid = user.isLoggedIn && profileLink === user.profileLink;
        // if (isValid) {
        //     saveUser({ profileLink, isLoggedIn: true });
        //     history.push(`/profile/${profileLink}`);
        // } else {
        //     history.push(`/authentication/${profileLink}`);
        // }
    }
    console.log(props, "isLoggedIn");

    return props.contestants.map((contestant, i) => (
        <div key={i}>
            <Link to={`/authentication/${contestant.profileLink}`}>
                <h3>
                    {i + 1}. {contestant.firstName} {contestant.lastName}
                </h3>
            </Link>
            <p>Percentage of Weight Loss:</p>
            <p>
                <span>%{contestant.percentLost}</span>
            </p>
        </div>
    ));
}
