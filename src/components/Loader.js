import { RotatingLines } from "react-loader-spinner";
import styles from "../styles/Common.module.css";

function Loader({ context }) {
	return (
		<div className={styles.loaderWrapper}>
			<RotatingLines strokeColor="#e62429" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
			<p>{context}</p>
		</div>
	);
}

export default Loader;
