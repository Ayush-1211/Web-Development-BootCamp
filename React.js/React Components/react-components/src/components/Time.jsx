import React from "react";

function Time() {
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    const customStyle = {
        color: ""
    }

    if (currentTime < 12) {
        greeting = "Good Morning"
        customStyle.color = "red"
    } else if (currentTime < 18) {
        greeting = "Good Afternoon"
        customStyle.color = "green"
    } else {
        greeting = "Good Night"
        customStyle.color = "blue"
    }

    return (
        <h1 style={customStyle}>{greeting}</h1>
    );
}

export default Time;