import Topic from "./Topic"

const categories = {}
const files = require.context("../public/md/", true, /\.md$/).keys();
files.forEach(file => {
    const parts = file.replace("./", "").split("/")

    const filename = parts.pop()
    const category = parts.join("-")

    categories[category] = categories[category] || []
    categories[category].push(
        new Topic(filename, file.replace("./", "./md/"))
    )
})

export default categories

