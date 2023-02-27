import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import profilePicUser from "./profPic.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
const root = ReactDOM.createRoot(document.getElementById("root"));

const user = {
  name: "Bob",
  surname: "Ross",
  date_of_birth: "12/09/70",
  address: "100 Fleet Street",
  country: "United Kingdom",
  telephone: "07912099999",
  company: "Meta",
  profile_picture: <img src={profilePicUser} />,
  shopping_cart: ["apples", "bananas", "oranges"],
};

const i = 0;

root.render(
  <React.StrictMode>
      {user.profile_picture} {user.name} {user.surname}
      <br></br>
      {user.date_of_birth}
      <br></br>
      {user.address}, {user.country}
      <br></br>
      Telephone: {user.telephone}
      <br></br>
      Company: {user.company}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      Shopping cart:
      <br></br>
      {user.shopping_cart[i]}
      <br></br>
      {user.shopping_cart[i + 1]}
      <br></br>
      {user.shopping_cart[i + 2]}
      <BasicExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
