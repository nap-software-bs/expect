import misc from "../misc.mjs"

export default function toHaveProperty(object, prop, value = undefined) {
	const context = this.context

	if (typeof value !== "undefined") {
		return context.throw_ValidationError(
			`Prop value is not supported by toHaveProperty().`
		)
	}

	const props = misc.object.getProperties(object)

	if (props.indexOf(prop) === -1) {
		return context.throw_ExpectationNotMetError(
			`Expected object to have property '${prop}'.`
		)
	}
}
