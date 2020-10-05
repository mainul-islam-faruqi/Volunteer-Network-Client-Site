import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../images/logos/Group 1329.png';
import google from '../../images/logos/google-logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(provider).then(function (result) {
          var { displayName, email } = result.user;
          const signedInUser = { name:displayName, email }
          setLoggedInUser(signedInUser)
        }).catch(function (error) {
          
        });
      }
      
    return (
        <div className="login">
            <h1> {loggedInUser.name} </h1>
            <Link to="/"> <img className="logo" src={logo} alt="" /> </Link>
            
            <form className="login-form" action="">
                 <h2> Login with </h2> 
                
                <div onClick={handleGoogleSignIn} className="googleLogin">
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