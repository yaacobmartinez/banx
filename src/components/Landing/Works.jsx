import React, { useState, useEffect } from "react";
import {
	makeStyles,
	Typography,
	Container,
	Grid,
	Divider,
} from "@material-ui/core";
import WorksTitle from "./WorksTitle";
import Axios from "axios";
import HeroButtons from "./HeroButtons";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(0, 4),
		height: "100vh",
		backgroundColor: "#ebebeb",
	},
	img: {
		padding: theme.spacing(2, 0),
		height: 160,
	},
	workTitle: {
		fontFamily: "Georgia, serif",
		color: "#4f4d6a",
		fontSize: 20,
		fontStyle: "italic",
	},
	workCaption: {
		fontFamily: "Georgia, serif",
		color: "#4f4d6a",
		fontSize: 13,
		fontStyle: "italic",
		lineHeight: 2,
	},
	divider: {
		marginTop: 30,
		backgroundColor: "#FFF",
	},
}));

const Work = ({ work }) => {
	const classes = useStyles();
	const image = `/wp-content/uploads/2020/05/${work.slug}.png`;
	const regex = /(<([^>]+)>)/gi;
	const result = work.content.rendered.replace(regex, "");
	return (
		<div>
			<img src={image} alt='featured_img' className={classes.img} />
			<Typography className={classes.workTitle}>
				{work.title.rendered}
			</Typography>
			<Typography className={classes.workCaption}>{result}</Typography>
		</div>
	);
};
function Works() {
	const classes = useStyles();
	const [works, setWorks] = useState([]);
	useEffect(() => {
		const getWorks = async () => {
			const w = await Axios.get("/wp-json/wp/v2/works/");
			setWorks(w.data);
		};
		getWorks();
	}, []);
	return (
		<div className={classes.root}>
			<WorksTitle />
			<Container fixed maxWidth='md'>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					spacing={2}>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						spacing={2}>
						{works &&
							works
								.sort((a, b) => a.id - b.id)
								.map((work) => (
									<Grid item xs key={work.id}>
										<Work work={work} />
									</Grid>
								))}
					</Grid>
					<Grid item xs style={{ width: "100%" }}>
						<Divider className={classes.divider} />
					</Grid>
					<HeroButtons />
				</Grid>
			</Container>
		</div>
	);
}

export default Works;
