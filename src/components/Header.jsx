import React from "react";
import "/src/myApp.css";

const Header = ({props}) => {
    return (
        <div style={{
            height: "10vh",
            backgroundColor: "#c59771bd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h2>{props}</h2>
        </div>
    )
}

export default Header;