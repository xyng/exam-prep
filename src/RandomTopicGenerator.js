import topics from "./topics"

export default class RandomTopicGenerator {
	constructor() {
		this.topics = topics

		this.usedTopics = []
	}

	hasUnusedTopics() {
		return !!this.topics.length
	}

	getRandomTopic() {
		if (this.topics.length === 0) {
			throw new Error("no unused topics left")
		}

		const number = Math.floor((Math.random() * this.topics.length))
		const topic = this.topics[number]

		this.topics = this.topics.filter(
			elem => !elem.equals(topic)
		)

		this.usedTopics.push(topic)

		return topic
	}
}