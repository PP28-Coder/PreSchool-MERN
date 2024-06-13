import React from "react";
import "./Gally.css";
import hi from './img_gal/unsplash-h6gcrtcxm7o.png';
import Navbar from './Navbar';
import Footer  from './Footer';

const Gally = () => {
  return (
    <div className="gallary">
      <div className="div">
        <div className="overlap">
            <Navbar/>
        </div>
    
        
        <div className="overlap-3">
          <footer className="footer">
            <Footer/>
          </footer>
          <p className="hp-school-ahmedabad">
          <hr width="100%;" color="red"
        size="10"/>
            "Thank you for joining us in this delightful journey through the Radhika Pre School Activity Gallery. 
            We hope these moments of creativity, joy, and exploration bring a smile to your face. 
            Stay tuned for more wonderful memories and achievements from our young explorers. 
            Feel free to share the joy with others as we celebrate the magic of learning and play at Radhika Pre School!"
          </p>
        </div>
       
        <div className="overlap-7">
        <hr width="100%;" color="red"
        size="10"/>
            
          <div className="group-10">
            
            <div className="group-11">
              <div className="guru" />
              <div className="guru-2" />
              <div className="sanlat">
                <img className="unsplash" src={hi} />
              </div>
              <div className="kunjungan" />
              <div className="mpls" />
              <div className="mpls-2" />
              <div className="perpisahan" />
              <div className="perpisahan-2" />
              <div className="perpisahan-3" />
              <div className="wisuda-tahfidz" />
              <div className="wisuda-tahfidz-2" />
              <div className="wisuda-tahfidz-3" />
            </div>
          </div>    
          <p>"Welcome to Radhika Pre School Activity Gallery Section! Explore the vibrant world of our little learners' creativity and joy. 
            Browse through captivating snapshots capturing the essence of their enriching experiences and engaging activities.
            Witness the magic of learning and play coming together in our gallery. Enjoy the journey through the eyes and smiles 
            of our young explorers at Radhika Pre School."</p>      
            <hr width="100%;" color="red"
        size="10"/>
          <div className="gallery">GALLERY</div>
          
          <div className="perpisahan-4" />
          <div className="perpisahan-5" />
          <div className="perpisahan-6" />
          
        </div>
        
      </div>
    </div>
  );
};

export default Gally;