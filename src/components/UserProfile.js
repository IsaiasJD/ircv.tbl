import React, { useContext } from "react";
import { AppContext } from "../components/AppProvider";

export default function UserProfile(props){
    const context = useContext(AppContext);
    const { contestants, user } = context;
    const profileLink = user.profileLink;
    const leader = contestants[0];
    const mainUser = contestants.filter(c => c.profileLink == profileLink)[0];
    const percentToBe = calculatePercent(leader, mainUser);
        return (
    <   div className="user-profile-block">
            <h3>
                { mainUser.firstName } { mainUser.lastName }
            </h3>
            <p>Starting Weight: {mainUser.startingWeight}</p>
            <p>Current Weight: {mainUser.currentWeight}</p>
            <p>Percentage of Weight Loss: %{mainUser.percentLost}</p>
            <p>Percent Needed To Be In The Lead: %{percentToBe}</p>
        </div>
        )
    
}

function calculatePercent (leader, mainUser){
    const leaderPercent = leader.percentLost;
    const userPercent = mainUser.percentLost;
    const percentToBe = Math.round((leaderPercent - userPercent  * 10000) / 100);
    return percentToBe;
}
