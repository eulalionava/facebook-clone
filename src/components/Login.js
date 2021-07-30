import { Button } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../auth/StateProvider';
import { auth, provider } from '../firebase/firebase';
import '../styles/style.css';
import { types } from '../types/types';

export const Login =()=>{

    const[state,dispatch ] = useStateValue();

    const singIn = ()=>{
        auth.signInWithPopup(provider)
        .then( result=>{
            dispatch({
                type:types.SET_USER,
                user:result.user
            });
            console.log(result.user);
        }).catch( (error)=>alert(error.message));
    }
    
    return(
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="logo"/>
                <img src="http://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="imagen"/>
            </div>
            <Button type="submit" onClick={ singIn }>
                SingIn
            </Button>
        </div>
    )
}