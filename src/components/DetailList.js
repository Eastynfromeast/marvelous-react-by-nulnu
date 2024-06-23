import styles from "../styles/Common.module.css";

function DetailList({ title, items, returned }) {
	return (
		<div className={styles.bioWrap}>
			<span>
				{title} ({returned}){" "}
			</span>
			<ul>
				{returned !== 0 ? (
					items.map((item, index) => {
						return <li key={`${index}`}>{item.name}</li>;
					})
				) : (
					<p>No item has found</p>
				)}
			</ul>
		</div>
	);
}

export default DetailList;
