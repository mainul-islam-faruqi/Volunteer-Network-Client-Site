import React, { useContext } from 'react';
import './SingleVolunteerOrg.css';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const SingleVolunteerOrg = ({organization, textBgColor}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const handleRegistration = (orgName) => {
        history.push(`${orgName}/registration`)
        setLoggedInUser({...loggedInUser, pic: organization.pic, organization: organization.name})
    }
    return (
        <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div
                style={{cursor:"pointer", }} 
                onClick={()=>handleRegistration(organization.name)}
            > 
                <div className="imageContainer">
                    <img 
                        src={require(`../../images/images/compImages/${organization.pic}-min.png`)} 
                        className="img-fluid eventImage"
                        alt=""
                    />
                        
                    <h5 style={{ backgroundColor: textBgColor }} className="text-center eventText"> 
                        {organization.name}
                    </h5>
                    
                </div>
                
                
            </div>
            
        </div>
    );
};

export default SingleVolunteerOrg;