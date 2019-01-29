export default class Topic {
	constructor(title, mdFile) {
		this.title = title
		this.mdFile = mdFile
	}

	getTopic() {
		return fetch(this.mdFile)
			.then(res => res.text())
			.then(md => ({
				title: this.title,
				description: md,
			}))
	}

	equals(topic) {
		return this.title === topic.title
	}
}