import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import '../styles/style.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../auth/StateProvider';
import db from '../firebase/firebase';
import firebase from 'firebase';

export const MessageSender = ()=>{
    const [{user},dispatch ] = useStateValue();
    const [ input,setInput ] = useState('');
    const [ imageUrl,setImageUrl ] = useState('');

    const handSubmit = (e)=>{
        e.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })
        
        //resetea
        setInput("");
        setImageUrl("");
    }

    return(
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={ user.photoURL }/>
                <form>
                    <input 
                        value={ input }
                        onChange={ (e)=> setInput(e.target.value) }
                        className="messageSender__input"
                        placeholder={`what's on your mind, ${user.displayName}`}/>
                    <input 
                        value={ imageUrl }
                        onChange={ (e)=>setImageUrl(e.target.value) }
                        placeholder={`Image url( opcional )`}/>

                    <button onClick={ handSubmit } type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__botton">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color:"red"}}/>
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color:"green"}}/>
                    <h3>Photo/video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}