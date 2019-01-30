import Topic from "./Topic"

const categories = {}
const files = require.context("../public/md/", true, /\.md$/);
files.keys().forEach(file => {
    const parts = file.replace("./", "").split("/")

    const filename = parts.pop()
    const category = parts.join("-")

    categories[category] = categories[category] || []
    categories[category].push(
        new Topic(filename, files(file))
    )
})

export default categories

