import React from 'react';
import '../styles/style.css';
import { MessageSender } from './MessageSender';
import { Post } from './Post';
import { StoryReel } from './StoryReel';

export const Feed = ()=>{
    return(
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            <Post
                profilePic="https://i0.wp.com/instyle.mx/wp-content/uploads/2020/08/will-smith.jpg?fit=1024%2C1024&ssl=1"
                message="Buen trabajo"
                timestamp="Es ahora"
                username="Eulalionava"
                image="https://img.blogs.es/anexom/wp-content/uploads/2021/06/Video_FondodePantalla.jpg"/>

        </div>
    )
}