import { Outlet } from "react-router-dom";
import Display from "../Display";
import TopNav from "../partials/top-nav";
import Footer from "../partials/footer";

export default function Root() {
	return (
		<div>
			<TopNav />
			<Outlet />
			<Footer />
		</div>
	);
}
