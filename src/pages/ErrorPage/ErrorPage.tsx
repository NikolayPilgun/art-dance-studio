import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

interface RouteError {
	statusText?: string;
	message?: string;
}

export default function ErrorPage() {
	const error = useRouteError() as RouteError;
	console.error(error);

	return (
		<div id="error-page" className={styles.errorPage}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
