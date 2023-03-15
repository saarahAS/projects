import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import profilePicUser from "./profPic.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Bootstrap Card used to display cart items in cards
function BasicExample({ shopping_item }) {
  return (
    <Card style={{ width: "13rem" }} class="card">
      <Card.Body>
        <Card.Title class="itemName">{shopping_item}</Card.Title>

        <Button style={{ width: "80px" }} variant="primary">
          -1
        </Button>
        <Button style={{ width: "80px" }} variant="primary">
          +1
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
const root = ReactDOM.createRoot(document.getElementById("root"));

// object to store user details
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
    <h1>Shopping Cart</h1>
    <br></br>
    {/* src: https://upmostly.com/tutorials/how-to-use-map-in-react-applications */}
    {user.shopping_cart.map((item) => (
      <BasicExample shopping_item={item} />
    ))}
  </React.StrictMode>
);

reportWebVitals();

