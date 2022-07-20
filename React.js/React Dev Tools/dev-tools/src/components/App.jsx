import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        img="https://media-exp2.licdn.com/dms/image/C5603AQFSM_t-xcQRTg/profile-displayphoto-shrink_400_400/0/1656421983663?e=1663804800&v=beta&t=PnBBFmkhrq1HQAGIXubaF3XE606xwIisBFYNU4pkRaM"
      />
      <Card 
        name = {contacts[0].name}
        img = {contacts[0].imgURL}
        tel = {contacts[0].phone}
        email = {contacts[0].email}
      />
      <Card 
        name = {contacts[1].name}
        img = {contacts[1].imgURL}
        tel = {contacts[1].phone}
        email = {contacts[1].email}
      />
      <Card 
        name = {contacts[2].name}
        img = {contacts[2].imgURL}
        tel = {contacts[2].phone}
        email = {contacts[2].email}
      />
    </div>
  );
}

export default App;
