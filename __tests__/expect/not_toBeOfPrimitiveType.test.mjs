import applyTestingContext from "./applyTestingContext.mjs"
import notToBeOfPrimitiveType_raw from "../../src/expect/not_toBeOfPrimitiveType.mjs"
const notToBeOfPrimitiveType = applyTestingContext(notToBeOfPrimitiveType_raw)

test("should work as expected", () => {
	notToBeOfPrimitiveType("string", 1)
	notToBeOfPrimitiveType("number", {})

	expect(() => {
		notToBeOfPrimitiveType("string", "")
	}).toThrowError("ExpectationNotMet: Expected value not to be of type 'string'.")

	expect(() => {
		notToBeOfPrimitiveType("number", 1)
	}).toThrowError("ExpectationNotMet: Expected value not to be of type 'number'.")
})
