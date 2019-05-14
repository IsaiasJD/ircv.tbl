import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Profile from "./pages/Profile";
import AppProvider from "./components/AppProvider.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <AppProvider>
                <div className="App">
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route
                                path="/profile/:contestant"
                                exact
                                component={Profile}
                            />
                            <Route
                                path="/authentication/:contestant"
                                exact
                                component={Authentication}
                            />
                            {/* <Route component={NotFound} /> */}
                        </Switch>
                    </Router>
                    {/* <Route path="/profile/:contestant" component={Profile} /> */}
                    {/* <Route path="/authentication" component={Authentication} /> */}
                </div>
            </AppProvider>
        );
    }
}

export default App;
