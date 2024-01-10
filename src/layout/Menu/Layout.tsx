import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

export function Layout() {
	return (
		<div className={styles["layout"]}>
			<div className={styles["sidebar"]}>
				<div className={styles["user"]}>
					<img src="/public/avatar.svg" alt="User's photo" />
					<div className={styles["name"]}>Isunae Reaku</div>
					<div className={styles["email"]}>isunae@reaku.com</div>
				</div>
				<div className={styles["menu"]}>
					<Link to="/" className={styles["link"]}>
						<img
							src="/public/menu-icons.svg"
							alt="Menu icons"
							className={styles["img"]}
						/>
						Menu
					</Link>
					<Link to="/cart" className={styles["link"]}>
						Shopping cart
					</Link>
				</div>
				<Button className={styles["goout"]}>Go out</Button>
			</div>
			<div className={styles["content"]}>
				<Outlet />
			</div>
		</div>
	);
}
