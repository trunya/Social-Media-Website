import React from "react";
import "./settings.css"
import Topbar from "./topbar/Topbar";


export default function Settings(){
    return(
        <>
            <Topbar/>
            <div className="set">
                <span className="h">Settings</span>
                <br></br>
                <br></br>
                <br></br>
                <p className="a">Delete Account</p>
                <p className="b">Edit Profile</p>
                <p className="c">Report User</p>
                <p className="d">Logout</p>
            </div>
        </>
    )
}

