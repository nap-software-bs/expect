import toBe_fn from "./src/expect/toBe.mjs"
import toEqual_fn from "./src/expect/toEqual.mjs"
import toHaveProperty_fn from "./src/expect/toHaveProperty.mjs"
import toHaveSubString_fn from "./src/expect/toHaveSubString.mjs"
import toThrowError_fn from "./src/expect/toThrowError.mjs"
import toBeOfPrimitiveType_fn from "./src/expect/toBeOfPrimitiveType.mjs"
import toBeInstanceOf_fn from "./src/expect/toBeInstanceOf.mjs"

import notToBe_fn from "./src/expect/not_toBe.mjs"
import notToEqual_fn from "./src/expect/not_toEqual.mjs"
import notToHaveProperty_fn from "./src/expect/not_toHaveProperty.mjs"
import notToHaveSubString_fn from "./src/expect/not_toHaveSubString.mjs"
import notToBeOfPrimitiveType_fn from "./src/expect/not_toBeOfPrimitiveType.mjs"
import notToBeInstanceOf_fn from "./src/expect/not_toBeInstanceOf.mjs"

const export_object = {
	createExpectationsContext() {
		let context = {
			errors: [],
			expectedAssertions: null,
			ignoreExpectationNotMetErrors: false,
			madeAssertions: 0,
			onErrorHandler() {},
			throw_ValidationError(message) {
				context.errors.push(`ValidationError: ${message}`)

				context.onErrorHandler(`ValidationError: ${message}`)
				throw new Error(`ValidationError: ${message}`)
			},
			throw_ExpectationNotMetError(message) {
				if (!context.ignoreExpectationNotMetErrors) {
					context.errors.push(`ExpectationNotMet: ${message}`)
				}

				context.onErrorHandler(`ExpectationNotMet: ${message}`)
				throw new Error(`ExpectationNotMet: ${message}`)
			}
		}

		const expect = function(value) {
			return {
				toBe(expected) {
					toBe_fn.call({context}, expected, value)
					context.madeAssertions++
				},
				toEqual(expected) {
					toEqual_fn.call({context}, expected, value)
					context.madeAssertions++
				},
				toHaveProperty(propName, propValue = undefined) {
					toHaveProperty_fn.call({context}, value, propName, propValue)
					context.madeAssertions++
				},
				toHaveSubString(substring) {
					toHaveSubString_fn.call({context}, value, substring)
					context.madeAssertions++
				},
				toThrowError(expectedErrorMessage) {
					toThrowError_fn.call({context}, value, expectedErrorMessage)
					context.madeAssertions++
				},
				toBeOfPrimitiveType(type) {
					toBeOfPrimitiveType_fn.call({context}, type, value)
					context.madeAssertions++
				},
				toBeInstanceOf(object) {
					toBeInstanceOf_fn.call({context}, object, value)
					context.madeAssertions++
				},
				not: {
					toBe(expected) {
						notToBe_fn.call({context}, expected, value)
						context.madeAssertions++
					},
					toEqual(expected) {
						notToEqual_fn.call({context}, expected, value)
						context.madeAssertions++
					},
					toHaveProperty(propName, propValue = undefined) {
						notToHaveProperty_fn.call({context}, value, propName, propValue)
						context.madeAssertions++
					},
					toHaveSubString(substring) {
						notToHaveSubString_fn.call({context}, value, substring)
						context.madeAssertions++
					},
					toBeOfPrimitiveType(type) {
						notToBeOfPrimitiveType_fn.call({context}, type, value)
						context.madeAssertions++
					},
					toBeInstanceOf(object) {
						notToBeInstanceOf_fn.call({context}, object, value)
						context.madeAssertions++
					}
				}
			}
		}

		expect.assertions = function(numAssertions) {
			if (context.expectedAssertions !== null) {
				return context.throw_ValidationError(
					`You can call expect.assertions() only once per context.`
				)
			}

			context.expectedAssertions = numAssertions
		}

		return {
			get madeAssertions() {
				return context.madeAssertions
			},
			set onerror(fn) {
				context.onErrorHandler = fn
			},
			expect,
			end() {
				if (context.expectedAssertions !== null) {
					const {expectedAssertions, madeAssertions} = context

					if (expectedAssertions !== madeAssertions) {
						throw new Error(
							`Expected ${expectedAssertions} assertion(s) but ${madeAssertions} assertion(s) were made.`
						)
					}
				}

				if (context.errors.length) {
					let message = `The following error(s) ocurred:\n`

					for (const error of context.errors) {
						message += `    • ${error}\n`
					}

					throw new Error(message)
				}
			}
		}
	}
}

export const createExpectationsContext = export_object.createExpectationsContext
