const Profile = () =>{
    const profile = {
        name: "John Doe",
        email: "",
        age: 30,
        hobbies: ["reading", "writing", "swimming", "staging"],
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001"
        },
    };
    
    return(
        <div>
            <h1>Hello {profile.name}</h1>
            <p>{profile.email || "No email provided"}</p>
            <p>{profile.age} years old</p>
            <h2>Hobbies</h2>
            <ul>
                {profile.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
            </ul>
            <h2>Address</h2>
            <p>{profile.address.street}</p>
        </div>
    );
};

export default Profile;