import styles from "../../styles/Detail.module.css";

function ListItem({ title, tag, items, returned, name, description }) {
	const noDescription = description !== "" ? description : "No description written";
	return (
		<div className={styles.bioWrap}>
			<span>
				{title} {returned !== undefined && `(${returned})`}
			</span>
			{tag === "h3" && <h3>{name}</h3>}
			{tag === "p" && <p>{noDescription}</p>}
			{tag === "li" && (
				<ul>
					{returned !== 0 ? (
						items.map((item, index) => {
							return <li key={`${title}_${index}`}>{item.name}</li>;
						})
					) : (
						<p>No item has found</p>
					)}
				</ul>
			)}
		</div>
	);
}

export default ListItem;
