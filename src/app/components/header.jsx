import React from "react";
import { LoginControl } from './logincontrol.jsx';

export function Header(){
    return(
        <div className="p-3 mb-2 bg-dark text-white" id="menu">
            <h1>CrowdTest</h1>
            <LoginControl />
        </div>
    );
}