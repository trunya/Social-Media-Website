import React from 'react'
import './topbar.css'

export default function Topbar(){
    return(
        <div className='topbarcontainer'>
            <div className='topbarL'>
                          <span className='logo'>WaterMelon🍉</span>
            </div>
            <div className='topbarR'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>HomePage</span>                    
                </div>
                <div className='topbarIcons'>
                    <span className="username">Swaraj</span>
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80" alt="" className="topbarImage" />
                </div>
            </div>
        </div>
    )
}