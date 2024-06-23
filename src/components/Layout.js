import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ResetPageScroll from "./ResetPageScroll";
function Layout() {
	let layoutLocation = useLocation();
	return (
		<div>
			<ResetPageScroll />
			<Header />
			<main
				style={{
					backgroundColor: layoutLocation.pathname === "/" ? "#fff" : "#151515",
				}}
			>
				<Outlet />
				<Footer />
			</main>
		</div>
	);
}

export default Layout;
