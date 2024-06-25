import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createImageURL } from "../libraries/utils";

const useHero = () => {
	const { id } = useParams();
	const heroUrl = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
	const [hero, setHero] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(heroUrl);
				if (!response.ok) {
					throw new Error(`에러가 발생해 데이터를 불러오는데 실패했습니다. :${response.status} `);
				}
				const {
					data: { results },
				} = await response.json();

				const hero = results[0];
				const fetchedHero = {
					name: hero.name,
					thumbnail: createImageURL(hero.thumbnail),
					description: hero.description,
					comics: hero.comics,
					events: hero.events,
					series: hero.series,
					stories: hero.stories,
					urls: hero.urls,
				};
				setHero(fetchedHero);
			} catch (error) {
				setHasError(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, [heroUrl]);

	return { id, hero, isLoading, hasError };
};

export default useHero;
