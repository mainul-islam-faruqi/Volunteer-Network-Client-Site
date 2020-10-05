import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <Link to='/' >
            <div className="logo">
                <img className="" src={logo} alt=""/>
            </div>
            </Link>

            <div className="headerOptions">
                <h4> <Link to="/" className="link"> Home </Link>  </h4>
                <h4> <Link to="/donation" className="link" > Donation </Link>  </h4>
                <h4> <Link to="/eventtasks" className="link" > Events </Link>  </h4>
                <h4> <Link to="/addevent" className="link" > AddEvent </Link>  </h4>
                
                {
                    loggedInUser.name? <h4 style={{color:"#3F90FC"}}> {loggedInUser.name} </h4>
                    :<button > <Link to="/login" className="linkButton" > Login </Link>  </button>
                }
                
                <button className="admin"> <Link to="/admin" className="linkButton " > Admin </Link>  </button>
            </div>
        </div>
    );
};

export default Header;