import React, { useState } from "react";
import Form from "../components/Form/Form";
import Inquiry from "../components/inquiry/Inquiry";
import Navbar from "../components/Navbar/Navbar";
import Peoples from "../components/Peoples/Peoples";
import "../components/people/People.css";
import "./Home.css";
import { details } from "../components/details/PeopleDetails";

const Home = () => {
  // console.log(" homedetais", details);
  const [checkbox, setCheckBox] = useState({
    emergency:'',
    addiction:'',
    aerospace:'',
    allergy:'',
    allergyAndEmmunology:'',
    anaesthiology:''
  })
  return (
    <div className="main">
      <Navbar />
      <div className="heading my-2">
        <h2 className="fw-bold text-secondary doctor">Search Doctor, Make an Appointments</h2>
        <h6 className="mt-4 fw-bold discover">
          Discover the best doctors, clinic & Hospital the city nearest to you.{" "}
        </h6>
      </div>
      <Inquiry />

      <div className="row border-top boder-secondary mt-4">
        <div className="col-xl-4 col-lg-6 ">
          <Form />
        </div>

        <div className="col-xl-8 col-lg-6 border border-secondary people">
          <div className="row">
            {
              details.map(detail=>(
                <div className="col-xl-4 col-lg-6  col-md-6 col-sm-6 border border-secondary single">
                <div className="img">
                  {/* <div className="circle"></div> */}
                  <img src={detail.image} alt="" className="image border  border-primary p-1" />
                </div>
                <h3 className="text-center"> {detail.name} </h3>
                <p className="text-center mb-5 fw-bold detail"> {detail.about} </p>
              </div>
              ))
            }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


// Break points
// Some common breakpoints for devices with different screen sizes are:
// 320px — 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
// 1201px and more — Extra large screens, TV.