import { useRouteError } from "react-router-dom";
import styles from "../styles/Common.module.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function Error() {
	const error = useRouteError();

	return (
		<>
			<Header />
			<div className={styles.errorContainer}>
				<div className={styles.errorMessage}>
					<h1 className={styles.errorStatus}>
						<span>{error.status}</span>
						<span>{error.statusText}</span>
					</h1>
					<h2>Oh my!</h2>
					<p>Sorry, an unexpected error has occurred. Please press "Go BACK" button and try again.</p>
					<p>{error.data}</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Error;
