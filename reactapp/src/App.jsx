// import React, { useState } from "react";
// import PostsFromServer from "./PostsFromServer";


// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import UsersList from "./User";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ContactForm from './ContactForm';
import UserPage from "./UserPage";
import LoginFormPage from "./Login";
import HomePage from "./HomePage";
import UseMemoDemoComponent1  from "./UseMemoEx2";

const HeaderBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/memo">useMemo</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Sign Up</Link>
      </li>
    </ul>
  </nav>
);

const AppLayout = () => (
  <>
    <HeaderBar />
    <main>
      <Outlet />
    </main>
  </>
);

// Corrected function definition for App
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/users",
          element: <UsersList />,
        },
        {
          path: "/memo",
          element: <UseMemoDemoComponent1 />,
        },
        {
          path: "/user/:userId",
          element: <UserPage />,
        },
        {
          path: "/about",
          element: <div>About Page</div>,
        },
        {
          path: "/contact",
          element: <ContactForm />,
        },
        {
          path: "/login",
          element: <LoginFormPage />,
        },
        {
          path: "/register",
          element: <div>Register Page</div>,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;





// import React from "react";
// import PostsFromServer from "./PostsFromServer";

// const App = () => {

//   const onClickFromParent = (title) => {
//     console.log(`Clicked from parent: ${title}`);
//   };




  // return(
    // <>
      // {/* <StateExample/> */}
      // {/* <Posts/> */}
      // {/* <Profile/> */}

      /* <PostsFromServer
        title="Posts List 1"
        onClickFromParent={onClickFromParent}
      />

      <PostsFromServer
        title="Posts List 2"
        onClickFromParent={onClickFromParent}
      />
      
      <PostsFromServer
        title="Posts List 3"
        onClickFromParent={onClickFromParent}
      />
      
      <PostsFromServer
        title="Posts List 4"
        onClickFromParent={onClickFromParent}
      />
      
      <PostsFromServer
        title="Posts List 5"
        onClickFromParent={onClickFromParent}
      />
    </> *///}
  // );




  // const state = userState(0);
  // const value = state[0];
  // const setValue = state[1];

 
  // const [value, setValue] = useState(0);

  
  // const profile={
  //   name: 'John Doe',
  //   age: 30,
  //   address: {
  //     city: 'New York',
  //     state: 'NY',
  //     country: 'USA',
  //     zip: '115412',
  //   },
  //   location : "USA",
  //   hobbies: ['Swimmer','Reader','Writer'],
    

  // };

  // Display in console


  // let value = 0;

  // const onClick = () =>{
  //   value+=1;
  //   console.log(value);


  //Display in UI
  // const onClick = () =>{
  //   setValue(value + 1); 
  //   console.log("🚀 ~ onClick :", value + 1);
     
  // };

 

  // return (
  // <div>
  //   <h2>Value : {value}</h2>
  //   <button onClick={onClick}>Click me!</button>
    
    
  //   { <h1>Hello, My name is {profile.name}</h1>

    /*<p>{profile.email || "No email provided"}</p>
    <p>Age: {profile.age}</p>
    <h2>Address : </h2>
    <p>City: {profile.address.city}</p>
    <h2>Hobbies:</h2>
    <ul>
      {
        profile.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))
      }
    </ul> }*/
    
//     </div>
    
//   );
// };

// Normal Function

// export function sampleFunction() {
//   console.log("Hello world");
// }

//Arrow function

// const sampleFunction = () =>{
//   console.log("Hello world");
// }


// export  {sampleFunction};
// export default App;