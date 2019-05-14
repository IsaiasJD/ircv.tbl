import React, { useContext, useState } from "react";
import { AppContext } from "../components/AppProvider";
import Layout from "../components/layout/Layout";

export default function Authentication(props) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // NOTE: this is object destructuring wwith ES6. It is equivalent to:
    // const contestant = props.match.params.contestant;
    const {
        match: {
            params: { contestant: profileLink }
        },
        history
    } = props;

    const context = useContext(AppContext);
    const { contestants, saveUser } = context;

    let contestant;
    if (contestants) {
        contestant = contestants.filter(c => c.profileLink == profileLink)[0];
    }

    function handleOnChange(event) {
        const { value } = event.target;
        setPassword(value);
    }

    function handleClick() {
        const key = `REACT_APP_${(
            contestant.firstName +
            "_" +
            contestant.lastName
        ).toUpperCase()}`;

        if (password === process.env[key]) {
            setError(null);
            saveUser({ profileLink, isLoggedIn: true });
            history.push(`/profile/${profileLink}`);
        } else {
            setError("Password is incorrect");
        }
    }

    return (
        <Layout>
            <h1>Authentication</h1>
            <h2>{`Hello, ${contestant.firstName} ${contestant.lastName}`}</h2>
            <input type="password" onChange={handleOnChange} />
            <button onClick={handleClick}>Continue</button>
            {(error && <h6>{error}</h6>) || null}
        </Layout>
    );
}
