import React from "react";
import Login from "./Login";
import Register from "./Register";

var isAccountCreated = false;

function App() {
    return (
        <div className="container">
            {isAccountCreated ? <Login /> : <Register />}
        </div>
    );
}

export default App;
