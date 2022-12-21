import applyTestingContext from "./applyTestingContext.mjs"
import notToBeInstanceOf_raw from "../../src/expect/not_toBeInstanceOf.mjs"
const notToBeInstanceOf = applyTestingContext(notToBeInstanceOf_raw)

test("should work as expected", () => {
	notToBeInstanceOf(String, new Array)
	notToBeInstanceOf(Number, new Boolean)

	expect(() => {
		notToBeInstanceOf(String, new String)
	}).toThrowError("ExpectationNotMet: Expected value not to be instance of 'String'.")

	expect(() => {
		notToBeInstanceOf(Number, new Number)
	}).toThrowError("ExpectationNotMet: Expected value not to be instance of 'Number'.")
})
