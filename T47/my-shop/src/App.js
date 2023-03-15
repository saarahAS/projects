import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function Header() {
  return (
    <Row>
      <Col className="themed-grid-col">
        <h1>MS</h1>
      </Col>
      <Col className="themed-grid-col">
        <h2>My Shop</h2>
      </Col>
      <Col className="themed-grid-col">Welcome/Sign in</Col>
    </Row>
  );
}

function About() {
  return (
    <Row>
      <Col className="themed-grid-col">About</Col>
    </Row>
  );
}

function Products() {
  return (
    <Row>
      <Col className="themed-grid-col">Products</Col>
      <Col className="themed-grid-col">Products</Col>
      <Col className="themed-grid-col">Products</Col>
    </Row>
  );
}
function ContainerExample() {
  return (
    <Container>
      <Header />

      <About />

      <Products />
    </Container>
  );
}

function App() {
  return (
    <>
      <ContainerExample />
    </>
  );
}

export default App;
