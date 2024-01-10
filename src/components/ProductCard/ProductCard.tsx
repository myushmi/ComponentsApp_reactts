import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";

function ProductCard({ ...props }: ProductCardProps) {
	return (
		<Link to={`/product/${props.id}`} className={styles["link1"]}>
			<div className={styles["card"]}>
				<div className={styles["head"]}>
					<div className={styles["price"]}>
						<div className={styles["price-number"]}>
							{props.price} $
						</div>
					</div>
					<button className={styles["add-to-cart"]}>
						<img src="/public/menu-icons.svg" alt="add to cart" />
					</button>
					<div className={styles["rating"]}>
						<div className={styles["rating-number"]}>
							{props.rating}
						</div>
					</div>
				</div>
				<div className={styles["footer"]}>
					<div className={styles["title"]}>{props.title}</div>
					<div className={styles["description"]}>
						{props.description}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
