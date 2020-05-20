import React, { useState, useEffect } from "react";
import {
	makeStyles,
	Container,
	Typography,
	Grid,
	Button,
} from "@material-ui/core";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
	root: {
		height: "52vh",
		padding: theme.spacing(0, 4),
	},
	title: {
		fontFamily: "Georgia, serif",
		fontSize: 24,
		fontStyle: "italic",
		color: "#4f4d6a",
		padding: theme.spacing(4, 0),
	},
	content: {
		fontFamily: "Georgia, serif",
		fontSize: 13,
		fontStyle: "italic",
		color: "#4f4d6a",
		lineHeight: 2,
	},
	button: {
		textTransform: "none",
		fontFamily: "Georgia, serif",
		fontStyle: "italic",
		fontWeight: 600,
		padding: theme.spacing(0, 2),
		backgroundColor: "#4f4d6a",
		color: "#fff",
		marginTop: theme.spacing(4),
		"& :hover": {
			color: "#4f4d6a",
		},
	},
}));
const Brand = ({ brand }) => {
	const classes = useStyles();
	const regex = /(<([^>]+)>)/gi;
	const content = brand.content.rendered.replace(regex, "");
	return (
		<div>
			<Typography className={classes.content}>{content}</Typography>
			<Button size='small' className={classes.button} variant='contained'>
				View More
			</Button>
		</div>
	);
};
function Awesome() {
	const classes = useStyles();
	const [brands, setBrands] = useState([]);
	useEffect(() => {
		const getBrands = async () => {
			const b = await Axios.get("/wp-json/wp/v2/brands/");
			setBrands(b.data);
		};
		getBrands();
	}, []);
	return (
		<div className={classes.root}>
			<Container fixed maxWidth='md'>
				<Typography className={classes.title}>
					What makes us awesome?
				</Typography>
				<Grid container direction='row' justify='center' alignItems='center'>
					{brands &&
						brands.map((brand) => (
							<Grid item xs key={brand.id}>
								<Brand brand={brand} />
							</Grid>
						))}
				</Grid>
			</Container>
		</div>
	);
}

export default Awesome;
