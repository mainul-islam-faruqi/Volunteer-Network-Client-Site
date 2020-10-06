import React, { useEffect, useState } from 'react';
import './VolunteerRegisterList.css'
import DeleteIcon from '@material-ui/icons/Delete';

const VolunteerRegisterList = () => {
    const [regList, setRegList] = useState([]);

    useEffect(() => {
        fetch('https://secret-wildwood-13220.herokuapp.com/volunteerRegistration')
            .then(res => res.json())
            .then(data => {
                setRegList(data)
            })
        console.log(regList);


    }, [])

    const deleteRegistration = (id) => {
        fetch('http://localhost:5000/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                id: id
            }
        })
            .then(res => res.json())
            .then(result => {
                const remainingEvents = regList.filter(data => data._id !== id)
                if (result) {
                    setRegList(remainingEvents)
                }
            })
    }
    return (
        <div className=" bg-white pt-5 pl-4 pr-4 m-4 " style={{ borderRadius: "20px",minHeight: "150px"}} >
            <table className="table table-borderless ">
                <thead style={{ background: "#F5F6FA", borderRadius: "10px", margin: "10px", color: "#686868", width: "100%" }} >

                    <tr >
                        <td scope="col">Name</td>
                        <td scope="col">Email ID</td>
                        <td scope="col">Registating date</td>
                        <td scope="col"> Event </td>
                        <td scope="col">Action</td>
                    </tr>
                </thead>

                {
                    regList.map(item =>
                        <tbody key={item._id}>
                            <tr>
                                <th scope="row"> {item.name} </th>
                                <th > {item.email} </th>
                                <th> {item.date} </th>
                                <th> {item.organization} </th>
                                <DeleteIcon onClick={() => deleteRegistration(item._id)} style={{ cursor: 'pointer', color: "red" }} />

                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default VolunteerRegisterList;