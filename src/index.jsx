import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NightSky from "./components/sky";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NightSky>
			<App />
		</NightSky>
	</React.StrictMode>
);
reportWebVitals();
