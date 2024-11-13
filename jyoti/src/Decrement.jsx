import React, { useState } from 'react';

function UpdateValue() {
    const [a, setA] = useState(0); 

    const handleAction = (action) => {
        switch (action) {
            case 'increment':
                setA(a + 1);
                break;
            case 'decrement':
                if (a > 0) {
                    setA(a - 1);
                }
                break;
            case 'multiplay':
                setA(a *2);
                break;
            case 'devide'  :
                setA(a/2); 
                break; 

            default:
                break;
        }
    };

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={() => handleAction('increment')}>Increment</button>
            <button onClick={() => handleAction('decrement')}>Decrement</button>
            <button onClick={() => handleAction('multiplay')}>Multiplay</button>
            <button onClick={() => handleAction('devide')}>Divide</button>
        </div>
    );
}

export default UpdateValue;
<menu type="context"></menu> ,<menu></menu>