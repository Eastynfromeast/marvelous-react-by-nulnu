import { Link } from "react-router-dom";
import styles from "../styles/Common.module.css";
import { createImageURL } from "../libraries/utils";

function HeroCard({ id, name, thumbnail, index }) {
	const noImage = thumbnail.path.indexOf("image_not_available") > -1;
	const noAnimation = index !== undefined;
	return (
		<li
			className={styles.heroCard}
			style={{
				animationDelay: noAnimation ? `${index * 0.15}s` : "none",
			}}
		>
			<Link to={`/detail/${id}`}>
				<div className={styles.heroCardImg}>
					<figure>
						<img
							src={createImageURL(thumbnail)}
							alt={name}
							style={{
								filter: noImage ? "grayscale(1)" : "none",
								objectFit: noImage ? "fill" : "cover",
							}}
						/>
					</figure>
				</div>
				<div className={styles.heroCardBody}>
					<h3>{name}</h3>
					<p>{`CODE : ${id}`}</p>
				</div>
			</Link>
		</li>
	);
}

export default HeroCard;
