import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/main.scss"; // Подключение общего файла стилей
import router from "./router";

const rootElement = document.getElementById("root") as HTMLDivElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
