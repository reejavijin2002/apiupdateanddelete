import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./card.css"

const Form = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setpassword] = useState("");
  const [picLink,setPiclink] = useState("");

  const nameFunction = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const emailFunction = (e) => {
    setemail(e.target.value);
    console.log(e.target.value);
  };
  const phoneFunction = (e) => {
    setPhone(e.target.value);
    console.log(e.target.value);
  };

  const passwordFunction = (e) => {
    setpassword(e.target.value);
  };
  const imageFunction = (e) => {
    setPiclink(e.target.value);
  };

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3005/api/register', {
          name: name,
          email:email,
          phone:phone,
          password:password,
          picLink:picLink

        });
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <label>Name:</label>
        <input type="text" id="name" onChange={nameFunction}></input>
        <br></br>
        <label>Email:</label>
        <input type="email" id="email" onChange={emailFunction}></input>
        <br></br>
        <label>Phone:</label>
        <input type="number" id="number" onChange={phoneFunction}></input>
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          id="password"
          onChange={passwordFunction}
        ></input>
        <br></br>
        <label>Image:</label>
        <input type="link" id="picLink" onChange={imageFunction} style={{marginBottom:"30px"}}></input><br></br>
        <input type="submit" style={{marginBottom:"30px"}}></input>
        <Link to='/app'><button>View the details</button></Link>
        

      </form>
    </div>
  );
};

export default Form;
