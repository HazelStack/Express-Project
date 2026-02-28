import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import plantLogo from "../images/plant.jpg";

export default function Layout({ user, onLogout, onHome, children }) {
  return (
    <>
      <Navbar style={{ backgroundColor: "#2f5d50" }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={plantLogo}
              width="32"
              height="32"
              className="me-2"
              alt="Plant logo"
            />
            Botanical Q&A
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link onClick={onHome}>Categories</Nav.Link>
            <Navbar.Text className="me-3">
              Signed in as: <strong>{user?.username}</strong>
            </Navbar.Text>
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="dashboard-page">
        <Container className="mt-4">
          {children}
        </Container>
      </div>
    </>
  );
}