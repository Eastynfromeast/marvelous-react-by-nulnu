import styles from "../../styles/Detail.module.css";

function GridBtns({ title, urls }) {
	return (
		<div className={styles.urlWrap}>
			<span>{title}</span>
			<ul>
				{urls.map(url => {
					return (
						<li key={url.type}>
							<a href={url.url} target="_blank" rel="noreferrer">
								{url.type}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default GridBtns;
