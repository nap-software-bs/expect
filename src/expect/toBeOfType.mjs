import unwrap from "@nap-software-bs/unwrap-primitive-object"

const determineTypeOfVariable = function(variable) {
	// return "array" for all Arrays
	if (Array.isArray(variable)) {
		return "array"
	}

	return typeof unwrap(variable)
}

export default function toBeOfType(expected, value) {
	const context = this.context

	const actual = determineTypeOfVariable(value)

	if (actual !== expected) {
		return context.throw_ExpectationNotMetError(
			`Expected type '${expected}' but got '${actual}'.`
		)
	}
}
