import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AppContext } from "../components/AppProvider";
import UserProfile from "../components/UserProfile";

export default function Profile(props) {
    const {
        match: {
            params: { contestant: profileLink }
        }
    } = props;
    const context = useContext(AppContext);
    const { user } = context;

    const isAuthenticated = user.isLoggedIn && profileLink === user.profileLink;
    return (
        <Layout>
            {(isAuthenticated && <UserProfile />) || (
                <Redirect to={`/authentication/${profileLink}`} />
            )}
        </Layout>
    );
}
