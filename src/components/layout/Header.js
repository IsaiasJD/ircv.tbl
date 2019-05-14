import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
import { Link } from "react-router-dom";

export default function Header() {
    const context = useContext(AppContext);
    return (
        <header style={headerStyle}>
        <Link to={"/"}>
            <h1>The Biggest Loser</h1>
        </Link>
        </header>
    );
}

const headerStyle = {
    position: "fixed",
    left: "0",
    top: "0",
    background: "black",
    color: "#fff",
    textAlign: "center",
    padding: "1px",
    width: "100%",
    marginTop: "1%,",
    marginBottom: "1%",
    zIndex: "2"
};
