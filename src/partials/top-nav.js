import { LinkContainer } from "react-router-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../images/logo.png";

export default function TopNav() {
	return (
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
						<LinkContainer to={"/movies"}>
							<Nav.Link>View all movies</Nav.Link>
						</LinkContainer>
						<Nav.Link href="#suggest">Suggest a movie</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
