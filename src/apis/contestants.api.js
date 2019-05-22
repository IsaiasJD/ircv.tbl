import axios from "axios";

export default function Contestants() {
    const baseUrl = "https://my-json-server.typicode.com/IsaiasJD/ircv.tbl";

    function getAll() {
        const url = `${baseUrl}/contestants`;
        return axios.get(url).then(res =>
            res.data
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
                .sort((a, b) => {
                    var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                })
        );
    }

    function getLeader() {
        const url = `${baseUrl}/contestants`;
        return axios
            .get(url)
            .then(res =>
                res.data
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
            )
            .then(res => res[0]);
    }

    return Object.freeze({
        getAll,
        getLeader
    });
}
