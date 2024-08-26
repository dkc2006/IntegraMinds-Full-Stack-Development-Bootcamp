import React, { useEffect, useState } from 'react';
import UserComponent from "./User";

const UsersList = () => {
     // const users = [     
     //     { name: 'John Doe',age:30 },     
     //     { name: 'Jane Doe',age:40 },     
     //     { name: 'Tom Doe' ,age:50},     
     //     { name: 'John Doe',age:60 },     
     // ];
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

     // Server Data
    // 1. ✅Loading/Waiting
    // 2. ✅Error
    // 3. ✅Success
    //    ✅3.1. Empty
    //    ✅3.2. Data


    const getUserDataFromServer = () => {
        setIsLoading(true);

        // Resetting the users array for testing purposes
        setUsers([]);

        setTimeout(() => {
            fetch('http://localhost:3000/users')
                .then((response) => response.json())
                .then((data) => {
                    setIsLoading(false);
                    setUsers(data);
                })
                .catch((error) => {
                    console.log("Error fetching data", error);
                    setIsLoading(false);
                    setError(error.message);
                });
        }, 1000); // Assuming you wanted to add a delay of 1 second
    };

    useEffect(() => {
        getUserDataFromServer();
    }, []);

    const onClickInParentComponent = (data) => {
        console.log("onClickInParentComponent ~ data:", data);
    };
    
    return (
        <div>
            <header>
                <h1>Users List</h1>
                <button className="refresh-btn" onClick={getUserDataFromServer}>
                    Refresh
                </button>
            </header>
            <div className="container">
                {isLoading && (
                    <div className="loading">
                        <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" />
                        Loading...
                    </div>
                )}
                {!isLoading && error && <div>{error}</div>}
                {!isLoading && !error && users.length === 0 && <div>No data found</div>}
                {!isLoading && !error && users.map((user, index) => (
                    <UserComponent 
                        key={index} 
                        data={user} 
                        onClickFromParent={onClickInParentComponent} 
                    />
                ))}
            </div>
        </div>
    );
};

export default UsersList;
