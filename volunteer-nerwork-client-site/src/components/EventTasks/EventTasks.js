import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Task from '../Task/Task';
import './EventTasks.css';

const EventTasks = () => {

    const [events , setEvents ] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=> {
        fetch('https://secret-wildwood-13220.herokuapp.com/events?email=mainulislamfaruqi@gmail.com' , {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            }
        })
        .then(res => res.json())
        .then(data=>{
            setEvents(data);
        })
    },[])
    return (
        <div className="eventTasks" style={{background: "#F4F7FC",height: " 100vh"}}>
            <Header/>

            <div className="task  row row-cols-1 row-cols-md-3 ">

                    {
                        events.map(event => <Task event={event}> </Task>)
                    }
            
            </div>
            

        </div>
    );
};

export default EventTasks;