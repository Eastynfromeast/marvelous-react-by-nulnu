import useHero from "../hooks/useHero";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ListItem from "../components/details/ListItem";
import styles from "../styles/Detail.module.css";
import GridBtns from "../components/details/GridBtns";

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
						<ListItem title={"Name"} tag={"h3"} name={hero.name} />
						<ListItem title={"Description"} tag={"p"} description={hero.description} />
						<ListItem title={"Comics"} tag={"li"} items={hero.comics.items} returned={hero.comics.returned} />
						<ListItem title={"Events"} tag={"li"} items={hero.events.items} returned={hero.events.returned} />
						<ListItem title={"Series"} tag={"li"} items={hero.series.items} returned={hero.series.returned} />
						<ListItem title={"Stories"} tag={"li"} items={hero.stories.items} returned={hero.stories.returned} />
						<GridBtns title={"For more infos..."} urls={hero.urls} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;
