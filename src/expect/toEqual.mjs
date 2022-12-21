import misc from "../misc.mjs"
import unwrap from "@nap-software-bs/unwrap-primitive-object"
import toStr from "../safeToString.mjs"

function compare(expected, value) {
	const context = this.context

	if (misc.isPrimitive(expected)) {
		if (expected !== unwrap(value)) {
			return context.throw_ExpectationNotMetError(
				`Expected '${toStr(expected)}' but got '${toStr(value)}'.`
			)
		}

		return
	}

	if (!misc.object.comparePrototype(value, expected)) {
		return context.throw_ExpectationNotMetError(
			`Values do not have same prototype.`
		)
	}

	const diff = misc.object.diffProperties(value, expected)

	if (diff.length) {
		return context.throw_ExpectationNotMetError(
			`Values have different properties:\n` +
			diff.join("\n")
		)
	}

	for (const key in expected) {
		compare.call(this, expected[key], value[key])
	}
}

export default function toEqual(expected, value) {
	compare.call(this, expected, value)
}
