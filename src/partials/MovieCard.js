import { Card, Button } from "react-bootstrap";

export default function MovieCard({
	img,
	imgAlt,
	title,
	synopsis,
	actors,
	idea,
	author,
}) {
	return (
		<Card>
			<Card.Img variant="top" src={img} alt={imgAlt} />
			<Card.Title>
				<h1 className="text-center pt-3">{title}</h1>
			</Card.Title>
			<Card.Body className="p-3">
				<Card.Text>{synopsis}</Card.Text>
				<div>
					{actors.map((actor, i) => (
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
				<small>
					From the idea "{idea}" by {author}
				</small>
			</Card.Footer>
		</Card>
	);
}
