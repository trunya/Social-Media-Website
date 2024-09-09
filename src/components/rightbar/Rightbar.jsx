import React from 'react'
import "./rightbar.css"
import { Bolt,Info,Settings,AddAPhoto,Chat,Person } from '@mui/icons-material' 

export default function Rightbar(){
    return(
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <ul className='rightbarList'>
                    <li className='rightbarListItem'>
                        <Bolt className='rightbarIcon'/>
                            <span className='rightbarListItemText'>
                                Feed
                            </span>
                    </li>
                
                    <li className='rightbarListItem'>
                        < AddAPhoto className='rightbarIcon'/>
                            <span className='rightbarListItemText'>
                                Upload Post
                            </span>
                    </li>
                    <li className='rightbarListItem'>
                        < Chat className='rightbarIcon'/>
                            <span className='rightbarListItemText'>
                                Chat
                            </span>
                    </li>
                    <li className='rightbarListItem'>
                        < Person className='rightbarIcon'/>
                            <span className='rightbarListItemText'>
                                Edit Profile
                            </span>
                    </li>
                    <li className='rightbarListItem'>
                        <Info className='rightbarIcon'/>
                            <span className='rightbarListItemText'>
                                Information
                            </span>
                    </li>  
                    <li className='rightbarListItem'>
                        <Settings className='rightbarIcon'/>
                            <span className='rightbarListItemText'>
                                Settings
                            </span>
                    </li>               
                </ul>
                <hr className="line"></hr>
                <ul className='friends'>
                    Following
                    <li className='friendList'>
                        <img className='friendImg' src="/assets/users/WIN_20221104_14_00_46_Pro.jpg" alt=''/>
                        <span className='friendName'>Sujala</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/user2.jpg' alt=''/>
                        <span className='friendName'>Rohan</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/user (1).jpg' alt=''/>
                        <span className='friendName'>Shreya</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/user3.png' alt=''/>
                        <span className='friendName'>Ronak</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/user (3).jpg' alt=''/>
                        <span className='friendName'>Aditi</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/paya.jpg' alt=''/>
                        <span className='friendName'>Payal</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/user (2).jpg' alt=''/>
                        <span className='friendName'>Kevin</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/users (1).jpg' alt=''/>
                        <span className='friendName'>Arnav</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/user (4).jpg' alt=''/>
                        <span className='friendName'>Lana</span>
                    </li>
                    <li className='friendList'>
                        <img className='friendImg' src='/assets/users/users (2).jpg' alt=''/>
                        <span className='friendName'>Sanketh</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}