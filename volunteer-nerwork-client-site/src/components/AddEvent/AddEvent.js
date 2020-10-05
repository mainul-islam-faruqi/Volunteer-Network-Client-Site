import React, { useState } from 'react';
import './AddEvent.css';
import logo from '../../images/logos/Group 1329.png';
import userIcon from '../../images/logos/users-alt 1.png';
import plusIcon from '../../images/logos/plus 1.png';
import uploadIcon from '../../images/logos/cloud-upload-outline 1.png';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

const AddEvent = () => {

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
        <>
             {
                        event.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : event.success = ""
                    }

                    <form onSubmit={handleEvent} className="form " action="" enctype="multipart/form-data">
                        <div className="formLeft">
                            <h5>Event Title </h5>
                            <input type="text" name="title"
                            
                                placeholder="Enter title" id=""
                                onChange={handleChange}
                            />

                            <h5> Description </h5>
                            <input type="text" name="description"
                                placeholder="Enter Description " id=""
                                onChange={handleChange}
                                style={{ paddingBottom: " 70px", paddingTop: "15px" }}
                            />
                        </div>

                        <div className="formRight">
                            <h5>Event Date </h5>
                            <input type="date" name="date"
                                placeholder="Enter title" id=""
                                onChange={handleChange}
                                style={{color: "#C9C9C9"}}
                            />

                            <h5> Banner </h5>
                            <div className="uploadFile">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="custom-file-input"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                />
                                <div id="uploadImageText"> <img className='uploadImage' src={uploadIcon} alt="" /> Upload image </div>
                            </div>

                            <input
                                style={{
                                    background: "#3F90FC",
                                    height: "35px",
                                    color: "white",
                                    marginTop: "40px",
                                    fontSize: "1.2rem",
                                    borderRadius: "5px",
                                }}
                                type="submit"
                                value="Submit"
                                
                            />

                        </div>

                    </form>
        </>
    );
};

export default AddEvent;