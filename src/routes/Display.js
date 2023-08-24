import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MovieCard from "../partials/MovieCard";
import { defaultMovies } from "../config";

import {
	query,
	collection,
	orderBy,
	onSnapshot,
	limit,
} from "firebase/firestore";
import { db } from "../config";

export default function Display() {
	const [movies, setMovies] = useState(defaultMovies);
	useEffect(() => {
		const q = query(
			collection(db, "movies"),
			orderBy("createdAt", "desc"),
			limit(50)
		);
		const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
			const fetchedMovies = [];
			QuerySnapshot.forEach((doc) => {
				fetchedMovies.push({ ...doc.data(), id: doc.id });
			});
			setMovies(fetchedMovies);
		});
		return () => unsubscribe;
	}, []);

	return (
		<Container fluid="sm" className="mt-3">
			<Row>
				{movies &&
					movies.map((movie) => (
						<Col md key={movie.id}>
							<MovieCard
								img="https://picsum.photos/200/200"
								imgAlt={movie.imgAlt}
								title={movie.title}
								synopsis={movie.synopsis}
								idea={movie.idea}
								author={movie.createdBy}
								actors={movie.actors}
							/>
						</Col>
					))}
			</Row>
		</Container>
	);
}
