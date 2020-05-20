import React, { useState, useEffect } from "react";
import {
	Container,
	AppBar,
	Toolbar,
	makeStyles,
	Link,
} from "@material-ui/core";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
	appBar: {
		background: "transparent",
		color: "#000",
		paddingTop: theme.spacing(4),
	},
	navlink: {
		margin: theme.spacing(0, 2),
		color: "#4f4d6a",
		textTransform: "uppercase",
		fontFamily: "PT Sans",
		fontWeight: 700,
		fontSize: 13,
		"&:hover": {
			color: "#2c2b3d",
			textDecoration: "none",
		},
	},
	title: {
		fontFamily: "Georgia, serif",
		color: "#4f4d6a",
		fontSize: 30,
		fontWeight: 400,
		"&::first-letter ": {
			fontStyle: "italic",
			marginRight: -3,
			fontSize: 33,
		},
		"&:hover": {
			textDecoration: "none",
		},
	},
}));

function CustomAppBar() {
	const classes = useStyles();
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		const getMenu = async () => {
			const pages = await Axios.get("/wp-json/wp/v2/pages");
			setMenu(pages.data);
		};
		getMenu();
	}, []);
	return (
		<div>
			<AppBar position='static' className={classes.appBar} elevation={0}>
				<Container fixed>
					<Toolbar>
						<Link href='/' variant='h6' className={classes.title}>
							banx
						</Link>
						<div style={{ flex: 1 }} />
						{menu &&
							menu
								.sort((a, b) => a.menu_order - b.menu_order)
								.map((page) => (
									<Link
										href={page.link}
										className={classes.navlink}
										key={page.id}>
										{page.title.rendered}
									</Link>
								))}
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}

export default CustomAppBar;
