import "../generator.css";
import movieboss from "../images/movieboss.png";
import sendbtn from "../images/send-btn-icon.png";
import loading from "../images/loading.svg";

export default function Generator() {
	return (
		<main>
			<section id="setup-container">
				<div className="setup-inner">
					<img src={movieboss} />
					<div className="speech-bubble-ai" id="speech-bubble-ai">
						<p id="movie-boss-text">
							Give me a one-sentence concept and I'll give you an eye-catching
							title, a synopsis the studios will love, a movie poster... AND
							choose the cast!
						</p>
					</div>
				</div>
				<div
					className="setup-inner setup-input-container"
					id="setup-input-container"
				>
					<textarea
						id="setup-textarea"
						placeholder="An evil genius wants to take over the world using AI."
					></textarea>
					<button className="send-btn" id="send-btn" aria-label="send">
						<img src={sendbtn} alt="send" />
					</button>
					<img src={loading} className="loading" id="loading" />
					<button id="view-pitch-btn" className="view-pitch-btn">
						View Pitch
					</button>
				</div>
			</section>
			<section className="output-container" id="output-container">
				<div id="output-img-container" className="output-img-container"></div>
				<h1 id="output-title"></h1>
				<p id="output-text"></p>
				<ul id="output-stars"></ul>
				<button className="back-button" id="back-button">
					New Pitch
				</button>
			</section>
		</main>
	);
}
