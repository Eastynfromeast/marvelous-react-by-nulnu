import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createImageURL } from "../libraries/utils";
import styles from "../styles/Common.module.css";

function Detail() {
	const { id } = useParams();
	const detailUrl = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
	const [isLoading, setIsLoading] = useState(true);
	const [detail, setDetail] = useState("");

	useEffect(() => {
		const getDetails = async () => {
			const json = await (await fetch(detailUrl)).json();
			setDetail(json.data.results[0]);
			setIsLoading(false);
		};
		getDetails();
	}, [id, detailUrl]);
	console.log(detail);
	return (
		<div className={styles.detailContainer}>
			{isLoading ? <h2> We are loading...</h2> : null}
			{detail !== "" && (
				<div className={styles.detailWrapper}>
					<div className={styles.detailBg}>
						{detail.thumbnail.path.indexOf("image_not_available") > -1 ? null : <img src={createImageURL(detail.thumbnail)} alt={detail.name} />}
					</div>
					<div className={styles.detailContext}>
						<figure className={styles.detailThumbnail}>
							<img src={createImageURL(detail.thumbnail)} alt={`${detail.name}'s poster`} />
						</figure>
						<div className={styles.bioWrap}>
							<span>Name</span>
							<h3>{detail.name}</h3>
						</div>
						<div className={styles.bioWrap}>
							<span>Description</span>
							<p>{detail.description}</p>
						</div>

						<ul>
							<h3>Comics ({detail.comics.returned}) </h3>
							{detail.comics.items.map((comic, index) => {
								return <li key={`${index}`}>{comic.name}</li>;
							})}
						</ul>
						<ul>
							<h3>Events ({detail.events.returned}) </h3>
							{detail.events.items.map((event, index) => {
								return <li key={`${index}`}>{event.name}</li>;
							})}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;
