/** @module tags/@type */

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
 * @description Example of a variable that can be either a `number`, a `string` or a `boolean`.
 * @example
 * anyOfTheType = 1
 * anyOfTheType = 'Hello!'
 * anyOfTheType = false
 * @type {(number|string|boolean)}
 */
let anyOfTheType = true

/**
 * @summary `@type {null}`
 * @description Example of a variable of type `null`.
 * @example
 * aNull = null
 * @type {null}
 */
let aNull = null

/**
 * @summary `@type {undefined}`
 * @description Example of a variable of type `undefined`.
 * @example
 * anUndefined = undefined 
 * @type {undefined}
 */
let anUndefined = undefined

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
 * @summary `@type {number}`
 * @description Example of a variable of type `number`.
 * @example
 * aNumber = 3.1416
 * aNumber = -0
 * @type {number}
 */
let aNumber = 1

/**
 * @summary `@type {bigint}`
 * @description Example of a variable of type `bigint`.
 * @example
 * aBigInt = 2n ** 3n // 8n
 * @type {bigint}
 */
let aBigInt = 1n

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
 * @summary `@type {?number}`
 * @description Example of a variable that can be either a `number` or `null` (nullable).
 * @example
 * aNullableNumber = 10
 * aNullableNumber = null
 * @type {?number}
 */
let aNullableNumber = null

/**
 * @summary `@type {!string}`
 * @description Example of a variable that MUST be a `string`, but never `null` (non-nullable).
 * @example
 * aNonNullableString = 'Hello!'
 * aNonNullableString = null // this should NOT be allowed
 * @type {!string}
 */
let aNonNullableString = ''

/**
 * @summary `@type {Object}`
 * @description Example of an object with any schema.
 * @example
 * anObjectWithAnySchema = { access: true, secret: 'pa$$w0rd' }
 * anObjectWithAnySchema = { id: 1, firstName: 'Jon', lastName: 'Doe' }
 * @type {Object}
 */
let anObjectWithAnySchema = {}

/**
 * @summary `@type {{ name: string, age: number, admin: boolean, location: Vector, skills }}`
 * @description Example of an object with a defined schema.
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
 * @description Example of an object with keys of type `string` and values of type `number`.
 * @example
 * anObjectOfKeysWithSameValueType = { A: 10, B: 20, C: 30 }
 * anObjectOfKeysWithSameValueType = { apples: 11, bananas: 2, chocolate: 3 }
 * @type {Object<string, number>}
 */
let anObjectOfKeysWithSameValueType = { MAX: 100, MIN: 1 }

/**
 * @summary `@type {Array}`
 * @description Example of an array of any type.
 * @example
 * arrayOfAny = [1, true, 'Hello!']
 * @type {Array}
 */
let arrayOfAny = [1, true, 'Hello!']

/**
 * @summary `@type {Array<*>}`
 * @description Example 2 of an array of any type.
 * @example
 * arrayOfAny2 = [{}, [], false]
 * @type {Array<*>}
 */
let arrayOfAny2 = [{}, [], false]

/**
 * @summary `@type {Array<null>}`
 * @description Example of an array of `null`.
 * @example
 * arrayOfNull = [null, null, null]
 * @type {Array<null>}
 */
let arrayOfNull = [null, null, null]

/**
 * @summary `@type {Array<undefined>}`
 * @description Example of an array of `undefined`.
 * @example
 * arrayOfUndefined = [undefined, undefined, undefined]
 * @type {Array<undefined>}
 */
let arrayOfUndefined = [undefined, undefined, undefined]

/**
 * @summary `@type {boolean[]}`
 * @description Example of an array of `boolean`s.
 * @example
 * arrayOfBooleans = [true, false, true]
 * @type {boolean[]}
 */
let arrayOfBooleans = [true, false, true]

/**
 * @summary `@type {Array<boolean>}`
 * @description Example 2 of an array of `boolean`s.
 * @example
 * arrayOfBooleans2 = [true, false, true]
 * @type {Array<boolean>}
 */
let arrayOfBooleans2 = [true, false, true]

/**
 * @summary `@type {number[]}`
 * @description Example of an array of `number`s.
 * @example
 * arrayOfNumbers = [1, 2, 3]
 * @type {number[]}
 */
let arrayOfNumbers = [1, 2, 3]

/**
 * @summary `@type {Array<number>}`
 * @description Example 2 of an array of `number`s.
 * @example
 * arrayOfNumbers2 = [1, 2, 3]
 * @type {Array<number>}
 */
let arrayOfNumbers2 = [1, 2, 3]

