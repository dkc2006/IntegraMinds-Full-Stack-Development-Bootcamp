import React, { createContext, useContext } from "react";
import "./home.css";

// Create the context
const SessionContext = createContext({});

// Grandchild component that consumes the session data
const GrandChild1 = ({ title }) => {
    console.log("🚀 ~ GrandChild1 ~ title:", title);

    const session = useContext(SessionContext); // Accessing context data
    console.log("🚀 ~ GrandChild1 ~ session:", session);

    return (
        <div className="grand-child">
            <h3>Grand Child 1</h3>
            <p>This is grandchild 1</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
};

// Child component that renders GrandChild1
const Child1 = (props) => {
    console.log("🚀 ~ Child1 ~ props:", props);
    return (
        <div className="child">
            <h2>Child 1</h2>
            <p>This is child 1</p>
            <GrandChild1 title="Title: Grand Child 1" />
        </div>
    );
};

// Home page component that provides the session context
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
            <SessionContext.Provider value={session}>
                <Child1 />
            </SessionContext.Provider>
        </div>
    );
};

export default HomePage;
