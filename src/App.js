import React, { PureComponent } from 'react';

import Category from "./Category";
import Categories from "./Categories";

import { HashRouter as Router, Route } from 'react-router-dom';

import "katex/dist/katex.css";

class App extends PureComponent {
	render() {
		return (
			<Router>
				<div className="container text-center py-4">
					<Route exact path="/" component={Categories} />
					<Route path="/:category" component={Category} />
				</div>
			</Router>
		);
	}
}

export default App;
