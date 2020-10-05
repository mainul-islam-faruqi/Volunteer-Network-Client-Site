import React, { useState } from 'react';
import './Admin.css';
import logo from '../../images/logos/Group 1329.png';
import userIcon from '../../images/logos/users-alt 1.png';
import plusIcon from '../../images/logos/plus 1.png';
import uploadIcon from '../../images/logos/cloud-upload-outline 1.png';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';

const Admin = () => {

    const [event, setEvent] = useState({
        title: '',
        description: '',
        date: '',
        success: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        const newEventInfo = { ...event };
        newEventInfo[e.target.name] = e.target.value;
        setEvent(newEventInfo);
    };

    // const handleSelectedFile = (e) => {
    //     if(e.target.files){
    //         const newFile = e.target.files[0]
    //         setSelectedFile(newFile);
    //     }
    // }

    const handleEvent = (e) => {
        e.preventDefault();
        const eventInfo = { ...event, ...selectedFile };
        fetch('https://secret-wildwood-13220.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventInfo)
        })
            .then(res => res.json())
            .then(data => {
                event.success = "Registration Successful"
            })
    }


    return (
        <div className="addmin">
            <div className="eventHeader">
                <Link to="/" className="logo"> <img  src={logo} alt="" /> </Link>
                <h3> Add event</h3>
            </div>
            <div className="eventOptions">
                <div className="eventOptionLeft">
                    <p> <img src={userIcon} className="icon" alt="" /> Volunteer register list </p>
                    <p style={{ color: "#207FEE", fontWeight: '600' }}> <img src={plusIcon} className="icon" alt="" /> Add event </p>
                </div>

                <div className="eventOptionRight">
                    <AddEvent/>
                </div>

            </div>

        </div>
    );
};

export default Admin;