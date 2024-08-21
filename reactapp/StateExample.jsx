import {useState} from "react";

const StateExample = () =>{
    const[count,setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };

    const decrement = () =>{
        setCount(count - 1);
    };

    return (
        <div>
            <h1>State Example</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default StateExample;