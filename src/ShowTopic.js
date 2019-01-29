import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export default class ShowTopic extends PureComponent {
    static propTypes = {
        topic: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
        }),
    }

    render() {
        const { topic } = this.props
        return (
            <div>
                <h2>{topic.title}</h2>
                <details>
                    <summary className="btn btn-secondary mb-2">Zusammenfassung</summary>
                    <div className="card mb-2 text-left">
                        <ReactMarkdown className="card-body markdown-body" source={topic.description} />
                    </div>
                </details>
            </div>
        )
    }
}