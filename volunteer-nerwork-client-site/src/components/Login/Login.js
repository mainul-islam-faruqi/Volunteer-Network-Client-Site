import React from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from './firebase.config';
import logo from '../../images/logos/Group 1329.png';
import google from '../../images/logos/google-logo.png';
import { Link } from 'react-router-dom';

const Login = () => {

    // firebase.initializeApp(firebaseConfig);
    return (
        <div className="login">
            <Link to="/"> <img className="logo" src={logo} alt="" /> </Link>
            
            <form className="login-form" action="">
                 <h2> Login with </h2> 
                
                <div className="googleLogin">
                    <img className="googleLogo" src={google} alt=""/>
                    <p > Continue with Google</p>
                </div>

                <div>  
                <p> Don't have an account? <Link to="/create-account" style={{color: "#3F90FC"}}> Create an account </Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;