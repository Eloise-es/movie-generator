import React, { useState } from "react";
import { Card, Form, Row, Button, InputGroup } from "react-bootstrap";
import { openai, writeMovie } from "../config.js";
import Loading from "../partials/loading";
import movieboss from "../images/ai-movie-boss.png";
import sendbtn from "../images/send-btn-icon.png";
import "../generator.css";
import MovieCard from "../partials/MovieCard.js";

export default function Generator() {
	// Set variables using useState
	const [prompt, setPrompt] = useState(null);
	const [message, setMessage] = useState(
		"Give me a one-sentence concept and I'll give you an eye-catching title, a synopsis the studios will love, a movie poster... AND choose the cast!"
	);
	const [title, setTitle] = useState("Title");
	const [synopsis, setSynopsis] = useState("A film about many things");
	const img = "https://picsum.photos/200/200";
	const [imgAlt, setImgAlt] = useState("Movie poster");
	const [actors, setActors] = useState(["Tom Cruise", "Emma Watson"]);
	const [isLoading, setIsLoading] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [showResult, setShowResult] = useState(false);

	// When send button is clicked (form submitted)
	function handleSubmit(event) {
		event.preventDefault();
		if (prompt == null) {
			console.log("No idea submitted");
		} else {
			console.log(prompt);
			setIsLoading(true);
			fetchBotReply(prompt);
			fetchSynopsis(prompt);
		}
	}
	// When 'view result' button is clicked
	function handleClick(event) {
		event.preventDefault();
		writeMovie(message, title, synopsis, actors, prompt, imgAlt);
		setShowResult(true);
	}

	// set prompt while typing in textarea
	function handlePromptChange(event) {
		setPrompt(event.target.value);
	}

	// Form submits on enter
	const handleKeyDown = (e) => {
		//it triggers by pressing the enter key
		if (e.keyCode === 13) {
			handleSubmit(e);
		}
	};

	// fetch response and display in speech bubble
	async function fetchBotReply(prompt) {
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `Give a short enthusiastic response to the movie suggestion "${prompt}" and say you will need a few minutes to think about it before helping to make it happen. Mention one aspect of the suggestion. Use less than 200 characters.`,
			max_tokens: 60,
		});
		const newMessage = response.data.choices[0].text;
		setMessage(newMessage);
	}

	// Fetch synopsis and call other functions using synopsis
	async function fetchSynopsis(prompt) {
		try {
			const response = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: `Write a short movie synopsis based on a movie idea. Make it sound engaging, professional and marketable and include at least two suitable actors' names. Don't mention the movie title.
			###
			Movie idea: A woman becomes obsessed with houseplants and eventually her house becomes such a jungle that the plants turn on her and she almost dies
			Movie synopsis: When Sally (Natalie Portman) discovers a passion for houseplants, she's thrown into an obsession that quickly takes over her life and ruins her relationship with her husband, Mike (Ryan Reynolds). As her collection grows, Sally's house is gradually transformed into a thriving jungle. But when the plants begin to act strangely, strange accidents start happening and her life is put in danger. As the plants start to close in on her, Sally realizes why - they're not only trying to take over her house, but her life too! Can she reclaim control in time and make it out alive?
			###
			Movie idea: A messy English teacher living in France falls in love with a very organised and tidy Spanish aerospace engineer, and they have to decide whether to stay together when she moves back to England.
			Movie synopsis: When Annie (Sally Hawkins), a lively and somewhat chaotic English teacher living in France, meets Santiago (Javier Bardem), a dashing and organised Spanish aerospace engineer, sparks fly. Despite their dramatically different approaches to life and relationships, the two have undeniable chemistry, and develop a passionate and exciting love affair. But when Annie is called back to England, their relationship faces a difficult challenge—can their love survive thousands of miles apart? This tender and heart-warming romantic drama tells a story of love, sacrifice, and learning to embrace change.
			###
			Movie idea: ${prompt}
			Movie synopsis: `,
				max_tokens: 300,
			});
			console.log(response);
			if (response.data.choices[0].finish_reason === "length") {
				console.log("Synopsis stopped because of length");
			}
			const newSynopsis = response.data.choices[0].text.trim();
			setSynopsis(newSynopsis);
			await fetchTitle(newSynopsis);
			await fetchStars(newSynopsis);
			await fetchImagePrompt(newSynopsis);
			setIsLoading(false);
			setIsFinished(true);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	async function fetchTitle(synopsis) {
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `Create a title for a movie with the following synopsis: "${synopsis}". It should be a pun or an adaptation of an existing movie title. The title should be 1 to 8 words.`,
			max_tokens: 20,
			temperature: 1,
		});
		setTitle(response.data.choices[0].text.trim());
	}

	async function fetchStars(synopsis) {
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `Extract the actor names from the following synopsis: "${synopsis}". Add two more names of less famous actors that would also be suitable. Provide the result as a comma separated list.`,
			max_tokens: 30,
		});
		const starsResult = response.data.choices[0].text.trim();
		setActors(starsResult.split(", "));
		console.log(response);
	}

	async function fetchImagePrompt(synopsis) {
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `Describe a film poster based on a film's synopsis. It should be a prompt suitable for an image generating AI tool.
    ###
    synopsis: When Sally (Natalie Portman) discovers a passion for houseplants, she's thrown into an obsession that quickly takes over her life and ruins her relationship with her husband, Mike (Ryan Reynolds). As her collection grows, Sally's house is gradually transformed into a thriving jungle. But when the plants begin to act strangely, strange accidents start happening and her life is put in danger. As the plants start to close in on her, Sally realizes why - they're not only trying to take over her house, but her life too! Can she reclaim control in time and make it out alive?
    image-description: A woman stands in a room filled with plants. The plants are leaning towards her in a threatening way and she looks scared.
    ###
    synopsis: In a world gone mad, Dr. Victor Drazen (Daniel Craig) has invented a machine that can control the minds of all humans. With the fate of humanity at stake, an unlikely group of intelligent animals must take on the challenge of stopping Drazen and his evil plan. Led by Golden Retriever Max (Chris Pratt) and his best friend, the wise-cracking squirrel Scooter (Will Arnett), they enlist the help of a street-smart raccoon named Rocky (Anna Kendrick) and a brave hawk named Talon (Zoe Saldana). Together, they must find a way to stop Drazen before he can enslave humanity.
    image-description:  A group of animals, led by a golden retriever, standing in a defensive line in a dark alley. The animals are silhouetted against a backdrop of a towering city skyline, with a full moon in the sky above them. Sparks are flying from the claws of the hawk in the center of the group, and the raccoon is brandishing a makeshift weapon.
    ###
    synopsis: ${synopsis}
    image-description:`,
			max_tokens: 80,
			temperature: 0.8,
		});
		const newAlt = response.data.choices[0].text.trim();
		setImgAlt(newAlt);
		// fetchImage(newAlt);
	}

	return (
		<main className="m-auto mt-5" style={{ maxWidth: "420px" }}>
			{!showResult && (
				<Card className="mb-2 pb-3" id="setup-container">
					<div
						className="p-3"
						style={{ minHeight: "234px", alignSelf: "center" }}
					>
						<Row>
							<img
								src={movieboss}
								alt="AI movie boss"
								style={{ width: "40%", alignSelf: "center" }}
							/>
							<div className="speech-bubble-ai" id="speech-bubble-ai">
								<p className="p-2" id="movie-boss-text">
									{message}
								</p>
							</div>
						</Row>
					</div>
					{!isLoading && !isFinished && (
						<Form className="m-3" onSubmit={handleSubmit}>
							<InputGroup>
								<Form.Control
									as="textarea"
									id="setup-textarea"
									autoFocus={true}
									placeholder="An evil genius wants to take over the world using AI."
									onChange={handlePromptChange}
									onKeyDown={handleKeyDown}
								></Form.Control>
								<Button
									className="send-btn btn-secondary"
									id="send-btn"
									aria-label="send"
									type="submit"
								>
									<img src={sendbtn} alt="send" style={{ width: "1.6em" }} />
								</Button>
							</InputGroup>
						</Form>
					)}
					{isLoading && <Loading />}
					{isFinished && (
						<Button
							className="m-auto my-3"
							size="lg"
							variant="dark"
							onClick={(event) => handleClick(event)}
						>
							View Result
						</Button>
					)}
				</Card>
			)}
			{showResult && (
				<MovieCard
					message={message}
					img={img}
					imgAlt={imgAlt}
					title={title}
					synopsis={synopsis}
					actors={actors}
					idea={prompt}
				/>
			)}
		</main>
	);
}
