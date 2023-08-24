import { Configuration, OpenAIApi } from "openai";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
	getFirestore,
	addDoc,
	collection,
	serverTimestamp,
	query,
	orderBy,
	onSnapshot,
	limit,
} from "firebase/firestore";

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

export async function writeMovie(
	message,
	title,
	synopsis,
	actors,
	idea,
	imgAlt
) {
	const { uid, displayName } = auth.currentUser;
	await addDoc(collection(db, "movies"), {
		message: message,
		title: title,
		synopsis: synopsis,
		actors: actors,
		idea: idea,
		imgAlt: imgAlt,
		createdAt: serverTimestamp(),
		createdBy: displayName,
		uid,
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

export const defaultMovies = [
	{
		createdBy: "Eloise Salmon",
		actors: [
			"Marion Cotillard",
			"Tom Hardy",
			"Riz Ahmed",
			"Ella Purnell",
			"Carey Mulligan.",
		],
		message:
			"\n\nThis sounds like a unique and intriguing story! I love the idea of focusing on a woman with such a specific lifestyle. I'll need more time to think about how to make it happen best, but I'm excited!",
		createdAt: {
			seconds: 1692891648,
			nanoseconds: 785000000,
		},
		title: '"Coffee & Takeoff"',
		imgAlt:
			"A woman is seen from behind, standing in the middle of a crowded café. Her hands are clenched tightly around a cup of coffee, with a glowing ember of a cigarette in one hand. She is illuminated by a shaft of light coming in from a window, and she looks determined and resolute.",
		uid: "8rHG0QtQVUOhYMmHxjSA4Hf1Xy22",
		idea: "A French film about a woman who drinks coffee all day and smokes in bed",
		synopsis:
			"Vivienne (Marion Cotillard), a jaded housewife settled in a mundane and uninspiring life, finds respite in an unexpected and unhealthy habit – chain-drinking coffee all day and smoking in bed. Struggling to find her place in society, she starts to venture out of her comfort zone and explore her creative passions. A captivating and introspective drama, it follows Vivienne as she begins to discover an inner strength and resilience she never knew she had. With a wild and rebellious spirit, will Vivienne take the leap of faith and break free of her oppressive routine?",
		id: "5db0Gp1IQhBQqz9h0nf1",
	},
	{
		idea: "An action movie about a man in his 70s who moves to the moon",
		synopsis:
			"After years of yearning, Bill (Robert De Niro) has finally decided to chase his lifelong dream of living on the moon. Joining a space exploration mission in his 70s, Bill ends up in a deserted lunar base, where otherworldly creatures lurk in the shadows. But when a mysterious force threatens the mission’s security, it's up to Bill to brave the fight with his skills and decades of wisdom. Can he survive the extraterrestrial creatures of the moon and protect the earth’s future? This high-octane action-adventure follows Bill on an intergalactic mission to save the world.",
		imgAlt:
			"A man wearing a space suit stands in a deserted lunar base, surrounded by mysterious shadows and creatures. He is aiming a futuristic gun at the creatures, while a large, full moon looms in the background.",
		uid: "8rHG0QtQVUOhYMmHxjSA4Hf1Xy22",
		title: "Moon Maniacs",
		createdAt: {
			seconds: 1692892462,
			nanoseconds: 43000000,
		},
		actors: [
			"Robert De Niro",
			"John Travolta",
			"Tom Hanks",
			"Matt Damon",
			"Jack Nicholson",
			"Charlie Sheen",
		],
		message:
			"\n\nThat sounds so unique and creative! I'm super excited about the concept of a 70s man moving to the moon. Let me grab a pencil first. ;)",
		createdBy: "Eloise Salmon",
		id: "Xx0U2bJTM8gVF8jAt5VS",
	},
];
