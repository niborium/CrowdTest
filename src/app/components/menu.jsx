import React from "react";
import { LoginControl } from './logincontrol.jsx';

export function Menu(){
    return(
        <div className="p-3 mb-2 bg-dark text-white" id="menu">
            <LoginControl />
        </div>
    );
}