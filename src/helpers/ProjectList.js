import Pro1 from "../assets/jpw.png";
import Pro2 from "../assets/lookup.jpg";
import Pro3 from "../assets/mylibrary.png";
import Pro4 from "../assets/theorganist.png";

export const projectList = [
	{
		name: "Językowy punkt widzenia",
		key: 1,
		image: Pro1,
		skills: "React.js, Next.js, TypeScript, SCSS",
		github: "https://github.com/NNikiforuk/Jezykowy-punkt-widzenia",
		deploy: "https://jezykowy-punkt-widzenia.vercel.app",
		functionalities: [
			"Commercial website for polish language school",
			"Deployed on Vercel (hosting on-going)"
		],
	},
	{
		name: "lookUp",
		key: 2,
		image: Pro2,
		skills: "Javascript, SCSS, weather API, Firebase, webpack",
		github: "https://github.com/NNikiforuk/lookup",
		deploy: "https://lookup-nn.netlify.app/",
		functionalities: [
			"Searching cheapest flights from Wroclaw",
			"Authentication in Firebase",
			"Current weather in origin or destination localization",
		],
	},
	{
		name: "myLibrary",
		key: 3,
		image: Pro3,
		skills: "React.js, Firebase, SCSS, BEM, Font awesome",
		github: "https://github.com/NNikiforuk/myLibrary",
		deploy: "https://nikislibrary.netlify.app/",
		functionalities: [
			"Add new or finished books on your web library",
			"Check how many books you have read",
			"CRUD for each book",
			"Authentication in Firebase",
		],
	},
	{
		name: "theOrganist",
		key: 4,
		image: Pro4,
		skills:
			"React.js, Next.js, next-auth, MongoDB, Mongoose, Tailwind, heroicons",
		github: "https://github.com/NNikiforuk/theOrganist",
		deploy: "https://the-organist-git-main-nnikiforuk.vercel.app/",
		functionalities: [
			"App for organists",
			"Search church songs by catholic time period or name",
			"Plan your track list",
			"CRUD for each song",
			"Authentication via next-auth",
			"Database in MongoDB",
		]
	},
];
