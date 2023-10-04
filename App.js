import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./card.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import Delete from "./Delete";

function App() {
  const [details, setDetails] = useState([]);
  const history=useNavigate()

  const getDetailsapi = async () => {
    let response = await fetch(`http://localhost:3005/api/register`);
    let toConvetJSON = await response?.json();
    setDetails(toConvetJSON);
    console.log(toConvetJSON);
  };
  function deleteapi(_id) {
    fetch(`http://localhost:3005/api/register/${_id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getDetailsapi();
      });
    });
  }

  useEffect(() => {
    getDetailsapi();
  }, []);

  return (
    <div className="App">
      {details?.map((item) => {
        return (
          <>
          <button onclick={()=>history(-1)}>Go Back</button>

          <div className="card">

            <Card style={{ width: "18rem" ,height:"15rem",marginRight:"50px"}}>
              <Card.Img variant="top" src={item.picLink} height={'150ps'} />
              <Card.Body>
                <Card.Title style={{fontStyle:"oblique",fontWeight:"bold"}}>Personal Details</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item style={{fontStyle:"oblique",fontWeight:"bold"}}>Name:{item.name}</ListGroup.Item>
                <ListGroup.Item style={{fontStyle:"oblique",fontWeight:"bold"}}>Email:{item.email}</ListGroup.Item>
                <ListGroup.Item style={{fontStyle:"oblique",fontWeight:"bold"}}>Phone:{item.phone}</ListGroup.Item>
                <ListGroup.Item style={{fontStyle:"oblique",fontWeight:"bold"}}>password:{item.password}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to={`/update/${item._id}`}>
                  <button>Update</button>{" "}
                </Link>{" "}
                <br />
                <button onClick={() => deleteapi(item._id)}>delete</button> <br />
              </Card.Body>
            </Card>
          </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
