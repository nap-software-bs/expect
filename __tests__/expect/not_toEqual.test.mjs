import applyTestingContext from "./applyTestingContext.mjs"
import notToEqual_raw from "../../src/expect/not_toEqual.mjs"
const notToEqual = applyTestingContext(notToEqual_raw)

test("should work as expected", () => {
	notToEqual([1, 2], [0, 1])
	notToEqual("a", "b")
	notToEqual({a:1}, {})

	expect(() => {
		notToEqual({}, {})
	}).toThrowError("ExpectationNotMet: Expected values not to be equal.")

	expect(() => {
		notToEqual([1, 2], [1, 2])
	}).toThrowError("ExpectationNotMet: Expected values not to be equal.")

	notToEqual("test", new String("abc"))
})
