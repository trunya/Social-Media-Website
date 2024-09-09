import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import "./profile.css"
import {MoreVert,Favorite,Telegram,ModeCommentOutlined} from "@mui/icons-material"

export default function Profile(){
    return(
        <>
            <Topbar/>   
            <div className='cont'>
                <Rightbar/>
                <Feed/>
                <span className='o'>My Profile</span>
            </div>
        </>   
    )
}