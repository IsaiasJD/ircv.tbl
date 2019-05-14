import React, { Component } from "react";
import Contestants from "../components/Contestants";
import Leader from "../components/Leader";
import Layout from "../components/layout/Layout";
import { AppContext } from "../components/AppProvider";

export default class HomePage extends Component {
    static contextType = AppContext;

    render() {
        const { contestants } = this.context;
        return (
            <Layout>
                <div className="container left">
                    <Contestants contestants={contestants} />
                </div>
                <div className="background container right">
                    <Leader leader={contestants[0]} />
                </div>
            </Layout>
        );
    }
}
