import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const heroDetailUrl = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
	const [heroDetail, setHeroDetail] = useState("");

	useEffect(() => {
		const getDetails = async () => {
			const json = await (await fetch(heroDetailUrl)).json();
			setHeroDetail(json.data.results[0]);
		};
		getDetails();
	}, [id, heroDetailUrl]);
	console.log(heroDetail);
	return (
		<div>
			<h1>Marvelous React Detail</h1>
			{heroDetail !== "" && (
				<>
					<h2>{heroDetail.name}</h2>
				</>
			)}
		</div>
	);
}

export default Detail;
