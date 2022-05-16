import React, { useState } from "react";
import "./Inquiry.css";

const Inquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [myself, setMyself] = useState("");
  const [someone, setSomeOne] = useState("")

  function handleSubmit() {
    console.log("name, email myself, someone", name, email, myself, someone);
  }
  return (
    <div className="row mt-5 ms-auto">
      <div className="col-md-11">
        <div className="row">
          <div className="col-xl-5">
            <p className="fw-bold medical "> (Only for Medical treatment)</p>{" "}
            <br />
            <div className="d-flex ">
              <p className="fw-bold medical "> Treatment Inquiry for </p>
              <p className="fw-bold medical  medicaloption medmain">
                <div className="d-flex">
                  <input type="radio" name="inquiry" value={myself} onChange={(e)=> setMyself(e.target.checked)} id="" className="m-2 " />
                  <label htmlFor=""> Myself</label>
                </div>
                <div className="d-flex">
                  <input type="radio" name="inquiry" value={someone} onChange={(e)=> setMyself(e.target.checked)} id="" className="m-2 " />{" "}
                  <label htmlFor=""> Someone</label>
                </div>
              </p>
            </div>
          </div>
          <div className=" col-xl-7">

           <div className="row  inq">
              <div className="col-md-4">
              <p className="fw-bold">Name</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Patient Name"
                className="fw-bold border"
              />
              </div>
              <div className="col-md-4 ">
              <p className="fw-bold">Email or Number</p>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Number"
                className="fw-bold boder"/>
              </div>
              <div className="col-md-3 subbutton">
              <button onClick={() => handleSubmit()} className="button">
                Submit
              </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
