import React from "react";
import Contestants from "../apis/contestants.api";

const AppContext = React.createContext({});
const AppConsumer = AppContext.Consumer;

export default class AppProvider extends React.Component {
    state = {
        contestants: [],
        leader: {},
        user: {},
        saveUser: {}
    };

    async componentDidMount() {
        const storedUser = sessionStorage.getItem("TBL_USER");
        if (storedUser) {
            this.setState({ user: JSON.parse(storedUser) });
        }

        const contestantsApi = new Contestants();
        const contestantsPromise = contestantsApi.getAll();
        const leaderPromise = contestantsApi.getLeader();

        const contestants = await contestantsPromise;
        const leader = await leaderPromise;

        this.setState({ contestants, leader });
    }

    saveUser = user => {
        this.setState({ user }, () =>
            sessionStorage.setItem("TBL_USER", JSON.stringify(user))
        );
    };

    render() {
        const { contestants, user, leader } = this.state;
        const { children } = this.props;
        return (
            <AppContext.Provider
                value={{
                    contestants,
                    user,
                    leader,
                    saveUser: this.saveUser
                }}>
                {children}
            </AppContext.Provider>
        );
    }
}

//export const AppProvider = AppContext.Provider;
export { AppContext, AppConsumer };
