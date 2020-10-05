import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Task from '../Task/Task';
import './EventTasks.css';

const EventTasks = () => {

    const [events , setEvents ] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState('mainulislamfaruqi@gmail.com')

    useEffect(()=> {
        fetch('https://secret-wildwood-13220.herokuapp.com/events?email=' + loggedInUser, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            }
        })
        .then(res => res.json())
        .then(data=>{
            setEvents(data);
            console.log(data)
        })
    },[])
    return (
        <div className="eventTasks" style={{background: "#F8FAFC",height: " 100vh"}}>
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