import React, { useState, useEffect } from "react";
import {
	Typography,
	Grid,
	makeStyles,
	Container,
	Divider,
} from "@material-ui/core";
import Axios from "axios";
import HeroButtons from "./HeroButtons";
const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(10),
	},
	greeting: {
		textAlign: "center",
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		fontSize: 20,
		textTransform: "uppercase",
		color: "#4f4d6a",
	},
	pageName: {
		textAlign: "center",
		fontFamily: "Georgia, serif",
		fontStyle: "bold",
		fontSize: 115,
		fontWeight: 900,
		textTransform: "uppercase",
		color: "#4f4d6a",
	},
	pageDescription: {
		textAlign: "center",
		fontFamily: "Open Sans, sans-serif",
		fontSize: 20,
		fontWeight: 800,
		textTransform: "uppercase",
		color: "#4f4d6a",
	},
	divider: {
		backgroundColor: "#FFF",
	},
	primaryButton: {
		borderRadius: 20,
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		backgroundColor: "#4f4d6a",
		color: "#fff",
		textAlign: "center",
		textTransform: "lowercase",
		margin: 20,
		width: 150,
		"& :hover": {
			color: "#4f4d6a",
		},
	},
	secondaryButton: {
		borderRadius: 20,
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		backgroundColor: "#b39fac",
		color: "#fff",
		textAlign: "center",
		textTransform: "lowercase",
		margin: 20,
		width: 150,
		"& :hover": {
			color: "#4f4d6a",
		},
	},
}));
function HeroText() {
	const classes = useStyles();
	const [pageInfo, setPageInfo] = useState({});
	useEffect(() => {
		const getSiteDetails = async () => {
			const page = await Axios.get("/wp-json");
			setPageInfo(page.data);
		};
		getSiteDetails();
	}, []);
	return (
		<div className={classes.root}>
			<Container maxWidth='md'>
				<Grid container direction='column' justify='center' alignItems='center'>
					<Grid
						item
						xs
						container
						direction='row'
						justify='center'
						alignItems='center'>
						<Grid item xs>
							<Divider className={classes.divider} />
						</Grid>
						<Grid item xs>
							<Typography className={classes.greeting}>We are</Typography>
						</Grid>
						<Grid item xs>
							<Divider className={classes.divider} />
						</Grid>
					</Grid>
					<Grid item xs>
						<Typography className={classes.pageName}>
							{pageInfo.name}
						</Typography>
					</Grid>
					<Grid item xs>
						<Typography className={classes.pageDescription}>
							{pageInfo.description}
						</Typography>
					</Grid>
					<Grid item xs style={{ marginTop: 40, width: "100%" }}>
						<Divider className={classes.divider} />
					</Grid>
					<HeroButtons />
				</Grid>
			</Container>
		</div>
	);
}

export default HeroText;
