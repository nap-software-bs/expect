import applyTestingContext from "./applyTestingContext.mjs"
import toBeOfPrimitiveType_raw from "../../src/expect/toBeOfPrimitiveType.mjs"
const toBeOfPrimitiveType = applyTestingContext(toBeOfPrimitiveType_raw)

test("should given the expected type", () => {
	toBeOfPrimitiveType("string", "")
	toBeOfPrimitiveType("string", new String(""))
	toBeOfPrimitiveType("number", 1)
	toBeOfPrimitiveType("number", new Number(1))
	toBeOfPrimitiveType("boolean", true)
	toBeOfPrimitiveType("boolean", new Boolean(true))
	toBeOfPrimitiveType("object", {})
	toBeOfPrimitiveType("array", [])
	toBeOfPrimitiveType("array", [1, 2, 3])
	toBeOfPrimitiveType("array", [{a: 1}, {a: 2}])
	toBeOfPrimitiveType("array", new Array(1,2,3))
})

test("should throw when value is not of expected type", () => {
	expect(() => {
		toBeOfPrimitiveType("number", true)
	}).toThrowError("ExpectationNotMet: Expected type 'number' but got 'boolean'.")
})
