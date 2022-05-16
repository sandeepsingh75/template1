import React, { useState } from "react";
import "./Inquiry.css";

const Inquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    console.log("name, email", name, email);
  }
  return (
    <div className="row mt-5 ms-auto">
      <div className="col-md-11">
        {/* 
        <table className="table  mb-4">
                <tr>
                    <td className="fw-bold medical"> (Only for Medical treatment) </td>
                    <td className="fw-bold ">Name</td>
                    <td className="fw-bold">Phone or Email</td>
                </tr>
                <tr>
                    <td  className="fw-bold medical"> Treatment Inquiry for 
                        <input type="radio" name="inquiry" id="" className="ms-2 "/> <label htmlFor=""> Myself</label>
                        <input type="radio" name="inquiry" id="" className="m-1 "/> <label htmlFor=""> Someone</label>
                    </td>
                    <td><input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Patient Name" className="fw-bold boder"/></td>
                    <td><input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email or PHone" className="fw-bold m-2"/></td>
                    <td> <button onClick={()=> handleSubmit()} className="button">Submit</button> </td>
                </tr>
        </table> */}
        <div className="row">
          <div className="col-xl-5">
            <p className="fw-bold medical"> (Only for Medical treatment)</p>{" "}
            <br />
            <div className="d-flex">
              <p className="fw-bold medical"> Treatment Inquiry for </p>
              <p className="fw-bold medical">
                <div>
                  <input type="radio" name="inquiry" id="" className="ms-2 " />
                  <label htmlFor=""> Myself</label>
                </div>
                <div>
                  <input type="radio" name="inquiry" id="" className="m-1 " />{" "}
                  <label htmlFor=""> Someone</label>
                </div>
              </p>
            </div>
          </div>
          <div className=" col-xl-7">
            <div className="d-flex">
              <p className="fw-bold">Name</p>
              <p className="fw-bold">Phone or Email</p>
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Patient Name"
                className="fw-bold boder"
              />
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email or PHone"
                className="fw-bold m-1"
              />
              <button onClick={() => handleSubmit()} className="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
