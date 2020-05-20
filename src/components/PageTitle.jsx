import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		paddingTop: theme.spacing(10),
	},
	title: {
		textAlign: "center",
		fontFamily: "Georgia, serif",
		fontStyle: "bold",
		fontSize: 115,
		fontWeight: 900,
		textTransform: "uppercase",
		color: "#4f4d6a",
	},
}));

function PageTitle(props) {
	const classes = useStyles();
	const { page } = props;
	const currentPage = page[0];
	return (
		<div className={classes.root}>
			<Typography className={classes.title}>
				{currentPage.title.rendered}
			</Typography>
		</div>
	);
}

export default PageTitle;
