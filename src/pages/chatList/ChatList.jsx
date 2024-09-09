import React from 'react'
import "./chatList.css"
import Topbar from '../../components/topbar/Topbar'

export default function chat(){
    return(
        <>
        <Topbar/>       
        <div className='cont'>
        <div className='yo'>
        <div class="phoneswrapper">
  
 
      <div class="title"> My Chats </div>
    </div>
    <div class="phone_body">
       <div class="chat">
         <img class="chat_avatar" src="/assets/users/pfp2.jpg"/>
         <div class="chat_info">
           <div class="contact_name">Chris Evans </div>
           <div class="contact_msg">Avengers, assemble! </div>
         </div>
         <div class="chat_status">
           <div class="chat_date">just now</div>
         </div>
      </div>
      
      <div class="chat">
         <img class="chat_avatar" src="/assets/users/pfp5.jfif"/>
         <div class="chat_info">
           <div class="contact_name">PewDie Pie </div>
           <div class="contact_msg">Dude can you help me with my motorcycle?</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">1 hour ago</div>
         </div>
      </div>
      
      <div class="chat">
         <img class="chat_avatar" src="/assets/users/pfp3.jpg"/>
         <div class="chat_info">
           <div class="contact_name">KobeKumar </div>
           <div class="contact_msg">yes, how are you?</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">7 hours ago</div>
         </div>
      </div> 
      <div class="chat">
         <img class="chat_avatar" src="/assets/users/pfp4.jfif"/>
         <div class="chat_info">
           <div class="contact_name">Karan Asnani </div>
           <div class="contact_msg">We should catch up soon!</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">Yesterday</div>
            
         </div>
      </div>
      <div class="chat">
         <img class="chat_avatar" src="/assets/bg.jpg"/>
         <div class="chat_info">
           <div class="contact_name">FruityFiona</div>
           <div class="contact_msg">Whats up</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">1 day ago</div>
            
         </div>
      </div>
      <div class="chat">
         <img class="chat_avatar" src="/assets/users/pfp1.jpg"/>
         <div class="chat_info">
           <div class="contact_name">GamerShroud </div>
           <div class="contact_msg">Are you planning to play anything tonight?  </div>
         </div>
         <div class="chat_status">
           <div class="chat_date">2 days ago</div>
            
         </div>
      </div>
      <div class="chat">
         <img class="chat_avatar" src="/assets/users/user1.png"/>
         <div class="chat_info">
           <div class="contact_name">Arpan Suresh</div>
           <div class="contact_msg">Messi scored an amazing goal!</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">2 days ago</div>
            
         </div>
      </div>
      
      <div class="chat">
         <img class="chat_avatar" src="/assets/users/user3.png"/>
         <div class="chat_info">
           <div class="contact_name">Ronak </div>
           <div class="contact_msg">Can we go shopping soon?</div>
         </div>
         <div class="chat_status">
           <div class="chat_date">1 week ago</div>            
         </div>
      </div>
    </div>   
  </div>
  </div> 
        </>
    )
}
