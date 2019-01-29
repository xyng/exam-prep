import React, { Component } from 'react';
import categories from './topics';
import ShowTopic from './ShowTopic';

class ShowAllTopics extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            topics: [],
        }
    }

    componentDidMount() {
        const { category } = this.props.match.params
        const topics = categories[category]
        Promise.all(topics.map(
            topic => topic.initTopic()
        )).then(() => {
            this.setState({
                loading: false,
                topics
            })
        })
    }

    render() {
        const { topics } = this.state

        return (
            <div className="container text-center py-4">
                {this.state.loading && <p>Loading</p>}

                {!this.state.loading && (
                    <div className="row">
                        {topics.map(
                            (topic, index) => (
                                <div className="col-12 col-lg-6" key={`topic-${index}`}>
                                    <ShowTopic topic={topic} />
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default ShowAllTopics;
