import React,{ useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"

const Delete = ({data}) => {
  const{id}=useParams()

  const [idtwo,setIdtwo]=useState(id)

  const getDeleteapi=(e)=>{
    e.preventDefault();
     axios.delete(`http://localhost:3005/api/register/${id}`)
    .then(res => {
      console.log("deleted successfully!")
      res.json(res)
    })

  }
  useEffect(() => {
    // getDeleteapi(id);
    
  }, []);
  return (
    <div>
        <button onClick={getDeleteapi}>Delete</button>
    </div>
  )
}

export default Delete