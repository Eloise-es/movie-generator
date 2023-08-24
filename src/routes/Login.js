import { Alert, Button } from "react-bootstrap";
import { auth } from "../config.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { redirect } from "react-router-dom";

export default function Login() {
	const [user] = useAuthState(auth);
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};
	return (
		<div id="login">
			<Alert variant="secondary" className="m-5">
				<Alert.Heading>Please sign in!</Alert.Heading>
				<p>You need to be signed in to access this page.</p>
				<hr />
				<Button
					className="sign-in"
					onClick={googleSignIn}
					type="button"
					variant="secondary"
				>
					Sign in with Google
				</Button>
			</Alert>
		</div>
	);
}
