/** @module tags/@type */

// Primitive Types
// ==================================================

/**
 * @summary `@type {bigint}`
 * @description Example of a variable of type `bigint`.
 * @example
 * aBigInt = 2n ** 3n // 8n
 * @type {bigint}
 */
let aBigInt = 1n

/**
 * @summary `@type {boolean}`
 * @description Example of a variable of type `boolean`.
 * @example
 * aBoolean = true
 * aBoolean = false
 * @type {boolean}
 */
let aBoolean = true

/**
 * @summary `@type {null}`
 * @description Example of a variable of type `null`.
 * @example
 * aNull = null
 * @type {null}
 */
let aNull = null

/**
 * @summary `@type {number}`
 * @description Example of a variable of type `number`.
 * @example
 * aNumber = 3.1416
 * aNumber = -0
 * @type {number}
 */
let aNumber = 1

/**
 * @summary `@type {string}`
 * @description Example of a variable of type `string`.
 * @example
 * aString = 'Hello!'
 * @type {string}
 */
let aString = ''

/**
 * @summary `@type {symbol}`
 * @description Example of a variable of type `symbol`.
 * @example
 * aSymbol = Symbol.iterator
 * @type {symbol}
 */
let aSymbol = Symbol.iterator

/**
 * @summary `@type {undefined}`
 * @description Example of a variable of type `undefined`.
 * @example
 * anUndefined = undefined 
 * @type {undefined}
 */
let anUndefined = undefined

// Any, Multiple, Nullable, Non-Nullable, Optional, Unknown
// ==================================================

/**
 * @summary `@type {*}`
 * @description Example of a variable that can hold any type.
 * @example
 * anyType = null
 * anyType = undefined
 * anyType = true
 * anyType = 1
 * anyType = 'Hello!'
 * anyType = []
 * anyType = {}
 * anyType = Symbol.iterator
 * @type {*}
 */
let anyType = [1, true, {}, ['a']]

/**
 * @summary `@type {(number|string|boolean)}`
 * @description Example of a variable that can be
 * either a `number`, a `string` or a `boolean`.
 * @example
 * anyOfTheType = 1
 * anyOfTheType = 'Hello!'
 * anyOfTheType = false
 * @type {(number|string|boolean)}
 */
let anyOfTheType = true

/**
 * @summary `@type {?number}`
 * @description Example of a variable that can be
 * either a `number` or `null` (nullable).
 * @note This can be applied to any other type.
 * @example
 * aNullableNumber = 10
 * aNullableNumber = null
 * @type {?number}
 */
let aNullableNumber = null

/**
 * @summary `@type {!string}`
 * @description Example of a variable that MUST be a `string`, but never `null` (non-nullable).
 * @note This can be applied to any other type.
 * @example
 * aNonNullableString = 'Hello!'
 * aNonNullableString = null // this should NOT be allowed
 * @type {!string}
 */
let aNonNullableString = ''

/**
 * @summary `@type {?}`
 * @description Example of an unknown type variable.
 * @example
 * anUnknown = someVarWhichINotKnowTheType
 * @type {?}
 */
let unknown = '?'

// Objects
// ==================================================

/**
 * @summary `@type {Object}`
 * @description Example of an `Object` with any schema.
 * @example
 * anObjectWithAnySchema = { access: true, secret: 'pa$$w0rd' }
 * anObjectWithAnySchema = { id: 1, firstName: 'Jon', lastName: 'Doe' }
 * @type {Object}
 */
let anObjectWithAnySchema = {}

/**
 * @summary `@type {{ name: string, age: number, admin: boolean, location: Vector, skills }}`
 * @description Example of an `Object` with a defined schema.
 * @example
 * anObjectWithDefinedSchema = {
 *    name: 'Jon',
 *    age: 40,
 *    admin: true,
 *    location: { x: 1, y: 0 },
 *    skills: ['javascript']
 * }
 *
 * anObjectWithDefinedSchema = {
 *    name: 'Doe',
 *    age: 30,
 *    admin: false,
 *    location: { x: 2, y: -1 },
 *    skills: { cooking: true }
 * }
 * @type {{ name: string, age: number, admin: boolean, location: Vector, skills }}
 */
let anObjectWithDefinedSchema = { name: 'Jon', age: 40, admin: true, location: { x: 1, y: 0 }, skills: ['javascript'] }

/**
 * @summary `@type {Object<string, number>}`
 * @description Example of an `Object` with `string` keys and `number` values.
 * @note This can be applied to any other type.
 * @example
 * anObjectOfKeyValues = { min: 1, max: 10 }
 * anObjectOfKeyValues = { apples: 11, bananas: 2, chocolate: 3 }
 * @type {Object<string, number>}
 */
let anObjectOfKeyValues = { min: 1, max: 10 }

// Arrays
// ==================================================

