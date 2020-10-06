import React, { useContext, useState } from 'react';
import './VolunteerRegistration.css';
import logo from '../../images/logos/Group 1329.png'
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const VolunteerRegistration = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const {orgName} = useParams();
    const history = useHistory();

    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     date: '',
    //     description: '',
    //     organization: '',
    //     success: ''
    // })

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRegistration = { ...loggedInUser }
        fetch('https://secret-wildwood-13220.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            loggedInUser.success = "Registration Successful"
            history.push('/eventtasks')
        })

    }

    const handleChange = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    return (
        <div className="RegisterVolunteer">
            <div className="success__alert mt-4 w-50 mx-auto">
            {
                loggedInUser.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : loggedInUser.success = ""
            }
            </div>

            <Link to="/"> <img className="logo" src={logo} alt="" /> </Link>
            

            
                <form onSubmit={handleSubmit} action="">
                    <h2> Register as a Volunteer </h2>
                    <input type="text" name="name" onChange={handleChange} placeholder="Full Name" id="" value={loggedInUser.name} required/>

                    <input type="text" name="email" onChange={handleChange} placeholder="Username or Email" id="" value={loggedInUser.email} required/>

                    <input type="date" name="date" onChange={handleChange} id="" required/>

                    <input type="text" name="description" onChange={handleChange} placeholder="Description" id=""  required/>

                    <input type="text" name="organization" onBlur={handleChange} placeholder="Organize books at the library." id="" value={orgName} required/>

                    <input 
                        style={{ 
                            background: "#3F90FC", 
                            height: "35px", color: "white", 
                            marginTop: "60px",paddingBottom:'35px', 
                            fontSize: "1.2rem" ,
                            borderRadius: "5px"
                        }}
                        type="submit"
                        value="Registration"
                        
                    />
                </form>
            
        </div>
    );
};

export default VolunteerRegistration;