import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import headerImg from '../../images/meeting.jpg';
import fakeData from '../../fakeData/volunteerOption';
import SingleVolunteerOrg from '../SingleVolunteerOrg/SingleVolunteerOrg';



const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="headerImg">
                <img src={headerImg} alt=""/>
            </div>

            <div className="homeHeader  mx-auto">
                <h1 className="text-center font-weight-bold text-uppercase mt-5 p5-5 mb-3">I grow by helping people in need.</h1>
               
                <div className="searchInput form-inline my-lg-5  mx-auto pl-5 pb-4">
                    <input 
                        style={{
                            borderTopRightRadius: "0",
                            borderBottomRightRadius: "0",
                        }}
                        className="form-control  w-50 ml-5 " type="search" 
                        placeholder="Search" aria-label="Search"
                    />

                    <button 
                        style={{ 
                            height: '37px', 
                            marginBottom: "-4px", 
                            borderTopLeftRadius: "0",
                            borderBottomLeftRadius: '0',
                            }} 
                            className="linkButton ml-0" type="submit">Search
                    </button>
                </div>
            </div>
            <div className="row organizations">
                {
                    fakeData.map(item => <SingleVolunteerOrg organization={item} />)
                }
            </div>
        </div>
    );
};

export default Home;