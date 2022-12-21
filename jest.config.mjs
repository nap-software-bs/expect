import path from "path"
import url from "url"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export default {
	testMatch: [
		path.join(__dirname, "./__tests__/*.test.mjs"),
		path.join(__dirname, "./__tests__/expect/*.test.mjs"),
	]
}
