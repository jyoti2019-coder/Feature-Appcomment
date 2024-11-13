import React, { useState } from 'react';

function UpdateValue() {
    const [a, setA] = useState(0); // Use state to keep track of 'a'

    const increment = () => {
        setA(a + 1); // Increment 'a' by 1
    };

    return (
        <>
            <div>
                <h1>{a}</h1>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
}

export default UpdateValue;
