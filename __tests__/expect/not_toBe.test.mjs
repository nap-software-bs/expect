import applyTestingContext from "./applyTestingContext.mjs"
import notToBe_raw from "../../src/expect/not_toBe.mjs"
const notToBe = applyTestingContext(notToBe_raw)

test("should work as expected", () => {
	notToBe(true, false)
	notToBe(1, 2)

	expect(() => {
		notToBe(true, true)
	}).toThrowError("ExpectationNotMet: Expected 'true' not to be 'true'.")

	expect(() => {
		notToBe(1, 1)
	}).toThrowError("ExpectationNotMet: Expected '1' not to be '1'.")
})
