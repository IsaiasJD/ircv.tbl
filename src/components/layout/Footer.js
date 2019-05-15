import React from "react";

export default function Footer() {
    return (
        <header style={footerStyle}>
            <h1>Imagine Schools</h1>
        </header>
    );
}

const footerStyle = {
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    width: "100%",
    marginTop: "10px",
    zIndex: "2"
};
