import React from "react";
import { useState } from "react";

function App() {
    const [headingText, setHeading] = useState("Hello");
    const [isMousedOver, setMousedOver] = useState(false);

    function handleClick() {
        setHeading("Submitted");
    }

    function handleMouseOver() {
        setMousedOver(true);
    }

    function handleMouseOut() {
        setMousedOver(false);
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                style={{ backgroundColor: isMousedOver ? "black" : "white" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >Submit</button>
        </div>
    );
}

export default App;
