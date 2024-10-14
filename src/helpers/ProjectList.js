import Pro1 from "../assets/jpw.png";
import Pro2 from "../assets/monthlymodifiers.png";
import Pro3 from "../assets/parafiaparowa.png";
import Pro4 from "../assets/templateit.png";
import Pro5 from "../assets/mylibrary.png";

export const projectList = [
	{
		name: "Językowy punkt widzenia",
		key: 1,
		image: Pro1,
		skills: ["Astro", "TypeScript", "Web3Forms", "SCSS"],
		github: "https://github.com/NNikiforuk/Jezykowy-Punkt-Widzenia-version-4",
		deploy: "https://www.jpw-kursy.pl/",
		functionalities: ["Commercial website for polish language school."],
	},
	{
		name: "Monthly Modifiers",
		key: 2,
		image: Pro2,
		skills: ["Astro", "TypeScript", "SCSS", "NIST Randomness Beacon"],
		github: "https://github.com/NNikiforuk/Monthly-Modifiers",
		deploy: "https://monthlymodifiers.com/",
		functionalities: [
			"Each month a challenge is drawn using the NIST Randomness Beacon. Choose a challenge or choose them all and start testing yourself.",
		],
	},
	{
		name: "Parafia Parowa",
		key: 3,
		image: Pro3,
		skills: ["WordPress", "Elementor"],
		deploy: "https://parafiaparowa.pl/",
		functionalities: [
			"Commercial website for polish, Roman Catholic church in Parowa",
		],
	},
	{
		name: "templateIT",
		key: 4,
		image: Pro4,
		skills: ["React", "Vite", "TypeScript", "SCSS"],
		github: "https://github.com/NNikiforuk/templateIT",
		deploy: "https://stellular-croquembouche-3fbfa6.netlify.app/",
		functionalities: [
			"Pdf template for creating and plotting completed tasks/challenges/habits. Best on the desktop",
		],
	},
	{
		name: "myLibrary",
		key: 5,
		image: Pro5,
		skills: ["React", "Firebase", "SCSS", "BEM", "Font awesome"],
		github: "https://github.com/NNikiforuk/myLibrary",
		deploy: "https://nikislibrary.netlify.app/",
		functionalities: ["Collect your finished books on the shelf"],
	},
];
