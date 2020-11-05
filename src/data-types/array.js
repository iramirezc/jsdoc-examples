/** @module data-types/array */

/**
 * Example of an array of null `Array<null>`
 * @type {Array<null>}
 */
const arrayOfNull = [null, null, null]

/**
 * Example of an array of undefined `Array<undefined>`
 * @type {Array<undefined>}
 */
const arrayOfUndefined = [undefined, undefined, undefined]

/**
 * Example of an array of booleans `boolean[]`
 * @type {boolean[]}
 */
const arrayOfBooleans = [true, false, true]

/**
 * Example of an array of booleans `Array<boolean>`
 * @type {Array<boolean>}
 */
const arrayOfBooleans2 = [true, false, true]

/**
 * Example of an array of numbers `number[]`
 * @type {number[]}
 */
const arrayOfNumbers = [1, 2, 3]

/**
 * Example of an array of numbers `Array<number>`
 * @type {Array<number>}
 */
const arrayOfNumbers2 = [1, 2, 3]

/**
 * Example of an array of big numbers `bigint[]`
 * @type {bigint[]}
 */
const arrayOfBigNumbers = [1n, 2n, 3n]

/**
 * Example of an array of big numbers `Array<BigInt>`
 * @type {Array<BigInt>}
 */
const arrayOfBigNumbers2 = [1n, 2n, 3n]

/**
 * Example of an array of strings `string[]`
 * @type {string[]}
 */
const arrayOfStrings = ['a', 'b', 'c']

/**
 * Example of an array of strings `Array<string>`
 * @type {Array<string>}
 */
const arrayOfStrings2 = ['a', 'b', 'c']

/**
 * Example of an array of symbols `symbol[]`
 * @type {symbol[]}
 */
const arrayOfSymbols = [Symbol.iterator]

/**
 * Example of an array of symbols `Array<symbol>`
 * @type {Array<symbol>}
 */
const arrayOfSymbols2 = [Symbol.iterator]

/**
 * Example of an array of any `Array`
 * @type {Array}
 */
const arrayOfAny = [1, true, 'Hello!']

/**
 * Example of an array of any `Array<*>`
 * @type {Array<*>}
 */
const arrayOfAny2 = [1, true, 'Hello!']

/**
 * Example of an array of Vectors `Vector[]`
 * @type {Vector[]}
 */
const arrayOfVectors = [{ x: 1, y: 1 }, { x: 2, y: -1 }]

/**
 * Example of an array of Vectors `Array<Vector>`
 * @type {Array<Vector>}
 */
const arrayOfVectors2 = [{ x: 1, y: 1 }, { x: 2, y: -1 }]

/**
 * Example of an array of objects `Array<{ name: string, age: number, admin: boolean }>`
 * @type {Array<{ name: string, age: number, admin: boolean }>}
 */
const arrayOfObjectsWithSchema = [{ name: 'Jon', age: 40, admin: false }, { name: 'Doe', age: 50, admin: true }]

/**
 * Example of an array of objects `Array<Object<string, boolean>>`
 * @type {Array<Object<string, boolean>>}
 */
const arrayOfObjectsWithStringKeysAndBooleanValues = [{ isAdmin: true, hasAccess: false, isHuman: true }]

/**
 * Example of an array of objects `Object[]`
 * @type {Object[]}
 */
const arrayOfObjectsWithAnySchema = [{ x: 1 }, { name: 'Nahum' }, { isTeaPot: true }]

/**
 * Example of an array of objects `Array<Object>`
 * @type {Array<Object>}
 */
const arrayOfObjectsWithAnySchema2 = [{ x: 1 }, { name: 'Nahum' }, { isTeaPot: true }]
