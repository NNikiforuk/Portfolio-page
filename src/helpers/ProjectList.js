import Pro1 from "../assets/jpw.png";
import Pro2 from "../assets/monthlymodifiers.png";

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
];
