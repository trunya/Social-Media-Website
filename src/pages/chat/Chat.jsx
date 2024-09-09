import React from 'react'
import "./chat.css"
import Topbar from '../../components/topbar/Topbar'

/*export default function chat(){
    return(
        <>
            <Topbar/>
            <div className='chatBox'>
                <div className='chatboxes'>
                    <img src="assets/users/pfp3.jpg" alt="" className='pfp'/>
                    <span className='Users'>user1</span>
                    <span className='chats'>whatsup</span>
                    <span className='time'>4 minutes ago</span>
                </div>
            </div>
        </>
    )
}*/
export default function chat(){
    return(
        <>
        <Topbar/>
        <div className='cont'>
        <div className='yo'>
        <div class="bubbleWrapper">
        <div class="inlineContainer">
            <img class="inlineIcon" src="assets/users/pfp1.jpg"/>
            <div class="otherBubble other">
                 No ninjas!
            </div>
            </div>
            <span class="other">08:41</span>
        </div>
        <div class="bubbleWrapper">
            <div class="inlineContainer own">
                <img class="inlineIcon" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80"/>
                <div class="ownBubble own">
                The first rule of being a ninja is, 'Do no harm.'
                </div>
            </div><span class="own">08:55</span>
        </div>
        <div class="bubbleWrapper">
            <div class="inlineContainer">
                <img class="inlineIcon" src="assets/users/pfp1.jpg"/>
                <div class="otherBubble other">
                    Knowing when to leave requires training.
                </div>
            </div>
        </div><span class="other">10:13</span>
        <div class="bubbleWrapper">
            <div class="inlineContainer own">
                <img class="inlineIcon" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80"/>
                <div class="ownBubble own">
                Stunned but impressed. 
                </div>
            </div><span class="own">11:07</span>
        </div>
        <div class="bubbleWrapper">
            <div class="inlineContainer">
                <img class="inlineIcon" src="assets/users/pfp1.jpg"/>
                <div class="otherBubble other">
                    How about throwing stars?
                </div>
            </div><span class="other">11:11</span>
        </div>
            <input className='chatbox' placeholder="enter text here"/>
            <img class="inlineIcon" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80"/>
        </div>
        </div>
        </>
    )
}