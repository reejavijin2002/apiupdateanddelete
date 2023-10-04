import React, { useEffect, useState } from "react";

import "./card1.css";
// import View from "./View";
import { useParams } from "react-router-dom";
import axios from "axios";

const Update = ({ data }) => {
  const { id } = useParams();

  const [username, setUsername] = useState(null);
  const [userpassword, setuserpassword] = useState(null);
  const [useremail, setuseremail] = useState(null);
  const [userphone, setuserphone] = useState(null);
  const [userpicLink, setuserpicLink] = useState(null);
  const[idone,setIdone]=useState(id);


  const getUpdatesapi = async (__id) => {
    let response = await fetch(`http://localhost:3005/api/register/${__id}`);
    let toConvetJSON = await response?.json();
    // setUpdate(toConvetJSON)
    console.log(toConvetJSON);
    setUsername(toConvetJSON.name);
    setuserpassword(toConvetJSON.password);
    setuseremail(toConvetJSON.email);
    setuserphone(toConvetJSON.phone);
    setuserpicLink(toConvetJSON.picLink);
    // setIdone(toConvetJSON._id)
  };

 
  const handleName = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setuserpassword(e.target.value);
  };
  const handleEmail = (e) => {
    setuseremail(e.target.value);
  };
  const handlePhone = (e) => {
    setuserphone(e.target.value);
  };
  const handlepicLink = (e) => {
    setuserpicLink(e.target.value);
  };

  useEffect(() => {
    getUpdatesapi(id);
    // onSubmit1(id)
  }, []);

 
  const onSubmit1 = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:3005/api/register/${idone}`,
        {
          name: username,
          email: useremail,
          phone: userphone,
          password: userpassword,
          picLink: userpicLink,
        }
      );
      console.log(response.data);
     
    } catch (error) {
      console.error(error);
    }
   

  };

  return (
    <div>
      <div>

        <form onSubmit={onSubmit1}>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            onChange={handleName}
            value={username}
          ></input>
          <br></br>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={useremail}
            onChange={handleEmail}
          ></input>
          <br></br>
          <label>Phone:</label>
          <input
            type="number"
            id="number"
            value={userphone}
            onChange={handlePhone}
          ></input>
          <br></br>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={userpassword}
            onChange={handlePassword}
          ></input>
          <br></br>
          <label>Image:</label>
          <input
            type="link"
            id="picLink"
            value={userpicLink}
            onChange={handlepicLink}
            style={{ marginBottom: "30px" }}
          ></input>
          <br></br>
          <input type="submit" style={{ marginBottom: "30px" }}></input>
          <button onclick="history.back()">Go Back</button>

        </form>
      </div>
    </div>
  );
};

export default Update;
