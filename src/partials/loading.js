import loading from "../images/loading.svg";

export default function Loading() {
	return (
		<img
			src={loading}
			alt="loading"
			className="loading my-3 m-auto"
			id="loading"
			style={{ maxWidth: "40px" }}
		/>
	);
}
