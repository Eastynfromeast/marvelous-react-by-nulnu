import Loader from "../components/Loader";
import DetailList from "../components/DetailList";
import ErrorMessage from "../components/ErrorMessage";
import styles from "../styles/Common.module.css";
import useHero from "../hooks/useHero";

function Detail() {
	const { hero, isLoading, hasError } = useHero();

	return (
		<div className={styles.detailContainer}>
			{isLoading && <Loader context={"Loading..."} />}
			{hasError !== null && <ErrorMessage error={hasError} />}
			{hero !== "" && (
				<div className={styles.detailWrapper}>
					<div className={styles.detailBg}>{hero.thumbnail.indexOf("image_not_available") > -1 ? null : <img src={hero.thumbnail} alt={hero.name} />}</div>
					<div className={styles.detailContext}>
						<figure className={styles.detailThumbnail}>
							<img src={hero.thumbnail} alt={`${hero.name}'s poster`} />
						</figure>
						<div className={styles.bioWrap}>
							<span>Name</span>
							<h3>{hero.name}</h3>
						</div>
						<div className={styles.bioWrap}>
							<span>Description</span>
							<p>{hero.description !== "" ? hero.description : "No description written"}</p>
						</div>
						<DetailList title={"Comics"} items={hero.comics.items} returned={hero.comics.returned} />
						<DetailList title={"Events"} items={hero.events.items} returned={hero.events.returned} />
						<DetailList title={"Series"} items={hero.series.items} returned={hero.series.returned} />
						<DetailList title={"Stories"} items={hero.stories.items} returned={hero.stories.returned} />
						<div className={styles.urlWrap}>
							<span>For more infos...</span>
							<ul>
								{hero.urls.map(url => {
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
