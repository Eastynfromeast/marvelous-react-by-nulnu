import { useState } from "react";
import { useEffect } from "react";
import HeroCard from "../components/HeroCard";
import styles from "../styles/Common.module.css";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [heroes, setHeroes] = useState("");
	const MARVEL_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023";

	const getMovies = async () => {
		const json = await (await fetch(MARVEL_URL)).json();
		setHeroes(json.data.results);
		setIsLoading(false);
	};
	console.log(heroes);

	useEffect(() => {
		getMovies();
	}, [MARVEL_URL]);
	return (
		<div className={styles.container}>
			{isLoading ? <h2>Calling heroes...</h2> : null}
			{heroes !== "" && (
				<>
					<h2 className={styles.heroHeader}>Marvel Characters List</h2>
					<p className={styles.heroDataResult}>{`${heroes.length} results`}</p>
					<ul className={styles.herosList}>
						{heroes.map(hero => {
							return <HeroCard key={hero.id} id={hero.id} thumbnail={hero.thumbnail} name={hero.name} />;
						})}
					</ul>
				</>
			)}
		</div>
	);
}

export default Home;
