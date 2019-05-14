import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

export default function Header() {
    const context = useContext(AppContext);
    console.log(context);
    return (
        <header style={headerStyle}>
            <h1>The Biggest Loser</h1>
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
