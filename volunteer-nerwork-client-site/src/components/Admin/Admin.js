import React, { useState } from 'react';
import './Admin.css';
import logo from '../../images/logos/Group 1329.png';
import userIcon from '../../images/logos/users-alt 1.png';
import plusIcon from '../../images/logos/plus 1.png';
import { Link } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import VolunteerRegisterList from '../VolunteerRegisterList/VolunteerRegisterList';

const Admin = () => {

    const [activeRegList, setActiveRegList] = useState(true);
    const [activeEventForm, setActiveEventForm] = useState(false);


    let activeStyle = {
        color: "#207FEE", 
            fontWeight: '600' 
        }

    const handleRegList = ()=> {
        setActiveRegList(true)
        setActiveEventForm(false)
    }

    const handleEventForm = () => {
        setActiveRegList(false)
        setActiveEventForm(true)
    }

    // const activeHandler = (e)=>{
    //     setActiveRegList(!activeRegList)
    //     setActiveEventForm(!activeEventForm)
    // } 
    
    return (
        <div className="addmin">
            <div className="eventHeader">
                <Link to="/" className="logo"> <img  src={logo} alt="" /> </Link>
                <h3> Add event</h3>
            </div>
            <div className="eventOptions">
                <div className="eventOptionLeft">
                    <p style={activeRegList?activeStyle:{}} onClick={(e)=>handleRegList(e)}> <img src={userIcon} className="icon" alt="" /> Volunteer register list </p>
                    <p style={activeEventForm?activeStyle:{}} onClick={(e)=>handleEventForm(e)} > <img src={plusIcon} className="icon" alt="" /> Add event </p>
                </div>

                <div className="eventOptionRight">

                    <div className="eventForm" style={{display: activeEventForm? "block": "none" }} >
                        <AddEvent  />
                    </div>
                    <div className="registerList" style={{display: activeRegList? "block": "none"}}>
                        <VolunteerRegisterList />
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default Admin;