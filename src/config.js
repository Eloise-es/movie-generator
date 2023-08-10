import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { Configuration, OpenAIApi } from "openai";

// Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "ai-movie-database.firebaseapp.com",
	databaseURL:
		"https://ai-movie-database-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "ai-movie-database",
	storageBucket: "ai-movie-database.appspot.com",
	messagingSenderId: "556385645237",
	appId: "1:556385645237:web:e01576458f954ebc51c4fc",
	measurementId: "G-L6JRZT3M4W",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const db = getDatabase();

export function writeMovie(message, title, synopsis, actors, idea, imgAlt) {
	set(ref(db, "movies/" + Date.now()), {
		message: message,
		title: title,
		synopsis: synopsis,
		actors: actors,
		idea: idea,
		imgAlt: imgAlt,
	});
}
// Initialise openai
let apiKey = process.env.REACT_APP_OPENAI_API_KEY;
if (!apiKey) {
	console.error("No API key found.");
	apiKey = prompt("No API key found. Please provide your openai API key here:");
}
const configuration = new Configuration({
	apiKey: apiKey,
});
export const openai = new OpenAIApi(configuration);
