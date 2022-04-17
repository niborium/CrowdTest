import React from "react";
import * as api from "../api/api.js"

export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick(setRole) {
        this.setState({isLoggedIn: true});
        api.loginUser(setRole);
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        api.logoutUser();
    }
    render() {
        const loginasTester = "tester";
        const loginasCompany = "company";

        if (this.state.isLoggedIn === false) {
            return (
                <><button onClick={() => this.handleLoginClick(loginasTester)}>Logga in som testare</button>
                <button onClick={() => this.handleLoginClick(loginasCompany)}>Logga in som företag</button></>
            );
            } else {
            return (
                <button onClick={this.handleLogoutClick}>Logga ut</button>
            );
        }
    }
}

/*     ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
    ); */