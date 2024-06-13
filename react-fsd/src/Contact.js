import React from "react";
import "./Contact.css";
import Footer  from './Footer';
import Navbar from './Navbar';
import img1 from './img_conn/image-13.png';
import About from './About';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Users from './Users';
import axios from "axios";
import { useState } from "react";

export const Contact = () => {

  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/Users');}

  const [id,setID] = useState('');
  const [vignette,setVignetter] = useState('');
  const [sex,setSex] = useState('');
  const [age,setAge] = useState('');
  const [edu,setEdu] = useState('');
  const [mar,setMar] = useState('');
  const [hlt,setHlt] = useState('');
  const [qual,setQual] = useState('');
  const [hap,setHap] = useState('');
  const [npo,setNpo] = useState('');

  const setData = {
    id: id,
    vignset: vignette
  };
  const insert = async (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3099/insert',setData).then((response) => {
      console.log((response.data));
    });
  }

  return (
    <div className="contect">
      <div className="div">
        <div className="navbar">
          <Navbar/>
        </div>
        <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-7763-1.png" />
        <p className="radhika-pre-school">
          Radhika pre-school, nestled in the vibrant city of bhubaneswar, is a nurturing haven dedicated to early
          childhood education. with a commitment to fostering a stimulating and supportive environment, we strive to lay
          the foundation for a lifelong love of learning. our experienced educators and engaging curriculum provide a
          holistic approach, focusing on the social, emotional, and cognitive development of each child. at radhika
          pre-school, we celebrate the uniqueness of every young mind, fostering curiosity, creativity, and a sense of
          community.
        </p>

        <div className="contact">
          <div className="sub-heading">
            <div className="overlap-group-2">
              <div className="contact-2">CONTACT @US</div>
            </div>
            <button id="aboutus-btn" onClick={navigateToContacts}><b><font size="4">Feedback</font></b> </button>
          </div>
          
        </div>
        <footer className="footer">
          <Footer/>
        </footer>
        <div className="col-md">
          <div className="hero-cover">
            <div className="none">
              <div className="overlap-group-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;