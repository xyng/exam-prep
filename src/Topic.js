import remark from "remark";
import remark2react from "remark-react";
import frontmatter from "remark-frontmatter";
import extract from "remark-extract-frontmatter";
import math from "remark-math";
import katex from "remark-html-katex";
import { parse as yamlParse } from "yaml";

export default class Topic {
	constructor(filename, path) {
		this.filename = filename
		this.path = path
	}

	async initTopic() {
		const res = await fetch(this.path);
		this.parsed = await remark()
			.use(math)
			.use(katex)
			// TODO: try to enable snitization, but keep katex working
			.use(remark2react, { sanitize: false })
			.use(frontmatter, ["yaml", "toml"])
			.use(extract, { yaml: yamlParse })
			.process(await res.text())

		this.parsed.data.title = this.parsed.data.title || this.filename
	}

	equals(topic) {
		return this.path === topic.path
	}
}