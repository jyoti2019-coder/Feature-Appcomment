import React, { useState } from "react";
 function Password()
 {
    let [username,setUsername]=useState([]);
    let[display_username,setdisplay_username]=useState([]);
    let [password,setPassword]=useState([]);
    let[display_password,setDisplay_password]=useState([]);

    function DisplayInfo()
    {
        if(username && password){
        setdisplay_username([...display_username, username]);
        setDisplay_password([...display_password, password]);
        setUsername('');
        
        setPassword('');
        // console.log(display_password, display_username);
    }
        else{
            alert("xcghjk")
        }
    }

    
    return(
        <>
        <label>UserName</label>
        <input type="username" value={username}placeholder="Enter userName" onChange={(e)=>setUsername(e.target.value)}></input><br></br>

        <label>Password</label>
        <input type="password" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>

        <button type="submit" onClick={()=>DisplayInfo()} >submit</button><br/>

        {
            display_username.map((pwd, index)=>(<>
                <p key = {index}>UserName {index + 1}:{pwd}</p>
                {/* <p key = {index}>Password {index + 1}: {pwd}</p> */}
                </>
            ))
            
        }{
          display_password.map((pwd, index)=>(<>
                {/* <p key = {index}>UserName {index + 1}:{}</p> */}
                <p key = {index}>Password {index + 1}: {pwd}</p>
                </>
            ))
 }

        
      {/* {display_username && <h1>Username: {display_username}</h1>}
      {display_password && <h1>Password: {display_password}</h1>} */}

        
        </>
    )
 }
 export default Password;