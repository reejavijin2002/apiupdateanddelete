import React from 'react'
import { useState } from 'react'

const View = ({data1}) => {
    const{name, email, phone, password, picLink}=data1

    const [username,setUsername] = useState(name)


    const handleName = (e)=>{
        setUsername(e.target.value)
    }
  return (
    <div>
        <form>
        <label>Name:</label>
        <input type="text" id="name" onChange={handleName} value={username}></input>
        <br></br>
        <label>Email:</label>
        <input type="email" id="email" value={email}></input>
        <br></br>
        <label>Phone:</label>
        <input type="number" id="number" value={phone} ></input>
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
        ></input>
        <br></br>
        <label>Image:</label>
        <input type="link" id="picLink" value={picLink} style={{marginBottom:"30px"}}></input><br></br>
        <input type="submit" style={{marginBottom:"30px"}}></input>
    </form>
    </div>
  )
}

export default View