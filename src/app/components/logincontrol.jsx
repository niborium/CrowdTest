import React from "react";
import * as api from "../api/api.js"

export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false, userRole:'', currentUser:''};
    }
    handleLoginClick(setAccount, setRole) {
        this.setState({isLoggedIn: true, currentUser: setAccount, userRole: setRole});
        api.loginUser(setAccount, setRole);
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        api.logoutUser();
    }
    render() {
        if (this.state.isLoggedIn === false) {
            return (
                <><button id="btnLat" className="btn btn-success" onClick={() => this.handleLoginClick("testkonto-testare","tester")}>Logga in som testare</button><br></br><br></br>
                <button id="btnLac" className="btn btn-success" onClick={() => this.handleLoginClick("testkonto-företag","company")}>Logga in som företag</button></>
            );
            } else if (this.state.userRole === "company"){
                return(
                <><button id="btnLo" className="btn btn-danger" onClick={this.handleLogoutClick}>Logga ut som {this.state.currentUser}</button><br></br><br></br>
                <button id="btnAf" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adformModal">
                    Lägg till ny annons
                </button></>
                );
            } else {
            return (
                <button id="btnLo" className="btn btn-danger" onClick={this.handleLogoutClick}>Logga ut som {this.state.currentUser}</button>
            );
        }
    }
}