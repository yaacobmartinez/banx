import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Landing/Home";
import Page from "./components/Page/Page";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/:page' component={Page} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
