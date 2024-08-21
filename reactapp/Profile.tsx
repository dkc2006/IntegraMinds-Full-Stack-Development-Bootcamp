const Profile = ()=>{
    const profile = {
        name: 'John Doe',
        age: 30,
        email: '',
        hobbies: ["reading","writing","swimming","staging"],
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001'
        },
    };

    return(
        <div>
            <h1>{profile.name}</h1>
            <p>Age: {profile.age}</p>
            <p>Email: {profile.email || "No email provided"}</p>
            <h2>Hobbies</h2>
            <ul>
                {profile.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
            </ul>
            <h2>Address</h2>
            <p>{profile.address.street}</p>
            <p>{profile.address.city}, {profile.address.state} {profile.address.zip}</p>
        </div>
    );
    
};

export default Profile;