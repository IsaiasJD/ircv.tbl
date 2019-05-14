import React, { useContext } from "react";
import { AppContext } from "../components/AppProvider";

export default function UserProfile(props){
    const context = useContext(AppContext);
    const { contestants, user } = context;
    const profileLink = user.profileLink;
    const mainUser = contestants.filter(c => c.profileLink == profileLink)[0];
        return (
    <   div>
            <h3>
                { mainUser.firstName } { mainUser.lastName }
            </h3>
            <p>Percentage of Weight Loss:</p>
            <p>%{mainUser.percentLost}</p>
        </div>
        )
    
}
