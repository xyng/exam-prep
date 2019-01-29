import remark from "remark";
import remark2react from "remark-react";
import frontmatter from "remark-frontmatter";
import extract from "remark-extract-frontmatter";
import { parse as yamlParse } from "yaml";

export default class Topic {
	constructor(filename, path) {
		this.filename = filename
		this.path = path
	}

	async initTopic() {
		const res = await fetch(this.path);
		this.parsed = await remark()
			.use(remark2react)
			.use(frontmatter, ["yaml", "toml"])
			.use(extract, { yaml: yamlParse })
			.process(await res.text())

		this.parsed.data.title = this.parsed.data.title || this.filename
	}

	equals(topic) {
		return this.path === topic.path
	}
}