import React from "react";
import {
	Typography,
	makeStyles,
	Container,
	Grid,
	Divider,
} from "@material-ui/core";

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
	divider: {
		backgroundColor: "#FFF",
	},
	pageName: {
		textAlign: "center",
		fontFamily: "Georgia, serif",
		fontStyle: "bold",
		fontSize: 50,
		fontWeight: 900,
		textTransform: "uppercase",
		color: "#4f4d6a",
	},
}));
function WorksTitle() {
	const classes = useStyles();
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
							<Typography className={classes.greeting}>Check Out</Typography>
						</Grid>
						<Grid item xs>
							<Divider className={classes.divider} />
						</Grid>
					</Grid>
					<Grid item xs>
						<Typography className={classes.pageName}>Our Worx</Typography>
					</Grid>
					<Grid item xs style={{ marginTop: 10, width: "100%" }}>
						<Divider className={classes.divider} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default WorksTitle;
