import Topic from "./Topic"

const topics = [
	new Topic(
		"Erste Normalform",
		require('./md/erste-normalform.md'),
	),
	new Topic(
		"Zweite Normalform",
		require('./md/zweite-normalform.md'),
	),
	new Topic(
		"Dritte Normalform",
		require('./md/dritte-normalform.md'),
	),
]

export default topics