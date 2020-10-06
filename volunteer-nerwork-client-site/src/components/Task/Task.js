import React from 'react';

const Task = ({event,events, setEvents}) => {

    const cancelRegistration = (id) => {
        fetch('https://secret-wildwood-13220.herokuapp.com/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                id: id
            }
        })
            .then(res => res.json())
            .then(result => {
                const remainingEvents = events.filter(data => data._id !== id)
                if (result) {
                    setEvents(remainingEvents)
                }
            })
    }



    return (
        <div  class="card mb-3 col-sm-12 col-md-12 col-lg-5 col-xl-5 mx-auto " style={{minWidth: "450px",borderRadius: "7px",margin:"50px !important"}}>
                <div class="row no-gutters border-0">
                    <div class="col-md-4">
                    <img src={require(`../../images/images/compImages/${event.pic?event.pic:'riverClean'}-min.png`)} 
                    className="card-img mt-3 mb-3" alt="..."/>
                </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold"> {event?.organization} </h4>
                        <p class="card-text">  29 sep, 2020  </p>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-light" onClick={()=> cancelRegistration(event._id)} > Cancel </button>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Task;