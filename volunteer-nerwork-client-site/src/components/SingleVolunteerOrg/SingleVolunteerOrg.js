import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const SingleVolunteerOrg = ({organization}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const handleRegistration = (orgName) => {
        history.push(`${orgName}/registration`)
        setLoggedInUser({...loggedInUser, pic: organization.pic})
    }
    return (
        <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div
                style={{cursor:"pointer"}} 
                onClick={()=>handleRegistration(organization.name)}
            > 
                <img  
                    style={{height: "20rem", width: "220px",margin: ".7rem "}} 
                    src={require(`../../images/images/compImages/${organization.pic}-min.png`)} 
                    className="img-fluid"
                    alt=""
                    />
                <h5 className="text-center "> {organization.name}</h5>
            </div>
            
        </div>
    );
};

export default SingleVolunteerOrg;