import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    const { children } = props;

    return (
        <React.Fragment>
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </React.Fragment>
    );
}
