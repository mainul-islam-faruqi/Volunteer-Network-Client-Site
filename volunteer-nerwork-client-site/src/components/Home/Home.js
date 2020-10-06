import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import headerImg from '../../images/meeting.jpg';
import fakeData from '../../fakeData/volunteerOption';
import SingleVolunteerOrg from '../SingleVolunteerOrg/SingleVolunteerOrg';



const Home = () => {

const [events , setEvents] = useState();

    useEffect(()=> {
        fetch('https://secret-wildwood-13220.herokuapp.com/events', {
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
                    fakeData.map((item, i)=> {
                        let colors = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF'];
                        const random = Math.floor(Math.random()*4)
                        return(
                            <SingleVolunteerOrg organization={item} textBgColor={colors[random]}  key={i} />
                        )
                    })

                }

                {
                    events?.map((item) => {
                        let colors = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF'];
                        const random = Math.floor(Math.random()*4)
                        return(
                            <SingleVolunteerOrg organization={item} textBgColor={colors[random]}  key={item._id} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;