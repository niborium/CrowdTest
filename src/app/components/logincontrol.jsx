import React from "react";
import * as api from "../api/api.js"

export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick(setAccount, setRole) {
        this.setState({isLoggedIn: true});
        api.loginUser(setAccount, setRole);
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
                <><button id="btnLat" className="btn btn-success" onClick={() => this.handleLoginClick("testkonto-testare",loginasTester)}>Logga in som testare</button>&nbsp;&nbsp;
                <button id="btnLac" className="btn btn-success" onClick={() => this.handleLoginClick("testkonto-företag",loginasCompany)}>Logga in som företag</button></>
            );
            } else {
            return (
                <button id="btnLo" className="btn btn-danger" onClick={this.handleLogoutClick}>Logga ut</button>
            );
        }
    }
}

/*     ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
    ); */