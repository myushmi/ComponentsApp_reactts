import Headling from "../../components/Headling/Headling";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export function Menu() {
	return (
		<>
			<div className={styles["head"]}>
				<Headling>Menu</Headling>
				<Search placeholder="Enter a dish or composition" />
			</div>
			<div>
				<ProductCard
					id={1}
					title="Depth exploration"
					description="Top secret"
					rating={4.5}
					price={30}
					image="/public/Rectangle 6.svg"
				/>
			</div>
		</>
	);
}
