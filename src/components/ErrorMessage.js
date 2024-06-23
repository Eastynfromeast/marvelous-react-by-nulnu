import styles from "../styles/Common.module.css";

function ErrorMessage({ error }) {
	return (
		<div className={styles.errorContainer}>
			<h2 className={styles.errorMessage}>Error Happend! {error}</h2>
		</div>
	);
}

export default ErrorMessage;
