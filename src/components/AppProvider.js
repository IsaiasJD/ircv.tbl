import React from "react";

const AppContext = React.createContext({});
const AppConsumer = AppContext.Consumer;

export default class AppProvider extends React.Component {
    state = {
        contestants: [
            {
                id: 1,
                firstName: "Shannon",
                lastName: "Curtis",
                startingWeight: 247,
                currentWeight: 247,
                profileLink: "scurtis"
            },
            {
                id: 2,
                firstName: "Daisy",
                lastName: "Saavedra",
                startingWeight: 202.5,
                currentWeight: 197,
                profileLink: "dasaavedra"
            },
            {
                id: 3,
                firstName: "Alva",
                lastName: "Perez",
                startingWeight: 125,
                currentWeight: 123,
                profileLink: "aperez"
            },
            {
                id: 4,
                firstName: "Nereida",
                lastName: "Calixto",
                startingWeight: 176,
                currentWeight: 168.4,
                profileLink: "ncalixto"
            },
            {
                id: 5,
                firstName: "Mrs",
                lastName: "Perrin",
                startingWeight: 147,
                currentWeight: 145,
                profileLink: "mperrin"
            },
            {
                id: 6,
                firstName: "Dulce",
                lastName: "Saavedra",
                startingWeight: 200,
                currentWeight: 193,
                profileLink: "dsaavedra"
            },
            {
                id: 7,
                firstName: "Mrs",
                lastName: "Elizabeth",
                startingWeight: 124,
                currentWeight: 124,
                profileLink: "melizabeth"
            },
            {
                id: 8,
                firstName: "Luisa",
                lastName: "Fuller",
                startingWeight: 191,
                currentWeight: 194,
                profileLink: "lfuller"
            },
            {
                id: 9,
                firstName: "Mrs",
                lastName: "Chavira",
                startingWeight: 178,
                currentWeight: 178,
                profileLink: "mchavira"
            },
            {
                id: 10,
                firstName: "Adrian",
                lastName: "Casarrubias",
                startingWeight: 187,
                currentWeight: 178,
                profileLink: "acasarrubias"
            },
            {
                id: 11,
                firstName: "Mr",
                lastName: "Machuca",
                startingWeight: 234,
                currentWeight: 234,
                profileLink: "mmachuca"
            },
            {
                id: 12,
                firstName: "Mrs",
                lastName: "Romero",
                startingWeight: 187,
                currentWeight: 182,
                profileLink: "mromero"
            }
        ],
        user: {
            profileLink: "",
            isLoggedIn: false
        }
    };

    componentDidMount() {
        const contestants = [].concat(this.state.contestants).map(c => {
            const percentLost = (
                ((c.startingWeight - c.currentWeight) / c.startingWeight) *
                100
            ).toFixed(2);
            return { ...c, percentLost };
        });
        contestants.sort((a, b) => b.percentLost - a.percentLost);
        this.setState({ contestants });
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
