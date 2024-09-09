/*import React from 'react'
import "./feed.css"
import Post from './post/Post'
import PostUpload from './post/postUpload'

export default function Feed(){
    return(
        <>
        <div className='feed'>
            <div className='feedWrapper'>
                <Post/>
            </div>
        </div>
        </>
    )
}
*/
import React from 'react'
import "./feed.css"
import Post from './post/Post'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
//import Cookies from 'universal-cookie';

export default function Feed(){
    let  username  = useParams();
    //const cookies = new Cookies()
    //const following = cookies.get('Following')
    //const posts = cookies.get('Posts')
    const posts = [{
        "_id": {
          "$oid": "6379c4800602220dad511d63"
        },
        "picture": "https://images-platform.99static.com//hb9TPhI-TLBm-q4uDQb0IcbJK0c=/417x0:1497x1080/fit-in/500x500/99designs-contests-attachments/103/103934/attachment_103934897",
        "caption": "Just Co-founded my own social media platfrom!",
        "likes": 1,
        "comments": [
          "Hey",
          "Hey"
        ]
      },{
        "_id": {
          "$oid": "6379c4800602220dad511d63"
        },
        "picture": "https://images-platform.99static.com//hb9TPhI-TLBm-q4uDQb0IcbJK0c=/417x0:1497x1080/fit-in/500x500/99designs-contests-attachments/103/103934/attachment_103934897",
        "caption": "Just Co-founded my own social media platfrom!",
        "likes": 1,
        "comments": [
          "Hey",
          "Hey"
        ]
      }]
      posts.map((post)=>delete post._id)
    return(
        <div className='feed'>
            <div className='feedWrapper'>
                {posts.map((post)=><Post post={post}/>)} 
            </div>
        </div>
    )
}