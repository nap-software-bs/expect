import toBeOfPrimitiveType from "./toBeOfPrimitiveType.mjs"
import invert from "./invert.mjs"

export default function not_toBeOfPrimitiveType(...args) {
	invert.call(this, "toBeOfPrimitiveType", toBeOfPrimitiveType, ...args)
}
