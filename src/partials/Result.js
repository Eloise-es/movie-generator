import { Card, Button } from "react-bootstrap";
import { writeMovie } from "../config.js";

export default function Result(props) {
	writeMovie(
		props.message,
		props.title,
		props.synopsis,
		props.actors,
		props.idea,
		props.imgAlt
	);
	return (
		<Card>
			<Card.Img variant="top" src={props.img} alt={props.imgAlt} />
			<Card.Title>
				<h1 className="text-center pt-3">{props.title}</h1>
			</Card.Title>
			<Card.Body className="p-3">
				<Card.Text>{props.synopsis}</Card.Text>
				<div>
					{props.actors.map((actor, i) => (
						<Button
							href={"https://en.wikipedia.org/wiki/" + actor}
							target="_blank"
							className="m-1"
							key={i}
							size="sm"
						>
							{actor}
						</Button>
					))}
				</div>
			</Card.Body>
			<Card.Footer className="text-muted">
				<small>From the idea "{props.idea}"</small>
			</Card.Footer>
		</Card>
	);
}
