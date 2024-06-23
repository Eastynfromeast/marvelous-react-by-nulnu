import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createImageURL } from "../libraries/utils";
import Loader from "../components/Loader";
import DetailList from "../components/DetailList";
import ErrorMessage from "../components/ErrorMessage";
import styles from "../styles/Common.module.css";

function Detail() {
	const { id } = useParams();
	const detailUrl = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
	const [isLoading, setIsLoading] = useState(true);
	const [detail, setDetail] = useState("");
	const [hasError, setHasError] = useState(null);

	useEffect(() => {
		const getDetails = async () => {
			try {
				const response = await fetch(detailUrl);
				if (!response.ok) {
					throw new Error(`Error status :${response.stauts} `);
				}

				const json = await response.json();
				if (json.code === 404) {
					throw new Error("404 : Not Found");
				}
				setDetail(json.data.results[0]);
			} catch (error) {
				console.error("Error happened on fetching details:", error);
				setHasError(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		getDetails();
	}, [id, detailUrl]);

	return (
		<div className={styles.detailContainer}>
			{isLoading ? <Loader context={"Loading..."} /> : null}
			{hasError !== null ? <ErrorMessage error={hasError} /> : null}
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
							<p>{detail.description !== "" ? detail.description : "No description written"}</p>
						</div>
						<DetailList title={"Comics"} items={detail.comics.items} returned={detail.comics.returned} />
						<DetailList title={"Events"} items={detail.events.items} returned={detail.events.returned} />
						<DetailList title={"Series"} items={detail.series.items} returned={detail.series.returned} />
						<DetailList title={"Stories"} items={detail.stories.items} returned={detail.stories.returned} />
						<div className={styles.urlWrap}>
							<span>For more infos...</span>
							<ul>
								{detail.urls.map(url => {
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
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;
