// import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import "./card.css";
// import { Link } from "react-router-dom";
// import { Button } from "bootstrap";
// import Delete from "./Delete";

// const Card1 = ({ data }) => {
//   const { name, email, phone, password, picLink,_id } = data;
  

//   function deleteapi(_id){
//     fetch(`http://localhost:3005/api/register/${_id}`,{
//       method:'DELETE'
//     }).then((result)=>{
//       result.json().then((resp)=>{
//         console.warn(resp)
//         getDetailsapi()

//       })

//     })
//   }
//   return (
//     <div className="one">
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={picLink} />
//         <Card.Body>
//           <Card.Title>Personal Details</Card.Title>
//           <Card.Text></Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item>Name:{name}</ListGroup.Item>
//           <ListGroup.Item>Email:{email}</ListGroup.Item>
//           <ListGroup.Item>Phone:{phone}</ListGroup.Item>
//           <ListGroup.Item>password:{password}</ListGroup.Item>
//         </ListGroup>
//         <Card.Body>
//         <Link to={`/update/${_id}`}><button>Update</button> </Link> <br/>
//         <button onClick={()=>deleteapi(_id)}>delete</button>   <br/>


//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Card1;
