import React from "react";
import CustomAppBar from "../Landing/CustomAppBar";
import { makeStyles } from "@material-ui/core";
import Footer from "../Landing/Footer";
import PageTitle from "../PageTitle";
const useStyles = makeStyles((theme) => ({
	root: {
		height: "103vh",
	},
}));
function Design() {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root}>
				<CustomAppBar />
				<PageTitle />
			</div>
			<Footer />
		</div>
	);
}

export default Design;