/**
 * @summary `@type {Array}`
 * @description Example of an `Array` of any type.
 * @example
 * arrayOfAny = [1, true, 'Hello!']
 * @type {Array}
 */
let arrayOfAny = [1, true, 'Hello!']

/**
 * @summary `@type {Array<*>}`
 * @description Example 2 of an `Array` of any type.
 * @example
 * arrayOfAny2 = [{}, [], false]
 * @type {Array<*>}
 */
let arrayOfAny2 = [{}, [], false]

/**
 * @summary `@type {Array<number>}`
 * @description Example of an `Array` of `number` values.
 * @note This can be applied to any other type:
 * `Array<bigint>`, `Array<boolean>`, `Array<null>`, `Array<number>`,
 * `Array<string>`, `Array<symbol>`, `Array<undefined>`,
 * `Array<Array>`, `Array<Object>`, `Array<Vector>`, etc.
 * @example
 * arrayOfType = [1, 2, 3]
 * @type {Array<number>}
 */
let arrayOfType = [1, 2, 3]

/**
 * @summary `@type {string[]}`
 * @description Example of an `Array` of `string` values.
 * @note This can be applied to some other type:
 * `bigint[]`, `boolean[]`, `number[]`,
 * `string[]`, `symbol[]`,
 * `Object[]`, `Vector[]`, etc.
 * @example
 * arrayOfType2 = ['a', 'b', 'c']
 * @type {string[]}
 */
let arrayOfType2 = ['a', 'b', 'c']

/**
 * @summary `@type {Array<Object>}`
 * @description Example of an `Array` of `Object` values with any schema.
 * @example
 * arrayOfObjectsWithAnySchema = [
 *    { x: 1 },
 *    { name: 'Doe' },
 *    { isTeaPot: true }
 * ]
 * @type {Array<Object>}
 */
let arrayOfObjectsWithAnySchema = [{ x: 1 }, { name: 'Doe' }, { isTeaPot: true }]

/**
 * @summary `@type {Array<{ name: string, age: number, admin: boolean }>}`
 * @description Example of an `Array` of `Object` values with a defined schema.
 * @example
 * arrayOfObjectsWithSchema = [
 *    {
 *      name: 'Jon',
 *      age: 40,
 *      admin: false
 *    },
 *    {
 *      name: 'Doe',
 *      age: 50,
 *      admin: true
 *    }
 * ]
 * @type {Array<{ name: string, age: number, admin: boolean }>}
 */
let arrayOfObjectsWithSchema = [{ name: 'Jon', age: 40, admin: false }, { name: 'Doe', age: 50, admin: true }]

/**
 * @summary `@type {Array<Object<string, boolean>>}`
 * @description Example of an `Array` of `Object` values with `string` keys and `boolean` values.
 * @example
 * arrayOfObjectsOfKeyValues = [
 *    {
 *      isAdmin: true,
 *      hasAccess: false,
 *      isHuman: true
 *    }
 * ]
 * @type {Array<Object<string, boolean>>}
 */
let arrayOfObjectsOfKeyValues = [{ isAdmin: true, hasAccess: false, isHuman: true }]

/**
 * @summary `@type {Vector[]}`
 * @description Example of an `Array` of a defined type `Vector`.
 * @see {@link module:tags/@typedef~Vector}
 * @example
 * arrayOfVectors = [{ x: 1, y: 1 }, { x: 2, y: -1 }]
 * @type {Vector[]}
 */
let arrayOfVectors = [{ x: 1, y: 1 }, { x: 2, y: -1 }]

/**
 * @summary `@type {Array<Array>}`
 * @description Example of an `Array` of `Array`s of any schema.
 * @example
 * arrayOfArraysOfAny = [
 *    [1, true, null],
 *    ['a', false, undefined]
 * ]
 * @type {Array<Array>}
 */
let arrayOfArraysOfAny = [[1, true, null], ['a', false, undefined]]

/**
 * @summary `@type {Array<Array<number>>}`
 * @description Example of an `Array` of `Array`s of `number`s.
 * @example
 * arrayOfArraysOfNumbers = [
 *    [1, 2, 3],
 *    [4, 5, 6]
 * ]
 * @type {Array<Array<number>>}
 */
let arrayOfArraysOfNumbers = [[1, 2, 3], [4, 5, 6]]

/**
 * @summary `@type {Array<Array<{name: string, age: number}>>}`
 * @description Example of an `Array` of `Array`s of `Object` values with a defined schema.
 * @example
 * arrayOfArraysOfObjectsWithSchema = [
 *    [{ name: 'Joe', age: 30 }, { name: 'Doe', age: 31 }],
 *    [{ name: 'Peter', age: 20 }]
 * ]
 * @type {Array<Array<{name: string, age: number}>>}
 */
let arrayOfArraysOfObjectsWithSchema = [[{ name: 'Joe', age: 30 }, { name: 'Doe', age: 31 }], [{ name: 'Peter', age: 20 }]]
