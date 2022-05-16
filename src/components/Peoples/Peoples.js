import React from "react";
import People from "../people/People";
import { details } from "../details/PeopleDetails";

const Peoples = () => {
  return (
    <div className="container mt-4">
      <div className="row">
      
      </div>
      <div className="row">
        <div className="col-md-4  bg-primary border border-dark ">
          <div className="img">
            <img src={details[0].image} alt="" className="image" />
          </div>
          <h3 className="text-center"> {details[0].name} </h3>
          <p className="text-center"> {details[0].about} </p>
        </div>
        <div className="col-md-4  bg-primary border border-dark ">
          <div className="img">
            <img src={details[1].image} alt="" className="image" />
          </div>
          <h3 className="text-center"> {details[1].name} </h3>
          <p className="text-center"> {details[1].about} </p>
        </div>
        <div className="col-md-4  bg-primary border border-dark ">
          <div className="img">
            <img src={details[2].image} alt="" className="image" />
          </div>
          <h3 className="text-center"> {details[2].name} </h3>
          <p className="text-center"> {details[2].about} </p>
        </div>
        <div className="col-md-4  bg-primary border border-dark ">
          <div className="img">
            <img src={details[3].image} alt="" className="image" />
          </div>
          <h3 className="text-center"> {details[3].name} </h3>
          <p className="text-center"> {details[3].about} </p>
        </div>
        <div className="col-md-4  bg-primary border border-dark ">
          <div className="img">
            <img src={details[4].image} alt="" className="image" />
          </div>
          <h3 className="text-center"> {details[4].name} </h3>
          <p className="text-center"> {details[4].about} </p>
        </div>
        <div className="col-md-4  bg-primary border border-dark ">
          <div className="img">
            <img src={details[5].image} alt="" className="image" />
          </div>
          <h3 className="text-center"> {details[5].name} </h3>
          <p className="text-center"> {details[5].about} </p>
        </div>
        {/* <div className="col-md-4  bg-primary border border-dark ">
          <div className="img">
            <img src={details[6].image} alt="" className="image" />
          </div>
          <h3 className="text-center"> {details[6].name} </h3>
          <p className="text-center"> {details[6].about} </p>
        </div> */}

      </div>
    </div>
  );
};

export default Peoples;
