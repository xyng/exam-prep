import React, { Component } from 'react';
import RandomTopicGenerator from './RandomTopicGenerator';
import ShowTopic from './ShowTopic';

class ShowRandomTopic extends Component {
    constructor(props) {
        super(props)

        this.randomTopic = new RandomTopicGenerator()

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.selectTopic()
    }

    selectTopic = () => {
        const topic = this.randomTopic.getRandomTopic()
        this.setState({
            loading: true,
            topic: {},
            hasTopics: this.randomTopic.hasUnusedTopics()
        })

        topic.getTopic().then(topic => {
            this.setState({
                loading: false,
                topic
            })
        })
    }

    render() {
        const { topic } = this.state

        return (
            <div className="container text-center py-4">
                {this.state.loading && <p>Loading</p>}
                {!this.state.loading && (
                    <ShowTopic topic={topic} />
                )}
                {!this.state.hasTopics && (
                    <p>All Topics done!</p>
                )}
                {this.state.hasTopics && (
                    <button className="btn btn-secondary" disabled={!this.state.hasTopics} onClick={this.selectTopic}>Get Next Topic</button>
                )}
            </div>
        );
    }
}

export default ShowRandomTopic;
