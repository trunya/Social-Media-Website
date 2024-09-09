import React from "react";
import "./info.css"
import Rightbar from "./rightbar/Rightbar";


export default function info(){
    return(
        <>
        <Rightbar/>
        <div className="infoWrap">
            <span className="h">Information</span>
            <br></br>
            <br></br>
            <br></br>
            <p className="a">Welcome to our one of a kind Social Media site - WaterMelon🍉</p>
            <p className="b">Feel free to share, like, comment and express yourself as a seed in our large society</p>
            <p className="c">Enjoy the retro vibe in our minimalist (but has everything you need) social media platform</p>
        </div>
        </>
    )
}

