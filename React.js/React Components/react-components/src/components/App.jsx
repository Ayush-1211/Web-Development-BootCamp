import React from "react";
import Heading from './Heading';
import List from './List';
import Time from "./Time";
//import {add, multiply, subtract, divide} from "./Calculator";
import * as Calculator from "./Calculator";

function App() {
    return (
        <div>
            <Heading />
            <List />
            <Time />
            <ul>
                <li>{Calculator.add(10,20)}</li>
                <li>{Calculator.multiply(10,20)}</li>
                <li>{Calculator.subtract(10,20)}</li>
                <li>{Calculator.divide(10,20)}</li>
            </ul>
        </div>
    );
}

export default App;