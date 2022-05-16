import React from "react";
import "./Form.css";
import { speciality } from "../details/PeopleDetails";
import { useState } from "react";
import { useEffect } from "react";

const Form = () => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [things, setThings] = useState([]);

  useEffect(() => {
    setThings(speciality);
  }, [speciality]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempThings = things.map((thing) =>
      thing.name === name ? { ...thing, isChecked: checked } : thing
    );
    console.log("tempthings", tempThings);
    setThings(tempThings);
  };

  console.log("things", things);

  return (
    <div className="row me-3  form">
      {/* <div className="col-md-11"> */}
        <label htmlFor="" className="mt-4  fw-bold ">
          Search
        </label>
        <form className="search col-md-11">
          <input
            className="form-control  col-md-4 fw-bold search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
       <button type="submit" className="col-md-2 border "><i class="fa fa-search"></i></button>
        </form>
        <label htmlFor="" className="mt-4 fw-bold">
          Country
        </label>
        <br />
        {/* <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter your Name"
          className="col-md-10 mt-2"
        /> */}
        <select className="border">
          <option value="" className="search fw-bold"> ---Select Options---</option>
          <option value="">India</option>
          <option value="">China</option>
          <option value="">Shri Lanka</option>
          <option value="">Pakistan</option>
        </select> <br />
        <label htmlFor="" className="mt-4 fw-bold">
          District/State
        </label>
        <br />
        <select name="" id="" className="border">
          <option value=""   className="mt-2 ms-1 state" >--- Select ---</option>
          <option value="">Uttarakhand</option>
          <option value="">Utter Pradesh</option>
          <option value="">Bihar</option>
          <option value="">Himanchal Pradesh</option>
        </select>
        {/* <input
          type="text"
          name="district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          placeholder="Enter your Name"
          className="col-md-10 mt-2"
        /> */}
        <div className="border  my-5 speciality ">
          <label htmlFor="" className="mt-2 ms-1 fw-bold">
            Speciality
          </label>{" "}
          <br />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="mt-2 ms-1 fw-bold spsearch"
          />
          <br />
          <div className="speciality">
            {things.map((thing) => (
              <>
                <div className="row">
                <input
                  type="checkbox"
                  name={thing.title}
                  id={thing.title}
                  // checked={thing?.isChecked || false}
                  onChange={handleChange}
                  className="mt-2 ms-3 col-md-1"
                />
                <label htmlFor={thing.title} className="mt-2 ms-2 fw-bold col-md-9">
                 <h6 className="title">  {thing.title} </h6>
                </label>
                <br />
                </div>
              </>
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Form;
