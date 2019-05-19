import React, { Component } from "react";
import Contestants from "../components/Contestants";
import Leader from "../components/Leader";
import Layout from "../components/layout/Layout";
import { AppContext } from "../components/AppProvider";

export default class HomePage extends Component {
    static contextType = AppContext;

    render() {
        const { contestants, leader } = this.context;
        return (
            contestants.length > 0 && (
                <Layout>
                    <div className="container left">
                        <Contestants contestants={contestants} />
                    </div>
                    <div className="background container right">
                        <Leader leader={leader} />
                    </div>
                </Layout>
            )
        );
    }
}
