import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { auth } from "../config.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import logo from "../images/logo.png";

export default function TopNav() {
	const [user] = useAuthState(auth);
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};
	const signOut = () => {
		auth.signOut();
	};
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
			bg="dark"
			data-bs-theme="dark"
		>
			<Container>
				<LinkContainer to={"/"}>
					<Navbar.Brand href="#home">
						<img
							src={logo}
							height="40"
							className="d-inline-block align-top"
							alt="AIMd"
						/>
					</Navbar.Brand>
				</LinkContainer>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to={"/movies"}>
							<Nav.Link>View all movies</Nav.Link>
						</LinkContainer>
						<LinkContainer to={"/generator"}>
							<Nav.Link>Suggest a movie</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav className="justify-content-end">
						{user ? (
							<Button
								onClick={signOut}
								className="sign-out"
								type="button"
								variant="secondary"
							>
								Sign Out
							</Button>
						) : (
							<Button
								className="sign-in"
								onClick={googleSignIn}
								type="button"
								variant="secondary"
							>
								Sign in with Google
							</Button>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
