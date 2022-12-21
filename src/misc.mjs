export default {
	isPrimitive(value) {
		if (       value === null)      return true
		if (typeof value === "boolean") return true
		if (typeof value === "number")  return true
		if (typeof value === "bigint")  return true
		if (typeof value === "string")  return true
		if (typeof value === "symbol")  return true

		return false
	},

	object: {
		comparePrototype(l, r) {
			return Object.getPrototypeOf(l) === Object.getPrototypeOf(r)
		},

		getProperties(object) {
			return Object.getOwnPropertyNames(object)
		},

		diffProperties(target, value) {
			let ret = []
			const targetKeys = Object.getOwnPropertyNames(target)
			const valueKeys = Object.getOwnPropertyNames(value)

			// Missing keys
			for (const key of targetKeys) {
				if (valueKeys.indexOf(key) === -1) {
					ret.push(`-${key}`)
				}
			}

			// Additional keys
			for (const key of valueKeys) {
				if (targetKeys.indexOf(key) === -1) {
					ret.push(`+${key}`)
				}
			}

			return ret
		},

		propertyIsEnumerable(object, property) {
			const props = Object.getOwnPropertyNames(object)
			let propIndex = props.indexOf(property)

			if (propIndex === -1) {
				throw new Error(
					`No such property '${property}'.`
				)
			}

			return Object.keys(object).indexOf(property) >= 0
		}
	}
}
