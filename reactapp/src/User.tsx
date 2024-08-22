// Create a component to display the user Data
// 1. Default Import 
//  import React from 'react'
// 


const UserComponent = (props) =>{
    console.log("🚀 ~ UserComponent ~ UserComponent:", UserComponent);
    //Props is the object type
    //Object Destructuring
    const {data} = props;

    return(
        <div>
            <h2>User</h2>
            <h3>{data.name}</h3>
            <p>{data.email}</p>

            <button onClick={(e)=> props.onClickFromChild(data)}>Print the user Json</button>
        </div>
    );
};

export default UserComponent;