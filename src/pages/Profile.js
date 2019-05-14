import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AppContext } from "../components/AppProvider";

export default function Profile(props) {
    const {
        match: {
            params: { contestant: profileLink }
        }
    } = props;
    const context = useContext(AppContext);
    const { user } = context;

    const isValid = user.isLoggedIn && profileLink === user.profileLink;
    return (
        <Layout>{(isValid && <h1>Profile</h1>) || <Redirect to="/" />}</Layout>
    );
}
