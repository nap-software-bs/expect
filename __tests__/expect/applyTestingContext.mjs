export default function(fn) {
	return fn.bind({
		context: {
			throw_ExpectationNotMetError(message) {
				throw new Error(`ExpectationNotMet: ${message}`)
			},
			throw_ValidationError(message) {
				throw new Error(`ValidationError: ${message}`)
			}
		}
	})
}
