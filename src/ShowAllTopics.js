import React, { Component } from 'react';
import categories from './topics';
import ShowTopic from './ShowTopic';

class ShowAllTopics extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            topics: [],
            allOpen: false,
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

    toggleOpenAll = () => {
        this.setState({
            allOpen: !this.state.allOpen
        })
    }

    render() {
        const { topics, allOpen } = this.state

        return (
            <div className="container text-center py-4">
                {this.state.loading && <p>Loading</p>}

                {!this.state.loading && (
                    <>
                        <button className="btn btn-secondary" onClick={this.toggleOpenAll}>
                            {allOpen && <span>Close all</span>}
                            {!allOpen && <span>Open all</span>}
                        </button>
                        <div className="row mt-4">
                            {topics.map(
                                (topic, index) => (
                                    <div className="col-12 col-lg-6" key={`topic-${index}`}>
                                        <ShowTopic topic={topic} isOpen={allOpen} />
                                    </div>
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default ShowAllTopics;
