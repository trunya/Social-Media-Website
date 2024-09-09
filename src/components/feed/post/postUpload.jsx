import React from "react";
import "./postUpload.css"

export default function postUpload(){
    return(
        <div className="container">
            <label className="up">Upload Post</label>
            <input className="cap" placeholder='Enter a Caption'/>
            <input className="pic" placeholder='Enter url for image'/>
            <button className="bu">Upload</button>
        </div>
    )
}