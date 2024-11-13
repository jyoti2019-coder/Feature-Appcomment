import React, { useState } from "react";

function Form() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  
  const handler = () => {
    
    console.log("Username:", username);
    console.log("Password:", password);

    
    setSubmitted(true);
  };

  return (
    <>
     <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}></form>
      <div className="containare">
        <h1>Login Form</h1>

        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={handler}>Submit</button>
        <br />

        
        {submitted && (
          <div>
            <h2>Entered Details:</h2>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
          </div>
        )}
      </div>
      
    </>
  );
}

export default Form;
