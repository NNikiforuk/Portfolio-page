import Pro1 from "../assets/lookup.jpg";
import Pro2 from "../assets/mylibrary.png";
import Pro3 from "../assets/theorganist.png";

export const projectList = [
	{
		name: "lookUp",
		key: 1,
		image: Pro1,
		skills: "Javascript, SCSS, weather API, Firebase, webpack, axios",
		github: "https://github.com/NNikiforuk/lookup",
		deploy: "https://lookup-nn.netlify.app/",
	},
	{
		name: "myLibrary",
		key: 2,
		image: Pro2,
		skills: "React.js, Firebase, SCSS, BEM, Font awesome",
		github: "https://github.com/NNikiforuk/myLibrary",
		deploy: "https://nikislibrary.netlify.app/",
	},
	{
		name: "theOrganist",
		key: 3,
		image: Pro3,
		skills:
			"React.js, Next.js, next-auth, MongoDB, Mongoose, Tailwind, heroicons",
		github: "https://github.com/NNikiforuk/theOrganist",
		deploy: "theorganist.vercel.app/",
	},
];
