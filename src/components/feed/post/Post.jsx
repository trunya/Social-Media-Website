/*import React, { useState } from 'react'
import "./post.css"
import {MoreVert,Favorite,Telegram, ModeComment} from "@mui/icons-material"

export default function Post(){
    const [like,setlike]=useState(Post.like=8)
    const [isliked,setisliked]=useState(false)

    const likeHandler=()=>{
        setlike(isliked? like-1: like+1)
        setisliked(!isliked)
    }
    return(
        <div className='PostContainer'>
            <div className='post'>
                <div className='postWrapper'>                
                    <div className='postTop'>
                        <div className="postTopLeft">
                            <img className='pfp' src='/assets/users/pfp1.jpg' alt=''/>
                            <span className='postUsername'>GamerShroud</span>
                            <span className='postTime'>8 minutes ago</span>                        
                        </div>
                        <div className="postTopRight">
                            <MoreVert/>
                        </div>
                    </div>
                    <div className='postMid'>
                        <span className="postText">
                            Hey! It's my first post on WaterMelon
                        </span>
                        <img className='postImg' src="assets/posts/post1.jfif" alt="" />
                    </div>
                    <div className='postBot'>
                        <div className="postBotLeft">
                            <Favorite className='l' onClick={likeHandler}/>
                            <span className='likes'>{like}</span>  
                            <ModeComment className='c'/>
                            <span className="comments">27</span>
                        </div>
                        <div className="postBotRight">                      
                            <Telegram className='t'/>
                        </div>
                    </div>
                </div>      
            </div>
            <div className='post'>
            <div className='postWrapper'>                
                    <div className='postTop'>
                        <div className="postTopLeft">
                            <img className='pfp' src='/assets/users/pfp1.jpg' alt=''/>
                            <span className='postUsername'>GamerShroud</span>
                            <span className='postTime'>8 minutes ago</span>                        
                        </div>
                        <div className="postTopRight">
                            <MoreVert/>
                        </div>
                    </div>
                    <div className='postMid'>
                        <span className="postText">
                            {this.caption[0]}
                        </span>
                        <img className='postImg' src="assets/posts/post1.jfif" alt="" />
                    </div>
                    <div className='postBot'>
                        <div className="postBotLeft">
                            <Favorite className='l' onClick={likeHandler}/>
                            <span className='likes'>{like}</span>  
                            <ModeComment className='c'/>
                            <span className="comments">27</span>
                        </div>
                        <div className="postBotRight">                      
                            <Telegram className='t'/>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    )
}
*/
import React, { useState } from 'react'
import "./post.css"
import {MoreVert,Favorite,Telegram,ModeCommentOutlined} from "@mui/icons-material"
import posts from "./Feed"

export default function Post(){
    const [like,setlike]=useState(Post.like=9)
    const [isliked,setisliked]=useState(false)

    const likeHandler=()=>{
        setlike(isliked? like-1: like+1)
        setisliked(!isliked)
    }

    return(
        <div className='post'>
            <div className='postWrapper'>                
                <div className='postTop'>
                    <div className="postTopLeft">
                        <img className='pfp' src='/assets/users/pfp1.jpg' alt=''/>
                        <span className='postUsername'>GamerShroud</span>
                        <span className='postTime'>8 minutes ago</span>                        
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className='postMid'>
                    <span className="postText">
                        Hey! It's my first post on WaterMelon
                    </span>
                    <img className='postImg' src="assets/posts/post1.jfif" alt="" />
                </div>
                <div className='postBot'>
                    <div className="postBotLeft">
                        <Favorite className='l' onClick={likeHandler}/>
                        <span className='likes'>{like}</span>  
                        <ModeCommentOutlined className='c'/>
                        <span className="comments">27</span>
                    </div>
                    <div className="postBotRight">                      
                        <Telegram className='t'/>
                    </div>
                </div>
            </div>
        </div>
    )
}           
        