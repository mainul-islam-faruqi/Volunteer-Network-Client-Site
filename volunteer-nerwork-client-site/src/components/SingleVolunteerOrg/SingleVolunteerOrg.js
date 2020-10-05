import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SingleVolunteerOrg = ({organization}) => {
    const history = useHistory();

    const handleRegistration = (orgName) => {
        history.push(`${orgName}/registration`)
    }
    return (
        <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div
                style={{cursor:"pointer"}} 
                onClick={()=>handleRegistration(organization.name)}> 
                <img  
                    style={{height: "20rem", width: "220px",margin: ".7rem "}} 
                    src={require(`../../images/images/${organization.pic}.png`)} 
                    className="img-fluid"
                    alt=""/>
            </div>
            <h5 className="text-center "> {organization.name}</h5>
        </div>
    );
};

export default SingleVolunteerOrg;