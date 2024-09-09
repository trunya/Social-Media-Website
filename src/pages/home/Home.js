import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import postUpload from '../../components/feed/post/postUpload'
import "./home.css"

export default function Home(){
    return(
        Home
        <Topbar/>
        <div className='homeContainer'>            
            <Rightbar/>
            <Feed/>
        </div>
    )
}