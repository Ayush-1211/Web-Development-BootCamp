import React from 'react';
import ReactDOM from 'react-dom';

// 1. React DOM & Render

/*ReactDOM.render(
  <div>
    <h1>My Favourite Food</h1>
    <ul>
      <li>Noodles</li>
      <li>Punjabi</li>
      <li>Pizza</li>
    </ul>
  </div>,
  document.getElementById('root')
);*/



// 2. JS Expression in JSX

/*const fname = "Ayush";
const lname = "Prajapati";
const luckyNumber = 7;
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>My lucky number is: {luckyNumber}</p>
    <p>Random Number is: {Math.floor(Math.random() * 10)}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById('root')
);*/



// 3. Styling React Elements & JSX Attributes

/* const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Food</h1>
    <div>
      <img src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById('root')
);*/


// 4. Inline Styling for React Elements

/*const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
}
customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>My Favourite Food</h1>
  </div>,
  document.getElementById('root')
);*/



// 5. Challenge

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
}

if(currentTime < 12){
  greeting = "Good Morning"
  customStyle.color = "red"
} else if(currentTime < 18){
  greeting = "Good Afternoon"
  customStyle.color = "green"
} else {
  greeting = "Good Night"
  customStyle.color = "blue"
}

ReactDOM.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById('root')
);
