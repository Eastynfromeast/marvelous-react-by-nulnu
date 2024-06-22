import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const heroDataUrl = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
	const [heroData, setHeroData] = useState("");

	useEffect(() => {
		const getDetails = async () => {
			const json = await (await fetch(heroDataUrl)).json();
			setHeroData(json.data.results[0]);
		};
		getDetails();
	}, [id, heroDataUrl]);
	console.log(heroData);
	return (
		<div>
			<h1>Marvelous React Detail</h1>
			{heroData !== "" && (
				<>
					<h2>{heroData.name}</h2>
				</>
			)}
		</div>
	);
}

export default Detail;
