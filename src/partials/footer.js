import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

export default function Footer() {
	return (
		<Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
			<Container>
				<Nav className="m-auto text-center">
					<Row className="align-items-center">
						<Col>
							<LinkContainer to={"/"}>
								<Navbar.Brand href="#home">
									Artificial Intelligence Movie Database
								</Navbar.Brand>
							</LinkContainer>
						</Col>
						<Col>
							<Nav.Link href="https://www.eloise.es" target="_blank">
								by Eloise Salmon
							</Nav.Link>
						</Col>
					</Row>
				</Nav>
			</Container>
		</Navbar>
	);
}
