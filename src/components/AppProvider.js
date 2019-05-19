import React from "react";
import axios from "axios";

const AppContext = React.createContext({});
const AppConsumer = AppContext.Consumer;

export default class AppProvider extends React.Component {
    state = {
        contestants: [
            {
                id: null,
                firstName: "",
                lastName: "",
                startingWeight: null,
                currentWeight: null,
                profileLink: ""
            }
        ],
        user: {},
        saveUser: {}
    };

    componentDidMount() {
        axios
            .get(
                "https://my-json-server.typicode.com/IsaiasJD/ircv.tbl/contestants"
            )
            .then(res =>
                this.setState({
                    contestants: res.data
                        .map(c => {
                            c.percentLost = (
                                ((c.startingWeight - c.currentWeight) /
                                    c.startingWeight) *
                                100
                            ).toFixed(2);
                            return {
                                ...c
                            };
                        })
                        .sort((a, b) => b.percentLost - a.percentLost)
                })
            );
    }

    saveUser = user => {
        this.setState({ user });
        // TODO: use sessionStorage || cookies || localStorage for persistent storage
    };

    render() {
        const { contestants, user } = this.state;
        const { children } = this.props;
        return (
            <AppContext.Provider
                value={{
                    contestants,
                    user,
                    saveUser: this.saveUser
                }}>
                {children}
            </AppContext.Provider>
        );
    }
}

//export const AppProvider = AppContext.Provider;
export { AppContext, AppConsumer };
