import { Button } from '@material-ui/core';
import React from 'react';
import '../styles/style.css';

export const Login =()=>{

    const singIn = ()=>{

    }
    
    return(
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="logo"/>
                <img src="http://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png"/>
            </div>
            <Button type="submit" onClick={ singIn }>
                SingIn
            </Button>
        </div>
    )
}