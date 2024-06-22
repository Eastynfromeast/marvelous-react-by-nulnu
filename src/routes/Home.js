import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
	const [heroes, setHeroes] = useState("");
	const MARVEL_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023";
	const getMovies = async () => {
		const json = await (await fetch(MARVEL_URL)).json();
		setHeroes(json.data.results);
	};
	console.log(heroes);
	const createImageURL = data => {
		// if(data.path.indexOf("image_not_available"))
		return data.path + "." + data.extension;
	};
	useEffect(() => {
		getMovies();
	}, [MARVEL_URL]);
	return (
		<div>
			<h1>Marvelous React Home</h1>
			{heroes !== "" && (
				<>
					<ul>
						{heroes.map(hero => {
							return (
								<li key={hero.id}>
									<Link to={`/detail/${hero.id}`}>
										<div>
											<figure>
												<img src={createImageURL(hero.thumbnail)} alt={hero.name} />
											</figure>
										</div>
										<div>
											<h3>{hero.name}</h3>
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
}

export default Home;
