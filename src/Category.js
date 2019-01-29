import React, { PureComponent } from "react";
import ShowAllTopics from "./ShowAllTopics";
import ShowRandomTopic from "./ShowRandomTopic";

import { Route, NavLink } from "react-router-dom";

export default class Category extends PureComponent {
    render() {
        const { category } = this.props.match.params
        return (
            <div className="category">
                <div className="btn-group btn-group-lg">
                    <NavLink
                        to={`/${category}/`}
                        exact={true}
                        className="btn btn-secondary"
                        activeClassName="active"
                    >
                        All Topics
                    </NavLink>
                    <NavLink
                        to={`/${category}/random`}
                        className="btn btn-secondary"
                        activeClassName="active"
                    >
                        Random Topic
                    </NavLink>
                </div>

                <p className="mt-2">
                    Category: {category}&nbsp;
                    <NavLink
                        to="/"
                        exact={true}
                        //className="btn btn-sm btn-secondary mb-4"
                        activeClassName="active"
                    >
                        Change
                    </NavLink>
                </p>

                <Route exact path="/:category" component={ShowAllTopics} />
                <Route path="/:category/random" component={ShowRandomTopic} />
            </div>
        )
    }
}