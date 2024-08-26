// Create a component to display the user Data
// 1. Default Import 
//  import React from 'react'
// export default React

// 2. Named Import
// import {useState, useEffect} from 'react'
// Method 1: export {useState, useEffect}
// or
// Method 2:
//  export const useState =....
// export const useEffect =....

import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

// Function Component

// Normal function or Arrow Function

// Component -> Name should be a PascalCase -> 0 or props -> return JSX

// Normal function -> Name should be a camelCase -> 0 or more -> return anything

// Empty <></> or <fragment></fragment>

const UserComponent = (props) =>{
    console.log("🚀 ~ UserComponent ~ props", UserComponent);
    //Props is the object type
    //Object Destructuring
    const {data} = props;

    return(
        <Link to={`/user/${data.id}`} className='user-item-link'>
        <div className='user'>
            <h2>User</h2>
            <h3>{data.name}</h3>
            <p>{data.age}</p>

            <button onClick={(e)=> props.onClickFromChild(data)}>Print the user Json</button>
        </div>
        </Link>
    );
};



export default UserComponent;