import { useRouteError } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import TopNav from "./partials/top-nav";
import Footer from "./partials/footer";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<TopNav />
			<Alert variant="secondary" className="m-5">
				<Alert.Heading>Oops!</Alert.Heading>
				<p>Sorry, an unexpected error has occurred.</p>
				<hr />
				<p className="mb-0">
					<i>{error.statusText || error.message}</i>
				</p>
			</Alert>
			<Footer />
		</div>
	);
}
