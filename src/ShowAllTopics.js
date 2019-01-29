import React, { Component } from 'react';
import topics from './topics';
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
        Promise.all(topics.map(
            topic => topic.getTopic()
        )).then(topics => {
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
                                <div className="col-6" key={`topic-${index}`}>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <ShowTopic topic={topic} />
                                        </div>
                                    </div>
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
