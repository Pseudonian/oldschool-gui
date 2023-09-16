import React from "react";
import ArrowButton from "../components/Navbar/ArrowButton";

const Home = () => {
    return (
        <div className="centered-container">
            <h1>Welcome to</h1>
            <span className="logo-text">OldSchool</span>
            <h2>the old school way to learn new AI tools</h2>
            <ArrowButton onClick={() => console.log("clicked")} />
        </div>
    );
};

export default Home;
