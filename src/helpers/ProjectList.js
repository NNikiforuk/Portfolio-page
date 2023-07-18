import Pro1 from "../assets/lookup.jpg";
import Pro2 from "../assets/mylibrary.png";
import Pro3 from "../assets/theorganist.png";

export const projectList = [
	{
		name: "lookUp",
		key: 1,
		image: Pro1,
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
		key: 2,
		image: Pro2,
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
		key: 3,
		image: Pro3,
		skills:
			"React.js, Next.js, next-auth, MongoDB, Mongoose, Tailwind, heroicons",
		github: "https://github.com/NNikiforuk/theOrganist",
		deploy: "https://theorganist.vercel.app/",
		functionalities: [
			"App for organists",
			"Search church songs by catholic time period or name",
			"Plan your track list",
			"CRUD for each song",
			"Authentication via next-auth",
			"Database in MongoDB",
		],
		error: "Right now I am having a problem with auth on Vercel deploy"
	},
];
