
 import React, { useState } from 'react'

function Increment()
 {
 const [count, setCount] = useState(0)  

  return (
    <div>
      <h1 className="count">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default  Increment;
