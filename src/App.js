import React, { PureComponent } from 'react';
import ShowAllTopics from './ShowAllTopics';
import ShowRandomTopic from './ShowRandomTopic';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import 'katex/dist/katex.min.css';

class App extends PureComponent {
	render() {
		return (
			<Router>
				<div className="container text-center py-4">
					<div className="btn-group btn-group-lg">
						<NavLink
							to="/"
							exact={true}
							className="btn btn-secondary"
							activeClassName="active"
						>
							All Topics
						</NavLink>
						<NavLink
							to="/random"
							className="btn btn-secondary"
							activeClassName="active"
						>
							Random Topic
						</NavLink>
					</div>

					<Route exact path="/" component={ShowAllTopics} />
					<Route path="/random" component={ShowRandomTopic} />
				</div>
			</Router>
		);
	}
}

export default App;
