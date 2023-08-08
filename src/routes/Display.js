import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MovieCard from "../partials/MovieCard";
import img1 from "../images/example-1.jpg";
import img2 from "../images/example-2.jpg";
import img3 from "../images/example-3.jpg";

export default function Display() {
	return (
		<Container fluid="sm" className="mt-3">
			<Row>
				<Col md>
					<MovieCard
						image={img1}
						altText="a cat on a giant roll of toilet roll, surrounded by an audience"
						title="Litter-ally Famous"
						synopsis="When Tommy (Jim Carrey), a curious and mischievous cat, discovers a human toilet, his life takes an unexpected turn. With the help of his devoted pet-parent, Charlie (Tina Fey), Tommy learns how to use the toilet and soon becomes a worldwide celebrity. But as Tommy's fame grows, so does the attention of an evil scientist bent on using Tommy's toilet-training skills to take over the world. With the fate of the world in their hands, Charlie and Tommy must find a way to thwart the scientist's evil plan. Can the unlikely duo save the world from destruction?"
						idea="A cat learns to use a human toilet and becomes world famous"
					/>
				</Col>
				<Col md>
					<MovieCard
						image={img2}
						altText="Two men using laptops, smiling. You can see the city lights in the background"
						title="Codes to Contentment"
						synopsis="David (Eddie Redmayne), a language teacher, longs for a new challenge and feels stuck in a never-ending rut of monotony. When an opportunity opens up to move to the Netherlands and teach English, David jumps on it. But when his students don't show up to his classes, David takes up coding to challenge himself and find purpose. With the help of his eccentric new codemates and a demanding mentor (Helena Bonham Carter), David slowly finds his place in the world and discovers a newfound passion - coding. This inspiring and life-affirming story follows David as he learns to find purpose and appreciation in life's unexpected detours."
						idea="A language teacher moves to the Netherlands and learns to code"
					/>
				</Col>
				<Col md>
					<MovieCard
						image={img3}
						altText="a woman surrounded by plants"
						title="Veggie Vengeance"
						synopsis="When green-thumb Samantha (Emily Blunt) discovers a passion for houseplants, she dives into an obsession that quickly takes over her life and ruins her relationship with her husband, Lucas (Hugh Jackman). With every new plant purchase, Samantha's house is gradually transformed into an otherworldly jungle. But when the plants begin to act strangely, strange accidents start happening and Samantha's life is put in danger. As the plants close in on her, Samantha discovers the truth - the plants are not only attempting to take over her house, but her life too! Will she survive the onslaught of the home-invading plants, or succumb to their vegetative wrath?"
						idea="A woman becomes obsessed with houseplants and eventually her house becomes such a jungle that the plants turn on her and she almost dies"
					/>
				</Col>
			</Row>
		</Container>
	);
}
