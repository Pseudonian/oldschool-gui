import React from "react";

const ArrowButton = ({ onClick }: { onClick: any }) => {
    return (
        <button className="arrow-button" onClick={onClick}>
            <a href="/blogs">Click me</a>
        </button>
    );
};

export default ArrowButton;
