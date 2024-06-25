import { useEffect, useState } from "react";
import { createImageURL } from "../libraries/utils";

const MARVEL_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023";

const useHeroes = () => {
	const [heroes, setHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(MARVEL_URL);
				if (!response.ok) {
					throw new Error(`에러가 발생해 데이터를 불러오는데 실패했습니다. :${response.status} `);
				}
				const {
					data: { results },
				} = await response.json();

				const fetchedHeroes = results.map(hero => ({
					id: hero.id,
					name: hero.name,
					thumbnail: createImageURL(hero.thumbnail),
				}));
				setHeroes(fetchedHeroes);
			} catch (error) {
				setHasError(error.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, []);

	return { heroes, isLoading, hasError };
};

export default useHeroes;
