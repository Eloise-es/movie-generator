import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Display from "./Display";
import logo from "./images/logo.png";

export default function App() {
	return (
		<div>
			<Navbar
				expand="lg"
				className="bg-body-tertiary"
				bg="dark"
				data-bs-theme="dark"
			>
				<Container>
					<Navbar.Brand href="#home">
						<img
							src={logo}
							height="40"
							className="d-inline-block align-top"
							alt="AIMd"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#movies">View all movies</Nav.Link>
							<Nav.Link href="#suggest">Suggest a movie</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Display />
			<Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
				<Container>
					<Nav className="m-auto">
						<Navbar.Brand href="#home">
							Artificial Intelligence Movie Database
						</Navbar.Brand>

						<Nav.Link href="https://www.eloise.es">by Eloise Salmon</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}
