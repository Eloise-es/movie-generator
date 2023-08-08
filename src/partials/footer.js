import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
	return (
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
	);
}
