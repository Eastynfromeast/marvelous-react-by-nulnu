import { useState } from "react";
import { useEffect } from "react";
import HeroCard from "../components/HeroCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import styles from "../styles/Common.module.css";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [heroes, setHeroes] = useState("");
	const [hasError, setHasError] = useState(null);
	const MARVEL_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023";

	const getMovies = async () => {
		// const json = await (await fetch(MARVEL_URL)).json();
		try {
			const response = await fetch(MARVEL_URL);
			if (!response.ok) {
				throw new Error(`Error status :${response.stauts} `);
			}

			const json = await response.json();
			if (json.code === 404) {
				throw new Error("404 : Not Found");
			}
			setHeroes(json.data.results);
		} catch (error) {
			console.error("Error happened on fetching heroes:", error);
			setHasError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getMovies();
	}, [MARVEL_URL]);
	return (
		<div className={styles.container}>
			{isLoading ? <Loader context={"Calling our heroes..."} /> : null}
			{hasError !== null ? <ErrorMessage error={hasError} /> : null}
			{heroes !== "" && (
				<>
					<h2 className={styles.heroHeader}>Marvel Characters List</h2>
					<p className={styles.heroDataResult}>{`${heroes.length} results`}</p>
					<ul className={styles.herosList}>
						{heroes.map((hero, index) => {
							return <HeroCard index={index} key={hero.id} id={hero.id} thumbnail={hero.thumbnail} name={hero.name} />;
						})}
					</ul>
				</>
			)}
		</div>
	);
}

export default Home;
