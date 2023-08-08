import Card from "react-bootstrap/Card";

function MovieCard({ image, altText, title, synopsis, idea }) {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image} alt={altText} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{synopsis}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">From the idea "{idea}"</Card.Footer>
    </Card>
  );
}

export default MovieCard;
