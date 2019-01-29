import React, { PureComponent } from "react"
import { NavLink } from "react-router-dom";

import categories from "./topics"

export default class Categories extends PureComponent {
    render() {
        const links = Object.keys(categories).map((category, index) =>
            <NavLink
                to={`/${category}`}
                exact={true}
                className="btn btn-lg btn-block btn-secondary"
                key={`category-${index}`}
            >{ category }</NavLink>
        )

        return (
            <div>
                <h1 className="mb-4">Choose Category</h1>
                { links }
            </div>
        )
    }
}