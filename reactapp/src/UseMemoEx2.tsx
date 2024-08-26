import React, { useState, useMemo } from 'react';

const UseMemoDemoComponent2 = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'john'},
        { id: 2, name: 'jane'},
        { id: 3, name: 'tom'},
        { id: 4, name: 'alice'},
        { id: 5, name: 'bob'},
    ]);

    const sortedUsers = useMemo(() => {
        console.log("Sorting users...");

        // Simulating a heavy computation

        // let i = 0;
        // while (i < 200000000) i++;

        // Process the users: capitalize names and sort by name
        return users
            .map((user) => ({
                ...user,
                name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [users]);
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    sortedUsers.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
            </ul>
            <button onClick={()=>setUsers([
                { id: 1, name: 'bob'},
                { id: 2, name: 'jane'},
                { id: 3, name: 'tom'},
                { id: 4, name: 'alice'},
                { id: 5, name: 'john'},
            ])}>

                Reset
            </button>
        </div>
    );
};

export default UseMemoDemoComponent2;