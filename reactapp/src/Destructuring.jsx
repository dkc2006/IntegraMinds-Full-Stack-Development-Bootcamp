const array = [1, 2, 3];

// Destructuring the array into individual variables
const [first, second, third] = array;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3

// Array Destructuring in React with `useState`

// import React, { useState } from 'react';

// const Counter = () => {
//   // .Array destructuring to extract state and setter function from useState
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// };

// export default Counter;

// Example of Destructuring with `useEffect`


// import React, { useState, useEffect } from 'react';

// const UserProfile = () => {
//   const [user, setUser] = useState({ name: '', age: 0 });

//   useEffect(() => {
//     // Simulate fetching user data
//     const fetchedUser = { name: 'John Doe', age: 30 };
    
//     // Destructure the fetched user data
//     const { name, age } = fetchedUser;

//     // Set state using the destructured values
//     setUser({ name, age });
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// };

// export default UserProfile;


// Destructuring with Default Values

// const numbers = [10];

// // Destructure with a default value for the second element
// const [first, second = 20] = numbers;

// console.log(first);  // Output: 10
// console.log(second); // Output: 20 (default value)
