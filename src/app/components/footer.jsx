import React from "react";

export function Footer(props) {
    return (
        <footer>
            <p>{props.company} &copy; {props.author}.</p>
        </footer>
    );
}