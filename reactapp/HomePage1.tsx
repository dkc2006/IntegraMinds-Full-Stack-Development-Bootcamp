import React from "react";
import "./home.css";

// Creating the context (although it's not being used in this implementation)
const SessionContext = createContext({});

// Grandchild component that consumes the session data
const GrandChild1 = (props) => {
    console.log("🚀 ~ GrandChild1 ~ props:", props);

    const { session } = props;

    return (
        <div className="grand-child">
            <h3>Grand Child 1</h3>
            <p>This is grandchild 1</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
};

// Child component that passes session data to GrandChild1
const Child1 = (props) => {
    console.log("🚀 ~ Child1 ~ props:", props);

    const { session } = props;

    return (
        <div className="child">
            <h2>Child 1</h2>
            <p>This is child 1</p>
            <GrandChild1 session={session} title="Title: Grand Child 1" />
        </div>
    );
};

// Home page component that provides session data to Child1
const HomePage = () => {
    const session = {
        id: 501,
        name: "John Doe",
        age: 30,
        role: "Admin",
        status: "Active",
        dob: "01-Jan-2015",
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
