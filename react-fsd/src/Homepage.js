import React, { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import styles from './Homepage.css';
import Navbar from './Navbar';
import Footer  from './Footer';
import rps from './img/rps.jpg';
import about from './img/about.png';
import message from './img/message.png';
import text from './img/text.png';
import gus from './img/Galery.png';
import About from './About';

import { useHistory } from 'react-router-dom';

const Homepage = () => {

    const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/About');
  };
 
    return(            
        <>
            <Navbar />
            <br/>
            <div id="login-div1">
                <div id="login-page">
               
                        <div id="login-form1">
                        
                            <div id="login-header">
                                <h2 style={{color: "#61655F"}}>Get Started</h2>
                            </div>

                            <h1 style={{color: "#252B42"}}>Best Learning Opportunity</h1>

                            <p style={{ color: '#2F4F4F' }}>Empowering Minds, Making Education the Best Adventure for Our Kids!</p>

                            <button id="aboutus-btn" onClick={navigateToContacts}><b><font size="4">About Us</font></b> </button>
                            <Routes>
                                <Route path="/about" element={<About />} />
                            </Routes>

                        </div>
                </div>     
            </div>

            <div id="login-div2">
            <img src={about} alt="about us" />
            <img src={message} alt="message" />
            <img src={gus} alt="us" />
            <img src={text} alt="txt" />
            </div>

            <div id="login-div3">
         
            </div>
            <Footer />
        </>
    )
}
export default Homepage;