/**
 * @summary `@type {bigint[]}`
 * @description Example of an array of big numbers `bigint`.
 * @example
 * arrayOfBigNumbers = [1n, 2n, 3n]
 * @type {bigint[]}
 */
let arrayOfBigNumbers = [1n, 2n, 3n]

/**
 * @summary `@type {Array<BigInt>}`
 * @description Example 2 of an array of big numbers `bigint`.
 * @example
 * arrayOfBigNumbers2 = [1n, 2n, 3n]
 * @type {Array<BigInt>}
 */
let arrayOfBigNumbers2 = [1n, 2n, 3n]

/**
 * @summary `@type {string[]}`
 * @description Example of an array of `string`s.
 * @example
 * arrayOfStrings = ['a', 'b', 'c']
 * @type {string[]}
 */
let arrayOfStrings = ['a', 'b', 'c']

/**
 * @summary `@type {Array<string>}`
 * @description Example 2 of an array of `string`s.
 * @example
 * arrayOfStrings2 = ['a', 'b', 'c']
 * @type {Array<string>}
 */
let arrayOfStrings2 = ['a', 'b', 'c']

/**
 * @summary `@type {symbol[]}`
 * @description Example of an array of `symbol`s.
 * @example
 * arrayOfSymbols = [Symbol.iterator]
 * @type {symbol[]}
 */
let arrayOfSymbols = [Symbol.iterator]

/**
 * @summary `@type {Array<symbol>}`
 * @description Example 2 of an array of `symbol`s.
 * @example
 * arrayOfSymbols2 = [Symbol.iterator]
 * @type {Array<symbol>}
 */
let arrayOfSymbols2 = [Symbol.iterator]

/**
 * @summary `@type {Object[]}`
 * @description Example of an array of objects with any schema.
 * @example
 * arrayOfObjectsWithAnySchema = [
 *    { x: 1 },
 *    { name: 'Doe' },
 *    { isTeaPot: true }
 * ]
 * @type {Object[]}
 */
let arrayOfObjectsWithAnySchema = [{ x: 1 }, { name: 'Doe' }, { isTeaPot: true }]

/**
 * @summary `@type {Array<Object>}`
 * @description Example 2 of an array of objects with any schema.
 * @example
 * arrayOfObjectsWithAnySchema2 = [
 *    { x: 1 },
 *    { name: 'Doe' },
 *    { isTeaPot: true }
 * ]
 * @type {Array<Object>}
 */
let arrayOfObjectsWithAnySchema2 = [{ x: 1 }, { name: 'Doe' }, { isTeaPot: true }]

/**
 * @summary `@type {Array<{ name: string, age: number, admin: boolean }>}`
 * @description Example of an array of objects with a defined schema.
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
 * @description Example of an array of objects with `string` keys and `boolean` values.
 * @example
 * arrayOfObjectsWithStringKeysAndBooleanValues = [
 *    {
 *      isAdmin: true,
 *      hasAccess: false,
 *      isHuman: true
 *    }
 * ]
 * @type {Array<Object<string, boolean>>}
 */
let arrayOfObjectsWithStringKeysAndBooleanValues = [{ isAdmin: true, hasAccess: false, isHuman: true }]

/**
 * @summary `@type {Vector[]}`
 * @description Example of an array of a defined type `Vector`.
 * @example
 * arrayOfVectors = [{ x: 1, y: 1 }, { x: 2, y: -1 }]
 * @type {Vector[]}
 */
let arrayOfVectors = [{ x: 1, y: 1 }, { x: 2, y: -1 }]

/**
 * @summary `@type {Array<Vector>}`
 * @description Example 2 of an array of a defined type `Vector`.
 * @example
 * arrayOfVectors2 = [{ x: 1, y: 1 }, { x: 2, y: -1 }]
 * @type {Array<Vector>}
 */
let arrayOfVectors2 = [{ x: 1, y: 1 }, { x: 2, y: -1 }]

/**
 * @summary `@type {Array<Array>}`
 * @description Example of an array of arrays of any schema.
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
 * @description Example of an array of arrays of `number`s.
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
 * @description Example of an array of arrays of objects with a defined schema.
 * @example
 * arrayOfArraysOfObjectsWithSchema = [
 *    [{ name: 'Joe', age: 30 }, { name: 'Doe', age: 31 }],
 *    [{ name: 'Peter', age: 20 }]
 * ]
 * @type {Array<Array<{name: string, age: number}>>}
 */
let arrayOfArraysOfObjectsWithSchema = [[{ name: 'Joe', age: 30 }, { name: 'Doe', age: 31 }], [{ name: 'Peter', age: 20 }]]