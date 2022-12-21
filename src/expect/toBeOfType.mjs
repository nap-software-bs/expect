import unwrap from "@nap-software-bs/unwrap-primitive-object"

export default function toBeOfType(expected, value) {
	const context = this.context

	value = unwrap(value)

	const actual = typeof value

	if (actual !== expected) {
		return context.throw_ExpectationNotMetError(
			`Expected type '${expected}' but got '${actual}'.`
		)
	}
}
