import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Configuration, OpenAIApi } from "openai";

// Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "aimd-app.firebaseapp.com",
	projectId: "aimd-app",
	storageBucket: "aimd-app.appspot.com",
	messagingSenderId: "902341939824",
	appId: "1:902341939824:web:1bed136a3aa6ef1afa1ab5",
	measurementId: "G-8Q3YEMCF0L",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

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
