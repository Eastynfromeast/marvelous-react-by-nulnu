import HeroCard from "../components/HeroCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import styles from "../styles/Common.module.css";
import useHeroes from "../hooks/useHeroes";

function Home() {
	const { heroes, isLoading, hasError } = useHeroes();

	return (
		<div className={styles.container}>
			{isLoading && <Loader context={"Calling our heroes..."} />}
			{hasError !== null && <ErrorMessage error={hasError} />}
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
