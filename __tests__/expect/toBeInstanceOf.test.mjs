import applyTestingContext from "./applyTestingContext.mjs"
import toBeInstanceOf_raw from "../../src/expect/toBeInstanceOf.mjs"
const toBeInstanceOf = applyTestingContext(toBeInstanceOf_raw)

test("should not throw if value is instance of", () => {
	toBeInstanceOf(String, new String())
	toBeInstanceOf(Object, {})
	toBeInstanceOf(Error, new Error())
})

test("should throw if value is not instance of", () => {
	expect(() => {
		toBeInstanceOf(String, 1)
	}).toThrowError("ExpectationNotMet: Expected value to be instance of 'String'.")
})

