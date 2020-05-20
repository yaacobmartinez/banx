import React, { useState, useEffect } from "react";
import CustomAppBar from "../Landing/CustomAppBar";
import { makeStyles } from "@material-ui/core";
import Footer from "../Landing/Footer";
import PageTitle from "../PageTitle";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
	root: {
		background: `url(/wp-content/uploads/2020/05/banxBG.png) no-repeat top center fixed`,
		backgroundSize: "cover",
		height: "103vh",
	},
}));
function Page(props) {
	const classes = useStyles();
	const [pageInfo, setPageInfo] = useState();
	const request_page = props.match.params.page;
	useEffect(() => {
		const getPage = async () => {
			const _pages = await Axios.get(
				`/wp-json/wp/v2/pages?slug=${request_page}`
			);
			setPageInfo(_pages.data);
		};
		getPage();
	}, [request_page]);
	return (
		<div>
			<div className={classes.root}>
				<CustomAppBar />
				{pageInfo ? <PageTitle page={pageInfo} /> : null}
			</div>
			<Footer />
		</div>
	);
}

export default Page;
