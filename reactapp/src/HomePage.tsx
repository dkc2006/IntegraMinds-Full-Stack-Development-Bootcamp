import React, { createContext, useContext } from 'react';
import "./home.css";

// Use context provider to pass the session data to the grandchild component

const SessionContext = createContext({});

const GrandChild1 = ({ title }) => {
    console.log("🚀 ~ GrandChild1 ~ title:", title);

    const session = useContext(SessionContext);
    console.log("🚀 ~ GrandChild1 ~ session:", session);

    return (
        <div className="grand-child">
            <h3>{title}</h3>
            <p>This is grand child 1</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
};

const Child1 = (props) => {
    console.log("🚀 ~ Child1 ~ props:", props);

    return (
        <div className="child">
            <h2>Child 1</h2>
            <p>This is child 1</p>
            <GrandChild1 title="Grand Child 1" />
        </div>
    );
};

const HomePage = () => {
    const session = {
        id: 501,
        name: "John Doe",
        age: 30,
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
