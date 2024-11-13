import React, { useState, useEffect } from "react";

function Pass() {
  const [username, setUsername] = useState("");     
  const [password, setPassword] = useState("");      
  const [displayUsername, setDisplayUsername] = useState("");  
  const [displayPassword, setDisplayPassword] = useState("");  

  
  function displayInfo() {
    
    setDisplayUsername(username);

    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    
    setUsername('');

    
    setTimeout(() => {
      setDisplayPassword(password);
    }, 1000);
    setPassword('');
  }

  
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername) {
      setDisplayUsername(savedUsername);
    }
    if (savedPassword) {
      setDisplayPassword(savedPassword);
    }
  }, []); 

  return (
    <>
     
      <label>UserName</label>
      <input
        type="text"
        value={username}
        placeholder="Enter userName"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      {/* Password Input */}
      <label>Password</label>
      <input
        type="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      
      <button type="button" onClick={displayInfo}>
        Submit
      </button>

      
      {displayUsername && <h1>Username: {displayUsername}</h1>}

     
      {displayPassword && <h1>Password: {displayPassword}</h1>}
    </>
  );
}

export default Pass;
