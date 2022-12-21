import applyTestingContext from "./applyTestingContext.mjs"
import notToBeOfType_raw from "../../src/expect/not_toBeOfType.mjs"
const notToBeOfType = applyTestingContext(notToBeOfType_raw)

test("should work as expected", () => {
	notToBeOfType("string", 1)
	notToBeOfType("number", {})

	expect(() => {
		notToBeOfType("string", "")
	}).toThrowError("ExpectationNotMet: Expected value not to be of type 'string'.")

	expect(() => {
		notToBeOfType("number", 1)
	}).toThrowError("ExpectationNotMet: Expected value not to be of type 'number'.")
})
