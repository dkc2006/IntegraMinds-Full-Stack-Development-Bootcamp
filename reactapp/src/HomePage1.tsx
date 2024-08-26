import React from 'react';
import "./home.css";

// Create a context for session data
const SessionContext = React.createContext({});

const GrandChild1 = (props) => {
    console.log("🚀 ~ GrandChild1 ~ props:", props);

    const { session } = props;

    return (
        <div className="grand-child">
            <h3>Grand Child 1</h3>
            <p>This is grand child 1</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
};

const Child1 = (props) => {
    console.log("🚀 ~ Child1 ~ props:", props);

    const { session } = props;

    return (
        <div>
            <h2>Child 1</h2>
            <p>This is child 1</p>
            <GrandChild1 session={session} title="Title: Grand Child 1" />
        </div>
    );
};

const HomePage = () => {
    const session = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        dob: "01-Jan-1990",
    };

    return (
        <div className="home">
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <Child1 session={session} />
        </div>
    );
};

export default HomePage;
