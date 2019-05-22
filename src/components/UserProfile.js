import React, { useContext } from "react";
import { AppContext } from "../components/AppProvider";

export default function UserProfile() {
    const context = useContext(AppContext);
    const { contestants, user, leader } = context;
    if (contestants.length === 0 || !contestants) {
        return null;
    }

    const profileLink = user.profileLink;
    const mainUser = contestants.filter(c => c.profileLink == profileLink)[0];
    const percentToBe = calculatePercent(leader, mainUser);
    const weightNeeded = calculateWeight(percentToBe, mainUser);

    const notLeader = mainUser.profileLink !== leader.profileLink;

    return (
        <div className="user-profile-block">
            <h3>
                {mainUser.firstName} {mainUser.lastName}
            </h3>
            <p>
                Starting Weight: <span> {mainUser.startingWeight}</span>
            </p>
            <p>
                Current Weight: <span> {mainUser.currentWeight}</span>
            </p>
            <p>
                Percentage of Weight Loss: <span> %{mainUser.percentLost}</span>
            </p>
            {(notLeader && (
                <div>
                    <p>
                        You need to loose
                        <span> %{percentToBe}</span> more to be in the lead
                    </p>
                    <p>
                        Weight Loss Needed To Be In The Lead:
                        <span>{weightNeeded}lbs</span>
                    </p>
                </div>
            )) || <h1>You're the leader!</h1>}
        </div>
    );
}

function calculatePercent(leader, mainUser) {
    const leaderPercent = leader.percentLost;
    const userPercent = mainUser.percentLost;
    const percentToBe = (leaderPercent - userPercent).toFixed(2);
    return percentToBe;
}

function calculateWeight(percentToBe, mainUser) {
    const weightNeeded = (
        mainUser.startingWeight *
        (percentToBe / 100)
    ).toFixed(2);
    return weightNeeded;
}
