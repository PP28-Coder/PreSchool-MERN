import React from "react";
import "./About.css";
import Footer  from './Footer';
import Navbar from './Navbar';
import img from './img_about/image-13.png';
import rps from './img/rps.jpg';
import hi from './img_about/205-01.png';
import vec5 from './img_about/vector-5.svg';
import vec4 from './img_about/vector-4.svg';
import vec3 from './img_about/vector-3.svg';
import vec2 from './img_about/vector-2.svg';
import vec1 from './img_about/vector-1.svg';
import vec from './img_about/vector.svg';


const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <Navbar/>
            
          </div>
        </div>


        
        <div className="overlap-3">
          <div className="overlap-wrapper">
            <div className="overlap-4">
              <img className="rectangle-2" alt="Rectangle" src={rps} />
              <p className="p"><b>Best Teaching Experience Faculty with Expertise </b></p>

            </div>
          </div>
          <div className="about">
            <div className="overlap-5">
              <div className="sub-heading">
                <div className="overlap-group-2">
                  <div className="about-us">ABOUT </div>
                  <img className="vector" alt="Vector" src={vec5} />
                </div>
              </div>
              <p className="radhika-pre-school">
                radhika pre-school, nestled in the vibrant city of bhubaneswar, is a nurturing haven dedicated to early
                childhood education. with a commitment to fostering a stimulating and supportive environment, we strive
                to lay the foundation for a lifelong love of learning. our experienced educators and engaging curriculum
                provide a holistic approach, focusing on the social, emotional, and cognitive development of each child.
                at radhika pre-school, we celebrate the uniqueness of every young mind, fostering curiosity, creativity,
                and a sense of community.
              </p>
              <img className="element" alt="Element" src={hi} />
            </div>
          </div>
        </div>
        <img className="rectangle-3" alt="Rectangle" src="/img_about/rectangle-7763-1.png" />
        <footer className="footer">
        <Footer />
        </footer>
        <div className="rules">
          <div className="sub-heading-2">
            <div className="overlap-group-4">
              <div className="rules-and">Rules And Regulations</div>
              <img className="vector-2" alt="Vector" src={vec4} />
            </div>
          </div>
          <div className="card-icons">
            <div className="icon">
              <div className="overlap-group-5">
                <div className="rectangle-9" />
                <img className="vector-3" alt="Vector" src={vec3} />
              </div>
              <div className="text-wrapper-18">Examination and Promotions</div>
            </div>
            <div className="icons">
              <div className="overlap-9">
                <div className="icon-2">
                  <div className="overlap-group-6">
                    <div className="rectangle-10" />
                  </div>
                  <div className="text-wrapper-19">School Fees</div>
                </div>
                <img className="vector-4" alt="Vector" src={vec2} />
              </div>
            </div>
            <div className="icons-2">
              <div className="overlap-10">
                <div className="icon-wrapper">
                  <div className="icon-3">
                    <div className="overlap-group-6">
                      <div className="rectangle-10" />
                    </div>
                    <div className="text-wrapper-20">Procedure for Withdrawal</div>
                  </div>
                </div>
                <img className="vector-5" alt="Vector" src={vec1} />
              </div>
            </div>
            <div className="icon-2">
              <div className="overlap-group-6">
                <div className="rectangle-11" />
                <img className="vector-6" alt="Vector" src={vec} />
              </div>
              <div className="text-wrapper-21">New Admissions</div>
            </div>
          </div>
        </div>
        <p className="radhika-pre-school-2">
          radhika pre-school, nestled in the vibrant city of bhubaneswar, is a nurturing haven dedicated to early
          childhood education. with a commitment to fostering a stimulating and supportive environment, we strive to lay
          the foundation for a lifelong love of learning. our experienced educators and engaging curriculum provide a
          holistic approach, focusing on the social, emotional, and cognitive development of each child. at radhika
          pre-school, we celebrate the uniqueness of every young mind, fostering curiosity, creativity, and a sense of
          community.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;