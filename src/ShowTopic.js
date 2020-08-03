import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Topic from './Topic'

export default class ShowTopic extends PureComponent {
    static propTypes = {
        topic: PropTypes.instanceOf(Topic).isRequired,
        isOpen: PropTypes.bool,
    }

    render() {
        const { topic: topicData, isOpen } = this.props

        const topic = topicData.parsed
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <h2>{ topic.data.title }</h2>
                    <details open={isOpen}>
                        <summary className="btn btn-secondary mb-2">Zusammenfassung</summary>
                        <div className="card mb-2 text-left">
                            <div className="card-body markdown-body">
                                { topic.contents }
                            </div>
                        </div>
                    </details>
                </div>
                <div className="card-footer text-muted">
                    { topicData.filename } - Author: { topic.data.author || "Unknown" }
                </div>
            </div>
        )
    }
}
