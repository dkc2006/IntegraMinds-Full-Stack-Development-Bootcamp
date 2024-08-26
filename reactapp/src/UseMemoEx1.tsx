import React, { useState, useMemo } from 'react';

const UseMemoDemoComponent1 = () => {
    const [count, setCount] = useState(0);

    const isEven = useMemo(() => {
        // Simulating a heavy computation
        // let i = 0;
        // while (i < 200000000) i++;

        return count % 2 === 0;
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <h2>{isEven ? "Even" : "Odd"}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default UseMemoDemoComponent1;
