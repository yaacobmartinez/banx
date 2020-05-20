import React from "react";
import { makeStyles } from "@material-ui/core";
import CustomAppBar from "./CustomAppBar";
import HeroText from "./HeroText";
import Works from "./Works";
import Awesome from "./Awesome";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
	root: {
		background: `url(/wp-content/uploads/2020/05/banxBG.png) no-repeat top center fixed`,
		backgroundSize: "cover",
		height: "100vh",
	},
}));
function Home() {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root}>
				<CustomAppBar />
				<HeroText />
			</div>
			<Works />
			<Awesome />
			<Footer />
		</div>
	);
}

export default Home;
